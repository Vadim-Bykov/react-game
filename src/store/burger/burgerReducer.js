import { getInitialState } from "../utils/getInitialState";

const BURGER_TOGGLE_IS_MENU_ACTIVE = 'BURGER_TOGGLE_IS_MENU_ACTIVE';
const BURGER_TOGGLE_SOUND = 'BURGER_TOGGLE_SOUND';
const BURGER_TOGGLE_MUSIC = 'BURGER_TOGGLE_MUSIC';
const BURGER_SET_SOUND_VOLUME = 'BURGER_SET_SOUND_VOLUME';
const BURGER_SET_CARDS_BG = 'BURGER_SET_CARDS_BG';
const BURGER_SET_OPACITY_BG = 'BURGER_SET_OPACITY_BG';

const burger = {
  isMenuActive: false,
  isSoundActive: true,
  isMusicActive: false,
  volume: 0.5,
  cardsBG: '255,255,255',
  opacity: 0,
};

const burgerReducer = (state = getInitialState('burger', burger), action) => {
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

export const toggleIsMenuActive = () => ({ type: BURGER_TOGGLE_IS_MENU_ACTIVE });

export const toggleIsSound = () => ({ type: BURGER_TOGGLE_SOUND });

export const toggleIsMusic = () => ({ type: BURGER_TOGGLE_MUSIC });

export const setSoundVolume = (volume) => ({ type: BURGER_SET_SOUND_VOLUME, volume });

export const setCardsBG = (color) => ({ type: BURGER_SET_CARDS_BG, color });

export const setOpacityBG = (opacity) => ({ type: BURGER_SET_OPACITY_BG, opacity });

export default burgerReducer;
