import React, { ChangeEvent, useState } from "react";
import { IUser } from "../../models/IUser";

import "./UserEdit.css";

interface UserEditProps {
  user: IUser;
}

export const UserEdit: React.FC<UserEditProps> = ({ user }) => {
  const [form, setForm] = useState({
    email: user.email,
    password: user.pass,
    id: user.id,
    name: user.name,
    login: user.login,
  });

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <div className="col s3">
      <div className="card blue-grey">
        <div className="card-content white-text">
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
              type="text"
              name="email"
              className="blue-color"
              value={form.email}
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
        </div>
      </div>
    </div>
  );
};
