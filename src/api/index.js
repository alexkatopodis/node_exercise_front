import axios from 'axios';

const apiUrl = 'http://localhost:3001/api';

function get(path) {
   console.log(apiUrl)

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

function post(path, obj, headerAdd) {
   let headers = setUpHeaders();
   if (headerAdd) {
      headers = {
         headers: {
            ...headers.headers, ...headerAdd
         }
      };
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

function put(path, obj) {
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

function setUpHeaders() {
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
