import { NavLink } from 'react-router-dom'
import { LuHouse } from 'react-icons/lu'
import { FaRegUser } from 'react-icons/fa'
import { PiHandbagSimpleBold } from 'react-icons/pi'
import { FiMessageSquare } from 'react-icons/fi'
import './Navigation.css'

function Navigation(){
    return(
        <nav>
            <h3>
                Cristofer Guardia
            </h3>
            <ul>
                <li>
                    <NavLink
                    to='/'>
                        <LuHouse />
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about'>
                        <FaRegUser />
                        Sur moi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/projects'>
                        <PiHandbagSimpleBold />
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>
                        <FiMessageSquare />
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export { Navigation }