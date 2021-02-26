import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';
import burgerReducer from './burgerReducer';
import mainReducer from './mainReducer';
import statsReducer from './statsReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  form: formReducer,
  main: mainReducer,
  burger: burgerReducer,
  stats: statsReducer
});
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;