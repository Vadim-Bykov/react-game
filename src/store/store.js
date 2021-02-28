import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';
import authReducer from './auth/reducer';
import autoplayReducer from './autoplay/reducer';
import burgerReducer from './burger/burgerReducer';
import mainReducer from './main/mainReducer';
import statsReducer from './stats/statsReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  form: formReducer,
  main: mainReducer,
  burger: burgerReducer,
  stats: statsReducer,
  autoplay: autoplayReducer,
  auth: authReducer,
});
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;