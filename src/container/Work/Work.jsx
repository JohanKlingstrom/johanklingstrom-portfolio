import React from 'react';

import { AppWrapper, MotionWrapper } from '../../wrapper';
import './Work.scss';

const Work = () => {
  return (
    <>
      <div className="app__profiles app__flex">
        <h2 className="head-text">Here's some stuff I've been building recently</h2>
        <article className="p-text"><a href="https://inkterest.netlify.app/" target="_blank" rel="noreferrer">- Inkterest</a>, an image sharing platform for tattoo enthusiasts.</article>
        <article className="p-text">- Astrocat, a vertical platformer game with a cat in space.</article>
      </div>
    </>
  )
}

export default AppWrapper(
  MotionWrapper(Work, 'app__work'), 
  'work',
  "app__primarybg"
);