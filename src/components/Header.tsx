import React, { useState } from "react";
import { Link } from "react-router-dom";
const styles = require("../styles/Header.module.scss");

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchClick = () => {
    // Отправка  AJAX-запроса  на  сервер  с  `searchQuery`
    console.log("Ищем:", searchQuery);
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.header__logo}>
        <div className={styles.header__logoProge}>Proge</div>
        <div className={styles.header__logoMy}>My</div>
      </Link>
      <svg
        className={styles.header__divider}
        width="1"
        height="58"
        viewBox="0 0 1 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0.5"
          y1="2.18557e-08"
          x2="0.499997"
          y2="58"
          stroke="#3A3D43"
        />
      </svg>

      <div className={styles.header__catalog}>
        <div className={styles.header__catalogText}>Каталог</div>
        <svg
          className={styles.header__catalogDropdown}
          width="11"
          height="6"
          viewBox="0 0 11 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L5.5 5L10 1"
            stroke="#CFD3DA"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className={styles.header__resources}>
        <div className={styles.header__resourcesText}>Ресурсы</div>
        <svg
          className={styles.header__resourcesDropdown}
          width="11"
          height="6"
          viewBox="0 0 11 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L5.5 5L10 1"
            stroke="#CFD3DA"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className={styles.header__search}>
        <button
          className={styles.header__searchBtn}
          onClick={handleSearchClick}
        >
          <svg
            className={styles.header__searchIcon}
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.3805 25.1689L18.0865 17.5834C19.947 15.7175 21.0995 13.1453 21.0995 10.3085C21.0995 4.6241 16.4754 0 10.791 0C5.10664 0 0.482544 4.6241 0.482544 10.3085C0.482544 15.9929 5.10664 20.617 10.791 20.617C13.2862 20.617 15.5762 19.7251 17.361 18.2451L24.6727 25.8493C24.7689 25.9499 24.8975 26 25.0266 26C25.1493 26 25.2715 25.9543 25.3668 25.863C25.5621 25.675 25.568 25.3643 25.3805 25.1689ZM10.791 19.6352C5.64808 19.6352 1.46431 15.4515 1.46431 10.3085C1.46431 5.16554 5.64808 0.981762 10.791 0.981762C15.934 0.981762 20.1178 5.16554 20.1178 10.3085C20.1178 15.4515 15.9335 19.6352 10.791 19.6352Z"
              fill="#7CFFD8"
            />
          </svg>
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
        <button className={styles.header__buttonsLogin}>Log In</button>
        <button className={styles.header__buttonsSignup}>Sign Up</button>
      </div>
    </header>
  );
}
