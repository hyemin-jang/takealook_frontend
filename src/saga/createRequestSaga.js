import { call, delay, getContext, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from 'reducer/loading';

export function createRequestSaga(type, request) {
  const SUCCESS = type.replace(/REQUEST/g, 'SUCCESS');
  const FAILURE = type.replace(/REQUEST/g, 'FAILURE');

  return function* (action) {
    yield put(startLoading(type));

    try {
      console.log('사가 실행');
      const response = yield call(request, action.payload); //call : async await와 비슷.

      const token = response.headers.authorization;
      localStorage.setItem('jwt', token);

      yield put({
        // put: (사가 문법) 액션 타입 실행
        type: SUCCESS,
        payload: response,
      });
    } catch (e) {
      const errorData = e.response.data;

      console.error('error data', errorData);

      yield put({
        type: FAILURE,
        payload: errorData,
        error: true,
      });
    }

    yield put(finishLoading(type)); //로딩 끝
  };
}
