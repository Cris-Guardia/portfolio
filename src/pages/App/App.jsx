import {useRoutes, BrowserRouter} from 'react-router-dom'
import { Navigation } from '../../components/navigation/Navigation'
import { Contact } from '../Contact/Contact'
import { Home } from '../Home/Home'
import { About } from '../About/About'
import { Projects } from '../Projects/Projects'
import './App.css'

function AppRoutes(){
  const routes = useRoutes([
    {
      path: 'portfolio/',
      element: <Home />
    },
    {
      path: 'portfolio/about',
      element: <About />
    },
    {
      path: 'portfolio/projects',
      element: <Projects />
    },
    {
      path: 'portfolio/contact',
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
