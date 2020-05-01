import React from 'react';
import {Link} from 'react-router-dom'
import "../Style/Navigation.scss"

// using react router to setup SPA with multiple links 

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
