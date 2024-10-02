import React from "react";
import { Link } from "react-router-dom";
const styles = require("../../styles/Main/Logo.module.scss");

export default function Logo() {
  return (
    <Link to="/" className={styles.logo}>
      <div className={styles.logo__proge}>Proge</div>
      <div className={styles.logo__my}>My</div>
    </Link>
  );
}
