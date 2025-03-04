// import { NavLink } from 'react-router-dom'
import './Button.css'

function Button({content, address}){
    return(
        <a href={address} target='_blank' rel='noopener noreferrer'>
            <button>
                {content}
            </button>
        </a>
    )
}

export { Button }