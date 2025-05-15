import { useState } from 'react'
import { getPostsRequest, addCommentaryRequest, getCommentsByPostRequest } from '../../services/api'
import toast from 'react-hot-toast'

export const useApi = () => {

    const [posts, setPosts] = useState(null);
    const getPost = async () => {
        const response = await getPostsRequest();
        if(response.error){
            return toast.error(
                response?.err?.response?.data?.message || 'Error al obtener las publicaciones'
            )
        }
        setPosts(response.data.posts)
    }

    const addCommentary = async (comment) => {
        const response = await addCommentaryRequest(comment);
        if(response.error){
            return toast.error(
                response?.err?.response?.data?.message || 'Error al agregar comentario'
            )
        }
        return toast.success('Comentario agregado')
    }

    const [comments, setComments] = useState(null);
    const getComments = async (postId) => {
        if (!postId) return;
        const response = await getCommentsByPostRequest(postId);
        if(response.error){
            return toast.error(
                response?.err?.response?.data?.message || 'Error al obtener los comentarios'
            )
        }
        setComments(response.data.comments)
    }

  return {
    posts,
    isFetchingPosts: !posts,
    addCommentary,
    getPost,
    comments,
    isFetchingComments: !comments,
    getComments

  }
}