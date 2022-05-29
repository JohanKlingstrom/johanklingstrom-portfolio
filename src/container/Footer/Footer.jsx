import React, { useState } from 'react';

import { AppWrapper, MotionWrapper } from '../../wrapper';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="app__footer app__flex">
      <h2 className="p-text">Let's build more cool stuff!</h2>
        <p className="p-text">
          johan.klingstrom@hyperisland.se<br />
          +46 72 937 4116
        </p>
    </div>
  )
}

export default AppWrapper(
  MotionWrapper(Footer, 'app__footer'),
  'contact'
);