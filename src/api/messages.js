import { post } from './index';

const createMessage = async (messageData) => {
  const response = await post('/createMessage', messageData);
  return response.data;
};

export { createMessage };
