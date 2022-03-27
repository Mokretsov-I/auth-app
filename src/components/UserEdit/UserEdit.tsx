import React, { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { IUser } from "../../models/IUser";
import {
  editUserRequest,
  removeUserRequest,
} from "../../store/reducers/user/asyncReducers";

import "./UserEdit.css";

interface UserEditProps {
  user: IUser;
  editUser: Function;
}

export const UserEdit: React.FC<UserEditProps> = ({ user, editUser }) => {
  const [isEdited, setIsEdited] = useState(false);
  const [form, setForm] = useState({
    email: user.email,
    name: user.name,
    login: user.login,
  });
  const dispatch = useAppDispatch();

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setIsEdited(true);
  };

  const saveEdit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userData = { ...form, pass: user.pass, id: user.id };
    dispatch(editUserRequest(userData));
    editUser(0);
    setIsEdited(false);
  };

  const removeUser = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(removeUserRequest(user.id));
    editUser(0);
  };

  return (
    <div className="card blue-grey">
      <div className="card-content white-text">
        <form onSubmit={saveEdit}>
          <input
            placeholder="Name"
            type="text"
            name="name"
            className="blue-color"
            value={form.name}
            autoComplete="off"
            required
            onChange={changeHandler}
          />
          <div className="card__body">
            <input
              placeholder="Email"
              type="email"
              name="email"
              className="blue-color"
              value={form.email || ""}
              autoComplete="off"
              required
              onChange={changeHandler}
            />
            <input
              placeholder="Login"
              type="text"
              name="login"
              className="blue-color"
              value={form.login}
              autoComplete="off"
              required
              onChange={changeHandler}
            />
          </div>
          <div className="card__footer">
            <button className="btn red darken-4" onClick={removeUser}>
              Удалить
            </button>
            {isEdited && (
              <button className="btn green darken-1">Сохранить</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
