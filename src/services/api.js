import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://storage.googleapis.com/dito-questions',
    timeout: 3000,
    // headers: {
    //     'Access-Control-Allow-Origin': '*',
    // },
});

window.api = api;
