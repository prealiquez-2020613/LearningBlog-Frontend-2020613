export const CardComment = ({ author, content, createdAt }) => {

  const formattedDate = new Date(createdAt).toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })

  return (
    <div className="flex space-x-4 p-4 bg-white rounded-lg shadow-sm max-w-3xl w-full">

      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold text-lg">
        {author.charAt(0).toUpperCase()}
      </div>

      <div className="flex flex-col">
        <div className="flex items-center space-x-2">
          <h6 className="font-semibold text-gray-900">{author}</h6>
          <span className="text-gray-500 text-xs">{formattedDate}</span>
        </div>

        <p className="mt-1 text-gray-800 text-sm whitespace-pre-line">
          {content}
        </p>
      </div>
    </div>
  )
}
