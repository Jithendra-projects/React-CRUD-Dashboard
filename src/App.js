import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import DisplayDataPage from './pages/DisplayDataPage';
import UserDetailPage from './pages/UserDetailPage';
import InputDataPage from './pages/InputDataPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/display" element={<DisplayDataPage />} />
        <Route path="/user/:id" element={<UserDetailPage />} />
        <Route path="/input" element={<InputDataPage />} />
      </Routes>
    </Router>
  );
}

export default App;
