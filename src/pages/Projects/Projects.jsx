
import './Projects.css'

/*
agregar algo de contenido aqui
*/
function Projects(){
    return(
        <main className='projects'>
            <h2>Projects</h2>
            <div>
                <h3>Système de pilotage de drone.</h3>
                <p>
                    Création d’un système de pilotage pour un drone Tello en langage Python.
                    La bibliothèque DJITello a été utilisée pour manipuler les mouvements.
                    Grâce à la bibliothèque OpenCV, l’interprétation des images a permis de guider le déplacement et de générer une réaction du drone.
                </p>
            </div>
            <div>
                <h3>Soudure de carte électronique.</h3>
                <p>
                    Organisation et soudure des composants sur une carte électronique ayant pour but de faire varier la luminosité d’une LED à l’aide d’un potentiomètre.
                    Ce dernier modifiait le rapport cyclique d’un signal carré à travers un amplificateur électronique.
                    Le système permettait d’allumer et d’éteindre la LED via deux boutons distincts, avec des vérifications et tests pertinents effectués.
                </p>
            </div>
            <div>
                <h3>Création de carte électronique.</h3>
                <p>
                    Création d’une carte électronique pour un robot mobile ayant pour objectif la détection d’une ligne blanche à l’aide de capteurs infrarouges et son suivi.
                    Le schéma électrique a été réalisé avec le logiciel Capture CIS,
                    et le placement des composants a été effectué sur le logiciel PCB Editor.
                </p>
            </div>
            <div>
                <h3>Création du système de pilotage pour un convoyeur.</h3>
                <p>
                    Création d’un système de pilotage pour un convoyeur chargé de faire avancer un groupe de canettes et d’actionner divers éléments,
                    tels qu’un plateau roulant ou une fourche roulante, afin de les séparer en fonction de leur taille.
                    Le projet a été développé sur Control Expert en utilisant les langages SFC, Ladder et FBD.
                </p>                
            </div>
            <div>
                <h3>Simulateur de banque.</h3>
                <p>
                    Application développée de manière autonome visant à être un simulateur de banque, permettant de créer un compte, de s’identifier et de réaliser des simulations de transactions entre comptes existants.
                    La partie frontend a été développée avec HTML, CSS, JavaScript et EJS (utilisé pour intégrer des composants HTML dans JavaScript).
                    Le backend a été développé avec Express.js (bibliothèque de Node.js) et MongoDB (outil de gestion de bases de données non relationnelles).
                </p>
            </div>
        </main>
    )
}

export { Projects }