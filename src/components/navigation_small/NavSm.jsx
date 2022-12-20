import React from "react";
import styles from "./NavSm.module.css";
import { Link } from "react-router-dom";
function NavSm() {
  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <Link to="/">
          <p className={styles.nav_item}>About me</p>
        </Link>
        <Link to="projects">
          <p className={styles.nav_item}>Projects</p>
        </Link>
        <p className={styles.nav_item}>Contacts</p>
      </div>
    </div>
  );
}

export default NavSm;
