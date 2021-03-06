import *as axios from 'axios';

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            "API-KEY": "3c48e8ae-e5bf-4572-8874-ff6fcc0ec1c8"
        }
    }
);
export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`);
    },
    


}

export const profileAPI={
    getUserProfile(userId){
        return instance.get(`profile/`+userId);
    },
    getStatus(userId){
        return  instance.get(`profile/status/`+userId);
    },
    updateStatus(status){
        return  instance.put(`profile/status`,{status:status}); 
    }

}
export const authAPI ={
    me(){
        return  instance.get(`/auth/me`);
    },
    login(email, password, rememberMe){
        return  instance.post(`/auth/login`,{email, password, rememberMe});
    },
    logout(){
        return  instance.delete(`/auth/login`);
    }
}

