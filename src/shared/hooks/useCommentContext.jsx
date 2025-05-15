import { useContext } from 'react'
import { CommentContext } from '../../context/CommentContext';
import toast from 'react-hot-toast'

export const useCommentContext = () => {

    const context = useContext(CommentContext);
    if(!context){
        toast.error('Error al obtener información');
        return console.error('No existe el provedor del contexto')
    }

  return context
}