import axios from 'axios'
import CONFIG from '../config'


const host = CONFIG.API_HOST
const GET_USERS = () => {
    return axios.get(`https://${host}/users`)
}

const GET_POSTS = (userId) => {
    return axios.get(`https://${host}/posts?userId=${userId}`)
}

const GET_POST = (postId) =>{
    return axios.get(`https://${host}/posts/${postId}`)
}

const GET_COMMENTS = (userId)=>{
    return axios.get(`https://${host}/comments?postId=${userId}`)
}

export{
    GET_USERS,
    GET_POSTS,
    GET_POST,
    GET_COMMENTS
}