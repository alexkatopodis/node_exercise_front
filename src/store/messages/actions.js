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

export const updateMessageRequest = (id, data) => ({
  type: types.UPDATE_MESSAGE_REQUEST,
  payload: { id, data },
});

export const updateMessageSuccess = () => ({
  type: types.UPDATE_MESSAGE_SUCCESS,
});

export const updateMessageFailure = (error) => ({
  type: types.UPDATE_MESSAGE_FAILURE,
  payload: error,
});

export const fetchMessagesUnread = ({ userId }) => ({
  type: types.UNREAD_MESSAGE_REQUEST,
  query: { userId }
});

export const fetchMessagesUnreadSuccess = (messages) => ({
  type: types.UNREAD_MESSAGE_SUCCESS,
  payload: { messages }
})

export const fetchMessagesUnreadFailure = (error) => ({
  type: types.UNREAD_MESSAGE_FAILURE,
  payload: error,
});

export const recentMessageRequest = ({ userId }) => ({
  type: types.RECENT_MESSAGE_REQUEST,
  query: { userId }
});

export const recentMessageSuccess = (messages) => ({
  type: types.RECENT_MESSAGE_SUCCESS,
  payload: { messages }
});

export const recentMessageFailure = (error) => ({
  type: types.RECENT_MESSAGE_FAILURE,
  payload: error,
});

