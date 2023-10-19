import { takeLatest, call, put } from 'redux-saga/effects';
import * as types from './actionTypes';
import * as actions from './actions';
import * as api from '../../api/messages';

function* createMessageSaga(action) {
  try {
    yield call(api.createMessage, action.payload);
    yield put(actions.createMessageSuccess());

  } catch (error) {
    yield put(actions.createMessageFailure(error));
  }
}

function* messagesSaga() {
  yield takeLatest(types.CREATE_MESSAGE, createMessageSaga);
}

export default messagesSaga;