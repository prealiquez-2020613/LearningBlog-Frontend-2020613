import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useApi } from '../shared/hooks/useApi'
import { CommentForm } from '../components/comments/CommentForm'
import { CardComment } from '../components/comments/CardComment'

export const PostCommentsPage = () => {
  const { postId } = useParams()
  const { addCommentary, getComments, comments, isFetchingComments } = useApi()

  useEffect(() => {
    if (postId) {
      getComments(postId)
    }
  }, [postId])

  const handleAddComment = async (commentData) => {
    await addCommentary(commentData)
    getComments(postId)
  }

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      <CommentForm postId={postId} onSubmit={handleAddComment} />

      {isFetchingComments && <p>Cargando comentarios...</p>}

      {!isFetchingComments && comments && comments.length === 0 && (
        <p>No hay comentarios para esta publicación.</p>
      )}

      {!isFetchingComments && comments && comments.length > 0 && (
        <div className="space-y-4">
          {comments.map((comment) => (
            <CardComment
              key={comment._id}
              author={comment.author}
              content={comment.content}
              createdAt={comment.createdAt}
            />
          ))}
        </div>
      )}
    </div>
  )
}
