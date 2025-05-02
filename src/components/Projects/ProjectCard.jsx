import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

{/* From what I understood, we're basically passing in a project object
    /extracting out the components from the json file */}
export const ProjectCard = ({ project: {title, imageSrc, description, skills, source} }) => {
    return (
        <div className={styles.container}>
            <img 
                src={getImageUrl(imageSrc)} 
                alt={`${title}'s Image`} />
            <h3 className = {styles.title}>{title}</h3>
            <p className = {styles.description}>{description}</p>
            <ul className = {styles.skills}>
                {skills.map((skill, id) => {
                    return <li key={id} className = {styles.skill}>{skill}</li>;
                })}
            </ul>
            <div className = {styles.links}>
                <a href={source} className = {styles.link}>Source</a>
            </div>
        </div>
    );
};