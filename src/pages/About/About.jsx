import { CiCalendar } from 'react-icons/ci'
import './About.css'
/*
    agregar mas contenido aqui
    agregar estilos acorde a diseño
*/


function About(){
    return(
        <main className='about'>
            <h2>Sur moi</h2>

            <p>
                Vénézuélien, étudiant international et autonome. Actuellement en première année de Génie Électrique et Informatique Industrielle à l’IUT de Tarbes, je suis passionné par l’informatique et le développement logiciel.
                Auparavant, j’ai poursuivi des études en Ingénierie Informatique au Venezuela pendant un an, une expérience qui a renforcé mon intérêt pour le secteur du logiciel. Mon objectif est de devenir Ingénieur en Informatique et de me spécialiser dans le domaine de l’Informatique Industrielle.
                Je possède des compétences en développement web Frontend, maîtrisant diverses technologies telles que HTML, CSS, JavaScript, React.js, ainsi qu’en Backend avec Express.js.
                Par ailleurs, je parle :
                <ul>
                    <li>Français : DELF B2.</li>
                    <li>Anglais : Courant.</li>
                    <li>Espagnol : Langue maternelle.</li>
                </ul>
            </p>

            <section>
                <h3>Etudes</h3>

                <div className='ul-container'>
                    <ul>
                        <li>
                            <span>
                                <CiCalendar />
                                <h6>A partir du septembre 2024</h6>
                            </span>
                            <h4>I.U.T de Tarbes</h4>
                            <p>
                                Formation en Génie Électrique et Informatique Industrielle (GEII)
                                axée sur les systèmes automatisés, l'électronique et la programmation industrielle.
                            </p>
                        </li>
                        <li>
                            <span>
                                <CiCalendar />
                                <h6>Janvier 2023 - Juin 2024</h6>
                            </span>
                            <h4>Campus Langues, Paris</h4>
                            <p>
                                Etude de la langue française acquérant des compétences linguistiques solides et une bonne maîtrise à l'écrit comme à l'oral.
                            </p>
                        </li>
                        <li>
                            <span>
                                <CiCalendar />
                                <h6>Janvier 2021 - Decembre 2022</h6>
                            </span>
                            <h4>UNET (Universidad Nacional Exprerimental Del Táchira]</h4>
                            <p>
                                Ingénierie en informatique et développement de logiciels.
                            </p>
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <h3>Experiences profesionels</h3>

                <div className='ul-container'>
                    <ul>
                        <li>
                            <span>
                                <CiCalendar />
                                <h6>à partir du decembre 2024</h6>
                            </span>
                            <h4>McDonals, Tarbes</h4>
                            <p>
                                Employé polyvalent responsable de la préparation des plats et le nettoyage.
                            </p>
                        </li>
                        <li>
                            <span>
                                <CiCalendar />
                                <h6>Aout 2023 - Aout 2024</h6>
                            </span>
                            <h4>Green Deli restaurant, Paris</h4>
                            <p>
                                Employé polyvalent responsable de la préparation des plats,
                                le service aux clients, nettoyage et de l'entretien du restaurant.
                            </p>
                        </li>
                        <li>
                            <span>
                                <CiCalendar />
                                <h6>Avril 2023 - Aout 2023</h6>
                            </span>
                            <h4>Totuma restaurant, Paris</h4>
                            <p>
                                En charge de l'accueil des clients, de la prise de commande et de l'élaboration des boissons. 
                                Soutien de l'équipe en cuisine pour la préparation des plats.
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    )
}

export { About }