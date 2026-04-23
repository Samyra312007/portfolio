"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const shapesRef = useRef<THREE.Mesh[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    camera.position.z = 8;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const knotGeo = new THREE.TorusKnotGeometry(0.8, 0.25, 100, 16);
    const knotMat = new THREE.MeshBasicMaterial({
      color: 0xa8ffe1,
      wireframe: true,
    });
    const knot = new THREE.Mesh(knotGeo, knotMat);
    knot.position.set(-3, 1, 0);
    scene.add(knot);
    shapesRef.current.push(knot);

    const icosaGeo = new THREE.IcosahedronGeometry(0.6, 0);
    const icosaMat = new THREE.MeshBasicMaterial({
      color: 0xff51fa,
      wireframe: true,
    });
    const icosa = new THREE.Mesh(icosaGeo, icosaMat);
    icosa.position.set(4, -2, 0);
    scene.add(icosa);
    shapesRef.current.push(icosa);

    const sphereGeo = new THREE.SphereGeometry(0.5, 32, 32);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0xaf88ff,
      wireframe: true,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    sphere.position.set(0, -3, 0);
    scene.add(sphere);
    shapesRef.current.push(sphere);

    const particlesGeo = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const particlesPositions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount; i++) {
      particlesPositions[i * 3] = (Math.random() - 0.5) * 100;
      particlesPositions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      particlesPositions[i * 3 + 2] = (Math.random() - 0.5) * 50 - 20;
    }

    particlesGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(particlesPositions, 3),
    );
    const particlesMat = new THREE.PointsMaterial({
      color: 0xa8ffe1,
      size: 0.05,
      transparent: true,
      opacity: 0.3,
    });
    const particles = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particles);

    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      shapesRef.current.forEach((shape, index) => {
        shape.rotation.x += 0.01 * (index + 1);
        shape.rotation.y += 0.02 * (index + 1);
      });

      particles.rotation.y += 0.0005;
      particles.rotation.x += 0.0003;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      knot.position.y = 1 + scrolled * 0.002;
      icosa.position.y = -2 + scrolled * 0.001;
      sphere.position.y = -3 + scrolled * 0.003;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      shapesRef.current.forEach((shape) => {
        scene.remove(shape);
        shape.geometry.dispose();
      });
      scene.remove(particles);
      particlesGeo.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0" />
  );
}
