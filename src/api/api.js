import * as axios from "axios";

let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '660304be-a1b9-42f1-ae29-897b3361b209'
    }
});


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true,
        }).then(response => {
            return response.data
        })
    },

    getUserProfile(userId) {
        return instance.get(`profile/${userId}`, {
            withCredentials: true,
        }).then(response => {
            return response.data
        })
    }
};

export const followUnFollowAPI = {
    unFollowUser (userId) {
        return instance.delete(`follow/${userId}`, {
            withCredentials: true,
        }).then(response => {
            return response.data
        })
    },

    followUser (userId){
        return instance.post(`follow/${userId}`, {
            withCredentials: true,
        }).then(response => {
            return response.data
        })
    }
};

export const authAPI = {
    setAuthUser () {
        return instance.get(`auth/me`, {
            withCredentials: true,
        }).then(response => {
            return response.data
        })
    }
};