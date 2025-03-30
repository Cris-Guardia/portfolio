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
                    <NavLink
                    to='/portfolio/'>
                        <LuHouse />
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/portfolio/about'>
                        <FaRegUser />
                        Sur moi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/portfolio/projects'>
                        <PiHandbagSimpleBold />
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/portfolio/contact'>
                        <FiMessageSquare />
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export { Navigation }