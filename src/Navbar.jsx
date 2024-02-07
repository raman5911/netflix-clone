import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className='nav'>
        <img className='netflix_logo' src='./netflix-logo.png' />
        <img  className='guest_user' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Guest User" />
    </div>
  )
}

export default Navbar;