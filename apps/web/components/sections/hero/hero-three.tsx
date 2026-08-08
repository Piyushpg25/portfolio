"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function HeroThree() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      1,
      0.1,
      100,
    );

    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 2),
    );

    renderer.setSize(
      container.clientWidth,
      container.clientHeight,
    );

    container.appendChild(renderer.domElement);

    /*
     * Particle geometry
     */

    const particleCount = 140;

    const positions = new Float32Array(
      particleCount * 3,
    );

    for (let index = 0; index < particleCount; index += 1) {
      const offset = index * 3;

      positions[offset] =
        (Math.random() - 0.5) * 5;

      positions[offset + 1] =
        (Math.random() - 0.5) * 5;

      positions[offset + 2] =
        (Math.random() - 0.5) * 3;
    }

    const geometry = new THREE.BufferGeometry();

    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(
        positions,
        3,
      ),
    );

    const material = new THREE.PointsMaterial({
      color: 0x888888,
      size: 0.035,
      transparent: true,
      opacity: 0.45,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(
      geometry,
      material,
    );

    scene.add(particles);

    /*
     * Main floating object
     */

    const objectGeometry =
      new THREE.IcosahedronGeometry(
        1.05,
        1,
      );

    const objectMaterial =
      new THREE.MeshBasicMaterial({
        color: 0x888888,
        wireframe: true,
        transparent: true,
        opacity: 0.18,
      });

    const object = new THREE.Mesh(
      objectGeometry,
      objectMaterial,
    );

    scene.add(object);

    /*
     * Mouse interaction
     */

    const mouse = {
      x: 0,
      y: 0,
    };

    const handlePointerMove = (
      event: PointerEvent,
    ) => {
      const rect =
        container.getBoundingClientRect();

      mouse.x =
        ((event.clientX - rect.left) /
          rect.width) *
          2 -
        1;

      mouse.y =
        -(
          ((event.clientY - rect.top) /
            rect.height) *
            2 -
          1
        );
    };

    container.addEventListener(
      "pointermove",
      handlePointerMove,
    );

    /*
     * Resize
     */

    const resizeObserver =
      new ResizeObserver(() => {
        const width =
          container.clientWidth;

        const height =
          container.clientHeight;

        if (width === 0 || height === 0) {
          return;
        }

        camera.aspect =
          width / height;

        camera.updateProjectionMatrix();

        renderer.setSize(
          width,
          height,
          false,
        );

        renderer.setPixelRatio(
          Math.min(
            window.devicePixelRatio,
            2,
          ),
        );
      });

    resizeObserver.observe(container);

    /*
     * Animation
     */

    let animationFrameId = 0;

    const animate = () => {
      animationFrameId =
        requestAnimationFrame(animate);

      particles.rotation.y += 0.0008;
      particles.rotation.x += 0.0002;

      object.rotation.x += 0.002;
      object.rotation.y += 0.003;

      object.rotation.x +=
        (mouse.y * 0.15 -
          object.rotation.x) *
        0.02;

      object.rotation.y +=
        (mouse.x * 0.15 -
          object.rotation.y) *
        0.02;

      renderer.render(
        scene,
        camera,
      );
    };

    animate();

    /*
     * Cleanup
     */

    return () => {
      cancelAnimationFrame(
        animationFrameId,
      );

      resizeObserver.disconnect();

      container.removeEventListener(
        "pointermove",
        handlePointerMove,
      );

      geometry.dispose();
      material.dispose();

      objectGeometry.dispose();
      objectMaterial.dispose();

      renderer.dispose();

      if (
        renderer.domElement.parentNode ===
        container
      ) {
        container.removeChild(
          renderer.domElement,
        );
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0"
    />
  );
}