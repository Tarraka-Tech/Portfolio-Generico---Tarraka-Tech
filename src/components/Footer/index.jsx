import whatsapp from "../../assets/whatsapp-icon.png"
import linkedin from "../../assets/linkedin-icon.png"
import github from "../../assets/github-icon.png"
import { user } from "../../data/user"
import style from "./style.module.css"

export const Footer = () =>{
    return(
        <footer id="contact">
            <div className="container">
                <div className={style.footer__container}>
                    <div className={style.contactInfos}>
                        <h1 className={` title md`}>Contato</h1>
                        <div className={style.footerIcons__container}>
                            <a href="#"><img src={whatsapp} alt="whatsapp icon" /></a>
                            <a href="#"><img src={linkedin} alt="linkedin icon" /></a>
                            <a href="#"><img src={github} alt="github incon" /></a>
                        </div>
                    </div>
                    <p className={style.footer__text}>Todos os direitos reservados - {user}</p>
                </div>
            </div>
        </footer>
    )
}