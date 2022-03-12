import React from 'react';
import { render } from 'react-dom';
import logo from '../images/sms_logo_long.png';
import textLogo from '../images/logo_text_only.png';

const Footer = () => {
    return (
    <footer>
        <div class="columns is-mobile is-centered">
  <div class="column">
  <figure class="has-text-centered">
  <img src={textLogo} alt="logo" height="120px" width="360px"/>
</figure>
  </div>
  </div>
  <div class="columns is-mobile is-centered">
  <div class="column is-half">
    <h3 class="bd-notification is-primary has-text-centered is-underlined">
      Find Us
    </h3>
    <p class="has-text-centered">
        Address here<br/>
        Jane Lew, WV
    </p>
  </div>
  <div class="column is-half">
    <h3 class="bd-notification is-primary has-text-centered is-underlined">
      Follow Us
    </h3>
    <p class="has-text-centered">
        Facebook link goes here.
    </p>
  </div>
</div>
    </footer>
    )}

export default Footer