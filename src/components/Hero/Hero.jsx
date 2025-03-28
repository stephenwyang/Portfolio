import React from "react"

import styles from "./Hero.module.css"
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, my name is Stephen Yang</h1>
            <p className={styles.description}>
                I'm an aspiring software engineer, mainly proficient in Python and Java. 
                Feel free to reach out if you want to learn more about me and what I've been doing!
            </p>
            <a href="mailto:stephen.cr.yang@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        {/* <img src={getImageUrl("hero/heroImage.png")} alt="Hero Image of me" className={styles.heroImg}/> */}
            {/* Either get an image or remove later */}
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>;
}