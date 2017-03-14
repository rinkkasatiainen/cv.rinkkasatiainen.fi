import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import Fetch from '../fetch';


export function* fetchData(action){
  const data = yield call( Fetch.doCall, 'http://rinkkasatiainen.fi/cv.json') 
  yield put({type: 'BASIC_DATA_RETRIEVED', payload: {data} })
}

export function* doMagic(){
  yield takeEvery('ON_INITIALIZE', fetchData)
}

export default function* rootSaga() {
  yield [
    doMagic(),
  ]
}


