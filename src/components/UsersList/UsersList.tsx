import React from "react";
import { IUser } from "../../models/IUser";
import { User } from "../User/User";

import "./UsersList.css";

interface UsersListProps {
  users: IUser[];
}

export const UsersList: React.FC<UsersListProps> = ({ users }) => {
  return (
    <div className="row">
      {users.map((u) => (
        <User key={u.id} user={u} />
      ))}
    </div>
  );
};
