import React from 'react';
import { motion } from 'framer-motion';

import { AppWrapper } from '../../wrapper';

import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello! My name is</p>
              <h1 className="head-text">Johan</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Web Dev Student</p>
            <p className="p-text">Electronic Musician</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default AppWrapper(Header, 'home');