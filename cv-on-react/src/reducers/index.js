import { combineReducers } from 'redux';

function name(state = "", action) {
  switch( action.type ){
    case 'BASIC_DATA_RETRIEVED':
      return action.payload.name
    default:
      return state
  }
}

const rootReducer = combineReducers({
  name,
})

export default rootReducer

