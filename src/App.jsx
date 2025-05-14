import { Toaster } from 'react-hot-toast'
import { useRoutes } from 'react-router-dom'
import { routes } from './routes'
import { PostProvider } from './context/PostContext'

function App () {

  const elementRoutes = useRoutes(routes);

  return (
    <>
      <PostProvider>
        {elementRoutes}
      </PostProvider>
      <Toaster position='bottom-center' reverseOrder={false} />
    </>
  )
}

export default App
