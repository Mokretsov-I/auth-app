import React, { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { IUser } from "../../models/IUser";
import { searchRequest } from "../../store/reducers/user/asyncReducers";
import { AddUser } from "../AddUser";
import { Modal } from "../Modal";
import { User } from "../User/User";
import { UserEdit } from "../UserEdit";

import "./UsersList.css";

interface UsersListProps {
  users: IUser[];
}

export const UsersList: React.FC<UsersListProps> = ({ users }) => {
  const [isShow, setIsShow] = useState(false);
  const [userEditId, setUserEditId] = useState(0);
  const [search, setSearch] = useState("");
  const { currentUser } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();

  const onSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const onSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(searchRequest(search));
  };

  const editUser = (id: number) => {
    setUserEditId(id);
  };

  const closeEditUser = () => {
    setUserEditId(0);
  };

  const closeModal = () => {
    setIsShow(false);
  };

  return (
    <>
      {userEditId !== 0 && (
        <div className="editBackground" onClick={closeEditUser} />
      )}
      <div className="users">
        <div className="users__search search-user">
          <form onSubmit={onSearch}>
            <label htmlFor="search" className="search-user__label">
              Поиск
            </label>
            <input
              name="search"
              id="search"
              className="blue-color search-user__input"
              value={search}
              onChange={onSearchInput}
            />
            <button className="btn">Поиск</button>
          </form>
          <button
            className="btn green darken-4 "
            onClick={() => {
              setIsShow(true);
            }}
          >
            Добавить пользователя
          </button>
        </div>

        <div className="users-list">
          {users.map((u) => {
            if (currentUser && currentUser.id === u.id) return;
            return (
              <div
                key={u.id}
                className={`users-list__item ${
                  u.id === userEditId ? "edit" : ""
                }`}
              >
                {u.id === userEditId ? (
                  <UserEdit user={u} editUser={editUser} />
                ) : (
                  <User user={u} editUser={editUser} />
                )}
              </div>
            );
          })}
        </div>
      </div>
      <Modal isShow={isShow} close={closeModal}>
        <AddUser close={closeModal} />
      </Modal>
    </>
  );
};
