import { getInitialState } from "../utils/utils";
import { BURGER_SET_CARDS_BG, BURGER_SET_OPACITY_BG, BURGER_SET_SOUND_VOLUME, BURGER_TOGGLE_IS_MENU_ACTIVE, BURGER_TOGGLE_MUSIC, BURGER_TOGGLE_SOUND } from "./actionTypes";
import { initialState } from "./state";

const burgerReducer = (state = getInitialState('burger', initialState), action) => {
  let newState;
  switch (action.type) {
    case BURGER_TOGGLE_IS_MENU_ACTIVE:
      newState = {
        ...state,
        isMenuActive: !state.isMenuActive,
      };
      localStorage.setItem('burger', JSON.stringify({...newState, isMenuActive: false, isMusicActive: false,}));
      return newState;

    case BURGER_TOGGLE_SOUND:
      newState = {
        ...state,
        isSoundActive: !state.isSoundActive,
      };
      localStorage.setItem('burger', JSON.stringify({...newState, isMenuActive: false, isMusicActive: false,}));
      return newState;
    
      case BURGER_TOGGLE_MUSIC:
        newState = {
          ...state,
          isMusicActive: !state.isMusicActive,
        };
        localStorage.setItem('burger', JSON.stringify({...newState, isMenuActive: false, isMusicActive: false,}));
        return newState;

    case BURGER_SET_SOUND_VOLUME:
      newState = {
        ...state,
        volume: action.volume,
      };
      localStorage.setItem('burger', JSON.stringify({...newState, isMenuActive: false, isMusicActive: false,}));
      return newState;
    
    case BURGER_SET_CARDS_BG:
      newState = {
        ...state,
        cardsBG: action.color,
      };
      localStorage.setItem('burger', JSON.stringify({...newState, isMenuActive: false, isMusicActive: false,}));
      return newState;
    
    case BURGER_SET_OPACITY_BG:
      newState = {
        ...state,
        opacity: action.opacity,
      };
      localStorage.setItem('burger', JSON.stringify({...newState, isMenuActive: false, isMusicActive: false,}));
      return newState;
  

    default:
      return state;
  }
};

export default burgerReducer;
