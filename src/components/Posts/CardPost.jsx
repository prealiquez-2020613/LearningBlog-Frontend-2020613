import { useState } from 'react'

export const CardPost = ({ title, category, content, author }) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleExpand = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden p-4">
            <div className="p-4">
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <h6 className="text-lg text-gray-600 mb-2">{author}</h6>
                <p className={`text-sm text-gray-800 mb-4 ${isExpanded ? '' : 'truncate'}`}>
                    {content}
                </p>
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
                    <a href="#" className="text-blue-500 hover:underline">Card link</a>
                    <a href="#" className="text-blue-500 hover:underline">Another link</a>
                </div>
            </div>
        </div>
    )
}
