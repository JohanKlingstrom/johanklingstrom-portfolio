import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "contact"].map((item, index) => (
          <a 
            href={`#${item}`}
            className="app__navigation-dot"
            style={active === item ? {backgroundColor: '#313BAC'} : { }}
            alt="navigation dot"
            />
      ))}
    </div>
  );
};

export default NavigationDots;
