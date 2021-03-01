import axios from "axios";

export const friendsApi = {
    getFriends(userId){
        return axios.get(`https://randomuser.me/api/?results=30&nat=US?` + userId)

    }
}

