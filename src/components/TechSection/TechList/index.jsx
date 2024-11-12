import { technologies } from "../../../data/technologies"
import { TechCard } from "./TechCard"
import styles from "./style.module.css"

export const TechList = () =>{
    return(
        <ul className={styles.techList__container}>
            {technologies.map(technology => (
                <TechCard key={technology.name} technology={technology}/>
            ))}
        </ul>
    )
}