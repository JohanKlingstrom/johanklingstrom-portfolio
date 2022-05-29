import React from 'react';

import { AppWrapper, MotionWrapper } from '../../wrapper';

import './About.scss';

const About = () => {
  return (
    <>
      <div className="app__about">
        <p className="p-text app__about-text-container">I'm a video game nerd from Stockholm that used to work with ✨<a href="https://abiosgaming.com/" rel="noreferrer" target="_blank">esports data</a>✨
          Now I'm learning how to build cool web stuff at Hyper Island in Stockholm.
          I'm super curious about using new tools in creative ways and seeing what happens.
          I've also had my music featured on <a href="https://youtu.be/J5lWlsgKZYY" rel="noreferrer" target="_blank">Swedish national television</a>.
        </p>
        <img src="./pf.png" alt="johan" className="app__profiles-image" />
      </div>
    </>
  )
}

export default AppWrapper(
  MotionWrapper(About, 'app__about'), 
  'about'
);