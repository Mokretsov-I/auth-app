import React, { useState } from "react";
import { IUser } from "../../models/IUser";
import { User } from "../User/User";
import { UserEdit } from "../UserEdit";

import "./UsersList.css";

interface UsersListProps {
  users: IUser[];
}

export const UsersList: React.FC<UsersListProps> = ({ users }) => {
  const [userEditId, setUserEditId] = useState(0);
  const editUser = (id: number) => {
    setUserEditId(id);
  };
  return (
    <div className="row">
      {users.map((u) =>
        u.id === userEditId ? (
          <UserEdit key={u.id} user={u} />
        ) : (
          <User key={u.id} user={u} editUser={editUser} />
        )
      )}
    </div>
  );
};
