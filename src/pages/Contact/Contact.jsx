
/*
agregar algo de contenido aqui
*/

import { CiMail } from 'react-icons/ci'
import { FiPhone } from 'react-icons/fi'
import { FiLinkedin } from 'react-icons/fi'
import { FiGithub } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';
import './Contact.css'

function Contact(){
    return(
        <main className='contact'>  
            <section>
                <h2>Contact me</h2>
                <ul>
                    <li>
                        
                        <a href='mailto:cristofer10501@gmail.com'>
                            <CiMail />
                            cristofer10501@gmail.com
                        </a>
                    </li>
                    <li>
                        <a href='tel:+33769186183'>
                            <FiPhone /> 
                            +33 7 69 18 61 83
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/cristofer-guardia/'
                        target='_blank' rel='noopener noreferrer'>
                            <FiLinkedin />
                            Cristofer Guardia
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/Cris-Guardia' 
                        target='_blank' rel='noopener noreferrer'>
                            <FiGithub />
                            Cris-guardia
                        </a>
                    </li>
                    <li>
                        <a href='https://www.google.com/maps/search/?api=1&query=Tarbes,France'
                        target='_blank' rel='noopener noreferrer'>
                            <GrLocation />
                            Tarbes, 65000, France    
                        </a>
                    </li>
                </ul>
            </section>
        </main>
    )
}

export { Contact }