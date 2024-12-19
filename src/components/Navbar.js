import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../images/logo1.jpg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbarMain ${isOpen ? 'open' : ''}`}>
      <div className="navbar">
        <div className="logomain">
          <Link to="/">
          <img className="logo" src={logo} alt="Physio Works Logo" />
          </Link> 
          <p>Great Indian Physiotherapist</p>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
        <ul className="ulList">
          <li className='navlist' ><Link to="/" className='activelist'>Home</Link></li> 
          <li className='navlist'>Online Yoga</li>
          <li className='navlist'>
            <Link to='/services' className='activelist'>Services</Link>
          </li>
          <li className='navlist'>Healing Stories</li>
          <li className='navlist'><Link to="/sign-in" className='activelist'>SignIn</Link></li>
          <li>
            <Link className='adjust' to="/book-appointment">
              <button className="btn22">Book an Appointment</button>
            </Link> 
          </li>
        </ul>
      </div>
    </nav>
  );
}
