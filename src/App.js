import React from 'react';

import { About, Footer, Header, Work, Work2, Work3 } from './container';
import { Navbar, ThreeCanvas } from './components';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <ThreeCanvas />
      <Header />
      <Work />
      <Work2 />
      <Work3 />
      <Footer />
    </div>
  );
}

export default App;