import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';


export function* fetchData(action){
  console.log ('fetching data')
  yield put({type: 'BASIC_DATA_RETRIEVED', payload: {name: 'Aki Salmi'} })
}

export function* doMagic(){
  yield takeEvery('ON_INITIALIZE', fetchData)
}

export default function* rootSaga() {
  yield [
    doMagic(),
  ]
}


