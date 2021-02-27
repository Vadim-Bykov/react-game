import initializeDeck from '../utils/deck';
import { resetAutoplayState } from './autoplay/actions';
import { setGameTime, setTrueAttempt, setFalseAttempt, statsResetState } from './statsReducer';

const MAIN_SET_CARDS = 'MAIN_SET_CARDS';
const MAIN_SET_FLIPPED = 'MAIN_SET_FLIPPED';
const MAIN_SET_DIMENSION = 'MAIN_SET_DIMENSION';
const MAIN_SET_SOLVED = 'MAIN_SET_SOLVED';
const MAIN_SET_DISABLED = 'MAIN_SET_DISABLED';
const MAIN_RESET_STATE = 'MAIN_RESET_STATE';
const MAIN_SET_GAME_IN_PROGRESS = 'MAIN_SET_GAME_IN_PROGRESS';

const initialState = {
  cards: [],
  flipped: [],
  dimension: 480,
  solved: [],
  disabled: false,
  countPairs: 6,
  gameInProgress: false,
};

const getInitialState = () => {
  let state;
  const localState = JSON.parse(localStorage.getItem('state'));
  if (localState) {
    state = localState;
  } else {
    localStorage.setItem('state', JSON.stringify(initialState));
    state = initialState;
  }

  return state;
};

const mainReducer = (state = getInitialState(), action) => {
  let newState;
  switch (action.type) {
    case MAIN_RESET_STATE:
      newState = {
        ...state,
        cards: initializeDeck(action.countPairs),
        flipped: [],
        dimension: 480,
        solved: [],
        disabled: false,
        countPairs: action.countPairs,
        gameInProgress: false,
      };
      localStorage.setItem('state', JSON.stringify(newState));
      return newState;

    case MAIN_SET_CARDS:
      newState = {
        ...state,
        cards: [...action.cards],
      };
      localStorage.setItem('state', JSON.stringify(newState));
      return newState;

    case MAIN_SET_FLIPPED:
      newState = {
        ...state,
        flipped: [...action.array],
      };
      localStorage.setItem('state', JSON.stringify(newState));
      return newState;

    case MAIN_SET_DIMENSION:
      newState = {
        ...state,
        dimension: action.value,
      };
      localStorage.setItem('state', JSON.stringify(newState));
      return newState;

    case MAIN_SET_SOLVED:
      newState = {
        ...state,
        solved: [...action.array],
      };
      localStorage.setItem('state', JSON.stringify(newState));
      return newState;

    case MAIN_SET_DISABLED:
      newState = {
        ...state,
        disabled: action.boolean,
      };
      localStorage.setItem('state', JSON.stringify(newState));
      return newState;

    case MAIN_SET_GAME_IN_PROGRESS:
      return {
        ...state,
        gameInProgress: action.boolean,
      };

    default:
      return state;
  }
};

export const resetState = (countPairs) => ({
  type: MAIN_RESET_STATE,
  countPairs,
});
export const setCards = (cards) => ({ type: MAIN_SET_CARDS, cards });
export const setFlipped = (array) => ({ type: MAIN_SET_FLIPPED, array });
export const setDimension = (value) => ({ type: MAIN_SET_DIMENSION, value });
export const setSolved = (array) => ({ type: MAIN_SET_SOLVED, array });
export const setDisabled = (boolean) => ({ type: MAIN_SET_DISABLED, boolean });
export const setGameInProgress = (boolean) => ({
  type: MAIN_SET_GAME_IN_PROGRESS,
  boolean,
});

export const resizeBoard = () => (dispatch) => {
  dispatch(
    setDimension(
      Math.min(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight
      )
    )
  );
};

export const showAllCards = () => (dispatch, getState) => {
  const cards = getState().main.cards;
  dispatch(setFlipped(cards.map((card) => card.id)));
  setTimeout(() => dispatch(setFlipped([])), 3000);
};

export const handleClick = (id, soundSuccess, soundError) => (dispatch, getState) => {
  const cards = getState().main.cards;
  const flipped = getState().main.flipped;
  const solved = getState().main.solved;
  const sameCardClicked = flipped.includes(id);

  dispatch(setGameTime(true));
  dispatch(setDisabled(true));
  dispatch(setGameInProgress(true));

  if (flipped.length === 0) {
    dispatch(setFlipped([id]));
    dispatch(setDisabled(false));
  } else {
    if (sameCardClicked) {
      dispatch(setDisabled(false));
      return;
    }
    dispatch(setFlipped([flipped[0], id]));
    if (isMatch(id, cards, flipped)) {
      dispatch(setSolved([...solved, flipped[0], id]));
      resetFlippedCards(dispatch);
      dispatch(setTrueAttempt());
      getSound(getState, soundSuccess);
    } else {
      setTimeout(() => resetFlippedCards(dispatch), 1000);
      dispatch(setFalseAttempt());
      getSound(getState, soundError);
    }
  }
};

const isMatch = (id, cards, flipped) => {
  const clickedCard = cards.find((card) => card.id === id);
  const flippedCard = cards.find((card) => flipped[0] === card.id);
  return flippedCard.type === clickedCard.type;
};

const getSound = (getState, sound) => {
  const isSoundActive = getState().burger.isSoundActive;
  if (!isSoundActive) return;
  const volume = getState().burger.volume;
  sound.current.volume = volume;
  sound.current.play();
}

const resetFlippedCards = (dispatch) => {
  dispatch(setFlipped([]));
  dispatch(setDisabled(false));
  dispatch(setGameInProgress(false));
};

export const finishGame = (countPairs) => (dispatch) => {
  dispatch(resetState(countPairs));
  setTimeout(dispatch(showAllCards()));
  // dispatch(showAllCards());
  dispatch(statsResetState(false));
  dispatch(resetAutoplayState())
};

export default mainReducer;
