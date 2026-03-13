import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial, Float, Stars, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const InnerCore = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.scale.setScalar(1 + Math.sin(time * 2) * 0.05);
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color="#ffcc00"
        emissive="#ffcc00"
        emissiveIntensity={2}
        toneMapped={false}
      />
      <pointLight intensity={2} distance={5} color="#ffcc00" />
    </mesh>
  );
};

const ParticleAura = () => {
  const count = 200;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 1.5 + Math.random() * 0.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  const pointsRef = useRef<THREE.Points>(null!);
  useFrame((state) => {
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#ffcc00"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const CyberCore = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;
  });

  return (
    <group>
      <InnerCore />
      <ParticleAura />
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.25, 256, 32]} />
        <MeshDistortMaterial
          color="#ffcc00"
          speed={3}
          distort={0.5}
          radius={1}
          emissive="#ffcc00"
          emissiveIntensity={0.2}
          wireframe
          transparent
          opacity={0.8}
        />
      </mesh>
    </group>
  );
};

const DimensionX3D = () => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div 
      className="w-full h-[500px] md:h-[700px] cursor-grab active:cursor-grabbing border border-primary/10 rounded-sm bg-[#050505] relative group overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* HUD TECHNICAL OVERLAY */}
      <div className="absolute inset-0 pointer-events-none z-10 p-6 flex flex-col justify-between font-mono">
        <div className="flex justify-between items-start opacity-40">
           <div className="space-y-1">
              <div className="text-[10px] tracking-widest text-primary flex items-center gap-2">
                 <span className="w-1.5 h-1.5 bg-primary animate-pulse"></span>
                 SYSTEM_ACTIVE: COGNITIVE_ENGINE_V2.4
              </div>
              <div className="text-[8px] text-white/50 lowercase">lat: 13.6929 / long: -89.2182 (SV_01)</div>
           </div>
           <div className="text-right space-y-1">
              <div className="text-[8px] text-white/40 uppercase tracking-tighter">Render_Buffer: 4.2ms</div>
              <div className="text-[8px] text-white/40 uppercase tracking-tighter">Neural_Sync: Verified</div>
           </div>
        </div>

        <div className="flex justify-between items-end">
           <div className="max-w-[200px] space-y-2">
              <div className="h-px w-full bg-white/10"></div>
              <div className="flex justify-between text-[7px] text-white/20 uppercase">
                 <span>Sync_State</span>
                 <span>100%</span>
              </div>
              <div className="h-1 w-full bg-white/5 overflow-hidden">
                 <div className="h-full bg-primary/40 w-[85%] animate-[shimmer_2s_infinite]"></div>
              </div>
           </div>
           <div className="text-right">
              <span className="text-[32px] font-display font-black text-white/5 tracking-tighter leading-none select-none">
                007_DIM_X
              </span>
           </div>
        </div>
      </div>

      {/* Interact Label */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-[10px] text-primary transition-all duration-700 pointer-events-none z-20 ${hovered ? 'opacity-0 scale-110' : 'opacity-40 animate-pulse'}`}>
         [ INTERACT_TO_MANIPULATE ]
      </div>

      <Canvas 
        camera={{ position: [0, 0, 5], fov: 40 }}
        gl={{ antialias: true, alpha: false }}
      >
        <color attach="background" args={['#050505']} />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#ffcc00" />
        <spotLight position={[-10, -10, -10]} intensity={1} color="#ffffff" angle={0.15} penumbra={1} />
        
        <React.Suspense fallback={null}>
          <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
            <CyberCore />
          </Float>
          <Stars 
            radius={100} 
            depth={50} 
            count={5000} 
            factor={4} 
            saturation={0} 
            fade 
            speed={1} 
          />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.8}
            makeDefault
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 1.5}
          />
          <gridHelper args={[10, 10, '#ffffff05', '#ffffff05']} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -2]} />
        </React.Suspense>
      </Canvas>
      
      {/* Corners accent */}
      <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-primary/20 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-primary/20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-l border-b border-primary/20 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-primary/20 pointer-events-none"></div>
    </div>
  );
};

export default DimensionX3D;
