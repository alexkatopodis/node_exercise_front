import { get, post } from './index';

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

export { createMessage, getMessagesBetweenUsers };
