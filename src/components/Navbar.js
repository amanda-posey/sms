import React from 'react';
import logo from '../images/sms_logo_long.png';
import textLogo from '../images/logo_text_only.png';
import '../jumbotron.css';

const Navbar = () => {
  return(
    <header>
  <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand mb-0 h1" href="/">
      Silver Mist Stables
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarExample01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <a class="nav-link" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/services">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/horses">Horses</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">Contact</a>
          </li>
        </ul>
        <span class="navbar-text">
        <strong>Call</strong> (304) 288-9988
      </span>
      </div>
    </div>
  </nav>

  <div
    class="p-5 text-center bg-image"
  >
    
      <div class="d-flex justify-content-start align-items-center h-75">
        <div class="text-white">
          <h1 class="mb-3 cover-1">Riding Academy</h1>
          <h1 class="mb-3 cover-1">Schooling shows</h1>
          <h1 class="mb-3 cover-1">Boarding</h1>
      </div>
    </div>
    <div class="d-flex justify-content-center align-self-end h-75">
      <div class="text-white">
      <h4 class="mb-3 cover-3">Jane Lew, West Virginia</h4> 
      </div>

    </div>
  </div>
</header>
  )
}

export default Navbar