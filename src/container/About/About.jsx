import React from 'react';
import { motion } from 'framer-motion';

import { AppWrapper, MotionWrapper } from '../../wrapper';

import './About.scss';

const About = () => {
  return (
    <>
      <div className="app__about">
        <p className="p-text app__about-text-container">I'm a video game nerd from Stockholm who is learning how to build cool web stuff at Hyper Island. <br />
          that used to work with ✨<a href="https://abiosgaming.com/about" rel="noreferrer" target="_blank">esports data</a>✨
          and now I'm 
          I'm super curious about using new tools in creative ways and seeing what happens.
          I've also had my music featured on <a href="https://youtu.be/J5lWlsgKZYY" rel="noreferrer" target="_blank">Swedish national television</a>.
        </p>
        <motion.img 
          src="./pf.png" 
          alt="johan" 
          className="app__profiles-image" 
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }} 
        />
      </div>
    </>
  )
}

export default AppWrapper(
  MotionWrapper(About, 'app__about'), 
  'about'
);