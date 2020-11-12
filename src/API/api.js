import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b7b49312-5192-49d9-8dcd-b73f5aee8a6f"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    unfollow(usersId) {
        return instance.delete(`follow/${usersId}`).then(response => response.data)
     },
     follow(usersId){
         return instance.post(`follow/${usersId}`,{}).then(response=>response.data)
     }
}
export const authAPI = {
    auth(){
        return instance.get(`auth/me`).then(response=>response.data)
    }
}
export const profileAPI = {
    profile(userId){
        return  instance.get(`profile/` + userId).then(response =>response.data)
    },
    getStatus(userId){
        return instance.get(`profile/status/`+userId);
    },
    updateStatus(status){
        return instance.put(`profile/status`,{status: status});
    }


}