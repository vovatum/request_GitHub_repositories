import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://api.github.com/users/'
})


export const githubApi = {
    getUserData(userName) {
        return instance.get(`${userName}`)
    }
}