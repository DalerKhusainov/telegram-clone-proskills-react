import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppArea from "./components/app-area/AppArea";
import Login from "./pages/Login";

const App = () => {
  const [user, setUser] = useState("");

  // console.log(user);

  return (
    <BrowserRouter>
      <Login setUser={setUser} />
      <AppArea user={user} />
    </BrowserRouter>
  );
};

export default App;
