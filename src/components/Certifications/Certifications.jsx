import React from "react"
import styles from "./Certifications.module.css"

export const Certifications = () => {
    return <section className = {styles.container} id="certification">
        <h2 className = {styles.title}>Certifications</h2>
        <div className={styles.content}>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <h3>
                        AWS Certified Cloud Practitioner, <span className={styles.certDate}>August 2025</span>
                    </h3>
                </li>
            </ul>
        </div>
    </section>
}