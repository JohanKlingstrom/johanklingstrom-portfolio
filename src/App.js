import React, { useState, useEffect } from 'react';
import { CircleLoader } from 'react-spinners';

import { Footer, Header, Work, Work2, Work3 } from './container';
import { Navbar, ThreeCanvas } from './components';
import './App.scss';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const assets = [
      '../src/assets/inkterest/inkterest1.png',
      '../src/assets/inkterest/inkterest2.png',
      '../src/assets/inkterest/inkterest3.png',
      '../src/assets/astrocat/astrocat1.png',
      '../src/assets/astrocat/astrocat2.png',
      '../src/assets/astrocat/astrocat3.png',
    ];

    cacheAssets(assets);
  }, []);

  const cacheAssets = async (srcArray) => {
    const promises = await srcArray.map((src) => {
      return new Promise(function (resolve, reject) {
        const img = new Image();

        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });

    await Promise.all(promises);

    setIsLoading(false);
  }

  return (
    <div className="app">
      {isLoading
      ?
      <div className="spinner-div" >
        <CircleLoader />
      </div>
      :
      <main>
        <Navbar />
        <ThreeCanvas />
        <Header />
        <Work />
        <Work2 />
        <Work3 />
        <Footer />
      </main>
      }
    </div>
  );
}

export default App;