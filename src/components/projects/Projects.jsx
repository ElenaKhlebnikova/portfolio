import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Projects.module.css";
import NavSm from "../navigation_small/NavSm";
import meowFood from "./../../assets/projects/meow_food.jpg";
import Button from "../button/Button";
function Projects() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <NavSm />
      <div className={styles.container}>
        <h1 className={styles.heading}>My Projects</h1>
        <div className={styles.projects_container}>
          <div className={styles.project}>
            <h3 className={styles.project_name}>Meow Food</h3>

            <img src={meowFood} alt="MeowFood React Project" />

            <div
              onMouseOver={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={styles.card}
            >
              {isHovered === true ? (
                <div className={styles.buttons_container}>
                  <Link path="https://app.netlify.com/sites/dashing-cupcake-30c83a/overview">
                    <Button text={"View Project"} />
                  </Link>
                  <Button styleProp={"orange"} text={"Code"} />
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
