import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { IUser } from "../../models/IUser";

import { fetchUsers } from "../../store/reducers/user/asyncReducers";
import { UsersList } from "../../components/UsersList/UsersList";
import { ProfileUser } from "../../components/ProfileUser";
import { Loader } from "../../components/Loader";

import "./UsersPage.css";

export const UsersPage = () => {
  const dispatch = useAppDispatch();
  const { users, isLoading, currentUser } = useAppSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="container">
      <ProfileUser user={currentUser as IUser} />
      <UsersList users={users} />
      {isLoading && <Loader />}
    </div>
  );
};
