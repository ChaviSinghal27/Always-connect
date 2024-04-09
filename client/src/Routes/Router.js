import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home/home";
import Login from "../pages/login/login";
import Explore from "../pages/explore/explore";
import Profile from "../pages/profile/profile";

import Signup from "../pages/signup/SignUp";
import { AuthContext } from "../context/authContext";
import Feed from "../components/feed/feed";
import Bookmark from "../pages/bookmark/bookmark";

export default function Router() {
  const { user } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" exact element={user ? <Home /> : <Signup />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/profile/:username" element={<Profile />} />
      <Route path="/feed" element={<Home />} />
      <Route path="/bookmark" element={<Bookmark />} />
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} />
    </Routes>
  );
}
