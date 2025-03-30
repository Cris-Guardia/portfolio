import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { LuHouse } from 'react-icons/lu'
import { FaRegUser } from 'react-icons/fa'
import { PiHandbagSimpleBold } from 'react-icons/pi'
import { FiMessageSquare } from 'react-icons/fi'
import { IoIosMenu } from 'react-icons/io';
import { FiX } from 'react-icons/fi';
import './Navigation.css'
import { Button } from '../Button/Button'

function Navigation(){
    const [menuOpen, setMenuOpen] = useState(false);
    
    const showNav = () => {
        setMenuOpen(!menuOpen)
    }
    
    return(
        <nav>
            <h3>
                Cristofer Guardia
            </h3>

            <Button className={'btn-menu'} onClick={showNav} content={menuOpen ? <FiX /> : <IoIosMenu/>}>
                
            </Button>

            <ul className={`ul-links ${menuOpen ? 'open' : ''}`}>
                <li>
                    <NavLink to='/portfolio/' end className={({isActive}) => isActive ? 'active-link' : ''}>
                        <LuHouse />
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/portfolio/about' className={({isActive}) => isActive ? 'active-link' : ''}>
                        <FaRegUser />
                        Sur moi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/portfolio/projects' className={({isActive}) => isActive ? 'active-link' : ''}>
                        <PiHandbagSimpleBold />
                        Projets
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/portfolio/contact' className={({isActive}) => isActive ? 'active-link' : ''}>
                        <FiMessageSquare />
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export { Navigation }