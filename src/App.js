import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Button from './components/Button';
import './App.css';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import SignUp from './pages/SignUp';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element= {<Home/>} />
      <Route path="/Products" element= {<Products/>} />
      <Route path="/Services" element= {<Services/>} />
      <Route path="/Sign-up" element= {<SignUp/>} />

    </Routes>
    </>
  );
}

export default App;