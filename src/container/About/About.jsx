import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrapper, MotionWrapper } from '../../wrapper';

import './About.scss';

const About = () => {
  return (
    <>
      <div className="app__profiles">
        <p className="p-text">Who am I?</p>
      </div>
    </>
  )
}

export default AppWrapper(
  MotionWrapper(About, 'app__about'), 
  'about'
);