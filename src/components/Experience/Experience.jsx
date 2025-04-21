import React from "react"
import styles from "./Experience.module.css"
import { getImageUrl } from "../../utils"

import skills from "../../data/skills.json"
import history from "../../data/history.json"

export const Experience = () => {
    return <section className = {styles.container} id="experience">
        <h2 className={styles.title}>Experience</h2>
        <div className = {styles.content}>
            <div className = {styles.skills}>
                {skills.map((skill, id) => {
                    return (
                        <div key = {id} className = {styles.skill}>
                            <div className = {styles.skillImageContainer}>
                                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                            </div>
                            <p>{`${skill.title} - ${skill.level}`}</p>
                        </div>
                    );
                })}
            </div>
            <ul className = {styles.history}>
                {history.map((historyEntry, id) => {
                    return (
                        <li key = {id} className = {styles.historyEntry}>
                            <div className = {styles.historyDetails}>
                                <h3>{`${historyEntry.role}, ${historyEntry.company}`}</h3>
                                <p>{`${historyEntry.startDate} - ${historyEntry.endDate}`}</p>
                                <ul>
                                    {historyEntry.experiences.map((exps, id) => {
                                        return <li key = {id}>{exps}</li>;
                                    })}
                                </ul>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    </section>
};