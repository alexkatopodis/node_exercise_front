import * as types from './actionTypes';

export const uploadXlsxFile = (file) => ({
  type: types.UPLOAD_XLSX_FILE,
  payload: file,
});

export const uploadXlsxFileSuccess = (message) => ({
  type: types.UPLOAD_XLSX_FILE_SUCCESS,
  payload: message
});

export const uploadXlsxFileFailure = (error) => ({
  type: types.UPLOAD_XLSX_FILE_FAILURE,
  payload: error,
});
