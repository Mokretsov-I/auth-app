import React from "react";
import { IUser } from "../../models/IUser";

import "./User";

interface UserProps {
  user: IUser;
}

export const User: React.FC<UserProps> = ({ user }) => {
  return (
    <div className="col s3">
      <div className="card blue-grey">
        <div className="card-content white-text">
          <p className="card-title">{user.name}</p>
          <div className="card__body">
            <p>Email: {user.email}</p>
            <p>Логин: {user.login}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
