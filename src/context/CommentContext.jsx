import { useApi } from "../shared/hooks/useApi"
import { createContext, useEffect } from "react"

export const CommentContext = createContext();

export const CommentProvider = ({children}) => {

    const { comments, isFetchingComments, getComments } = useApi();
    useEffect(() => {
        getComments()
    }, [])
    
  return (
    <CommentContext.Provider value={{ comments, isFetchingComments }}>
        {children}
    </CommentContext.Provider>
  )
}