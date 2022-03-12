import React from 'react';
import logo from '../images/sms_logo_long.png';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return(
    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a href="/">
      <img src={logo} width="500" height="250"/>
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item" href="/services">
        Services
      </a>

      <a class="navbar-item" href="/horses">
        Horses
      </a>

      <a class="navbar-item" href="/shows">
        Upcoming Shows
      </a>

      <a class="navbar-item" href="/contact">
        Contact Us
      </a>
    </div>

    <div class="navbar-end">
      
    </div>
  </div>
</nav>
  )
}

export default Navbar