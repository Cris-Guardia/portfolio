import './ProjectCard.css'

function ProjectCard({title, description, photoUrl}){
    return(
        <article>
            <aside>
                <h3>{ title }</h3>
                <p>{ description }</p>
            </aside>
            <figure>
                <img src={ photoUrl } alt="" />
            </figure>
        </article>
    );
}

export { ProjectCard }