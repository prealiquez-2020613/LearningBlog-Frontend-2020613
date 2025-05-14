import React from 'react'
import { useForm } from 'react-hook-form'

export const CommentForm = ({ postId, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    mode: 'onTouched',
    defaultValues: {
      author: '',
      content: ''
    }
  })

  const submitHandler = (data) => {
    onSubmit({ ...data, post: postId })
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="space-y-4 max-w-md mx-auto bg-white p-6 rounded shadow">
      <div>
        <label htmlFor="author" className="block mb-1 font-medium">
          Nombre
        </label>
        <input
          id="author"
          type="text"
          {...register('author', { required: 'El nombre es obligatorio', maxLength: { value: 100, message: 'Máximo 100 caracteres' } })}
          className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.author ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Tu nombre"
          maxLength={100}
        />
        {errors.author && <p className="text-red-600 text-sm mt-1">{errors.author.message}</p>}
      </div>

      <div>
        <label htmlFor="content" className="block mb-1 font-medium">
          Comentario
        </label>
        <textarea
          id="content"
          rows={4}
          {...register('content', {
            required: 'El comentario es obligatorio',
            maxLength: { value: 1000, message: 'Máximo 1000 caracteres' }
          })}
          className={`w-full p-2 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.content ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Escribe tu comentario aquí"
          maxLength={1000}
        />
        {errors.content && <p className="text-red-600 text-sm mt-1">{errors.content.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full p-2 rounded text-white transition duration-300 ${
          isSubmitting ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {isSubmitting ? 'Enviando...' : 'Enviar comentario'}
      </button>
    </form>
  )
}
