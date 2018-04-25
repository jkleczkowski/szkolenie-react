import axios from 'axios/index';

export function setCORSInterceptors() {
    axios.interceptors.request.use(function (config) {
        return {...config, withCredentials: true};
    }, function (error) {
        return Promise.reject(error);
    });

    axios.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        return Promise.reject(error);
    });
}