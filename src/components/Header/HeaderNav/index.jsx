import styles from "./style.module.css"

export const Nav = () =>{
    return(
        <nav className={styles.nav__container}>
            <a href="#aboutMe">Sobre</a>
            <a href="#techSection">Stack</a>
            <a href="#techSection">Projetos</a>
        </nav>
    )
}