import React from "react"
import styles from "./Contact.module.css"

import { getImageUrl } from "../../utils"

export const Contact = () => {
    return (
        <footer id="contact" className = {styles.container}>
            <div className = {styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out at these links!</p>
            </div>
            <ul className = {styles.links}>
                <li className = {styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                    <a href="mailto:stephen.cr.yang@gmail.com">stephen.cr.yang@gmail.com</a>
                </li>
                <li className = {styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedInd icon" />
                    <a href="https://www.linkedin.com/in/stephen-yang97/">linkedin.com/stephen-yang97</a>
                </li>
                <li className = {styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
                    <a href="https://github.com/stephenwyang">github.com/stephenwyang</a>
                </li>
            </ul>
        </footer>
    )
}