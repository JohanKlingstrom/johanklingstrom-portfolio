import React from 'react';

import { About, Brag, Footer, Header, Work } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Brag />
      <Work />
      <Footer />
    </div>
  );
}

export default App;