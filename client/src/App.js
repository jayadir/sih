import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Profile from "./components/Profile";
import Landingpage from "./components/Landingpage";
import BlogPage from "./components/Blogs/BlogPage";
import MemoryPokerGame from "./components/memoryGame/MemoryPokerGame";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landingpage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/memory-game" element={<MemoryPokerGame />} />
      </Routes>
    </Router>
  );
}

export default App;