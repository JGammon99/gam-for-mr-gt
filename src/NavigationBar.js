// NavigationBar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar() {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link
            to="/"
            className={activeLink === '/' ? 'active-link' : ''}
            onClick={() => handleLinkClick('/')}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={activeLink === '/about' ? 'active-link' : ''}
            onClick={() => handleLinkClick('/about')}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/video"
            className={activeLink === '/video' ? 'active-link' : ''}
            onClick={() => handleLinkClick('/video')}
          >
            Video
          </Link>
        </li>
        <li>
          <Link
            to="/donate"
            className={activeLink === '/donate' ? 'active-link' : ''}
            onClick={() => handleLinkClick('/donate')}
          >
            Give
          </Link>
        </li>
        <li>
          <Link
            to="/missions"
            className={activeLink === '/missions' ? 'active-link' : ''}
            onClick={() => handleLinkClick('/missions')}
          >
            Missions
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={activeLink === '/contact' ? 'active-link' : ''}
            onClick={() => handleLinkClick('/contact')}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
