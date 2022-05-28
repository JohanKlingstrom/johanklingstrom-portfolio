import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrapper } from '../../wrapper';
import './Work.scss';
import { images } from '../../constants';

const portfolioItems = [
  { title: 'Inkterest', description: 'An image sharing web app for tattoo enthusiasts', imageUrl: images.about01, hostedAt: 'https://inkterest.netlify.app/', githubLink: 'https://github.com/JohanKlingstrom/inkterest' },
  { title: 'Astrocat', description: 'A vertical platformer survival game with cats in space', imageUrl: images.about02, hostedAt: 'https://google.com', githubLink: 'https://github.com/JohanKlingstrom/Astrocat' },
  { title: 'JK Portfolio 2022', description: 'My portfolio, that you are on right now!', imageUrl: images.about03, hostedAt: 'https://youtube.com', githubLink: 'https://github.com/JohanKlingstrom/johanklingstrom-portfolio' },
];

const Work = () => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  return (
    <>
      <h2 className="head-text">Some of my recent <span>Projects</span></h2>
    </>
  )
}

export default AppWrapper(Work, 'work');