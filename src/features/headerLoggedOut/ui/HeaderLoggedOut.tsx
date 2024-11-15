import React, { useState } from "react";
import { Logo } from "../../../shared/components/logo/index";
import { Link } from "react-router-dom";
const headerSharedStyles = require("../../../shared/styles/header/Header.module.scss");
const headerLoggedOutStyles = require("./HeaderLoggedOut.module.scss");
import dividerSrc from "../../../assets/icons/header/verticalLine.svg";
import Dropdown from "../../../icons/header/Dropdown";
import SearchIcon from "../../../icons/header/SearchIcon";

export const HeaderLoggedOut = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchClick = () => {
    // Отправка  AJAX-запроса  на  сервер  с  `searchQuery`
    console.log("Ищем:", searchQuery);
  };

  return (
    <header
      className={`${headerSharedStyles.header} ${headerLoggedOutStyles.header}`}
    >
      <Logo />
      <img
        src={dividerSrc}
        className={`${headerSharedStyles.header__divider} ${headerLoggedOutStyles.header__divider}`}
        alt=""
      />

      <div
        className={`${headerSharedStyles.header__catalog} ${headerLoggedOutStyles.header__catalog}`}
      >
        <div
          className={`${headerSharedStyles.header__catalog__text} ${headerLoggedOutStyles.header__catalog__text}`}
        >
          Каталог
        </div>
        <Dropdown
          className={`${headerSharedStyles.header__catalog__dropdown} ${headerLoggedOutStyles.header__catalog__dropdown}`}
        />
      </div>
      <div
        className={`${headerSharedStyles.header__resources} ${headerLoggedOutStyles.header__resources}`}
      >
        <div
          className={`${headerSharedStyles.header__resources__text} ${headerLoggedOutStyles.header__resources__text}`}
        >
          Ресурсы
        </div>
        <Dropdown
          className={`${headerSharedStyles.header__resources__dropdown} ${headerLoggedOutStyles.header__resources__dropdown}`}
        />
      </div>
      <div
        className={`${headerSharedStyles.header__search} ${headerLoggedOutStyles.header__search}`}
      >
        <button
          className={`${headerSharedStyles.header__search__btn} ${headerLoggedOutStyles.header__search__btn}`}
          onClick={handleSearchClick}
        >
          <SearchIcon
            className={`${headerSharedStyles.header__search__icon} ${headerLoggedOutStyles.header__search__icon}`}
          />
        </button>
        <input
          type="text"
          className={`${headerSharedStyles.header__search__input} ${headerLoggedOutStyles.header__search__input}`}
          placeholder="Поиск"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div
        className={`${headerSharedStyles.header__buttons} ${headerLoggedOutStyles.header__buttons}`}
      >
        <Link
          to="/authorization"
          className={`${headerSharedStyles.header__buttons__login} ${headerLoggedOutStyles.header__buttons__login}`}
        >
          Log In
        </Link>
        <Link
          to="/registration"
          className={`${headerSharedStyles.header__buttons__signup} ${headerLoggedOutStyles.header__buttons__signup}`}
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
};
