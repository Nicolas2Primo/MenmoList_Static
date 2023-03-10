import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import { SignUpProvider } from "./context/SignUpContext";
import { VideoLoadedProvider } from "./context/VideoLoadedContext";

function App() {
  return (
    <div className=" h-screen ">
      <VideoLoadedProvider>
        <Router>
          <Navbar></Navbar>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />

            <Route
              path="signup"
              element={
                <SignUpProvider>
                  <SignUp />
                </SignUpProvider>
              }
            />
          </Routes>
        </Router>
      </VideoLoadedProvider>
    </div>
  );
}

export default App;
