const BURGER_TOGGLE_IS_MENU_ACTIVE = 'BURGER_TOGGLE_IS_MENU_ACTIVE';
const BURGER_TOGGLE_SOUND = 'BURGER_TOGGLE_SOUND';
const BURGER_SET_SOUND_VOLUME = 'BURGER_SET_SOUND_VOLUME';

const initialState = {
  isMenuActive: false,
  isSoundActive: false,
  volume: 0.5,
};

// const getInitialState = () => {
//   let state;
//   const localState = JSON.parse(localStorage.getItem('burger'));
//   if (localState) {
//     state = localState;
//   } else {
//     localStorage.setItem('burger', JSON.stringify(initialState));
//     state = initialState;
//   }

//   return state;
// };

const burgerReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case BURGER_TOGGLE_IS_MENU_ACTIVE:
      newState = {
        ...state,
        isMenuActive: !state.isMenuActive,
      };
      return newState;

    case BURGER_TOGGLE_SOUND:
      newState = {
        ...state,
        isSoundActive: !state.isSoundActive,
      };
      // localStorage.setItem('burger', JSON.stringify(newState));
      return newState;

    case BURGER_SET_SOUND_VOLUME:
      newState = {
        ...state,
        volume: action.volume,
      };
      // localStorage.setItem('burger', JSON.stringify(newState));
      return newState;

    default:
      return state;
  }
};

export const toggleIsMenuActive = () => ({ type: BURGER_TOGGLE_IS_MENU_ACTIVE });

export const toggleIsSound = () => ({ type: BURGER_TOGGLE_SOUND });

export const setSoundVolume = (volume) => ({
  type: BURGER_SET_SOUND_VOLUME, volume
});

export default burgerReducer;
