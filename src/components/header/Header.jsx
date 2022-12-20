import React from "react";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container_img}>
      <nav className={styles.navigation}>
        <p className={styles.nav_item}>About me</p>
        <p className={styles.nav_item}>Projects</p>
        <p className={styles.nav_item}>Contacts</p>
      </nav>
      <div>
        <h1 className={styles.main_header}>Front-end developer</h1>
      </div>
    </div>
  );
}

export default Header;
