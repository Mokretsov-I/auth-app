import React, { MouseEvent, useState } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { IUser } from "../../models/IUser";
import { userSlice } from "../../store/reducers/user";
import { EditCurrentUser } from "../EditCurrentUser";
import { Modal } from "../Modal";

import "./ProfileUser.css";

interface ProfileUserProps {
  user: IUser;
}

export const ProfileUser: React.FC<ProfileUserProps> = ({ user }) => {
  const [isShow, setIsShow] = useState(false);
  const dispatch = useAppDispatch();

  const onSignOut = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(userSlice.actions.signOutUser());
  };

  const close = () => {
    setIsShow(false);
  };

  return (
    <>
      <div className="profile">
        <div className="profile__header">
          <div className="profile__info">
            <p className="profile__title">Текущий пользователь: {user.name}</p>
          </div>
          <div className="profile__action">
            <button
              className="btn yellow darken-4"
              onClick={() => {
                setIsShow(true);
              }}
            >
              Редактировать текущего пользователя
            </button>
            <button className="btn red darken-4" onClick={onSignOut}>
              Выйти
            </button>
          </div>
        </div>
      </div>

      <Modal isShow={isShow} close={close}>
        <EditCurrentUser user={user} close={close} />
      </Modal>
    </>
  );
};
