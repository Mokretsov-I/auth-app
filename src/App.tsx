import React from "react";

import { useAppSelector } from "./hooks/redux";
import { AuthPage } from "./pages/AuthPage";
import { UsersPage } from "./pages/UsersPage";

import "./App.css";

function App() {
  const { currentUser } = useAppSelector((state) => state.userReducer);

  return (
    <div className="App">{currentUser ? <UsersPage /> : <AuthPage />}</div>
  );
}

export default App;
