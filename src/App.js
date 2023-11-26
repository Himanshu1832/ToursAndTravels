import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import Login from "./components/login/Loginform";
import Register from "./components/signup/signup";



function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/signup" exact element={<Register />} />
        <Route path="/" exact element={<Login />} />
        
      </Routes>
    </Router>
  );
}

export default App;
