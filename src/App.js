import "./App.css";
import { AppProvider } from "./AppContext";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
function App() {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  return (
    <div>
      <AppProvider currentUser={currentUser}>
        <BrowserRouter>
          <Routes>
          <Route element={<Navbar/>} path="navbar" />
          <Route element={<Profile/>} path="profile" />
          <Route element={<Navigate to="/navbar" />} path="/" />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
}

export default App;
