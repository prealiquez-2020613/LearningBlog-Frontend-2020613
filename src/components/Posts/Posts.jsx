import { useState } from 'react'
import { CardPost } from './CardPost'
import { usePostContext } from '../../shared/hooks/usePostContext'

export const Posts = () => {
  const { posts, isFetchingPosts } = usePostContext()
  const [selectedCategory, setSelectedCategory] = useState('')
  const [sortOrder, setSortOrder] = useState('newest')

  if (isFetchingPosts) {
    return <div>Loading posts...</div>
  }

  if (!posts || posts.length === 0) {
    return <div>No posts available.</div>
  }

  let filteredPosts = selectedCategory
    ? posts.filter(post => post.category === selectedCategory)
    : [...posts]

  filteredPosts.sort((a, b) => {
    const dateA = new Date(a.createdAt)
    const dateB = new Date(b.createdAt)
    if (sortOrder === 'newest') {
      return dateB - dateA
    } else {
      return dateA - dateB
    }
  })

  return (
    <div className="flex flex-col items-center justify-center w-full m-5">
      <div className="mb-3 flex flex-col items-center justify-center space-y-3">
        <h2 className="text-xl font-semibold">Mis publicaciones</h2>

        <div className="flex space-x-4">
          <select
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">-- Todas las categorías --</option>
            <option value="TECNOLOGÍA">TECNOLOGÍA</option>
            <option value="TALLER">TALLER</option>
            <option value="TICS">TICS</option>
          </select>

          <select
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="newest">Más recientes</option>
            <option value="oldest">Más antiguos</option>
          </select>
        </div>
      </div>

      {filteredPosts.length === 0 ? (
        <div>No posts found in the selected category.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredPosts.map(post => (
            <CardPost
              key={post._id}
              _id={post._id}
              title={post.title}
              category={post.category}
              content={post.content}
              author={post.author}
              createdAt={post.createdAt}
            />
          ))}
        </div>
      )}
    </div>
  )
}
