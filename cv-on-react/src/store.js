import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';


// ...
import rootSaga from './actions/saga';

// import the root reducer
import rootReducer from './reducers/index';


// create an object for the default data
const defaultState = {
  name: "",
  me: null,
  links: [],
};


  //
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  defaultState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
//
export const action = type => store.dispatch({ type });
//
export default store;

