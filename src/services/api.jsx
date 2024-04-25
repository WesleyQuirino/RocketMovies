import axios from 'axios';

export const api = axios.create({
    baseURL: "https://nodemovies-api-y7v1.onrender.com"
})