import React from 'react';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom'



function Navbar(){
    return (
      <div className='nav-bar'>
         <ul className='links-container' >
          <li><Link className='nav-link' to='/'>Home</Link></li>
          <li><Link className='nav-link' to='/summary'>Summary</Link></li>
        </ul>
      </div>
    )
  }
  
export default Navbar;