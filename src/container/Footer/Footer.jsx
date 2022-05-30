import React from 'react';

import { AppWrapper, MotionWrapper } from '../../wrapper';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="app__footer app__flex">
      <h2 className="head-text">Let's build something!</h2>
        <p className="p-text">
          <a href="mailto:johan.klingstrom@hyperisland.se">johan.klingstrom@hyperisland.se</a><br />
          Stockholm, Sweden
        </p>
    </div>
  )
}

export default AppWrapper(
  MotionWrapper(Footer, 'app__footer'),
  'contact'
);