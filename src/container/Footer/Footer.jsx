import React from 'react';

import { AppWrapper, MotionWrapper } from '../../wrapper';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="app__footer app__flex">
      <p className="p-text">Need a cool shiny new intern?</p>
        <h2 className="head-text">
          <a href="mailto:johan.klingstrom@hyperisland.se">johan.klingstrom@hyperisland.se</a>
        </h2>
        <p className="p-text">Let's have a coffee.</p>
        
        
    </div>
  )
}

export default AppWrapper(
  MotionWrapper(Footer, 'app__footer'),
  'contact'
);