import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppArea from "./components/app-area/AppArea";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      {/* <AppArea /> */}
      <Login />
    </BrowserRouter>
  );
};

export default App;
