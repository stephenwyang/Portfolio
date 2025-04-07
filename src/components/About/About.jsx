import React from "react"
import styles from "./About.module.css"

export const About = () => {
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <div className = {styles.aboutItemText}>
                        <h3>Background</h3>
                        <p>
                            I am a software developer located in the SF Bay Area, 
                            looking for a full-time position while I expand my knowledge in the field.                        
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <div className = {styles.aboutItemText}>
                        <h3>Education</h3>
                        <p>
                            I recently graduated from the Georgia Institute of Technology 
                            with a Master's Degree in Computer Science, focused on Machine Learning.                        
                            I also do have Bachelor's Degree for Computer Science from San Jose State University.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <div className = {styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>
                            I have some experience developing optimized back-end systems with some of my projects.                        
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>;
}