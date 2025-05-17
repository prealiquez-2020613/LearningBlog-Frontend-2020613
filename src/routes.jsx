import { PostsPage } from "./pages/PostsPage";
import { PostCommentsPage } from './pages/CommentsPage'

export const routes = [
    {path:'/',element:<PostsPage/>},
    {path: '/posts/:postId/comments', element: <PostCommentsPage />}
]