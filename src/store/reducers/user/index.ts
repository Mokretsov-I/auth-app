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
  currentUser: undefined,
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
  },
});

export default userSlice.reducer;
