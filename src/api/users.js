import { get } from './index';

const getAllUsers = async (props) => {
   const { firstName, lastName, gender } = props;

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

   if (query) {
      if (query.endsWith('&')) {
         query = query.slice(0, -1);
      }
   }

   const queryParam = query ? `?${query}` : '';

   const response = await get(`/getUsers${queryParam}`);
   return response.data;
}

export {
   getAllUsers
}

