import axios from 'axios';

const axiosContacts = axios.create({
  baseURL: 'https://hw-64-c59d0.firebaseio.com/'
});

export default axiosContacts;