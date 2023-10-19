import { get } from './index';

const getAllUsers = async (firstName, lastName, gender) => {
   let query = '';

   if (firstName) {
      query += `firstName=${firstName}&`;
   }

   if (lastName) {
      query += `lastName=${lastName}&`;
   }

   if (gender) {
      query += `gender=${gender}&`;
   }

   if (query.endsWith('&')) {
      query = query.slice(0, -1);
   }

   const response = await get(`/getUsers?${query}`);
   return response.data;
}

export {
   getAllUsers
}
