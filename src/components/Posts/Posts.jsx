import { CardPost } from './CardPost'
import { usePostContext } from '../../shared/hooks/usePostContext'

export const Posts = () => {

    const { posts } = usePostContext()

  return (
    <div className="flex flex-col items-center justify-center w-full m-5">
        <div className="mb-3 flex items-center justify-center">
            <h2 className="text-xl font-semibold">Mis publicaciones</h2>
        </div>
        <div className="flex items-center justify-center">
            <button 
              className="mb-3 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
              data-bs-toggle="modal"
              data-bs-target="#createPostModal"
            >
                Agregar post
            </button>
        </div>
        <div className="w-full mt-5 space-y-4">
          {
            posts.map(post => (
              <CardPost 
                key={post._id}
                title={post.title}
                category={post.category.name}
                content={post.content}
                author={post.author.username}
              />
            ))
          }
        </div>
    </div>
  )
}