const BURGER_TOGGLE_IS_ACTIVE = 'BURGER_TOGGLE_IS_ACTIVE';

const initialState = {
  isActive: false,
};

const getInitialState = () => {
  let state;
  const localState = JSON.parse(localStorage.getItem('burger'));
  if (localState) {
    state = localState;
  } else {
    localStorage.setItem('burger', JSON.stringify(initialState));
    state = initialState;
  }

  return state;
};

const burgerReducer = (state = getInitialState(), action) => {
  let newState;
  switch (action.type) {
    case BURGER_TOGGLE_IS_ACTIVE:
      newState = {
        ...state,
        isActive: !state.isActive,
      };
      // localStorage.setItem('burger', JSON.stringify(newState));
      return newState;

    default:
      return state;
  }
};

export const toggleIsActive = () => ({ type: BURGER_TOGGLE_IS_ACTIVE });

// export const resetState = (countPairs) => ({
//   type: MAIN_RESET_STATE,
//   countPairs,
// });

export default burgerReducer;
