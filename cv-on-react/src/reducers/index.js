import { combineReducers } from 'redux';

function name(state = "", action) {
  switch( action.type ){
    case 'BASIC_DATA_RETRIEVED':
      return action.me['in-short'].name
    default:
      return state
  }
}

function me(state={}, action){
  switch( action.type ){
    case 'BASIC_DATA_RETRIEVED':
      return action.me
    default:
      return state
  }
}

export function links(state=[], action){
  switch( action.type ){
    case 'BASIC_DATA_RETRIEVED':
      return [ ...action.me.links ]
    default:
      return state
  }
}

export function sections(state=[], action){
  switch( action.type ){
    case 'DOWNLOADING':
      console.log(`Downloading: ${action.payload.type})`)
      return state
    case 'LINK_DOWNLOADED':
      console.log(`downloaded: `, action)
      return state
    default:
      return state
  }

}

const rootReducer = combineReducers({
  name,
  me,
  links, 
  sections,
})

export default rootReducer

