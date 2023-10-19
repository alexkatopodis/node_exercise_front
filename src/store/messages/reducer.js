import * as types from './actionTypes';

const initialState = {
  messages: [],
  loading: false,
  error: null,
  availableUsers: []
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
    case types.FETCH_MESSAGES_BETWEEN_USERS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.FETCH_MESSAGES_BETWEEN_USERS_SUCCESS:
      return {
        ...state,
        messages: action.payload.messages,
      };
    case types.FETCH_MESSAGES_BETWEEN_USERS_FAILURE:
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
