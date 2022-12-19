import React from "react";
import mainPic from "../../assets/main_pic.jpg";
import styles from "./Header.module.css";

function Header() {
  return (
    <div>
      <img className={styles.pic} src={mainPic} alt="Lines of code" />
    </div>
  );
}

export default Header;
