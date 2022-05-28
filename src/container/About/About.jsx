import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrapper, MotionWrapper } from '../../wrapper';

import './About.scss';
import { images } from '../../constants';

const aboutContent = [
  { title: 'Web Development', description: 'I am a pro dev :)', imageUrl: images.about01 },
  { title: 'Music Production', description: 'I am a pro dev :)', imageUrl: images.about02 },
  { title: '3D-content', description: 'I am a pro dev :)', imageUrl: images.about03 },
  { title: 'Game Development', description: 'I am a pro dev :)', imageUrl: images.about04 },
];

const About = () => {
  return (
    <>
      <div className="app__profiles">
        Who am I?
      </div>
    </>
  )
}

export default AppWrapper(
  MotionWrapper(About, 'app__about'), 
  'about',
  "app__whitebg"
);