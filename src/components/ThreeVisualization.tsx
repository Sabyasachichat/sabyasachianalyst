
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeVisualization: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const animationRef = useRef<number>();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    rendererRef.current = renderer;
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create 3D data points
    const geometry = new THREE.SphereGeometry(0.05, 8, 8);
    const materials = [
      new THREE.MeshBasicMaterial({ color: 0x007bff }),
      new THREE.MeshBasicMaterial({ color: 0x0056b3 }),
      new THREE.MeshBasicMaterial({ color: 0x66b3ff }),
    ];

    const dataPoints: THREE.Mesh[] = [];
    
    // Create scattered data points
    for (let i = 0; i < 100; i++) {
      const material = materials[Math.floor(Math.random() * materials.length)];
      const sphere = new THREE.Mesh(geometry, material);
      
      sphere.position.x = (Math.random() - 0.5) * 10;
      sphere.position.y = (Math.random() - 0.5) * 10;
      sphere.position.z = (Math.random() - 0.5) * 10;
      
      scene.add(sphere);
      dataPoints.push(sphere);
    }

    // Create connecting lines
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = [];
    
    for (let i = 0; i < dataPoints.length; i++) {
      for (let j = i + 1; j < dataPoints.length; j++) {
        const distance = dataPoints[i].position.distanceTo(dataPoints[j].position);
        if (distance < 3) {
          linePositions.push(
            dataPoints[i].position.x, dataPoints[i].position.y, dataPoints[i].position.z,
            dataPoints[j].position.x, dataPoints[j].position.y, dataPoints[j].position.z
          );
        }
      }
    }
    
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0x007bff, 
      transparent: true, 
      opacity: 0.3 
    });
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    camera.position.z = 8;

    // Mouse interaction
    const mouse = new THREE.Vector2();
    const handleMouseMove = (event: MouseEvent) => {
      if (!mountRef.current) return;
      const rect = mountRef.current.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    mountRef.current.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      
      // Rotate the entire scene slowly
      scene.rotation.y += 0.001;
      
      // Interactive rotation based on mouse
      scene.rotation.x = mouse.y * 0.2;
      scene.rotation.y += mouse.x * 0.001;
      
      // Animate individual data points
      dataPoints.forEach((point, index) => {
        point.rotation.x += 0.01;
        point.rotation.y += 0.01;
        point.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001;
      });
      
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current || !rendererRef.current) return;
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      if (mountRef.current) {
        mountRef.current.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 w-full h-full opacity-30"
      style={{ zIndex: 0 }}
    />
  );
};

export default ThreeVisualization;
