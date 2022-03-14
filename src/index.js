import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Services from './components/Services';
import Contact from './components/Contact';
import Horses from './components/Horses';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Upcoming from './components/Upcoming';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/horses" element={<Horses />} />
      <Route path="/upcoming" element={<Upcoming />}>
      </Route>
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();