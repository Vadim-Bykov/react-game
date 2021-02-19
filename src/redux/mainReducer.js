import initializeDeck from '../deck';

const MAIN_SET_CARDS = 'MAIN_SET_CARDS';
const MAIN_SET_FLIPPED = 'MAIN_SET_FLIPPED';
const MAIN_SET_DIMENSION = 'MAIN_SET_DIMENSION';
const MAIN_SET_SOLVED = 'MAIN_SET_SOLVED';
const MAIN_SET_DISABLED = 'MAIN_SET_DISABLED';
const MAIN_RESET_STATE = 'MAIN_RESET_STATE';

const initialState = {
  cards: initializeDeck(),
  flipped: [],
  dimension: 480,
  solved: [],
  disabled: false,
  countPairs: 5,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAIN_RESET_STATE:
      return {
        ...state,
        cards: initializeDeck(action.countPairs),
        flipped: [],
        dimension: 480,
        solved: [],
        disabled: false,
      };

    case MAIN_SET_CARDS:
      return {
        ...state,
        cards: [...action.cards],
      };

    case MAIN_SET_FLIPPED:
      return {
        ...state,
        flipped: [...action.array],
      };

    case MAIN_SET_DIMENSION:
      return {
        ...state,
        dimension: action.value,
      };

    case MAIN_SET_SOLVED:
      return {
        ...state,
        solved: [...action.array],
      };

    case MAIN_SET_DISABLED:
      return {
        ...state,
        disabled: action.boolean,
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

export const handleClick = (id) => (dispatch, getState) => {
  const cards = getState().main.cards;
  const flipped = getState().main.flipped;
  const solved = getState().main.solved;
  const sameCardClicked = flipped.includes(id);
  dispatch(setDisabled(true));

  if (flipped.length === 0) {
    dispatch(setFlipped([id]));
    dispatch(setDisabled(false));
  } else {
    if (sameCardClicked) return;
    dispatch(setFlipped([flipped[0], id]));
    if (isMatch(id, cards, flipped)) {
      dispatch(setSolved([...solved, flipped[0], id]));
      resetCards(dispatch);
    } else {
      setTimeout(() => resetCards(dispatch), 1000);
    }
  }
};

//  const sameCardClicked = (id) => flipped.includes(id);

const isMatch = (id, cards, flipped) => {
  const clickedCard = cards.find((card) => card.id === id);
  const flippedCard = cards.find((card) => flipped[0] === card.id);
  return flippedCard.type === clickedCard.type;
};

const resetCards = (dispatch) => {
  dispatch(setFlipped([]));
  dispatch(setDisabled(false));
};

export const setCountPairs = (count) => (dispatch) => {
  const cardsArray = initializeDeck(count);
  dispatch(setCards(cardsArray));
};

export const succeedGame = (count) => (dispatch) => {
  dispatch(resetState(count))
}

export default mainReducer;
