import React, { ChangeEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getUserByEmail } from "../../store/reducers/user/asyncReducers";
import "./AuthPage.css";

export const AuthPage = () => {
  const [form, setForm] = useState({
    email: "test@test.test",
    password: "123123",
  });
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.userReducer);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const onSingIn = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (form.email && form.password) dispatch(getUserByEmail(form));
  };

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h2>Страница входа</h2>
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Авторизация</span>
            {error && <p className="red-color">{error}</p>}
            <div className="card__body">
              <div className="input-field">
                <input
                  placeholder="Email"
                  id="email"
                  type="text"
                  name="email"
                  className="blue-color"
                  value={form.email}
                  autoComplete="off"
                  required
                  onChange={changeHandler}
                />
              </div>
              <div className="input-field">
                <input
                  placeholder="Пароль"
                  id="password"
                  type="password"
                  name="password"
                  className="blue-color"
                  required
                  value={form.password}
                  onChange={changeHandler}
                />
              </div>
            </div>
          </div>
          <div className="card-action">
            <button
              onClick={onSingIn}
              className="btn green darken-1 singIn-btn"
            >
              Войти
            </button>
            <button className="btn blue darken-4">Зарегистрироваться</button>
          </div>
        </div>
      </div>
    </div>
  );
};
