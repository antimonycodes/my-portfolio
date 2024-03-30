"use client";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export default function Threejs() {
  const mount = useRef<HTMLDivElement>(null); // Specify the type of ref

  useEffect(() => {
    if (!mount.current) return; // Check if mount.current is null before using it

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    const mountNode = mount.current; // Copy mount.current to a variable
    mountNode.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    // const trio = new THREE.
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (mountNode) {
        // Use the variable inside the cleanup function
        mountNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mount} />;
}
