import { Toaster } from 'react-hot-toast'
import { useRoutes } from 'react-router-dom'
import { routes } from './routes'

const App = () => {

  const elementRoutes = useRoutes(routes);

  return (
    <>
      {elementRoutes}
      <Toaster  position='bottom-center' reverseOrder={false}/>
    </>
  )
}

export default App
