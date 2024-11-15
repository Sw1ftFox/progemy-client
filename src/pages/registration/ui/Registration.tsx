import React from "react";
import { Link, useNavigate } from "react-router-dom";
const styles = require("./Registration.module.scss");
import nickname from "../../../assets/icons/registration/nickname.svg";
import email from "../../../assets/icons/registration/email.svg";
import password from "../../../assets/icons/registration/password.svg";

export const Registration = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.currentTarget;

    const nickname = (target.elements.namedItem("nickname") as HTMLInputElement)
      .value;
    const email = (target.elements.namedItem("email") as HTMLInputElement)
      .value;
    const password = (target.elements.namedItem("password") as HTMLInputElement)
      .value;
    const passwordAgain = (
      target.elements.namedItem("passwordAgain") as HTMLInputElement
    ).value;

    //всякие проверки на совпадения и правильное написание
    if (password !== passwordAgain) {
      alert("Пароли не совпадают!");
      return;
    }

    //если все условия выполнятся, то отправляем POST запрос и добавляем данные в БД

    alert("Регистрация пройдена успешно!");

    navigate("/profile");
  };

  return (
    <div className={styles.registration}>
      <div className={styles.registration__window}>
        <div className={styles.registration__title}>Создайте аккаунт</div>
        <form onSubmit={handleSubmit} className={styles.registration__form}>
          <label
            className={styles.registration__form__element}
            htmlFor="nickname"
          >
            <img
              className={styles.registration__form__element_img}
              src={nickname}
              alt=""
            />
            <input
              className={styles.registration__form__element_input}
              id="nickname"
              name="nickname"
              type="text"
              placeholder="Введите никнейм"
              required
            ></input>
          </label>
          <label className={styles.registration__form__element} htmlFor="email">
            <img
              className={styles.registration__form__element_img}
              src={email}
              alt=""
            />
            <input
              className={styles.registration__form__element_input}
              id="email"
              name="email"
              type="email"
              placeholder="Введите почту"
              required
            />
          </label>
          <label
            className={styles.registration__form__element}
            htmlFor="password"
          >
            <img
              className={styles.registration__form__element_img}
              src={password}
              alt=""
            />
            <input
              className={styles.registration__form__element_input}
              id="password"
              name="password"
              type="password"
              placeholder="Введите пароль"
              required
            />
          </label>
          <label
            className={styles.registration__form__element}
            htmlFor="passwordAgain"
          >
            <img
              className={styles.registration__form__element_img}
              src={password}
              alt=""
            />
            <input
              className={styles.registration__form__element_input}
              id="passwordAgain"
              name="passwordAgain"
              type="password"
              placeholder="Введите пароль еще раз"
              required
            />
          </label>
          <div className={styles.registration__form__login}>
            <Link className={styles.registration__form__login_link} to="/authorization">
              Уже зарегистрированы?
            </Link>
          </div>

          <div className={styles.registration__form__checkbox}>
            <input
              className={styles.registration__form__checkbox_input}
              id="checkbox"
              type="checkbox"
              required
            />
            <label
              className={styles.registration__form__checkbox__label}
              htmlFor="checkbox"
            >
              <div className={styles.registration__form__checkbox__label__text}>
                <div>Вы согласны с</div>
                <Link
                  className={
                    styles.registration__form__checkbox__label__text_policy
                  }
                  to=""
                >
                  политикой конфиденциальности
                </Link>
              </div>
            </label>
          </div>
          <button type="submit" className={styles.registration__form__signup}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};
