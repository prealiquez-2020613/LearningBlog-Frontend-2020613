export const CardPost = ({ title, category, content, author }) => {
    return (
        <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <h6 className="text-lg text-gray-600 mb-2">{author}</h6>
                <p className="text-sm text-gray-800 mb-4">{content}</p>
                <p className="text-sm text-gray-500">{category}</p>
                <div className="mt-4 flex space-x-4">
                    <a href="#" className="text-blue-500 hover:underline">Card link</a>
                    <a href="#" className="text-blue-500 hover:underline">Another link</a>
                </div>
            </div>
        </div>
    );
};
