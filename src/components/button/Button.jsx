import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  return (
    <button
      className={
        props.styleProp === "orange" ? styles.button_orange : styles.button
      }
    >
      {props.text}
    </button>
  );
}

export default Button;
