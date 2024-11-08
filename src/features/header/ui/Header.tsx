import React, { useState } from "react";
import {Logo} from "../../../shared/logo/index";
import { Link } from "react-router-dom";
const styles = require("./Header.module.scss");
import dividerSrc from "../../../assets/icons/header/verticalLine.svg";
import Dropdown from "../../../icons/header/Dropdown";
import SearchIcon from "../../../icons/header/SearchIcon";

export const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchClick = () => {
    // Отправка  AJAX-запроса  на  сервер  с  `searchQuery`
    console.log("Ищем:", searchQuery);
  };

  return (
    <header className={styles.header}>
      <Logo />
      <img src={dividerSrc} className={styles.header__divider} alt="" />

      <div className={styles.header__catalog}>
        <div className={styles.header__catalogText}>Каталог</div>
        <Dropdown className={styles.header__catalogDropdown} />
      </div>
      <div className={styles.header__resources}>
        <div className={styles.header__resourcesText}>Ресурсы</div>
        <Dropdown className={styles.header__resourcesDropdown} />
      </div>
      <div className={styles.header__search}>
        <button
          className={styles.header__searchBtn}
          onClick={handleSearchClick}
        >
          <SearchIcon className={styles.header__searchIcon} />
        </button>
        <input
          type="text"
          className={styles.header__searchInput}
          placeholder="Поиск"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className={styles.header__buttons}>
        <Link to="/authorization" className={styles.header__buttonsLogin}>
          Log In
        </Link>
        <Link to="/registration" className={styles.header__buttonsSignup}>
          Sign Up
        </Link>
      </div>
    </header>
  );
}
