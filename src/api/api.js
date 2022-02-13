import * as axios from "axios";

export const userAPI = {
    getUsers(lat, lon){
        return axios({
            method: 'get',
            url: 'http://api.openweathermap.org/data/2.5/weather',
            responseType: 'stream',
            params: {
                appid: '162fccc9d12d11b8815f8c9684922df6',
                units: 'metric',
                lang: 'ru',
                lat: lat,
                lon: lon,
            }
        });
    },
};