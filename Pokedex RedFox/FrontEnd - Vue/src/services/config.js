import axios from 'axios';


export const http = axios.create({
    baseURL: 'http://www.localhost:3000/'
})