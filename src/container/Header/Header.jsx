import React from 'react';
import { motion } from 'framer-motion';

import { AppWrapper, MotionWrapper } from '../../wrapper';

import './Header.scss';

const rotatingText = ["Electronic Music Producer", "Video Game Nerd", "Ramen Enthusiast", "Friend of Cats", "DJ", "Hobby Philosopher"]

const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
        <div className="app__flex">
          <p className="p-text">Hello! My name is</p>
          <h1 className="head-text">Johan</h1>
          <p className="p-text">I'm a front end developer student at<a target="_blank" href="https://www.hyperisland.com/"> Hyper Island!</a></p>
          <p className="p-text">I'm also a <span>placeholder</span></p>
        </div>
    </div>
  )
}

export default AppWrapper(
  MotionWrapper(Header, 'app__header'), 
  'home',
  "app__primarybg"
);