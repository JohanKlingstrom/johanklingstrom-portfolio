import React from 'react';
import { BsCaretDownFill } from 'react-icons/bs'
import { motion } from 'framer-motion';

import { AppWrapper, MotionWrapper } from '../../wrapper';

import './Header.scss';

const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 1.2 }}
        style={{zIndex: 5}}
        viewport={{ once: true }} 
      >
        <div className="app__flex ">
        
          <div className="app__about">
          <div className="div-heading-flex">
            <h2 className="head-text">Hi there, internet person!</h2>
            <p className="p-text app__about-text-container">I'm a creative nerd and <a href="https://open.spotify.com/artist/3hXFd22CK7momnB40jiq9Z?si=gt6nKzGuQq-tWHLNGYlrpg" rel="noreferrer" target="_blank">music producer</a> from Stockholm, currently learning how to build cool web stuff at Hyper Island. Dreaming about cool ways to blend code, music and visuals.
              I used to work with ✨<a href="https://abiosgaming.com/about" rel="noreferrer" target="_blank">esports data</a>✨, have studied philosophy, and have had my music featured 
              on <a href="https://youtu.be/J5lWlsgKZYY" rel="noreferrer" target="_blank">Swedish national television</a>.
            </p>
            <p className="p-text">Scroll down to see some of my web-dev projects.</p>
          </div>
            
            <motion.img
              whileInView={{ opacity: [0, 0, 1] }}
              transition={{ duration: 1 }} 
              src="./pf.png" 
              alt="johan" 
              className="app__profiles-image"
              viewport={{ once: true }} 
              drag
              dragConstraints={{
                top: -50,
                left: -50,
                right: 50,
                bottom: 50,
              }} 
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default AppWrapper(
  MotionWrapper(Header, 'app__header'), 
  'home',
  "app__primarybg"
);