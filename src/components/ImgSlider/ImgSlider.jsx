import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

import './ImgSlider.scss';

const ImgSlider = ({ slides }) => {
const [currentImg, setCurrentImg] = useState(0);

const nextSlide = () => {
    setCurrentImg(currentImg === slides.length - 1 ? 0 : currentImg + 1)
};

const prevSlide = () => {
    setCurrentImg(currentImg === 0 ? slides.length -1 : currentImg - 1)
};

if(!Array.isArray(slides) || slides.length <= 0) {
    return null
}

  return (
    <section className="slider">
        <FaArrowAltCircleLeft className="icon left-arrow" onClick={prevSlide} />
        
            {slides.map((slide, index) => (
                <div className={index === currentImg ? 'slide-active' : 'slide'} key={index} >
                    {index === currentImg && (
                        <img src={slide.image} alt="project-image" className="slider-image" />
                    )}
                </div>
            ))}
        <FaArrowAltCircleRight className="icon right-arrow" onClick={nextSlide} />
        
    </section>
  )
}

export default ImgSlider;