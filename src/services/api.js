import axios from "axios";

const apiClient = axios.create(
  {
    baseURL: 'http://localhost:3626',
    timeout: 2000
  }
)

export const getPostsRequest = async()=>{
  try {
    return await apiClient.get('/v1/post/getAllPosts')
  } catch (err) {
    return {error : true, err}
  }
}

export const addCommentaryRequest = async(comment)=>{
  try {
    return await apiClient.post('/v1/Commentary/addCommentary', comment, {type: 'multipart/form-data'})
  } catch (err) {
    return {error : true, err}
  }
}

export const getCommentsByPostRequest = async(postId)=>{
  try {
    return await apiClient.get(`/v1/Commentary/getCommentsByPost/${postId}`)
  } catch (err) {
    return {error : true, err}
  }
}