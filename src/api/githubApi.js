import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://api.github.com/users/'
})


export const githubApi = {
    getUser(userName) {
        return instance.get(`${userName}`)
    },
    getRepos(userName, perPage, page) {
        return instance.get(`${userName}/repos?per_page=${perPage}&page=${page}`)
    }
}