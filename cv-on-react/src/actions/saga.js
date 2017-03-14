import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import Fetch from '../fetch';


export function* fetchData(action){
  console.log("fetching data")
  const data = yield fetch('http://rinkkasatiainen.fi/cv.json').then(resp => resp.json() )
    //  const data  = yield Fetch.doCall( 'http://rinkkasatiainen.fi/cv.json')
  console.log("done", data)
  yield put({type: 'BASIC_DATA_RETRIEVED', payload: {data} })
}

export function* doMagic(){
  console.log( "doMagic" )
  yield takeEvery('ON_INITIALIZE', fetchData)
  console.log( "doneMagic")
}

export default function* rootSaga() {
  yield [
    doMagic(),
  ]
}


