import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "ebbcbb05-1637-4d91-a652-d34246d4f016",
    },
});

export const profileAPI = {
    getUser(userId) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data
            });
    }
}