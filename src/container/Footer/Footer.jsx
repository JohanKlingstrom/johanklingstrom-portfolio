import React, { useState } from 'react';

import { AppWrapper, MotionWrapper } from '../../wrapper';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="app__footer app__flex">
      <h2 className="head-text">Reach me at:</h2>
        <p className="p-text">
          <a href="mailto:johan.klingstrom@hyperisland.se">johan.klingstrom@hyperisland.se</a><br />
          +46 72 937 4116
        </p>
    </div>
  )
}

export default AppWrapper(
  MotionWrapper(Footer, 'app__footer'),
  'contact'
);