import React from "react";
import './App.css';
import About from './components/About';
import Takemichi from './components/Takemichi';
import Navbar from "./components/Navbar";
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/" element={<Takemichi />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
