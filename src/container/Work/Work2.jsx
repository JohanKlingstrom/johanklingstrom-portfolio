import React from 'react';

import { AppWrapper, MotionWrapper } from '../../wrapper';
import './Work.scss';

const Work2 = () => {
  return (
    <>
      <div className="app__profiles app__flex">
        <article className="app__profiles-article">
          <h2 className="head-text">
            <a href="https://inkterest.netlify.app/" target="_blank" rel="noreferrer">Astrocat</a>
            <p className="p-text">With some other Hypers I made a game featuring a cat in space (I like space).</p>
          </h2>
        </article>
      </div>
    </>
  )
}

export default AppWrapper(
  MotionWrapper(Work2, 'app__work'), 
  'work2',
  "app__primarybg"
);