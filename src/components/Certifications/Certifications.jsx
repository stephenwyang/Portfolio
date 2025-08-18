import React from "react"
import styles from "./Certifications.module.css"

export const Certifications = () => {
    return <section className = {styles.container} id="certification">
        <h2 className = {styles.title}>Certifications</h2>
        <div className={styles.content}>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <span className = {styles.certInfo}>AWS Certified Cloud Practitioner</span>
                    <span className={styles.certDate}>August 2025</span>
                </li>
            </ul>
        </div>
    </section>
}