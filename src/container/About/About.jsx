import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrapper, MotionWrapper } from '../../wrapper';

import './About.scss';

const About = () => {
  return (
    <>
      <div className="app__profiles app__flex">
        <h2 className="head-text">Who am I?</h2>
        <p className="p-text app__about-text-container">I'm a video game nerd from Stockholm that used to work with ✨<a href="https://abiosgaming.com/" rel="noreferrer" target="_blank">esports data</a>✨
        Now I'm learning how to build cool web stuff at Hyper Island in Stockholm, and I'm trying to figure out 3D.
        I'm super curious about using new tools in creative ways to see what happens
        Oh and I've also made music that got featured on <a href="https://youtu.be/J5lWlsgKZYY" rel="noreferrer" target="_blank">Swedish national television</a>!
        </p>
      </div>
    </>
  )
}

export default AppWrapper(
  MotionWrapper(About, 'app__about'), 
  'about'
);