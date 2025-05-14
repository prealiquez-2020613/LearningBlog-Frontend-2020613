import { useState } from 'react'
import { CommentForm } from '../components/comments/CommentForm'
import { useApi } from '../shared/hooks/useApi'

export const PostCommentsPage = ({ postId }) => {
  const { addCommentary } = useApi()

  const handleAddComment = (commentData) => {
    addCommentary(commentData);
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <CommentForm postId={postId} onSubmit={handleAddComment} />
    </div>
  )
}
