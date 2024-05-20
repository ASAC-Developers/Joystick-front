import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/mainComponent/header/Header';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import FavGames from './components/pages/favGames/FavGames';
import Footer from './components/mainComponent/footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favGames" element={<FavGames />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
