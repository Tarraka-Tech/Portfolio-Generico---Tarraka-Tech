import { ProjectList } from "./ProjectsList";
import styles from "./style.module.css";

export const ProjectsSection = () =>{
    return(
        <section id="projectsSection">
            <div className="container">
                <div className={styles.projects__container}>
                    <h1 className="title md">Projetos</h1>
                    <ProjectList/>
                </div>
            </div>
        </section>
    )
}