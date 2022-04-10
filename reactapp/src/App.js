import './App.css';
import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Contact from './pages/Contact';
import Connection from './pages/Connection';
import Error404 from './pages/Titre404';
import Footer from './components/footer/Footer';


function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/contact" component={Contact} />
        <Route path="/connection" component={Connection} />
        <Route component={Error404} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

