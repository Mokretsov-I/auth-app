import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../models/IUser";

interface UserState {
  users: IUser[];
  currentUser: IUser | undefined;
  isLoading: boolean;
  isLogin: boolean;
  error: string;
}

const initialState: UserState = {
  users: [],
  currentUser: sessionStorage.getItem("user")
    ? JSON.parse(sessionStorage.getItem("user") as string)
    : undefined,
  isLoading: false,
  isLogin: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<IUser>) {
      state.currentUser = action.payload;
      sessionStorage.setItem("user", JSON.stringify(action.payload));
      state.isLoading = false;
    },
    usersFetching(state) {
      state.isLoading = true;
    },
    usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
      state.isLoading = false;
      state.error = "";
      state.users = action.payload;
    },
    usersFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    editUser(state, action: PayloadAction<IUser>) {
      state.users = state.users.map((u) =>
        u.id === action.payload.id ? action.payload : u
      );
      state.isLoading = false;
    },
    removeUser(state, action: PayloadAction<number>) {
      state.users = state.users.filter((u) => u.id !== action.payload);
      state.isLoading = false;
    },
    addUser(state, action: PayloadAction<IUser>) {
      state.users = [...state.users, action.payload];
      state.isLoading = false;
    },
    signOutUser(state) {
      sessionStorage.removeItem("user");
      state.currentUser = undefined;
    },
  },
});

export default userSlice.reducer;
