import React from 'react';
import './App.css';

import Movies from './pages/Movies';
import Home from './pages/Home';
import Mvp from './pages/Mvp'
import Page404 from './pages/Page404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='projects' element={<Projects />} />
        <Route path='/project/movies' element={<Movies />} />
        <Route path='/project/MVP' element={<Mvp />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
