import React from 'react';

import { About, Footer, Header, Work } from './container';
import { Navbar, ThreeCanvas } from './components';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <ThreeCanvas />
      <Header />
      <About />
      <Work />
      <Footer />
    </div>
  );
}

export default App;