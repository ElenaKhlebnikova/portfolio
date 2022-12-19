import React from "react";
import styles from "./About.module.css";
import Button from "./button/Button";
function About() {
  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        <div className={styles.about_container}>
          <h1>About me</h1>
          Lorem Ipsum - это текст-"рыба", часто используемый в печати и
          вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
          латинице с начала XVI века. В то время некий безымянный печатник
          создал большую коллекцию размеров и форм шрифтов, используя Lorem
          Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил
          без заметных изменений пять веков, но и перешагнул в электронный
          дизайн. Его популяризации в новое время послужили публикация листов
          Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее
          время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах
          которых используется Lorem Ipsum.
        </div>
        <div className={styles.skills_container}>
          <ul>
            <li>React</li>
            <li>Java Script</li>
            <li>CSS and SCSS</li>
            <li>Node.js</li>
            <li>HTML</li>
          </ul>

          <Button text={"View Projects"}></Button>
        </div>
      </div>
    </div>
  );
}

export default About;
