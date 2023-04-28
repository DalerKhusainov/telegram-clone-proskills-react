import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppArea from "./components/app-area/AppArea";
import Login from "./pages/Login";

const App = () => {
  const [user, setUser] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="/contacts" element={<AppArea user={user} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
