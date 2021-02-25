const STATS_SET_GAME_TIME = 'STATS_SET_GAME_TIME';
const STATS_SET_MINUTES = 'STATS_SET_MINUTES';
const STATS_SET_SECONDS = 'STATS_SET_SECONDS';
const STATS_SET_TRUE_ATTEMPT = 'STATS_SET_TRE_ATTEMPT';
const STATS_SET_FALSE_ATTEMPT = 'STATS_SET_FALSE_ATTEMPT';
const STATS_RESET_STATE = 'STATS_RESET_STATE';
// const STATS_SET_COUNT_GAMES = 'STATS_SET_COUNT_GAMES';

const initialState = {
  gameTime: false,
  minutes: 0,
  seconds: 0,
  trueAttempts: 0,
  falseAttempts: 0,
  countGames: 0,
  // attempts: 0,
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

const statsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case STATS_RESET_STATE:
      newState = {
        ...state,
        gameTime: false,
        minutes: 0,
        seconds: 0,
        trueAttempts: 0,
        falseAttempts: 0,
        countGames: 0,
      };
      // localStorage.setItem('burger', JSON.stringify(newState));
      return newState;
    
    case STATS_SET_GAME_TIME:
      newState = {
        ...state,
        gameTime: action.boolean,
      };
      // localStorage.setItem('burger', JSON.stringify(newState));
      return newState;
    
    case STATS_SET_MINUTES:
      newState = {
        ...state,
        minutes: action.minutes,
      };
      // localStorage.setItem('burger', JSON.stringify(newState));
      return newState;
    
    case STATS_SET_SECONDS:
      newState = {
        ...state,
        seconds: action.seconds,
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

    // case STATS_SET_COUNT_GAMES:
    //   newState = {
    //     ...state,
    //     countGames: state.countGames++,
    //   };
    // // localStorage.setItem('burger', JSON.stringify(newState));
    // return newState;

    default:
      return state;
  }
};

export const setResetState = () => ({ type: STATS_RESET_STATE });
export const setGameTime = (boolean) => ({ type: STATS_SET_GAME_TIME, boolean });
export const setMinutes = (minutes) => ({ type: STATS_SET_MINUTES, minutes });
export const setSeconds = (seconds) => ({ type: STATS_SET_SECONDS, seconds });

export const setTrueAttempt = () => ({ type: STATS_SET_TRUE_ATTEMPT });

export const setFalseAttempt = () => ({ type: STATS_SET_FALSE_ATTEMPT });

// export const setCountGames = () => ({ type: STATS_SET_COUNT_GAMES });


export const updateGameTime = (minutes, seconds) => (dispatch, getState) => {
  // const time = getState().stats.gameTime;
  // dispatch(setGameTime());
  const time = timer(minutes, seconds);
  dispatch(setMinutes(time.minutes));
  dispatch(setSeconds(time.seconds));
  
};


// let second = 0;
// let minute = 0;

function timer(minutes, seconds) {
  // permitStartTimer = false;
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  };
  // time.innerHTML = `${addZero(minutes)}<span>:</span>${addZero(seconds)}`;
  // setTimeout(timer, 1000);
  return {seconds, minutes}
};

// Добавление нуля в значения времени до 10
function addZero(n) {
  return (n < 10 ? '0' + n : n)
};

export default statsReducer;