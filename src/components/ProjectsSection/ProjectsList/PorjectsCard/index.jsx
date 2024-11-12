import gitIcon from "../../../../assets/git-icon.png"
import styles from "./style.module.css"

export const ProjectCard = ({project}) =>{
    return(
        <li className={styles.card__container}>
            <div className={styles.card__header}>
                <h3 className={`${styles.card__title} title sm`}>{project.name}</h3>
                <img src={gitIcon} alt="Git icon" />
            </div>
            <p className={`${styles.card__text} paragraph`}>{project.description}</p>
            <a href="#" className={`link`}>Saiba mais</a>
        </li>
    )
}