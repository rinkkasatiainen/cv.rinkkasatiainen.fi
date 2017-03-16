import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import Fetch from '../fetch';

export function* fetchData(action){
  const obj = yield call( Fetch.doCall, 'http://rinkkasatiainen.fi/cv.json') 
  const { response, error} = { response:null, error: null, ...obj}
  if( response ){
    yield put({type: 'BASIC_DATA_RETRIEVED', payload: {me: response.me} })
  } else {
    yield put({type: 'FETCH_FAILED', error})
  }
}

export function* doMagic(){
  yield takeEvery('ON_INITIALIZE', fetchData)
}

export default function* rootSaga() {
  yield [
    doMagic(),
  ]
}
