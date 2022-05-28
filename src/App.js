import React, { Suspense } from 'react';

import { About, Footer, Header, Work } from './container';
import { Navbar, AnimatedSphere } from './components';
import './App.scss';

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Canvas clasName="canvas" style={{height: "100vh", position: "fixed", zIndex: 1}}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <AnimatedSphere />
        </Suspense>
      </Canvas>
      <Header />
      <About />
      <Work />
      <Footer />
    </div>
  );
}

export default App;