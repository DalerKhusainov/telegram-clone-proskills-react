import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppArea from "./components/app-area/AppArea";
import Login from "./pages/Login";
import "./App.css";

const App = () => {
  const [userFullName, setUserFullName] = useState("");
  const [currentUser, setCurrentUser] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Login
              setUserFullName={setUserFullName}
              setCurrentUser={setCurrentUser}
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <AppArea userFullName={userFullName} currentUser={currentUser} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
