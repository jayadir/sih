import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Profile from "./components/Profile";
import Landingpage from "./components/Landingpage";
import BlogPage from "./components/Blogs/BlogPage";
import MemoryPokerGame from "./components/memoryGame/MemoryPokerGame";
import LoginPage from "./components/LoginPage/LoginPage";
import Hangman from "./components/hangman/Hangman";
import Navbar from "./components/Navbar/Navbar";
import ChatBot from "./components/chatbot/Chatbot";
import MemoryGame from "./components/memoryGame/MemoryGame";
// import { useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";

function App() {
  // const navigate = useNavigate();
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Landingpage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/memory-game" element={<MemoryPokerGame />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/hangman" element={<Hangman />} />
        <Route path="/memorygame" element={<MemoryGame />} />
      </Routes>
      <ChatBot />
    </Router>
  );
}

export default App;