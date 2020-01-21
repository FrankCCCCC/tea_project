import React from 'react';
import {Link} from 'react-router-dom';
import {website_name, about_page_name, shopping_page_name, post_page_name} from '../theme/text';
import {font_style} from '../theme/font';
import leafhopper_logo from '../img/leafhopper_logo.png';

import cart_icon from '../img/shopping_cart.svg';

function AppNav(){
    return (
        <div style={font_style}>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top" style={{backgroundColor: "rgba(255,255,255,0.5)"}}>
              <a class="navbar-brand" href="/"><img src={leafhopper_logo} style={{width:"2rem"}}></img></a>
              <a class="navbar-brand" href="/"><strong>{website_name}</strong></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>  
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    {/* <a class="nav-link" href="/post"><strong>{post_page_name}</strong></a> */}
                    <Link class="nav-link" to="/post"><strong>{post_page_name}</strong></Link>
                  </li>
                  <li class="nav-item">
                      {/* <a class="nav-link" href="/shopping"><strong>{shopping_page_name}</strong></a> */}
                      <Link class="nav-link" to="/shopping"><strong>{shopping_page_name}</strong></Link>
                  </li>
                  <li class="nav-item">
                  {/* <a class="nav-link" href="/about"><strong>{about_page_name}</strong></a> */}
                    <Link class="nav-link" to="/about"><strong>{about_page_name}</strong></Link>
                  </li>
                </ul>
                  {/* <a class="nav-link" href="/cart"> */}
                  <Link class="nav-link" to="/cart">
                    <img src={cart_icon} style={{width: "1.5rem", height: "1.5rem", color: ""}}></img>
                  </Link>
                  {/* </a> */}
              </div>
            </nav>
        </div>
    );
}

export default AppNav;