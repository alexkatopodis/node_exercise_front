import axios from 'axios';

const apiUrl = process.env.REACT_APP_BASE_API_URL;

const get = (path) => {

   const headers = setUpHeaders();
   const url = `${apiUrl}${path}`;

   return axios
      .get(url, headers)
      .then(res => res)
      .catch((error) => {
         console.log('error axios - get', error);
         return error;
      });
}

const post = (path, obj, headerAdd) => {
   let headers = setUpHeaders();
   if (headerAdd) {
      headers = {
         headers: {
            ...headers.headers,
            ...headerAdd,
         }
      };
   }

   if (obj instanceof FormData) {
      headers.headers['Content-Type'] = 'multipart/form-data';
   }

   const url = `${apiUrl}${path}`;

   return axios
      .post(url, obj, headers)
      .then(res => res)
      .catch((error) => {
         return {
            status: error.response?.status,
            data: error.response?.data,
            response: error.response,
         };
      });
}

const put = (path, obj) => {
   const headers = setUpHeaders();
   const url = `${apiUrl}${path}`;

   return axios
      .put(url, obj, headers)
      .then(res => res)
      .catch((error) => {
         console.log('error axios - post', error);
         return error;
      });
}

const setUpHeaders = () => {
   const configHeader = {
      headers: {
         'Content-Type': 'application/json',
         Accept: 'application/json'
      },
   };
   return configHeader;
}

export {
   get,
   post,
   put
}
