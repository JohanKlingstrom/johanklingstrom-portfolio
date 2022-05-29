import React from 'react';
import { motion } from 'framer-motion';
import { BsCaretDownFill } from 'react-icons/bs'

import { AppWrapper, MotionWrapper } from '../../wrapper';

import './Header.scss';

const rotatingText = ["Electronic Music Producer", "Video Game Nerd", "Ramen Enthusiast", "Friend of Cats", "DJ", "Hobby Philosopher"]

const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
        <div className="app__flex ">
          <p className="p-text">Hey there, traveler of the internet!</p>
          <h1 className="head-text">My name is Johan.</h1>
          <p className="p-text">I like making stuff.</p>
        </div>
        <span class="down-arrow">
          <a href="#about">
            <BsCaretDownFill className="arrow-white" />
          </a>
        </span>
    </div>
  )
}

export default AppWrapper(
  MotionWrapper(Header, 'app__header'), 
  'home',
  "app__primarybg"
);