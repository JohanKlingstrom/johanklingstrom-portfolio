import React from 'react';

import { AppWrapper, MotionWrapper } from '../../wrapper';
import './Work.scss';

const Work = () => {
  return (
    <>
      <div className="app__profiles app__flex">
        <h2 className="p-text">Since last August I've been trying to build stuff with code</h2>
        <article className="p-text">I recently built <a href="https://inkterest.netlify.app/" target="_blank" rel="noreferrer">image sharing platform</a> for tattoo enthusiasts.</article>
        <article className="p-text">I made a <a href="https://github.com/JohanKlingstrom/Project2Quiz" target="_blank" rel="noreferrer">music quiz using the Spotify API</a> with some other Hypers.</article>
        <article className="p-text">Then we made <a href="https://github.com/JohanKlingstrom/Astrocat" target="_blank" rel="noreferrer">a little game with cats in space</a> (I like space).</article>
      </div>
    </>
  )
}

export default AppWrapper(
  MotionWrapper(Work, 'app__work'), 
  'work',
  "app__primarybg"
);