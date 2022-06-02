import React from 'react';
import { BsGithub } from 'react-icons/bs';

import './Navbar.scss';

const Navbar = () => {

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href='#home'>Johan Klingström</a>
      </div>
      <a href="https://github.com/JohanKlingstrom" className="app__navbar-github" target="_blank" rel="noreferrer">
          <BsGithub />
      </a>
    </nav>
  )
}

export default Navbar