import axios from "axios";

export const https = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
});
export const workAPI = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
});
export const weatherAPI = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/",
});
export const filmAPI = axios.create({
    baseURL: "http://www.omdbapi.com/",
});
