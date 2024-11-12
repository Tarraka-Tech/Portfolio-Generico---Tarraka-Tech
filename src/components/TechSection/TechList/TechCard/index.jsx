import styles from "./style.module.css"

export const TechCard = ({technology}) =>{
    return(
        <li className={styles.techCard__container}>
            <img src={technology.img} alt={technology.name} />
            <p className={`title sm`}>{technology.name}</p>
        </li>
    )
}