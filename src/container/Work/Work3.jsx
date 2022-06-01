import React from 'react';
import { SliderData } from '../../components/ImgSlider/DocLoungeSliderData';

import { AppWrapper, MotionWrapper } from '../../wrapper';
import { ImgSlider } from '../../components';
import './Work.scss';

const Work3 = () => {
  return (
    <>
      <div className="app__profiles app__flex">
        <article className="app__profiles-article">
          <h2 className="head-text">
            DocLounge Redesign
          </h2>
            <ImgSlider slides={SliderData} />
              <p className="p-text article-column">
                Together with a group of classmates I worked on a proposal for a full redesign for Nordic films distribution company, <a href="https.//doclounge.se" target="_blank" rel="noreferrer">DocLounge</a>.
                During the design processed we worked in an agile format, and factored in data from user interviews as well as trial runs with smaller-scale wireframe prototypes when making decisions.
                Main prototype was built with and presented in Figma.
              </p>
        </article>
      </div>
    </>
  )
}

export default AppWrapper(
  MotionWrapper(Work3, 'app__work'), 
  'work3',
  "app__primarybg"
);