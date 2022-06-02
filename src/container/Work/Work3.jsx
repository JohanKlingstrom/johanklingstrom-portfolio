import React from 'react';

import { AppWrapper, MotionWrapper } from '../../wrapper';
import './Work.scss';

const Work3 = () => {
  return (
    <>
      <div className="app__profiles app__flex">
        <article className="app__profiles-article">
          <h2 className="head-text">
            DocLounge Redesign
          </h2>
          <video width="750" height="500" controls autoPlay muted >
            <source src="/videos/dlvid.mp4" type="video/mp4" className="app__profiles-video" />
          </video>
              <p className="p-text article-column">
                Together with a group of classmates I worked on a proposal for a full redesign for Nordic films distribution company, <a href="https.//doclounge.se" target="_blank" rel="noreferrer">DocLounge</a>.
                During the design processed we worked in an agile format, and factored in data from user interviews as well as trial runs with smaller-scale wireframe prototypes when making decisions.
                Main prototype was built with and presented in Figma.
              </p>
              <div className="flex-row article-links">
                <a href={"https://www.figma.com/proto/3OGjsblPAipdEqK40UovFg/DocLounge-B2B-wireframing-and-prototyping?page-id=0%3A1&node-id=113%3A113&viewport=-55%2C-455%2C0.09&scaling=scale-down&starting-point-node-id=113%3A113&show-proto-sidebar=1"} target="_blank" rel="noreferrer" className="p-text">Figma Prototype</a>
              </div>
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