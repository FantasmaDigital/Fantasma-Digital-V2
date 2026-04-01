import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial, Float, Stars, PerspectiveCamera, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';

const BrandCore = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.1;
    meshRef.current.rotation.y = time * 0.15;
  });

  return (
    <group>
      {/* Outer Wireframe Core */}
      <mesh ref={meshRef}>
        <octahedronGeometry args={[1.5, 2]} />
        <meshStandardMaterial 
          color="#ffcc00" 
          wireframe 
          transparent 
          opacity={0.15} 
          emissive="#ffcc00"
          emissiveIntensity={0.5}
        />
      </mesh>
      
      {/* Inner Distorted Core (Brand Fluidity) */}
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#ffcc00"
          speed={2}
          distort={0.4}
          radius={1}
          emissive="#ffcc00"
          emissiveIntensity={0.2}
          transparent
          opacity={0.6}
          roughness={0}
          metalness={1}
        />
      </mesh>
      
      {/* Floating Geometric Assets */}
      {[...Array(6)].map((_, i) => (
        <Float key={i} speed={3} rotationIntensity={2} floatIntensity={1.5} position={[Math.sin(i) * 2.5, Math.cos(i) * 2.5, 0]}>
          <mesh>
            <boxGeometry args={[0.2, 0.2, 0.2]} />
            <meshStandardMaterial color="#ffcc00" emissive="#ffcc00" emissiveIntensity={1} />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

const GridOverlay = () => {
  return (
    <group position={[0, 0, -1]}>
      {/* Golden Ratio Grid (Fibonacci-like layout) */}
      <gridHelper args={[10, 20, '#ffffff10', '#ffffff05']} rotation={[Math.PI / 2, 0, 0]} />
      
      {/* Circular Guides */}
      {[1, 2, 3].map((r, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[r, r + 0.01, 64]} />
          <meshBasicMaterial color="#ffffff08" transparent />
        </mesh>
      ))}
    </group>
  );
};

const VisualIdentity3D = () => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div 
      className="w-full h-[500px] md:h-[700px] relative group cursor-crosshair overflow-hidden border border-white/5 bg-[#050505]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* DESIGN HUD OVERLAY */}
      <div className="absolute inset-0 pointer-events-none z-10 p-8 flex flex-col justify-between font-mono">
        <div className="flex justify-between items-start opacity-40">
           <div className="space-y-1">
              <div className="text-[10px] tracking-[0.4em] text-primary flex items-center gap-2 font-bold">
                 <span className="w-2 h-2 bg-primary rotate-45 animate-pulse"></span>
                 ASSET_SYSTEM: MOD_004_VI
              </div>
              <div className="text-[8px] text-white/50 uppercase tracking-widest">Parametric_Design_Engine_v1.0</div>
           </div>
           <div className="text-right space-y-1">
              <div className="text-[8px] text-white/30 lowercase italic font-light">render_precision: infinity</div>
              <div className="text-[8px] text-white/30 lowercase italic font-light">geometric_alignment: true</div>
           </div>
        </div>

        <div className="flex flex-col gap-4">
           {/* Technical Metrics Bottom HUD */}
           <div className="flex justify-between items-end">
              <div className="flex gap-12">
                 <div className="space-y-1">
                    <div className="text-[7px] text-white/20 uppercase tracking-widest">Balance</div>
                    <div className="text-[12px] text-primary font-bold">黄金比 1.618</div>
                 </div>
                 <div className="space-y-1">
                    <div className="text-[7px] text-white/20 uppercase tracking-widest">Typeface</div>
                    <div className="text-[12px] text-white/60 font-bold uppercase tracking-tighter italic font-display">Ghost Mono</div>
                 </div>
              </div>
              <div className="text-right flex flex-col items-end gap-2">
                 <div className="w-32 h-[1px] bg-white/10"></div>
                 <div className="font-display font-black text-white/5 text-[40px] leading-none select-none tracking-tighter">
                    VISUAL_IDENTITY
                 </div>
              </div>
           </div>
        </div>
      </div>

      <Canvas 
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: false }}
      >
        <color attach="background" args={['#050505']} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} intensity={1.5} color="#ffcc00" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />
        
        <React.Suspense fallback={null}>
          <PresentationControls
            global
            rotation={[0, 0.3, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
          >
            <BrandCore />
          </PresentationControls>
          <GridOverlay />
          <Stars 
            radius={50} 
            depth={50} 
            count={2000} 
            factor={4} 
            saturation={0} 
            fade 
            speed={1} 
          />
        </React.Suspense>
      </Canvas>
      
      {/* Decorative Blueprint Markers */}
      <div className={`absolute top-0 left-0 w-12 h-12 border-l border-t border-primary/40 transition-all duration-700 ${hovered ? 'scale-110 translate-x-2 translate-y-2' : ''}`}></div>
      <div className={`absolute top-0 right-0 w-12 h-12 border-r border-t border-primary/40 transition-all duration-700 ${hovered ? 'scale-110 -translate-x-2 translate-y-2' : ''}`}></div>
      <div className={`absolute bottom-0 left-0 w-12 h-12 border-l border-b border-primary/40 transition-all duration-700 ${hovered ? 'scale-110 translate-x-2 -translate-y-2' : ''}`}></div>
      <div className={`absolute bottom-0 right-0 w-12 h-12 border-r border-b border-primary/40 transition-all duration-700 ${hovered ? 'scale-110 -translate-x-2 -translate-y-2' : ''}`}></div>
    </div>
  );
};

export default VisualIdentity3D;
