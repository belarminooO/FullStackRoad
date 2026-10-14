import axios from 'axios';

// Base da URL: https://api.themoviedb.org/3/
// URL DA API: /movie/now_playing?api_key=2e426b8b9c4a4f7860c031c915554e23


const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

export default api;

