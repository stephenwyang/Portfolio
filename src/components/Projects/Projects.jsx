import React from "react"
import styles from "./Projects.module.css"

import projects from "../../data/projects.json"
import { ProjectCard } from "./ProjectCard"
import { getImageUrl } from "../../utils"

export const Projects = () => {
    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projects</h2>
            <div className = {styles.projects}>
                {/* Code for ProjectCard is reusable so we're making it a component instead */}
                {projects.map((project, id) => {
                    return <ProjectCard key={id} project={project} />;
                })}
            </div>
        </section>
    );
};