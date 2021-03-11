import { getInitialState } from '../utils/getInitialState';
import { AUTH_LOGOUT, AUTH_SET_DATA } from './actionTypes';
import { initialStateAuth } from './state';

const authReducer = (state = getInitialState('auth', initialStateAuth), action) => {
  let newState;
  switch (action.type) {

    case AUTH_SET_DATA:
      newState = {
        ...state,
        ...action.data,
        isAuth: action.isAuth,
      };
      localStorage.setItem('auth', JSON.stringify(newState));
      return newState;
    
    case AUTH_LOGOUT:
      newState = {
        ...state,
        userName: null,
        email: null,
        password: null,
        isAuth: false,
      };
      localStorage.setItem('auth', JSON.stringify(newState));
      return newState;

    default:
      return state;
  };
};

export default authReducer;
