import React from 'react';
import {Link} from 'react-router-dom'
import "../style/Navigation.scss"

// using react router to setup multiple links for our SPA


function Navbar(){
    return (
      <div id='nav-bar'>
         <ul id='links-nav-ul' >
          <li><Link className='nav-link-li' to='/'>Home</Link></li>
          <li><Link className='nav-link-li' to='/summary'>Summary</Link></li>
        </ul>
      </div>
    )
  }
  
export default Navbar;
