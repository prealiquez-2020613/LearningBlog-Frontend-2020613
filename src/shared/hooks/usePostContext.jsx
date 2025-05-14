import { useContext } from 'react'
import { PostsContext } from '../../context/PostContext'
import toast from 'react-hot-toast'

export const usePostContext = () => {

    const context = useContext(PostsContext);
    if(!context){
        toast.error('Error al obtener información');
        return console.error('No existe el provedor del contexto')
    }

  return context
}