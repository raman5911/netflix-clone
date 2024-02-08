import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router';

function Navbar() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 90) {
                handleShow(true);
            }
            else {
                handleShow(false);
            }
        })
    }, []);

    // const navigate = useNavigate();

  return (
    <div className={`nav ${show && 'nav_black'}`}>
        <img className='netflix_logo' src='./netflix-logo.png' onClick={() => { window.location = '/' }} />
        <img  className='guest_user' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Guest User" />
    </div>
  )
}

export default Navbar;