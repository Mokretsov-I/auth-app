import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchUsers } from "../../store/reducers/user/asyncReducers";
import { UsersList } from "../../components/UsersList/UsersList";
import { ProfileUser } from "../../components/ProfileUser";

import "./UsersPage.css";
import { IUser } from "../../models/IUser";

export const UsersPage = () => {
  const dispatch = useAppDispatch();
  const { users, isLoading, error, currentUser } = useAppSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="container">
      <ProfileUser user={currentUser as IUser} />
      <UsersList users={users} />
    </div>
  );
};
