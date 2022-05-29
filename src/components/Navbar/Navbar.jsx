import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { BsLinkedin, BsGithub, BsMailbox } from 'react-icons/bs';

import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href='#home'>Johan Klingström</a>
      </div>

      <ul className="app__navbar-links">
        <li className="app__flex p-text">
          <a href="https://github.com/JohanKlingstrom" target="_blank" rel="noreferrer">
            <BsGithub />
          </a>
        </li>
        <li className="app__flex p-text">
          <a href="https://www.linkedin.com/in/johan-klingstr%C3%B6m-19722321b/" target="_blank" rel="noreferrer">
            <BsLinkedin />
          </a>
        </li>
      </ul>
      {/* <ul className="app__navbar-links">
        {['home', 'about', 'work', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul> */}
      {/* <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />

          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {['home', 'about', 'work', 'contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)} >{item}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
      </div> */}
    </nav>
  )
}

export default Navbar