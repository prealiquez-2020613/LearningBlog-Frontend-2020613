import { CardPost } from './CardPost'
import { usePostContext } from '../../shared/hooks/usePostContext'

export const Posts = () => {
  const { posts, isFetchingPosts } = usePostContext();

  if (isFetchingPosts) {
    return <div>Loading posts...</div>;
  }

  if (!posts || posts.length === 0) {
    return <div>No posts available.</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center w-full m-5">
      <div className="mb-3 flex items-center justify-center">
        <h2 className="text-xl font-semibold">Mis publicaciones</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
  );
};
