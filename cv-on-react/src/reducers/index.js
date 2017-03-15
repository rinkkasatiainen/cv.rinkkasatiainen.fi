import { combineReducers } from 'redux';

function name(state = "", action) {
  switch( action.type ){
    case 'BASIC_DATA_RETRIEVED':
      return action.payload.data.me['in-short'].name
    default:
      return state
  }
}

function me(state={}, action){
  switch( action.type ){
    case 'BASIC_DATA_RETRIEVED':
      return action.payload.data.me
    default:
      return state
  }
}

export function links(state=[], action){
  switch( action.type ){
    case 'BASIC_DATA_RETRIEVED':
      return [ ...action.payload.data.me.links ]
    default:
      return state
  }

}

const rootReducer = combineReducers({
  name,
  me,
  links, 
})

export default rootReducer

