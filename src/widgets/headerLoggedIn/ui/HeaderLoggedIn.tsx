import React from "react";
import { Logo } from "../../../shared/index";
import { Link } from "react-router-dom";
const headerSharedStyles = require("../../../shared/ui/Header.module.scss");
const headerLoggedInStyles = require("./HeaderLoggedIn.module.scss");
import { Dropdown } from "../../../shared/index";
import { NotificationsIcon } from "../../../shared/index";
const avatarSrc = require("../../../assets/images/header/avatar.jpg");

export const HeaderLoggedIn = () => {
  return (
    <header
      className={`${headerSharedStyles.header} ${headerLoggedInStyles.header}`}
    >
      <Logo />
      <div
        className={`${headerSharedStyles.header__navigations} ${headerLoggedInStyles.header__navigations}`}
      >
        <Link
          to={""}
          className={`${headerSharedStyles.header__navigations__message} ${headerLoggedInStyles.header__navigations__message}`}
        >
          Сообщения
        </Link>
        <Link
          to={""}
          className={`${headerSharedStyles.header__navigations__help} ${headerLoggedInStyles.header__navigations__help}`}
        >
          Помощь
        </Link>
      </div>
      <div
        className={`${headerSharedStyles.header__profileInfo} ${headerLoggedInStyles.header__profileInfo}`}
      >
        <div
          className={`${headerSharedStyles.header__profileInfo__notifications} ${headerLoggedInStyles.header__profileInfo__notifications}`}
        >
          <NotificationsIcon
            className={`${headerSharedStyles.header__profileInfo__notifications__icon} ${headerLoggedInStyles.header__profileInfo__notifications__icon}`}
          />
        </div>
        <div
          className={`${headerSharedStyles.header__profileInfo__avatar} ${headerLoggedInStyles.header__profileInfo__avatar}`}
        >
          <img
            src={avatarSrc}
            alt="avatar"
            className={`${headerSharedStyles.header__profileInfo__avatar__img} ${headerLoggedInStyles.header__profileInfo__avatar__img}`}
          />
        </div>
        <div
          className={`${headerSharedStyles.header__profileInfo__nickname} ${headerLoggedInStyles.header__profileInfo__nickname}`}
        >
          <Link
            to={""}
            className={`${headerSharedStyles.header__profileInfo__nickname__text} ${headerLoggedInStyles.header__profileInfo__nickname__text}`}
          >
            Chunga Changa
          </Link>
          <Dropdown
            className={`${headerSharedStyles.header__profileInfo__nickname__dropdown} ${headerLoggedInStyles.header__profileInfo__nickname__dropdown}`}
          />
        </div>
      </div>
    </header>
  );
};
