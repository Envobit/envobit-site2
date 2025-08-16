'use client';

import React, { useRef, useLayoutEffect } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

const ServicesCrystal = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);

  useLayoutEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    if (sceneRef.current) {
      while (currentMount.firstChild) {
        currentMount.removeChild(currentMount.firstChild);
      }
    }

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    // Use theme colors
    const pointLight1 = new THREE.PointLight(0xbe2edd, 1.5, 100);
    pointLight1.position.set(-5, 5, 5);
    scene.add(pointLight1);
    
    const pointLight2 = new THREE.PointLight(0x4299e1, 1.5, 100);
    pointLight2.position.set(5, -5, 5);
    scene.add(pointLight2);

    const particleCount = 2000;
    const positions = new Float32Array(particleCount * 3);
    const geometry = new THREE.BufferGeometry();
    
    for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const radius = 1.5 + Math.random() * 0.5;
        const theta = Math.acos(2 * Math.random() - 1);
        const phi = Math.random() * 2 * Math.PI;
        
        positions[i3] = radius * Math.sin(theta) * Math.cos(phi);
        positions[i3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
        positions[i3 + 2] = radius * Math.cos(theta);
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const material = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.02,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
    });
    
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    const clock = new THREE.Clock();

    const animate = () => {
        if (!sceneRef.current) return;
        requestAnimationFrame(animate);

        const elapsedTime = clock.getElapsedTime();
        
        particles.rotation.y = elapsedTime * 0.1;
        particles.rotation.x = elapsedTime * 0.05;

        renderer.render(scene, camera);
    };

    animate();
    
    const handleResize = () => {
        if (!currentMount) return;
        camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (currentMount) {
        while (currentMount.firstChild) {
          currentMount.removeChild(currentMount.firstChild);
        }
      }
      scene.traverse(object => {
        if (object instanceof THREE.Points) {
            if (object.geometry) object.geometry.dispose();
            if (object.material instanceof THREE.Material) {
                object.material.dispose();
            }
        }
      });
      renderer.dispose();
      sceneRef.current = null;
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0 h-full w-full" />;
};

export default ServicesCrystal;
