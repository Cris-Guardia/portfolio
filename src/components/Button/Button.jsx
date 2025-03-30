// import { NavLink } from 'react-router-dom'
import './Button.css'

function Button({content, address, className, onClick}){
    return(
        <a href={address} target='_blank' rel='noopener noreferrer' >
            <button onClick={onClick} className={className}>
                {content}
            </button>
        </a>
    )
}

export { Button }