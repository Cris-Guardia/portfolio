// import { Button } from '../../components/Button/Button'

import './Projects.css'

/*
agregar algo de contenido aqui
*/
function Projects(){
    return(
        <main className='projects'>
            <h2>Projets</h2>
            <div>
                <aside>
                    <h3>Projet d’études : Conception d’un système de pilotage pour robot</h3>
                    <p>
                        Projet de programmation visant à créer un logiciel capable de guider un robot sur une piste afin de suivre une
                        ligne blanche posée au sol. Par ailleurs, cette piste présentait divers obstacles au robot et,
                        en utilisant des capteurs infrarouges et des capteurs à ultrasons, le robot était capable de détecter les obstacles
                        présents devant lui.
                        La piste sur laquelle le robot évoluait était de forme carrée, avec un capteur à chaque coin. Le robot
                        disposait d’un capteur qui mesurait la distance entre lui et chaque capteur placé aux coins, lui permettant de
                        connaître sa position précise.
                        <br />
                        <br />
                        Le logiciel a été créé en Python avec l’outil MicroPython, qui a permis d’utiliser une carte Pyboard, chargée
                        de gérer les composants tels que les capteurs ou les moteurs.
                        <br />
                        <br />
                        D’ailleurs, le projet a été développé en groupe de trois. Le travail à réaliser a été divisé en plusieurs tâches
                        plus petites, ce qui a permis de réduire sa complexité et de gérer le projet de manière plus efficace.
                    </p>
                </aside>
                <figure>
                    <img src='./Robot-1.jpg' alt='' />
                    {/* <img src='./Robot-2.jpg' alt='' /> */}
                </figure>    
            </div>
            <div>
                <aside>
                    <h3>Projet d’études : Système de pilotage de drone.</h3>
                    <p>
                        Projet qui consistait en la création et la programmation d’un système de pilotage pour un drone Tello.
                        Le drone avait la capacité de détecter des images grâce à sa caméra et de les interpréter, notamment la détection des couleurs des objets.
                        Grâce à cette capacité, le drone pouvait réagir à son environnement.
                        Sinon, grâce à un mode manuel, il pouvait se déplacer en utilisant le clavier d’un ordinateur connecté via Wi-Fi.
                        <br />
                        <br />

                        La conception reposait uniquement sur le codage en Python et était réalisée par un groupe de 3 personnes.
                        La réalisation du système était divisée en plusieurs tâches plus simples,
                        qui étaient distribuées entre les membres de l’équipe, pour être ensuite intégrées dans le système complet.
                        La caméra du drone était manipulée via la bibliothèque OpenCV, et le contrôle des mouvements se faisait avec DJITello.
                        <br />
                        <br />

                        Le projet a développé mes compétences en manipulation et interprétation des images et des couleurs avec OpenCV,
                        ainsi qu’en guidage du drone avec DJITello. Par ailleurs,
                        il a renforcé mon agilité lors de la conception d’un système de programmation.
                    </p>
                    {/* <Button content={'Voir project'} address='https://github.com/Cris-Guardia/Detection-de-Coleur-Drone'></Button> */}
                </aside>

                <figure>
                    <img src='./Drone1.jpg' alt='Drone Tello' />
                    <img src='./Drone2.jpg' alt='Drone Tello' />
                </figure>
            </div>
            
            <div>
                <aside>
                    <h3>Projet d’études : Soudure de carte électronique.</h3>
                    <p>
                        Projet qui consistait à l’organisation et à la soudure des composants sur une carte électronique ayant pour but de faire varier la luminosité d’une LED à l’aide d’un potentiomètre.
                        Ce dernier modifiait le rapport cyclique d’un signal carré à travers un amplificateur électronique.
                        Le système permettait d’allumer et d’éteindre la LED via deux boutons distincts, avec des vérifications et tests pertinents effectués.
                        Pour assurer le placement correct des composants, ils étaient soudés sur la carte en fonction de leur taille :
                        d’abord les composants plus petits, ensuite les plus grands, afin d’éviter les erreurs.
                        <br />
                        <br />
                        Le contrôle de la qualité a été effectué en utilisant une loupe pour vérifier le placement de l’étain
                        (absence de pics, absence de courts-circuits entre composants, éléments mis au bon endroit, etc.).
                        Ce projet m’a formé en soudure électronique et sur les protocoles nécessaires pour garantir un travail de qualité, ainsi que sur la manipulation du matériel pertinent à la réalisation de ce travail.
                    </p>
                </aside>
                <figure>
                    <img src='./Soudure.jpg' alt='Carte soudé pour moi' />
                </figure>
            </div>
            <div>
                <aside>
                    <h3>Création de carte électronique.</h3>
                    <p>
                        Projet consistant en la conception d’une carte électronique filoguidée,
                        destinée à être intégrée dans un robot afin de lui permettre de se diriger le long d’une piste.
                        <br/>
                        La carte détecte une ligne métallique installée au sol et informe le robot de sa position relative par rapport à cette ligne
                        (plus proche ou plus éloignée), ce qui lui permet de suivre précisément le trajet défini.
                        Le projet a été réalisé de manière indépendante, dans un cadre académique, avec le soutien pédagogique des enseignants.
                        en utilisant le logiciel Capture CIS pour la création du schéma électrique,
                        et PCB Editor pour l’implantation des composants sur la carte.
                    </p>
                </aside>
                <figure>
                    <img src='./Carte-schema1.png' alt='Diagram of the card' />
                    <img src='./Carte-schema2.png' alt='Diagram of the card' />
                    <img src='./Carte-top.png' alt='Top view of the card created' />
                    <img src='./Carte-bottom.png' alt='Bottom view of the card created' />
                    <img src='./Carte-composants.png' alt='Composants view of the card created' />
                </figure>                
            </div>
            
            {/* <div>
                <aside>
                    <h3>Simulateur de banque.</h3>
                    <p>
                        Application développée de manière autonome visant à être un simulateur de banque, permettant de créer un compte, de s’identifier et de réaliser des simulations de transactions entre comptes existants.
                        La partie frontend a été développée avec HTML, CSS, JavaScript et EJS (utilisé pour intégrer des composants HTML dans JavaScript).
                        Le backend a été développé avec Express.js (bibliothèque de Node.js) et MongoDB (outil de gestion de bases de données non relationnelles).
                    </p> */}
                    {/* <Button content={'Voir project'} address='https://github.com/Cris-Guardia/Bank-FullStak-js'></Button> */}
                {/* </aside>
                <figure>
                    <img src='./Bank.png' alt='Banks main page view' />
                </figure>
            </div> */}
        </main>
    )
}

export { Projects }