import React, { useState } from 'react'
import '../App.css';
import Icon from '../assets/images/launchpad.png';

const Header = () => {

    
  return (
    <div className="header">
        <div className="logo-details">
            <i className='bx bx-menu'></i>
            <img style={{width: '100%', zindex: 2,}} src={Icon} alt=""/>
        </div>
        <a href="#"><button id="myBtn">Connect</button></a>
        {/* <div class="home-content"> 
         
    <i class='bx bx-menu' style="z-index: -2;" onclick="changeIcon(this)"></i> 
    <img src="img/digi.svg " alt=""/>
    
        </div>  */}
    </div>
  )
}

export default Header