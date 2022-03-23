import axios from "axios";
import { AppDispatch } from "../../store";
import { IUser } from "../../../models/IUser";
import { userSlice } from ".";

export const fetchUsers = () => (dispatch: AppDispatch) => {
  dispatch(userSlice.actions.usersFetching());
  axios
    .get<IUser[]>("http://localhost:3330/people")
    .then((response) => {
      dispatch(userSlice.actions.usersFetchingSuccess(response.data));
    })
    .catch((e) => {
      dispatch(userSlice.actions.usersFetchingError(e.message));
    });
};

interface GetUserByEmail {
  email: string;
  password: string;
}

export const getUserByEmail =
  (data: GetUserByEmail) => (dispatch: AppDispatch) => {
    dispatch(userSlice.actions.usersFetching());
    axios
      .get<IUser[]>(`http://localhost:3330/people?q=${data.email}`)
      .then((response) => {
        const user = response.data.filter(
          (u) => u.email === data.email && u.pass === data.password
        );
        if (user.length > 0)
          dispatch(userSlice.actions.setCurrentUser(user[0]));
        else
          dispatch(
            userSlice.actions.usersFetchingError("Пользователь не найден")
          );
      })
      .catch((e) => {
        dispatch(userSlice.actions.usersFetchingError(e.message));
      });
  };
