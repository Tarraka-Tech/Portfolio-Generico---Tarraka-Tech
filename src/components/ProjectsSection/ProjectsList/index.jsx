import { projects } from "../../../data/projects"
import { ProjectCard } from "./PorjectsCard"
import styles from "./style.module.css"

export const ProjectList = () =>{
    return(
        <ul className={styles.projectList__container}>
            {projects.map(project => (
                <ProjectCard key={project.name} project={project}/>
            ))}
        </ul>
    )
}