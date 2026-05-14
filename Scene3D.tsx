import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Stars, Points, PointMaterial, Environment } from '@react-three/drei';
import * as THREE from 'three';

function NeuralNetwork() {
  const count = 1500;
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        p[i * 3] = (Math.random() - 0.5) * 12;
        p[i * 3 + 1] = (Math.random() - 0.5) * 12;
        p[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return p;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      pointsRef.current.rotation.z = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <group>
      <Points ref={pointsRef} positions={positions} stride={3}>
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      
      {/* Decorative lines (simplified) */}
      <Points positions={positions.slice(0, 300)} stride={3}>
         <PointMaterial
          transparent
          color="#8b5cf6"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

function CoreSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.5;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <Sphere args={[1.2, 128, 128]}>
          <MeshDistortMaterial
            color="#1e1e1e"
            attach="material"
            distort={0.5}
            speed={4}
            roughness={0.1}
            metalness={1}
            wireframe={true}
          />
        </Sphere>
        <Sphere args={[1, 128, 128]}>
          <MeshDistortMaterial
            color="#3b82f6"
            attach="material"
            distort={0.4}
            speed={5}
            roughness={0}
            metalness={1}
            emissive="#3b82f6"
            emissiveIntensity={0.5}
          />
        </Sphere>
      </mesh>
    </Float>
  );
}

function Rig() {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();
  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 2, camera.position.z), 0.05);
    camera.lookAt(0, 0, 0);
  });
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0 bg-black">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
        <pointLight position={[-10, -10, -10]} color="#8b5cf6" intensity={1.5} />
        
        <CoreSphere />
        <NeuralNetwork />
        
        <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        <Rig />
        
        <fog attach="fog" args={['#000000', 5, 12]} />
      </Canvas>
    </div>
  );
}
