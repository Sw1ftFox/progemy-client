import React from "react";
const styles = require("./Authorization.module.scss");
import nickname from "../../../assets/icons/authorization/nickname.svg";
import password from "../../../assets/icons/authorization/password.svg";
import { Link } from "react-router-dom";

export const Authorization = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.currentTarget;
    const nickname = (target.elements.namedItem("nickname") as HTMLInputElement).value;
    const password = (target.elements.namedItem("password") as HTMLInputElement).value;

    //отправка данных (GET) на сервер в целях получения положительного или отрицательного ответа

    alert("Вы авторизованы!");
  }

  return (
    <div className={styles.authorization}>
      <div className={styles.authorization__window}>
        <div className={styles.authorization__title}>Войдите в аккаунт</div>
        <form onSubmit={handleSubmit} className={styles.authorization__form}>
          <label
            className={styles.authorization__form__element}
            htmlFor="nickname"
          >
            <img
              className={styles.authorization__form__element_img}
              src={nickname}
              alt=""
            />
            <input
              className={styles.authorization__form__element_input}
              id="nickname"
              name="nickname"
              type="text"
              placeholder="Введите никнейм"
              required
            ></input>
          </label>
          <label
            className={styles.authorization__form__element}
            htmlFor="password"
          >
            <img
              className={styles.authorization__form__element_img}
              src={password}
              alt=""
            />
            <input
              className={styles.authorization__form__element_input}
              id="password"
              name="password"
              type="password"
              placeholder="Введите пароль"
              required
            />
          </label>
          <div className={styles.authorization__resetPassword}>
            <Link to="" className={styles.authorization__resetPassword_link}>
              Забыли пароль?
            </Link>
          </div>
          <button type="submit" className={styles.authorization__form__login}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};
