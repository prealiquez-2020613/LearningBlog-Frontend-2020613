import { useApi } from "../shared/hooks/useApi"
import { createContext, useEffect } from "react"

export const PostsContext = createContext();

export const PostProvider = ({children}) => {

    const { posts, isFetchingPosts, getPost } = useApi();
    useEffect(() => {
        getPost()
    }, [])
    
  return (
    <PostsContext.Provider value={{ posts, isFetchingPosts }}>
        {children}
    </PostsContext.Provider>
  )
}