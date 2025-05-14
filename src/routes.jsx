import { PostsPage } from "./pages/PostsPage";
import { PostCommentsPage } from './pages/CommentsPage'

export const routes = [
    {path:'/posts',element:<PostsPage/>},
    {path:'/comments',element:<PostCommentsPage/>},
]