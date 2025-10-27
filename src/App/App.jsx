import {useRoutes, BrowserRouter} from 'react-router-dom'
import { Navigation } from '../Components/Navigation/Navigation'
import { Contact } from '../pages/Contact/Contact'
import { Home } from '../pages/Home/Home'
import { About } from '../pages/About/About'
import { Projects } from '../pages/Projects/Projects'
import './App.css'

function AppRoutes(){
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/projects',
      element: <Projects />
    },
    {
      path: '/contact',
      element: <Contact />
    }
  ])

  return routes
}

function App() {
    
  return (
    <BrowserRouter>
        <div className='App'>
          <Navigation />
          <AppRoutes />
        </div>
      </BrowserRouter>
  )
}

export default App
