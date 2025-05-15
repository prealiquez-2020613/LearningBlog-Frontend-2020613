import { useState } from 'react'
import { Link } from 'react-router-dom'

export const CardPost = ({ _id, title, category, content, author }) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleExpand = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden p-4">
            <div className="space-y-3">
                <h5 className="text-xl font-semibold">{title}</h5>
                <h6 className="text-lg text-gray-600">{author}</h6>

                <div 
                    className={`text-sm text-gray-800 mb-2 ${
                        isExpanded ? '' : 'truncate'
                    } overflow-hidden`}
                >
                    {isExpanded ? content : content.length > 100 ? `${content.substring(0, 100)}...` : content}
                </div>

                {content.length > 100 && (
                    <button 
                        onClick={toggleExpand} 
                        className="text-blue-500 hover:underline"
                    >
                        {isExpanded ? 'Ver menos' : 'Ver más'}
                    </button>
                )}

                <p className="text-sm text-gray-500">{category}</p>
                <div className="mt-4 flex space-x-4">
                    <Link to={`/posts/${_id}/comments`} className="text-blue-500 hover:underline">
                        Comentarios
                    </Link>
                </div>
            </div>
        </div>
    )
}
