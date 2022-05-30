import React from 'react';
import { SliderData } from '../../components/ImgSlider/SliderData';

import { AppWrapper, MotionWrapper } from '../../wrapper';
import { ImgSlider } from '../../components';
import './Work.scss';

const Work = () => {
  return (
    <>
      <div className="app__profiles app__flex">
        <article className="app__profiles-article">
          <h2 className="head-text">
            <a href="https://inkterest.netlify.app/" target="_blank" rel="noreferrer">Inkterest</a>
          </h2>
            <ImgSlider slides={SliderData} />
              <p className="p-text article-column">
                Inkterest is a simple image sharing social platform themed for tattoo enthusiasts.
                I built the site to practice making a flexible UI, as well as handling both the front- and backend.
                Project was built with React, Sanity.io and TailwindCSS.
              </p>
              <div className="flex-row article-links">
                <a href="https://inkterest.netlify.app/" target="_blank" rel="noreferrer" className="p-text">Live</a>
                <a href="https://github.com/JohanKlingstrom/inkterest" target="_blank" rel="noreferrer" className="p-text">Github</a>
              </div>
        </article>
      </div>
    </>
  )
}

export default AppWrapper(
  MotionWrapper(Work, 'app__work'), 
  'work',
  "app__primarybg"
);