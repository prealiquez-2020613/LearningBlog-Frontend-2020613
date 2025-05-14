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
    }

  return (
    <div>
      
    </div>
  )
}