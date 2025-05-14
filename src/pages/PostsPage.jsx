import { PostProvider } from '../context/PostContext'
import { Posts } from '../components/Posts/Posts'

export const PostsPage = () => {
  return (
    <>
    <PostProvider>
        <Posts />
    </PostProvider>
    </>
  )
}