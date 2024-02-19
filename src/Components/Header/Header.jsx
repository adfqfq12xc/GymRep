import React, { useState } from 'react';
import "./Header.css";
import Logo from "../../assets/logo.png";
import { Link } from 'react-scroll';

export default function Header() {
  const [menuopened, setMenuopened] = useState(false);

  return (
    <div className='header'>
      <img src={Logo} alt="" className='logo' />  
      <ul className='headermenu'>
        <li><Link to="home" spy={true} smooth={true} duration={500}>Home</Link></li>
        <li><Link to="programs" spy={true} smooth={true} duration={500}>Programs</Link></li>
        <li><Link to="why-us" spy={true} smooth={true} duration={500}>Why us</Link></li>
        <li><Link to="plans" spy={true} smooth={true} duration={500}>Plans</Link></li>
        <li><Link to="testimonials" spy={true} smooth={true} duration={500}>Testimonials</Link></li>
      </ul>
    </div>
  );
}
