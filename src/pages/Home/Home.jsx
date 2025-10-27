import { Button } from '../../Components/Button/Button'

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
                    Passionné pour le développement de logiciel et étudiant en
                    Génie Électrique et Informatique Industrielle (GEII).
                </p>
                <Button content={'  Mon CV  '} address='./CV-Cristofer-Guardia.pdf'></Button>
            </div>
            <figure>
                <img src='./Images/photo-cristofer.png' alt='Cristofer Guardia' />
            </figure>
        </main>
    )
}

export { Home }