import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import {Switch} from 'react-router-dom'
// import leafhopper_logo from './component/img/leafhopper_logo.png';
import AppNav from './component/nav/AppNav'
import HomePage from './component/pages/HomePage'
import FarmerPage from './component/pages/FarmerPage'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
            <Route path="/cart" exact component={FarmerPage}/>
            <Route path="/post" exact component={FarmerPage}/>
          </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
