import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './About.scss';
import { images } from '../../constants';

const aboutContent = [
  { title: 'Web Development', description: 'I am a pro dev :)', imageUrl: images.about01 },
  { title: 'Music Production', description: 'I am a pro dev :)', imageUrl: images.about02 },
  { title: '3D-content', description: 'I am a pro dev :)', imageUrl: images.about03 },
  { title: 'Game Development', description: 'I am a pro dev :)', imageUrl: images.about04 },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">I Know That <span>Good Code</span> <br />means <span>Good Business</span></h2>
      <div className="app__profiles">
        {aboutContent.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imageUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About;