import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrapper, MotionWrapper } from '../../wrapper';

import './About.scss';

const About = () => {
  return (
    <>
      <div className="app__profiles app__flex">
        <h2 className="head-text">Who am I?</h2>
        <p className="p-text badge-cmp">I used to work with <a href="https://abiosgaming.com/" rel="noreferrer" target="_blank">~esports data~</a> which was a dream because I've always loved video games.<br />
        Then covid happened and I took the time to get introspective and studied <a href="https://www.su.se/filosofiska-institutionen/" rel="noreferrer" target="_blank">philosophy at SU</a> for a bit.<br />
        Right now I'm learning how to build web stuff at<a target="_blank" href="https://www.hyperisland.com/"> Hyper Island!</a> in Stockholm.<br/>
        Oh and I've also made music that got featured on <a href="https://youtu.be/J5lWlsgKZYY" rel="noreferrer" target="_blank">Swedish national television</a>!<br />
        </p>
      </div>
    </>
  )
}

export default AppWrapper(
  MotionWrapper(About, 'app__about'), 
  'about'
);