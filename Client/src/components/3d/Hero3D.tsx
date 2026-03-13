import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

// Simple 3D Noise for continents
const noise = (x: number, y: number, z: number) => {
  // Very simplified noise function for continent-like blobs
  return (
    Math.sin(x * 1.5 + Math.sin(y * 2.1)) * 
    Math.cos(y * 1.5 + Math.cos(z * 2.1)) * 
    Math.sin(z * 1.5 + Math.sin(x * 2.1))
  );
};

const ParticleField = () => {
  const ref = useRef<THREE.Points>(null!);
  
  // Generate a Digital Globe with Continent Masks
  const [positions] = useMemo(() => {
    const totalCount = 15000; // High count to filter down
    const landPositions = [];
    
    for (let i = 0; i < totalCount; i++) {
        const phi = Math.acos(2 * Math.random() - 1);
        const theta = 2 * Math.PI * Math.random();
        const r = 2.0;
        
        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);
        
        // Use noise to determine if it's "land"
        const n = noise(x * 1.2, y * 1.2, z * 1.2);
        
        if (n > -0.1) { // Threshold for "landmasses"
            landPositions.push(x, y, z);
        }
    }
    return [new Float32Array(landPositions)];
  }, []);

  useFrame((state) => {
    const { clock, mouse } = state;
    const time = clock.getElapsedTime();
    
    // Slow rotation
    ref.current.rotation.y = time * 0.1;
    
    // Smooth tilt
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, -mouse.y * 0.3, 0.05);
    ref.current.rotation.z = THREE.MathUtils.lerp(ref.current.rotation.z, mouse.x * 0.3, 0.05);
  });

  return (
    <group rotation={[0.4, 0, 0]}> {/* Earth axial tilt simulation */}
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffcc00"
          size={0.007}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.35}
        />
      </Points>
      
      {/* Subtle core glow inside the globe */}
      <mesh>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshBasicMaterial color="#ffcc00" transparent opacity={0.02} wireframe />
      </mesh>
    </group>
  );
};

const Hero3D = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
        <React.Suspense fallback={null}>
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <ParticleField />
          </Float>
        </React.Suspense>
      </Canvas>
    </div>
  );
};

export default Hero3D;
