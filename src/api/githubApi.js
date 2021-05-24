import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://api.github.com/users/'
})


export const githubApi = {
    getUserMainData(userName) {
        return instance.get(`${userName}`)
    },
    getUserReposData(userName) {
        return instance.get(`${userName}/repos`)
    }
}