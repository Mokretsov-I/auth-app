import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./reducers/user";

const rootRedusers = combineReducers({
  userReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootRedusers,
  });
};

export type RootState = ReturnType<typeof rootRedusers>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
