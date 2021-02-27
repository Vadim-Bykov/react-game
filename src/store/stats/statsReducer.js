import { getInitialState } from "../utils/getInitialState";

const STATS_SET_GAME_TIME = 'STATS_SET_GAME_TIME';
const STATS_SET_MINUTES = 'STATS_SET_MINUTES';
const STATS_SET_SECONDS = 'STATS_SET_SECONDS';
const STATS_SET_TRUE_ATTEMPT = 'STATS_SET_TRE_ATTEMPT';
const STATS_SET_FALSE_ATTEMPT = 'STATS_SET_FALSE_ATTEMPT';
const STATS_RESET_STATE = 'STATS_RESET_STATE';
const STATS_SAVE_FINISHED_GAME = 'STATS_SAVE_FINISHED_GAME';

const initialState = {
  gameTime: false,
  minutes: 0,
  seconds: 0,
  trueAttempts: 0,
  falseAttempts: 0,
  finishedGames: [],
};

const statsReducer = (state = getInitialState('stats', initialState), action) => {
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
      };
      localStorage.setItem('stats', JSON.stringify(newState));
      return newState;
    
    case STATS_SET_GAME_TIME:
      newState = {
        ...state,
        gameTime: action.boolean,
      };
      localStorage.setItem('stats', JSON.stringify(newState));
      return newState;
    
    case STATS_SET_MINUTES:
      newState = {
        ...state,
        minutes: action.minutes,
      };
      localStorage.setItem('stats', JSON.stringify(newState));
      return newState;
    
    case STATS_SET_SECONDS:
      newState = {
        ...state,
        seconds: action.seconds,
      };
      localStorage.setItem('stats', JSON.stringify(newState));
      return newState;

    case STATS_SET_TRUE_ATTEMPT:
      newState = {
        ...state,
        trueAttempts: state.trueAttempts += 1,
      };
      localStorage.setItem('stats', JSON.stringify(newState));
      return newState;
    
      case STATS_SET_FALSE_ATTEMPT:
        newState = {
          ...state,
          falseAttempts: state.falseAttempts += 1,
        };
      localStorage.setItem('stats', JSON.stringify(newState));
      return newState;

    case STATS_SAVE_FINISHED_GAME:
      newState = {
        ...state,
        finishedGames: [
          {
            date: action.date,
            size: action.size,
            minutes: state.minutes,
            seconds: state.seconds,
            trueAttempts: state.trueAttempts,
            falseAttempts: state.falseAttempts,
            id: Math.floor(Math.random() * 1000),
          },
          ...state.finishedGames.slice(0, 9),
        ],
      };
    localStorage.setItem('statsPage', JSON.stringify(newState.finishedGames));
    return newState;

    default:
      return state;
  }
};

export const statsResetState = () => ({ type: STATS_RESET_STATE });
export const setGameTime = (boolean) => ({ type: STATS_SET_GAME_TIME, boolean });
export const setMinutes = (minutes) => ({ type: STATS_SET_MINUTES, minutes });
export const setSeconds = (seconds) => ({ type: STATS_SET_SECONDS, seconds });
export const setTrueAttempt = () => ({ type: STATS_SET_TRUE_ATTEMPT });
export const setFalseAttempt = () => ({ type: STATS_SET_FALSE_ATTEMPT });
export const saveFinishedGame = (size) => ({ type: STATS_SAVE_FINISHED_GAME, size, date: getTime() });

export const updateGameTime = (minutes, seconds) => (dispatch) => {
  const time = timer(minutes, seconds);
  dispatch(setMinutes(time.minutes));
  dispatch(setSeconds(time.seconds));
  
};

function timer(minutes, seconds) {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  };
  return {seconds, minutes}
};

const getTime = () => new Date().toString().slice(0, 24);


export default statsReducer;