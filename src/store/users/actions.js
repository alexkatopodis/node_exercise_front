import * as types from './actionTypes';

export const fetchUsers = () => ({
  type: types.FETCH_USERS,
});

export const fetchUsersSuccess = (users) => ({
  type: types.FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersFailure = (error) => ({
  type: types.FETCH_USERS_FAILURE,
  payload: error,
});
