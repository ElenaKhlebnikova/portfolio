import React from "react";

import styles from "./Header.module.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className={styles.container_img}>
      <nav className={styles.navigation}>
        <Link to="/">
          <p className={styles.nav_item}>About me</p>
        </Link>
        <Link to="projects">
          <p className={styles.nav_item}>Projects</p>
        </Link>
        <p className={styles.nav_item}>Contacts</p>
      </nav>
      <div>
        <h1 className={styles.main_header}>Front-end developer</h1>
      </div>
    </div>
  );
}

export default Header;
