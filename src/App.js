import React from 'react';
import './App.css';

import Movies from './pages/Movies';
import Home from './pages/Home';
import Mvp from './pages/Mvp'
import Page404 from './pages/Page404';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='h-screen bg-slate-300'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='projects' element={<Projects />} />
          <Route path='/project/movies' element={<Movies />} />
          <Route path='/project/MVP' element={<Mvp />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
        <Link to='/'>Return to the home page</Link>
      </div>
    </BrowserRouter>
  );
}

export default App;
