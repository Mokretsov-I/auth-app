import React, { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { addUserRequest } from "../../store/reducers/user/asyncReducers";

import "./AddUser.css";

interface AddUserProps {
  close: Function;
}

export const AddUser: React.FC<AddUserProps> = ({ close }) => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    login: "",
    pass: "",
  });
  const dispatch = useAppDispatch();

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const saveEdit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addUserRequest(form));
    close();
  };

  return (
    <form onSubmit={saveEdit}>
      <div className="">
        <p>Имя</p>
        <input
          name="name"
          className="blue-color"
          value={form.name}
          required
          onChange={changeHandler}
        />
      </div>
      <div>
        <p>Логин</p>
        <input
          name="login"
          className="blue-color"
          value={form.login}
          required
          onChange={changeHandler}
        />
      </div>
      <div>
        <p>Email</p>
        <input
          type="email"
          name="email"
          className="blue-color"
          value={form.email}
          required
          onChange={changeHandler}
        />
      </div>
      <div>
        <p>Пароль</p>
        <input
          type="password"
          name="pass"
          className="blue-color"
          value={form.pass}
          required
          onChange={changeHandler}
        />
      </div>
      <button className="btn green darken-1">Добавить</button>
    </form>
  );
};
