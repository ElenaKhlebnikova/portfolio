import React from "react";
import styles from "./Projects.module.css";
import NavSm from "../navigation_small/NavSm";
import meowFood from "./../../assets/projects/meow_food.jpg";
function Projects() {
  return (
    <>
      <NavSm />
      <div className={styles.container}>
        <h1 className={styles.heading}>My Projects</h1>
        <div className={styles.projects_container}>
          <div className={styles.project}>
            <h3 className={styles.project_name}>Meow Food</h3>
            <img src={meowFood} alt="MeowFood React Project" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
