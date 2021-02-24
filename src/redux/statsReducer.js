const STATS_SET_GAME_TIME = 'STATS_SET_GAME_TIME';
const STATS_SET_TRUE_ATTEMPT = 'STATS_SET_TRE_ATTEMPT';
const STATS_SET_FALSE_ATTEMPT = 'STATS_SET_FALSE_ATTEMPT';
const STATS_SET_COUNT_GAMES = 'STATS_SET_COUNT_GAMES';

const initialState = {
  gameTime: 0,
  trueAttempts: 0,
  falseAttempts: 0,
  countGames: 0,
  // attempts: 0,
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

const statsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case STATS_SET_GAME_TIME:
      newState = {
        ...state,
        gameTime: state.gameTime += 1,
      };
      // localStorage.setItem('burger', JSON.stringify(newState));
      return newState;

    case STATS_SET_TRUE_ATTEMPT:
      newState = {
        ...state,
        falseAttempts: state.falseAttempts++,
      };
      // localStorage.setItem('burger', JSON.stringify(newState));
      return newState;
    
      case STATS_SET_FALSE_ATTEMPT:
        newState = {
          ...state,
          trueAttempts: state.trueAttempts++,
        };
      // localStorage.setItem('burger', JSON.stringify(newState));
      return newState;

    case STATS_SET_COUNT_GAMES:
      newState = {
        ...state,
        countGames: state.countGames++,
      };
    // localStorage.setItem('burger', JSON.stringify(newState));
    return newState;

    default:
      return state;
  }
};

export const setGameTime = () => ({ type: STATS_SET_GAME_TIME });

export const setTrueAttempt = () => ({ type: STATS_SET_TRUE_ATTEMPT });

export const setFalseAttempt = () => ({ type: STATS_SET_FALSE_ATTEMPT });

export const setCountGames = () => ({ type: STATS_SET_COUNT_GAMES });


export const updateGameTime = (sec) => (dispatch, getState) => {
  const time = getState().stats.gameTime;
    dispatch(setGameTime());
};


let second = 0;
let minute = 0;

function timer() {
  // permitStartTimer = false;
  second++;
  if (second === 60) {
    second = 0;
    minute++;
  };
  // time.innerHTML = `${addZero(minute)}<span>:</span>${addZero(second)}`;
  setTimeout(timer, 1000);
};

// Добавление нуля в значения времени до 10
function addZero(n) {
  return (n < 10 ? '0' + n : n)
};

export default statsReducer;