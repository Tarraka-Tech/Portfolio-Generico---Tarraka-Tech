import { Nav } from "./HeaderNav";
import styles from "./style.module.css";
import portfolio from "../../assets/portfolio.png"

export const Header = () =>{
    return(
        <header>
            <div className="container">
                <div className={styles.Header__Container}>
                    <img src={portfolio} alt="portfolio" />
                    <Nav/>
                    <a href="#contact" className="btn">Contato</a>
                </div>
            </div>
        </header>
    )
    
}