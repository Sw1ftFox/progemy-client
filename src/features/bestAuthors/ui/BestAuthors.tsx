import React from "react";
import {Author} from "./author/ui/Author";
const styles = require("./BestAuthors.module.scss");
import { authorsData } from "../../../entities/authorsData";
import lineSrc from '../../../assets/icons/bestauthor/Line.svg';

export const BestAuthors = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main__title}>Лучшие авторы</div>
      <div className={styles.main__declaration}>
        Наши курсы созданы опытными профессионалами из индустрии, которые не
        только глубоко знают своё дело, но и умеют объяснять сложные вещи
        просто. Каждый автор — это практик с реальным опытом разработки и
        обучения.
      </div>
      <img className={styles.main__line} src={lineSrc} alt="" />
      <div className={styles.main__authors}>
        {authorsData.map((item, index) => (
          <Author key={index} data={item} />
        ))}
      </div>
    </div>
  );
}
