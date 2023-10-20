import { get, post, put } from './index';

const createMessage = async (messageData) => {
  const response = await post('/createMessage', messageData);
  return response.data;
};

const getMessagesBetweenUsers = async (userId1, userId2) => {
  try {
    const url = `/getMessagesBetweenUsers?userId1=${userId1}&userId2=${userId2}`;

    const response = await get(url);
    return response.data;
  } catch (error) {
    throw new Error('Messages not found');
  }
};

const updateMessage = async (id, messageData) => {
  const response = await put(`/updateMessage/${id}`, messageData);
  return response.data;
};

const getUnreadMessages = async (userId) => {
  try {
    const url = `/unreadMessages?userId=${userId}`;

    const response = await get(url);
    return response.data;
  } catch (error) {
    throw new Error('Messages not found');
  }
};


export { createMessage, getMessagesBetweenUsers, updateMessage, getUnreadMessages };
