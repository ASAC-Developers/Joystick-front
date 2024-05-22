import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/mainComponent/header/Header';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import FavGames from './components/pages/favGames/FavGames';
import Footer from './components/mainComponent/footer/Footer';
import SingleGame from './components/mainComponent/singleGame/SingleGame';
import NotFound from './components/pages/notFound/NotFound'; // Import the NotFound component
import ThemeProvider from './components/theme/ThemeContext';
import ThemeToggle from './components/theme/ThemeToggle';


function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favGames" element={<FavGames />} />
          <Route path="/about" element={<About />} />
          <Route path="/singlegame/:id" element={<SingleGame />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
