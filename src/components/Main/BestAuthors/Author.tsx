import React from "react";
const styles = require("../../../styles/Main/BestAuthors/Author.module.scss");
import { AuthorsData } from "../../../data";

interface AuthorsProps {
  data: AuthorsData;
}

export default function Author({ data }: AuthorsProps) {
  return (
    <div className={styles.main}>
      <img
        className={styles.main__image}
        src={data.avatar}
        alt="author image"
      />

      <div className={styles.main__name}>
        {data.name} {data.surname}
      </div>

      <div className={styles.main__declaration}>{data.description}</div>
    </div>
  );
}
