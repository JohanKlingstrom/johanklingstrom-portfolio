import React from 'react';
import { BsLinkedin, BsGithub, BsMailbox } from 'react-icons/bs';

const Socials = () => {
  return (
    <div className="app__social">
        <div>
            <BsLinkedin />
        </div>
        <div>
            <BsGithub />
        </div>
        <div>
            <BsMailbox />
        </div>
    </div>
  )
}

export default Socials;