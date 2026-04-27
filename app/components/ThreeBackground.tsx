"use client";

import { useEffect, useRef } from "react";

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const initThree = async () => {
      const THREE = await import("three");

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000,
      );
      const renderer = new THREE.WebGLRenderer({ alpha: true });

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);
      containerRef.current?.appendChild(renderer.domElement);

      const knotGeo = new THREE.TorusKnotGeometry(0.8, 0.25, 100, 16);
      const knotMat = new THREE.MeshBasicMaterial({
        color: 0xa8ffe1,
        wireframe: true,
      });
      const knot = new THREE.Mesh(knotGeo, knotMat);
      knot.position.set(-3, 1, 0);
      scene.add(knot);

      const icosaGeo = new THREE.IcosahedronGeometry(0.6, 0);
      const icosaMat = new THREE.MeshBasicMaterial({
        color: 0xff51fa,
        wireframe: true,
      });
      const icosa = new THREE.Mesh(icosaGeo, icosaMat);
      icosa.position.set(4, -2, 0);
      scene.add(icosa);

      const sphereGeo = new THREE.SphereGeometry(0.5, 32, 32);
      const sphereMat = new THREE.MeshBasicMaterial({
        color: 0xaf88ff,
        wireframe: true,
      });
      const sphere = new THREE.Mesh(sphereGeo, sphereMat);
      sphere.position.set(0, -3, 0);
      scene.add(sphere);

      camera.position.z = 8;

      const animate = () => {
        requestAnimationFrame(animate);
        knot.rotation.x += 0.01;
        knot.rotation.y += 0.02;
        icosa.rotation.x += 0.015;
        icosa.rotation.y += 0.01;
        sphere.rotation.x += 0.005;
        sphere.rotation.y += 0.008;
        renderer.render(scene, camera);
      };

      animate();

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        if (containerRef.current) {
          containerRef.current.removeChild(renderer.domElement);
        }
      };
    };

    initThree();
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0" />
  );
}
