"use client";
import { useEffect, useRef } from "react";

export default function ThreeScene() {
  const containerRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, sphere, core;
    let mouseX = 0,
      mouseY = 0;
    let animId;

    async function init() {
      const THREE = await import("three");
      const container = containerRef.current;
      if (!container) return;

      scene = new THREE.Scene();
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;
      camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      container.appendChild(renderer.domElement);

      const geometry = new THREE.IcosahedronGeometry(1.5, 1);
      const material = new THREE.MeshPhongMaterial({
        color: 0x3b82f6,
        wireframe: true,
        transparent: true,
        opacity: 0.8,
        emissive: 0x1d4ed8,
        emissiveIntensity: 0.5,
      });
      sphere = new THREE.Mesh(geometry, material);
      scene.add(sphere);

      const coreGeo = new THREE.SphereGeometry(0.8, 32, 32);
      const coreMat = new THREE.MeshStandardMaterial({
        color: 0x3b82f6,
        metalness: 0.8,
        roughness: 0.2,
        emissive: 0x3b82f6,
        emissiveIntensity: 0.2,
      });
      core = new THREE.Mesh(coreGeo, coreMat);
      scene.add(core);

      const ambientLight = new THREE.AmbientLight(0x404040, 2);
      scene.add(ambientLight);
      const pointLight = new THREE.PointLight(0x3b82f6, 5, 50);
      pointLight.position.set(5, 5, 5);
      scene.add(pointLight);

      camera.position.z = 5;

      function onMouseMove(event) {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      }
      window.addEventListener("mousemove", onMouseMove);

      function animate() {
        animId = requestAnimationFrame(animate);
        sphere.rotation.y += 0.005;
        sphere.rotation.x += 0.002;
        sphere.rotation.y += mouseX * 0.05;
        sphere.rotation.x += mouseY * 0.05;
        core.rotation.y -= 0.002;
        renderer.render(scene, camera);
      }
      animate();

      function onResize() {
        const w = container.clientWidth || window.innerWidth;
        const h = container.clientHeight || window.innerHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }
      window.addEventListener("resize", onResize);

      return () => {
        cancelAnimationFrame(animId);
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("resize", onResize);
        if (renderer) {
          renderer.dispose();
          if (renderer.domElement.parentNode) {
            renderer.domElement.parentNode.removeChild(renderer.domElement);
          }
        }
      };
    }

    const cleanupPromise = init();

    return () => {
      cleanupPromise.then((cleanup) => cleanup && cleanup());
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
}
