"use client";
import { useEffect, useRef } from "react";

export default function ThreeScene() {
  const containerRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, sphere, core, particles, particleSystem;
    let targetX = 0,
      targetY = 0,
      currentX = 0,
      currentY = 0;
    let animId;

    async function init() {
      const THREE = await import("three");
      const container = containerRef.current;
      if (!container) return;

      scene = new THREE.Scene();
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio, 2);

      camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(dpr);
      renderer.setSize(width, height);
      container.appendChild(renderer.domElement);

      const geometry = new THREE.IcosahedronGeometry(1.6, 2);
      const material = new THREE.MeshPhysicalMaterial({
        color: 0x3b82f6,
        wireframe: true,
        transparent: true,
        opacity: 0.9,
        emissive: 0x1d4ed8,
        emissiveIntensity: 0.6,
        metalness: 0.2,
        roughness: 0.3,
      });
      sphere = new THREE.Mesh(geometry, material);
      scene.add(sphere);

      const coreGeo = new THREE.SphereGeometry(0.6, 48, 48);
      const coreMat = new THREE.MeshPhysicalMaterial({
        color: 0x60a5fa,
        metalness: 0.9,
        roughness: 0.1,
        emissive: 0x3b82f6,
        emissiveIntensity: 0.8,
        transparent: true,
        opacity: 0.9,
      });
      core = new THREE.Mesh(coreGeo, coreMat);
      scene.add(core);

      const innerGlowGeo = new THREE.SphereGeometry(0.8, 32, 32);
      const innerGlowMat = new THREE.MeshBasicMaterial({
        color: 0x3b82f6,
        transparent: true,
        opacity: 0.15,
      });
      const innerGlow = new THREE.Mesh(innerGlowGeo, innerGlowMat);
      scene.add(innerGlow);

      const particleCount = 60;
      const positions = new Float32Array(particleCount * 3);
      const sizes = new Float32Array(particleCount);
      const orbits = [];
      for (let i = 0; i < particleCount; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const radius = 2.5 + Math.random() * 2.0;
        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = radius * Math.cos(phi);
        sizes[i] = 0.02 + Math.random() * 0.04;
        orbits.push({
          theta,
          phi,
          radius,
          speed: 0.1 + Math.random() * 0.2,
          phase: Math.random() * Math.PI * 2,
        });
      }

      const particleGeo = new THREE.BufferGeometry();
      particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      particleGeo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

      const particleMat = new THREE.PointsMaterial({
        color: 0x93c5fd,
        size: 0.06,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
      });
      particleSystem = new THREE.Points(particleGeo, particleMat);
      scene.add(particleSystem);
      particles = { positions, orbits };

      const ambientLight = new THREE.AmbientLight(0x404060, 2);
      scene.add(ambientLight);
      const pointLight = new THREE.PointLight(0x3b82f6, 8, 50);
      pointLight.position.set(5, 5, 5);
      scene.add(pointLight);
      const pointLight2 = new THREE.PointLight(0x60a5fa, 4, 30);
      pointLight2.position.set(-4, -3, 4);
      scene.add(pointLight2);

      camera.position.z = 5.5;

      function onMouseMove(event) {
        targetX = (event.clientX / window.innerWidth) * 2 - 1;
        targetY = -(event.clientY / window.innerHeight) * 2 + 1;
      }
      window.addEventListener("mousemove", onMouseMove);

      let time = 0;
      function animate() {
        animId = requestAnimationFrame(animate);
        time += 0.005;

        currentX += (targetX - currentX) * 0.05;
        currentY += (targetY - currentY) * 0.05;

        sphere.rotation.y += 0.004;
        sphere.rotation.x += 0.002;
        sphere.rotation.y += currentX * 0.03;
        sphere.rotation.x += currentY * 0.03;

        core.rotation.y -= 0.002;
        core.rotation.x += 0.001;
        const corePulse = Math.sin(time * 3) * 0.1 + 0.9;
        core.scale.setScalar(corePulse);

        innerGlow.scale.setScalar(1 + Math.sin(time * 2) * 0.15);

        if (particles && particleSystem) {
          const pos = particleSystem.geometry.attributes.position.array;
          for (let i = 0; i < particles.orbits.length; i++) {
            const o = particles.orbits[i];
            o.theta += o.speed * 0.008;
            o.phi += o.speed * 0.004;
            const r = o.radius + Math.sin(time * 0.5 + o.phase) * 0.2;
            pos[i * 3] = r * Math.sin(o.phi) * Math.cos(o.theta);
            pos[i * 3 + 1] = r * Math.sin(o.phi) * Math.sin(o.theta);
            pos[i * 3 + 2] = r * Math.cos(o.phi);
          }
          particleSystem.geometry.attributes.position.needsUpdate = true;
          particleSystem.rotation.y += 0.001;
        }

        camera.position.x += (currentX * 0.3 - camera.position.x) * 0.02;
        camera.position.y += (-currentY * 0.3 - camera.position.y) * 0.02;
        camera.lookAt(0, 0, 0);

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
