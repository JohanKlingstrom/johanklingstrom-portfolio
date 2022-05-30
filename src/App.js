import React from 'react';

import { About, Footer, Header, Work, Work2 } from './container';
import { Navbar, ThreeCanvas } from './components';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <ThreeCanvas />
      <Header />
      {/* <About /> */}
      <Work />
      <Work2 />
      <Footer />
    </div>
  );
}

export default App;