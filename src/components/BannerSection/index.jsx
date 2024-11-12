import { username } from "../../data/user.js";
import Banner from "../../assets/banner-img.png"
import styles from "./style.module.css"

export const BannerSection = () => {
    return (
        <section>
            <div className={`${styles.bannerSection} container`}>
                <div className={styles.bannerSection__container}>
                    <p className={`${styles.bannerSection__label} label`}>{username}</p>
                    <h1 className={`${styles.bannerSection__title} title lg`}>Bem vindo ao meu portifólio</h1>
                    <p className={`${styles.bannerSection__text} paragraph`}>Uma frase interessante sobre mim</p>
                    <a href="#" className={`${styles.bannerSection__btn} btn`}>Saiba mais</a>
                </div>
                <img src={Banner} alt="Banner" className={`${styles.bannerSection__img}`}/>
            </div>
        </section>
    );
};
