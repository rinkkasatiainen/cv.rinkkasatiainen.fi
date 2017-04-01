import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import Fetch from '../fetch';

const ROOT = 'http://rinkkasatiainen.fi'
export function* fetchData(action){
  const obj = yield call( Fetch.doCall, `${ROOT}/cv.json`) 
  const { response, error} = { response:null, error: null, ...obj}
  if( response ){
    yield put({type: 'BASIC_DATA_RETRIEVED', me: response.me })
  } else {
    yield put({type: 'FETCH_FAILED', error})
  }
}

export function* fetchOneLink(type, link){
  const obj = yield call( Fetch.doCall, `${ROOT}${link}`) 
  const { response, error} = { response:null, error: null, ...obj}

  if( response ){
    yield put({type: 'LINK_DOWNLOADED', payload: { [type] : response } })

  }

}

export function* fetchLinks(action){
  const linkToDownload = action.me.links[0]

  for(const link of action.me.links ){
    for (const type in link ){
      yield fetchOneLink( type, link[type] )
    }
  }
}

export function* initializePage(){
  yield takeEvery('ON_INITIALIZE', fetchData)
}

export function* retrieveLinks(){
  yield takeLatest('BASIC_DATA_RETRIEVED', fetchLinks)
}

export default function* rootSaga() {
  yield [
    initializePage(),
    retrieveLinks(),
  ]
}
