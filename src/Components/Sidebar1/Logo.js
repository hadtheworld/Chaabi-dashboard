import React from 'react'
import logo from './../../Images/logo.png';
function Logo() {
  return (
    <div id='main-logo'>
      <div id='logo'>
        <img src={logo} alt='logo' id='logo-img'/>
        
      </div>
      <div id='seperator'></div>
    </div>
  )
}

export default Logo