import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrapper, MotionWrapper } from '../../wrapper';
import './Work.scss';

const Work = () => {
  return (
    <>
      <div className="app__profiles">
        <p className="p-text">Here's some stuff I've made recently</p>
      </div>
    </>
  )
}

export default AppWrapper(
  MotionWrapper(Work, 'app__work'), 
  'work',
  "app__primarybg"
);