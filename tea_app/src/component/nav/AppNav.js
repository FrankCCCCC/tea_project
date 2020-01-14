import React from 'react';
// import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import {website_name, about_page_name, shopping_page_name, post_page_name} from '../theme/text';
import {font_style} from '../theme/font'

import cart_icon from '../img/shopping_cart.svg';

function AppNav(){
    return (
        <div style={font_style}>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top" style={{backgroundColor: "rgba(255,255,255,0.5)"}}>
              <a class="navbar-brand" href="#"><strong>{website_name}</strong></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>  
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="#"><strong>{post_page_name}</strong></a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#"><strong>{shopping_page_name}</strong></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"><strong>{about_page_name}</strong></a>
                  </li>
                  {/* <li class="nav-item">
                    
                  </li> */}
                </ul>
                {/* <form class="form-inline my-2 my-lg-0">
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
                    <img src={cart_icon} style={{width: "1rem", height: "5%", color: "blue"}}></img>
                  </button>
                </form> */}
                {/* <a></a> */}
                  <a class="nav-link" href="#">
                    <img src={cart_icon} style={{width: "1.5rem", height: "1.5rem", color: ""}}></img>
                  </a>
              </div>
            </nav>
            {/* <Navbar bg="light" variant="light" expand="lg" background="red">
                <Navbar.Brand style={style}><strong>{website_name}</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home"><strong>最新消息</strong></Nav.Link>
                        <Nav.Link href="#link"><strong>買茶去</strong></Nav.Link>
                        <Nav.Link href="#about"><strong>關於我們</strong></Nav.Link>
                        <Nav.Link href="#cart"><strong>Cart</strong></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar> */}
        </div>
    );
}

export default AppNav;