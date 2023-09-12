import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://meteora-api.vercel.app/'
});

export default instance;