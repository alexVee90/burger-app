import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-app-6b068.firebaseio.com',
});

export default instance;