import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, OrbitControls, Sphere, Torus } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import type { Mesh } from "three";

function Knot({ color, distort, roughness, metalness }: { color: string; distort: number; roughness: number; metalness: number }) {
  const ref = useRef<Mesh>(null);
  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.x += dt * 0.2;
      ref.current.rotation.y += dt * 0.3;
    }
  });
  return (
    <mesh ref={ref} position={[0, 0, 0]} scale={1.2}>
      <torusKnotGeometry args={[1, 0.32, 220, 32]} />
      <MeshDistortMaterial color={color} distort={distort} speed={1.8} roughness={roughness} metalness={metalness} />
    </mesh>
  );
}

function useThemeColors() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const update = () => setDark(document.documentElement.classList.contains("dark"));
    update();
    const obs = new MutationObserver(update);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);
  return dark;
}

export function HeroScene() {
  const dark = useThemeColors();
  if (!dark) return null;

  const c = {
    knot: "#5b8def", sphere: "#7aa2ff", torus: "#3b6df0",
    dir1: "#9ec5ff", dir2: "#4361ee", ambient: 0.4,
    metalness: 0.6, roughness: 0.2, distort: 0.35,
  };

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 2]}>
      <ambientLight intensity={c.ambient} />
      <directionalLight position={[3, 3, 5]} intensity={1.4} color={c.dir1} />
      <directionalLight position={[-4, -2, -3]} intensity={0.6} color={c.dir2} />
      <Suspense fallback={null}>
        <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
          <Knot color={c.knot} distort={c.distort} roughness={c.roughness} metalness={c.metalness} />
        </Float>
        <Float speed={1.2} floatIntensity={2}>
          <Sphere args={[0.3, 32, 32]} position={[2.2, 1.4, -1]}>
            <meshStandardMaterial color={c.sphere} metalness={c.metalness} roughness={c.roughness} />
          </Sphere>
        </Float>
        <Float speed={1.6} floatIntensity={1.5}>
          <Torus args={[0.4, 0.12, 16, 64]} position={[-2.3, -1.2, -1]}>
            <meshStandardMaterial color={c.torus} metalness={c.metalness} roughness={c.roughness} />
          </Torus>
        </Float>
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
    </Canvas>
  );
}
