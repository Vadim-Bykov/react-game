import { AUTOPLAY_ADD_REF, AUTOPLAY_RESET_STATE } from "./actionTypes";
import { initialState } from "./state";

const autoplayReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case AUTOPLAY_ADD_REF:
      newState = {
        ...state,
        refs: [...state.refs, action.cardRef],
      };
      return newState;
    
    case AUTOPLAY_RESET_STATE:
      newState = {
        ...state,
        refs: [],
      };
      return newState;
    
    default:
      return state;
  }
};

export const playGame = () => (_, getState) => {
  const refs = getState().autoplay.refs;
  let interval = 2000;
  const refsCopy = [...refs]
    .sort((prevRef, nextRef) => prevRef.current.id - nextRef.current.id);
    refsCopy.forEach(element => {
    interval += 2000;
    setTimeout(() => element.current.click(), interval);
  });
}

export default autoplayReducer;
