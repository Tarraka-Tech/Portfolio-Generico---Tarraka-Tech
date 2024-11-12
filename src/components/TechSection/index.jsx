import { TechList } from "./TechList"
import styles from "./style.module.css"

export const TechSection = () =>{
    return(
        <section id="techSection">
            <div className={`container`}>
                <div className={styles.techSection__container}>
                    <h1 className="title md">Tecnologias</h1>
                    <TechList/>
                </div>
            </div>
        </section>
    )
}