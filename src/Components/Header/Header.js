import React from 'react'
import './header.css';
function Header(props) {
  return (
 
      <div id='header-background'>
        <div id='header-frame'>
          
              <h1>{props.userData.heading}
              <p id='header-title'>{props.userData.content}</p>
              </h1>
              
            <div id='circle-4'></div>
            <div id='circle-5'></div>
            </div>
            
              
        </div>
    
  )
}

export default Header