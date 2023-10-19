import * as types from './actionTypes';

const initialState = {
  messages: [],
  loading: false,
  error: null,
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_MESSAGE:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.CREATE_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.CREATE_MESSAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default messagesReducer;
