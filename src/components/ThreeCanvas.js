import { useSpring, a } from '@react-spring/three';

import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { TextureLoader } from 'three';
import { BufferAttribute } from 'three';

function BufferPoints({ count = 1000 }) {
  const points = useMemo(() => {
    const p = new Array(count).fill(0).map((v) => (0.5 - Math.random()) * 30);
    return new BufferAttribute(new Float32Array(p), 3);
  }, [count]);

  const pointsRef = useRef();
  useFrame(() => (pointsRef.current.rotation.x = pointsRef.current.rotation.y += 0.001));

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach={"attributes-position"} {...points} />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        threshold={0.1}
        color={0xffffff}
        sizeAttenuation={true}
      />
    </points>
  );
}

const SpinningMesh = ({position, args, color}) => {
    const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, [
        'Rock031_1K_Color.jpg',
        'Rock031_1K_Displacement.jpg',
        'Rock031_1K_NormalDX.jpg',
        'Rock031_1K_Roughness.jpg',
        'Rock031_1K_AmbientOcclusion.jpg',
      ])

  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.0002));
  useFrame(() => (mesh.current.rotation.y = mesh.current.rotation.y -= 0.003));
  useFrame(() => (mesh.current.material.displacementScale = .5 -mouseY * -0.004));
  

  const [expand, setExpand] = useState(false);

  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1 ,1],
  });

  useEffect(() => {
    window.addEventListener('mousemove', onDocumentMouseMove);
    return () => window.removeEventListener('mousemove', onDocumentMouseMove);
  });

    const windowHalfX = window.innerWidth /2;
    const windowHalfY = window.innerHeight /2;
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

  function onDocumentMouseMove(e){
    mouseX = (e.clientX - windowHalfX)
    mouseY = (e.clientY - windowHalfY)
}

  var mouse_monitor = function(e) {
    var x = e.pageX;
    var y = e.pageY;
    console.log(x, y);
  }
  
  window.onload = function() {
    this.addEventListener('mousemove', mouse_monitor);
  }

  return(
        <a.mesh onClick={() => setExpand(!expand)} scale={props.scale} position={position} ref={mesh}>
          {/* <boxBufferGeometry attach='geometry' args={args} /> */}
          {/* <torusKnotBufferGeometry attach='geometry' args={args} /> */}
          <sphereBufferGeometry attach='geometry' args={args} />
          <meshStandardMaterial attach='material' 
            displacementScale={-1}
            color={color}
            map={colorMap}
            displacementMap={displacementMap}
            normalMap={normalMap}
            roughnessMap={roughnessMap}
            aoMap={aoMap}
            />
        </a.mesh>
  )
}

export default function ThreeCanvas() {
    return (
        <Canvas colorManagement camera={{position: [-5, 2, 10], fov: 60}} style={{height: "100vh", position: "fixed", zIndex: 1}} >
            <BufferPoints />
            <ambientLight intensity={.15} color={"#071332"}/>
            <directionalLight position={[-120, 50, 10]}
                intensity={1}
                color={"#fff"}
                // shadow-mapSize-width={1024}
                // shadow-mapSize-height={1024}
                // shadow-camera-far={50}
                // shadow-camera-left={-10}
                // shadow-camera-right={10}
                // shadow-camera-top={10}
                // shadow-camera-bottom={-10}
            />
            <pointLight position={[10, 10, -15]} intensity={12} color={"#071332"} />
            {/* <pointLight position={[0, -10, 0]} intensity={1.5} /> */}

            {/* <group>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]} >
                <planeBufferGeometry attach='geometry' args={[100, 100]} />
            </mesh>
            </group> */}
            <SpinningMesh position={[0, 0, 0]} args={[4.5, 64, 64]} /> (.8, 64, 64)
            {/* <SpinningMesh position={[0, 0, 0]} args={[3, 1, 44, 12, 8, 11]} color='lightblue' /> torusknot */}
            {/* <SpinningMesh position={[-2, 1, -5]} args={[2, 0.2, 44, 12, 8, 11]} color="pink" /> */}
            {/* <SpinningMesh position={[5, 1, -2]} color="pink" /> */}
        </Canvas>
    )
}