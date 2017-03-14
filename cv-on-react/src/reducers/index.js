import { combineReducers } from 'redux';

function name(state = "", action) {
  switch( action.type ){
    case 'BASIC_DATA_RETRIEVED':
      console.log( action.payload  )
      return action.payload.data.me['in-short'].name
    default:
      return state
  }
}

const rootReducer = combineReducers({
  name,
})

export default rootReducer

