import React from "react";
import { IUser } from "../../models/IUser";

import "./User.css";

interface UserProps {
  user: IUser;
  editUser: Function;
}

export const User: React.FC<UserProps> = ({ user, editUser }) => {
  const chengeHendler = () => {
    editUser(user.id);
  };
  return (
    <div className="card blue-grey" onClick={chengeHendler}>
      <div className="card-content white-text">
        <p className="card-title">{user.name}</p>
        <div className="card__body">
          <p>Email: {user.email}</p>
          <p>Логин: {user.login}</p>
        </div>
      </div>
    </div>
  );
};
