import { useState, useEffect, useRef, memo } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas, useFrame, useLoader, useGraph } from '@react-three/fiber';


export const Model = memo(function Model() {
  // const meshRef = useRef<any>(null);
  // const gltf = useLoader(GLTFLoader, "/GLTF/instance.gltf");

  // useFrame(() => {
  //   meshRef.current.rotation.y += 0.01
  // })
  return (
    <mesh
      // ref={meshRef}
      // onPointerOver={(event) => setHover(true)}
      // onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry />
      <meshStandardMaterial color="yellow" />
    </mesh>
  )
})

export const Scene = memo(function Scene() {
  return (
    <Canvas>
      {/* <ambientLight intensity={0.1} /> */}
      <directionalLight color="white" position={[1, 3, 5]} />
      <pointLight position={[10, 10, 10]} />
      <Model />
    </Canvas>
    
  )
})
