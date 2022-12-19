import React from "react";
import styles from "./Footer.module.css";
import { FaTelegram, FaLinkedinIn, FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.links_web}>
        <div className={styles.icon_container}>
          <FaTelegram className={styles.icon} />
          <FaLinkedinIn className={styles.icon} />
          <FaGithub className={styles.icon} />
        </div>
        <div className={styles.links_menu}>
          <p className={styles.link}>Home</p>
          <p className={styles.link}>Projects</p>
          <p className={styles.link}>Contacts</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
