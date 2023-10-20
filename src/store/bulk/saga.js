import { takeEvery, put, call } from 'redux-saga/effects';
import * as types from './actionTypes';
import * as actions from './actions';
import * as api from '../../api/bulk';

function* uploadXlsxFileWorker(action) {
  try {
    const response = yield call(api.uploadXlsxFile, action.payload);

    yield put(actions.uploadXlsxFileSuccess(response));
  } catch (error) {
    yield put(actions.uploadXlsxFileFailure(error));
  }
}

function* uploadXlsxFileWatcher() {
  yield takeEvery(types.UPLOAD_XLSX_FILE, uploadXlsxFileWorker);
}

export default uploadXlsxFileWatcher;
