'use client';

import React, { useRef, useLayoutEffect } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Crystal = () => {
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

    const pointLight1 = new THREE.PointLight(0xbe2edd, 2, 100);
    pointLight1.position.set(-10, 10, 10);
    scene.add(pointLight1);
    
    const pointLight2 = new THREE.PointLight(0x4299e1, 2, 100);
    pointLight2.position.set(10, -10, 10);
    scene.add(pointLight2);

    const particleCount = 5000;
    const positions = new Float32Array(particleCount * 3);
    const geometry = new THREE.BufferGeometry();
    
    for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const theta = Math.acos(2 * Math.random() - 1);
        const phi = Math.random() * 2 * Math.PI;
        
        positions[i3] = 2.5 * Math.sin(theta) * Math.cos(phi);
        positions[i3 + 1] = 2.5 * Math.sin(theta) * Math.sin(phi);
        positions[i3 + 2] = 2.5 * Math.cos(theta);
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const material = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.015,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
    });
    
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    const originalPositions = new Float32Array(positions);

    const clock = new THREE.Clock();

    const mouse = new THREE.Vector2();

    const handleMouseMove = (event: MouseEvent) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
        const elapsedTime = clock.getElapsedTime();
        const positions = (particles.geometry.attributes.position as THREE.BufferAttribute).array as Float32Array;

        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            const x = originalPositions[i3];
            const y = originalPositions[i3 + 1];
            const z = originalPositions[i3 + 2];
            
            const dist = Math.sqrt(x*x + y*y + z*z);
            const noise = 0.2 * Math.sin(dist * 2 - elapsedTime);
            
            positions[i3] = x + noise * (x / dist);
            positions[i3 + 1] = y + noise * (y / dist);
            positions[i3 + 2] = z + noise * (z / dist);
        }
        
        particles.geometry.attributes.position.needsUpdate = true;
        
        particles.rotation.y = elapsedTime * 0.05;

        gsap.to(particles.rotation, {
            x: -mouse.y * 0.1,
            y: -mouse.x * 0.1 + particles.rotation.y,
            duration: 2,
            ease: 'power2.out',
        })

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    };

    animate();
    
    gsap.to(particles.scale, {
        x: 1.2,
        y: 1.2,
        z: 1.2,
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
        },
    });

    const handleResize = () => {
        if (!currentMount) return;
        camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
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
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0 h-full w-full" />;
};

export default Crystal;
