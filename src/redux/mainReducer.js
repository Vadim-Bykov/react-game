import initializeDeck from '../deck';

const MAIN_SET_CARDS = 'MAIN_SET_CARDS';
const MAIN_SET_FLIPPED = 'MAIN_SET_FLIPPED';
const MAIN_SET_DIMENSION = 'MAIN_SET_DIMENSION';
const MAIN_SET_SOLVED = 'MAIN_SET_SOLVED';
const MAIN_SET_DISABLED = 'MAIN_SET_DISABLED';

const initialState = {
  cards: initializeDeck(),
  flipped: [],
  dimension: 480,
  solved: [],
  disabled: false,
};

const mainReducer = (state = initialState, action) => {
  switch (action) {
    case MAIN_SET_CARDS:
      return {
        ...state,
        cards: [...action.cards],
      };

     case MAIN_SET_FLIPPED:
        debugger
      return {
        ...state,
        flipped: [...action.array],
      };

    case MAIN_SET_DIMENSION:
      return {
        ...state,
        dimension: [...action.value],
      };

    case MAIN_SET_SOLVED:
      return {
        ...state,
        solved: [...action.array],
      };

     case MAIN_SET_DISABLED:
        debugger
      return {
        ...state,
        disabled: action.boolean,
      };

    default:
      return state;
  }
};

export const setCards = (cards) => ({ action: MAIN_SET_CARDS, cards });
export const setFlipped = (array) => {
   debugger
   return { action: MAIN_SET_FLIPPED, array }
};
export const setDimension = (value) => ({ action: MAIN_SET_DIMENSION, value });
export const setSolved = (array) => ({ action: MAIN_SET_SOLVED, array });
export const setDisabled = (boolean) => {
   debugger
   return { action: MAIN_SET_DISABLED, boolean }
};

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
      dispatch(resetCards());
    } else {
      setTimeout(dispatch(resetCards), 1000);
    }
  }
};

//  const sameCardClicked = (id) => flipped.includes(id);

const isMatch = (id, cards, flipped) => {
  const clickedCard = cards.find((card) => card.id === id);
  const flippedCard = cards.find((card) => flipped[0] === card.id);
  return flippedCard.type === clickedCard.type;
};

const resetCards = () => (dispatch) => {
   dispatch(setFlipped([]));
   dispatch(setDisabled(false));
};

export default mainReducer;
