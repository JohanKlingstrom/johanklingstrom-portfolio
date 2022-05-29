import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import React, { useEffect, useMemo, useRef } from 'react';
import { TextureLoader, BufferAttribute } from 'three';

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

  useEffect(() => {
    window.addEventListener('mousemove', onDocumentMouseMove);
    return () => window.removeEventListener('mousemove', onDocumentMouseMove);
  });

    const windowHalfX = window.innerWidth /2;
    const windowHalfY = window.innerHeight /2;
    let mouseX = 0
    let mouseY = 0

  function onDocumentMouseMove(e){
    mouseX = (e.clientX - windowHalfX)
    mouseY = (e.clientY - windowHalfY)
}

  var mouse_monitor = function(e) {
    var x = e.pageX;
    var y = e.pageY;
  }
  
  window.onload = function() {
    this.addEventListener('mousemove', mouse_monitor);
  }

  return(
        <mesh position={position} ref={mesh}>
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
        </mesh>
  )
}

export default function ThreeCanvas() {
    return (
        <Canvas colorManagement camera={{position: [-5, 2, 10], fov: 60}} style={{height: "100vh", position: "fixed", zIndex: 1}} >
            <BufferPoints />
            <ambientLight intensity={.15} color={"#071332"}/>
            <directionalLight position={[-120, 50, 10]}
                intensity={0.8}
                color={"#fff"}
            />
            <pointLight position={[10, 10, -15]} intensity={15} color={"#071332"} />
            <pointLight position={[0, -10, 0]} intensity={.05} />
            <SpinningMesh position={[0, 0, 0]} args={[4.5, 64, 64]} /> (.8, 64, 64)
        </Canvas>
    )
}