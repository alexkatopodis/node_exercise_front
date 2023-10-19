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

function* fetchMessagesBetweenUsersSaga(action) {
  try {
    const { userId1, userId2 } = action.query;

    const messages = yield call(api.getMessagesBetweenUsers, userId1, userId2);
    yield put(actions.fetchMessagesBetweenUsersSuccess(messages));

  } catch (error) {
    yield put(actions.fetchMessagesBetweenUsersFailure(error));
  }
}

function* messagesSaga() {
  yield takeLatest(types.CREATE_MESSAGE, createMessageSaga);
  yield takeLatest(types.FETCH_MESSAGES_BETWEEN_USERS, fetchMessagesBetweenUsersSaga);
}

export default messagesSaga;
