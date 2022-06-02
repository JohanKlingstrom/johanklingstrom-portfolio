import React from 'react';
import { SliderData } from '../../components/ImgSlider/AstrocatSliderData';

import { AppWrapper, MotionWrapper } from '../../wrapper';
import { ImgSlider } from '../../components';
import './Work.scss';

const Work2 = () => {
  return (
    <>
      <div className="app__profiles app__flex">
        <article className="app__profiles-article">
          <h2 className="head-text">
            <a href="https://astro-cat.netlify.app/" target="_blank" rel="noreferrer">Astrocat</a>
          </h2>
            <ImgSlider slides={SliderData} />
              <p className="p-text article-column">
                Astrocat was built together with two other Hyper Island students fairly early on in our program. 
                We wanted to build a simple but fun little project with addicting arcade-y gameplay, so we chose to create a vertical platformer with procedurally generated obstacles. Built in Phaser, a lightweight game engine written in JavaScript.
              </p>
              <div className="flex-row article-links">
                <a href="https://astro-cat.netlify.app/" target="_blank" rel="noreferrer" className="p-text">Live</a>
                <a href="https://github.com/JohanKlingstrom/Astrocat" target="_blank" rel="noreferrer" className="p-text">Github</a>
              </div>
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