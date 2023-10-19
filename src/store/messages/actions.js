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

export const fetchMessagesBetweenUsers = ({ userId1, userId2 }) => ({
  type: types.FETCH_MESSAGES_BETWEEN_USERS,
  query: { userId1, userId2 }
});

export const fetchMessagesBetweenUsersSuccess = (messages) => ({
  type: types.FETCH_MESSAGES_BETWEEN_USERS_SUCCESS,
  payload: { messages }
})

export const fetchMessagesBetweenUsersFailure = (error) => ({
  type: types.FETCH_MESSAGES_BETWEEN_USERS_FAILURE,
  payload: error,
});


