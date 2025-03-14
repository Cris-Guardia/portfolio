import { Button } from '../../components/Button/Button'

import './Home.css'
/*

Arreglar foto


*/

function Home(){
    return(
        <main className='home'>
            <div>
                <p>
                    Bonjour, je m’appelle <span>Cristofer Guardia </span>
                    Passioné pour le developement de logiciel et étudiant en
                    Génie Électrique et Informatique Industrielle (GEII).
                </p>
                <Button content={'  Mon CV  '} address={'./cv-cristofer-guardia.pdf'}></Button>
            </div>
            <figure>
                <img src='./photo-cristofer.png' alt='Cristofer Guardia' />
            </figure>
        </main>
    )
}

export { Home }