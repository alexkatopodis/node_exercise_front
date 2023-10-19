import * as types from './actionTypes';

export const createMessage = (messageData) => ({
  type: types.CREATE_MESSAGE,
  payload: messageData,
});

export const createMessageSuccess = () => ({
  type: types.CREATE_MESSAGE_SUCCESS,
});

export const createMessageFailure = (error) => ({
  type: types.CREATE_MESSAGE_FAILURE,
  payload: error,
});

