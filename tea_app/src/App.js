import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import {Switch} from 'react-router-dom'
// import leafhopper_logo from './component/img/leafhopper_logo.png';
// import './App.css'
import AppNav from './component/nav/AppNav'
import HomePage from './component/pages/HomePage'
import FarmerPage from './component/pages/FarmerPage'
import CartPage from './component/pages/CartPage'
import Test from './test'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
// import "shards-ui/dist/css/shards.min.css"


import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './component/footer/Footer';

function App() {
  AOS.init({
    duration: 2000,
  });
  
  return (
    <div className="App">
      <Router>
          <AppNav/>          
          <Switch>
            <Route path="/home" exact component={HomePage}/>
            <Route path="/about" exact component={FarmerPage}/>
            <Route path="/shopping" exact component={FarmerPage}/>
            <Route path="/cart" exact component={CartPage}/>
            <Route path="/post" exact component={FarmerPage}/>
            <Route component={HomePage}/>
          </Switch>
          {/* <Test/> */}
          <Footer/>
      </Router>
      
      
    </div>
  );
}

export default App;
