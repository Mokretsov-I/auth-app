import React from "react";
import { IUser } from "../../models/IUser";

import "./ProfileUser.css";

interface ProfileUserProps {
  user: IUser;
}

export const ProfileUser: React.FC<ProfileUserProps> = ({ user }) => {
  return (
    <div className="profile row">
      <div className="profile__header">
        <h3 className="profile__title">
          Текущий пользователь {user.name || user.email}
        </h3>
      </div>
    </div>
  );
};
