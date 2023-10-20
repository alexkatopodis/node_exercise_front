import * as types from './actionTypes';

const initialState = {
  loading: false,
  error: null,
  uploadSuccess: false,
};

const bulkReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPLOAD_XLSX_FILE:
      return {
        ...state,
        loading: true,
        error: null,
        uploadSuccess: false,
      };
    case types.UPLOAD_XLSX_FILE_SUCCESS:
      return {
        ...state,
        loading: false,
        uploadSuccess: true,
      };
    case types.UPLOAD_XLSX_FILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        uploadSuccess: false,
      };
    default:
      return state;
  }
};

export default bulkReducer;
