import axios from "axios";
import { AppDispatch } from "../../store";
import { IUser } from "../../../models/IUser";
import { userSlice } from ".";

interface GetUserByEmail {
  email: string;
  password: string;
}

interface AddUser {
  email: string;
  name: string;
  login: string;
  pass: string;
}

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

export const getUserByEmail =
  (data: GetUserByEmail) => (dispatch: AppDispatch) => {
    dispatch(userSlice.actions.usersFetching());
    axios
      .get<IUser[]>(`http://localhost:3330/people?q=${data.email}`)
      .then((response) => {
        const user = response.data.find(
          (u) => u.email === data.email && u.pass === data.password
        );
        if (user) dispatch(userSlice.actions.setCurrentUser(user));
        else
          dispatch(
            userSlice.actions.usersFetchingError("Пользователь не найден")
          );
      })
      .catch((e) => {
        dispatch(userSlice.actions.usersFetchingError(e.message));
      });
  };

export const editUserRequest = (data: IUser) => (dispatch: AppDispatch) => {
  dispatch(userSlice.actions.usersFetching());
  axios
    .put<IUser>(`http://localhost:3330/people/${data.id}`, data)
    .then((response) => {
      dispatch(userSlice.actions.editUser(response.data));
    })
    .catch((e) => {
      dispatch(userSlice.actions.usersFetchingError(e.message));
    });
};

export const removeUserRequest = (id: number) => (dispatch: AppDispatch) => {
  dispatch(userSlice.actions.usersFetching());
  axios
    .delete<IUser>(`http://localhost:3330/people/${id}`)
    .then(() => {
      dispatch(userSlice.actions.removeUser(id));
    })
    .catch((e) => {
      dispatch(userSlice.actions.usersFetchingError(e.message));
    });
};

export const addUserRequest = (data: AddUser) => (dispatch: AppDispatch) => {
  dispatch(userSlice.actions.usersFetching());
  axios
    .post<IUser>(`http://localhost:3330/people`, data)
    .then((response) => {
      dispatch(userSlice.actions.addUser(response.data));
    })
    .catch((e) => {
      dispatch(userSlice.actions.usersFetchingError(e.message));
    });
};

export const searchRequest = (query: string) => (dispatch: AppDispatch) => {
  dispatch(userSlice.actions.usersFetching());
  axios
    .get<IUser[]>(`http://localhost:3330/people?q=${query}`)
    .then((response) => {
      dispatch(userSlice.actions.usersFetchingSuccess(response.data));
    })
    .catch((e) => {
      dispatch(userSlice.actions.usersFetchingError(e.message));
    });
};
