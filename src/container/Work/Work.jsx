import React from 'react';

import { AppWrapper, MotionWrapper } from '../../wrapper';
import './Work.scss';

const Work = () => {
  return (
    <>
      <div className="app__profiles app__flex">
        <h2 className="head-text">Here's some stuff I built recently:</h2>
        <article className="p-text app__profiles-article">My latest project is <a href="https://inkterest.netlify.app/" target="_blank" rel="noreferrer">Inkterest</a>, for all the tattoo enthusiasts.</article>
        <article className="p-text app__profiles-article">With some other Hypers I made a game, <a href="https://astro-cat.netlify.app/" target="_blank" rel="noreferrer">Astrocat</a> (I like space).</article>
        <article className="p-text app__profiles-article">
          <span className="wrapped-wrapper">We love music
              <img src="/wrapped.png" alt="spotify-wrapped-2021" className="hover-wrapped" />
          </span>
          , so we also made a <a href="https://github.com/JohanKlingstrom/Project2Quiz" target="_blank" rel="noreferrer">Spotify API Quiz</a>.</article>
          <p className="p-text">You can find some more stuff on my <a href="https://github.com/JohanKlingstrom" target="_blank" rel="noreferrer" >github</a>.</p>
      </div>
    </>
  )
}

export default AppWrapper(
  MotionWrapper(Work, 'app__work'), 
  'work',
  "app__primarybg"
);