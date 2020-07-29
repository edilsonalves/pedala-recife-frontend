import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
  baseURL: `${baseURL}`,
});

export default api;
