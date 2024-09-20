import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface ThreeJsCardProps {
  imageUrl: string;
}

const ThreeJsCard: React.FC<ThreeJsCardProps> = ({ imageUrl }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    // Set renderer size to match container
    const setSize = () => {
      if (mountRef.current) {
        const { clientWidth, clientHeight } = mountRef.current;
        renderer.setSize(clientWidth, clientHeight);
        camera.aspect = clientWidth / clientHeight;
        camera.updateProjectionMatrix();
      }
    };
    
    setSize();
    mountRef.current.appendChild(renderer.domElement);

    // Card geometry (larger size)
    const geometry = new THREE.PlaneGeometry(4, 5.33); // Adjusted for 3:4 aspect ratio
    const texture = new THREE.TextureLoader().load(imageUrl);
    const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
    const card = new THREE.Mesh(geometry, material);
    scene.add(card);

    camera.position.z = 6; // Adjusted for larger card

    // Animation
    let mouseX = 0;
    let mouseY = 0;

    const onDocumentMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    document.addEventListener('mousemove', onDocumentMouseMove, false);

    const animate = () => {
      requestAnimationFrame(animate);

      card.rotation.y = mouseX * 0.3; // Reduced rotation for smoother effect
      card.rotation.x = mouseY * 0.3;

      renderer.render(scene, camera);
    };

    animate();

    window.addEventListener('resize', setSize);

    return () => {
      document.removeEventListener('mousemove', onDocumentMouseMove);
      window.removeEventListener('resize', setSize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, [imageUrl]);

  return <div ref={mountRef} className="w-full h-full" />;
};

export default ThreeJsCard;