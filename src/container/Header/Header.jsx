import React from 'react';
import { BsCaretDownFill } from 'react-icons/bs'

import { AppWrapper, MotionWrapper } from '../../wrapper';

import './Header.scss';

const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
        <div className="app__flex ">
          <p className="p-text">Hi there, internet person!</p>
          <h1 className="head-text">My name is Johan.</h1>
          <p className="p-text">I like making things.</p>
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