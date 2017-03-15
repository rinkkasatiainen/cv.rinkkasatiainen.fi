import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga'

// ...
import rootSaga from './actions/saga'

// import the root reducer
import rootReducer from './reducers/index';


// create an object for the default data
const defaultState = {
  name : "",
  me: {},
  links: [],
  };


  //
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer, 
  defaultState
  , applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga)
//
export const action = type => store.dispatch({type})
//
export default store;

