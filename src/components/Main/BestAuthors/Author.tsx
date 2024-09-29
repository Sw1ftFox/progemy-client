import React from "react";
const styles = require("../../../styles/Main/BestAuthors/Author.module.scss");
const imgSrc = require("../../../../assets/svg/bestauthor/author/firstAvatar.png");

export default function Author() {
  return (
    <div className={styles.main}>
      <img className={styles.main__image} src={imgSrc} alt="author image" />

      <div className={styles.main__name}>Пётр Кузнецов</div>

      <div className={styles.main__declaration}>
        Фронтенд-разработчик с более чем 4-летним опытом. Специализируется на
        React и Vue.js, работал над проектами для крупных e-commerce платформ.
      </div>
    </div>
  );
}
