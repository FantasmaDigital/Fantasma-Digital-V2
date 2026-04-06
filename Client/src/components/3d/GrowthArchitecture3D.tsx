import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial, Float, Stars, PerspectiveCamera, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const MarketNexus = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.y = time * 0.2;
    meshRef.current.scale.setScalar(1 + Math.sin(time * 2) * 0.05);
  });

  return (
    <group>
      {/* Central Nexus Node */}
      <mesh ref={meshRef}>
         <sphereGeometry args={[1.2, 32, 32]} />
         <meshStandardMaterial 
           color="#ffcc00" 
           emissive="#ffcc00" 
           emissiveIntensity={1} 
           transparent 
           opacity={0.3} 
           wireframe
         />
      </mesh>
      <mesh>
         <sphereGeometry args={[0.5, 32, 32]} />
         <meshStandardMaterial color="#ffcc00" emissive="#ffcc00" emissiveIntensity={5} toneMapped={false} />
         <pointLight intensity={3} distance={5} color="#ffcc00" />
      </mesh>
    </group>
  );
};

const GrowthStreams = () => {
  const count = 1000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  const pointsRef = useRef<THREE.Points>(null!);
  useFrame((state) => {
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    pointsRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.1;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffcc00"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
};

const MarketGrid = () => {
   return (
      <gridHelper args={[20, 40, '#ffffff08', '#ffffff03']} rotation={[0, 0, 0]} position={[0, -2, 0]} />
   );
};

const GrowthArchitecture3D = () => {
  return (
    <div className="w-full h-[500px] md:h-[700px] relative border border-white/5 bg-[#050505] overflow-hidden group">
      {/* PERFORMANCE HUD OVERLAY */}
      <div className="absolute inset-0 pointer-events-none z-10 p-10 flex flex-col justify-between font-mono">
         <div className="flex justify-between items-start opacity-40">
            <div className="space-y-1">
               <div className="text-[10px] tracking-[0.4em] text-primary flex items-center gap-2 font-bold uppercase">
                  <span className="w-2 h-2 bg-primary animate-ping"></span>
                  LIVE_MARKET_NEXUS: MOD_005_GROWTH
               </div>
               <div className="text-[8px] text-white/50 uppercase tracking-widest lowercase">latency: 4.2ms / efficiency: 98.4%</div>
            </div>
            <div className="text-right flex flex-col items-end gap-1">
               <div className="text-[12px] text-primary font-bold tracking-tighter">Bidding_Algorithm_v4.5</div>
               <div className="w-24 h-[1px] bg-primary/20"></div>
            </div>
         </div>

         <div className="flex justify-between items-end">
            <div className="space-y-4">
               {/* Animated Progress Bars */}
               <div className="w-48 space-y-2">
                  <div className="flex justify-between text-[7px] text-white/20 uppercase tracking-widest leading-none">
                     <span>conversion_velocity</span>
                     <span>92%</span>
                  </div>
                  <div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
                     <div className="absolute inset-0 bg-primary/40 w-[92%] animate-pulse"></div>
                  </div>
               </div>
               <div className="w-48 space-y-2">
                  <div className="flex justify-between text-[7px] text-white/20 uppercase tracking-widest leading-none">
                     <span>market_share_absorption</span>
                     <span>65%</span>
                  </div>
                  <div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
                     <div className="absolute inset-0 bg-white/20 w-[65%]"></div>
                  </div>
               </div>
            </div>
            
            <div className="text-right">
               <div className="font-display font-black text-white/10 text-[32px] leading-none select-none tracking-tighter">
                  PERFORMANCE_ENGINEERING
               </div>
               <div className="text-[9px] text-primary/40 uppercase tracking-[0.5em] mt-1 font-bold">Scale_Limit: Unbound</div>
            </div>
         </div>
      </div>

      <Canvas 
        camera={{ position: [5, 5, 5], fov: 40 }}
        gl={{ antialias: true, alpha: false }}
      >
        <color attach="background" args={['#050505']} />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffcc00" />
        
        <React.Suspense fallback={null}>
          <MarketNexus />
          <GrowthStreams />
          <MarketGrid />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </React.Suspense>
      </Canvas>

      {/* Decorative Blur Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle_at_center,rgba(255,204,0,0.03)_0%,transparent_70%)] pointer-events-none"></div>
    </div>
  );
};

export default GrowthArchitecture3D;
