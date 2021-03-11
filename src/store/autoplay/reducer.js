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

export default autoplayReducer;
