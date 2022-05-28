import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrapper, MotionWrapper } from '../../wrapper';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="app__footer app__flex">
      <h1>Let's build some stuff!</h1>
        <p>
          johan.klingstrom@hyperisland.se<br />
          +46 72 937 4116
        </p>
    </div>
  )
}

export default AppWrapper(
  MotionWrapper(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);