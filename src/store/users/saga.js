import { takeLatest, call, put } from 'redux-saga/effects';
import * as types from './actionTypes';
import * as actions from './actions';
import * as api from '../../api/users';

function* fetchUsersSaga({ query }) {
  try {
    const users = yield call(api.getAllUsers, query);
    yield put(actions.fetchUsersSuccess(users));
  } catch (error) {
    yield put(actions.fetchUsersFailure(error));
  }
}


function* usersSaga() {
  yield takeLatest(types.FETCH_USERS, fetchUsersSaga);
}

export default usersSaga;
