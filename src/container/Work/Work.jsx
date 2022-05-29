import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrapper, MotionWrapper } from '../../wrapper';
import './Work.scss';

const Work = () => {
  return (
    <>
      <div className="app__profiles app__flex">
        <h2 className="head-text">Here's some stuff I've been building recently</h2>
        <p className="p-text">Inkterest</p>
      </div>
    </>
  )
}

export default AppWrapper(
  MotionWrapper(Work, 'app__work'), 
  'work',
  "app__primarybg"
);