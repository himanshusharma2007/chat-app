import React from "react";
import Login from "./pages/Login";
import "./App.css";
import SignUp from "./pages/Signup";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-image flex justify-center items-center  md:w-screen md:min-h-screen">
      <Routes>
        <Route path="/" element={<Navigate to="/chats" />} />
        <Route path="/chats" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
