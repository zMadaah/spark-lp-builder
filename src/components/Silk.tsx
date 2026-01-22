import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const SilkMesh = ({ speed = 0.5, color = "#333038" }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  // Criamos o material uma única vez para performance
  const material = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(color),
    roughness: 0.2,
    metalness: 0.9,
    clearcoat: 1,
    side: THREE.DoubleSide,
  }), [color]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      // Movimento de "respiração" da seda
      meshRef.current.rotation.x = Math.cos(t * speed * 0.2) * 0.1;
      meshRef.current.rotation.y = Math.sin(t * speed * 0.4) * 0.1;
      // Ondulação leve
      meshRef.current.position.z = Math.sin(t * speed) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 4, 0, 0]}>
      <planeGeometry args={[20, 20, 32, 32]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
};

const Silk = ({ speed = 0.5, color = "#333038", scale = 1 }) => {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 35 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} />
        <group scale={scale}>
          <SilkMesh speed={speed} color={color} />
        </group>
      </Canvas>
    </div>
  );
};

export default Silk;