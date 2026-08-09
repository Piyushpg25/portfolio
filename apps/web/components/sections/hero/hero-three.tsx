"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const LIGHT_COLOR = 0x525252;
const DARK_COLOR = 0xa3a3a3;

export function HeroThree() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    /*
     * ----------------------------------------
     * Scene
     * ----------------------------------------
     */

    const scene = new THREE.Scene();

    /*
     * ----------------------------------------
     * Camera
     * ----------------------------------------
     */

    const camera = new THREE.PerspectiveCamera(
      42,
      1,
      0.1,
      100,
    );

    camera.position.set(0, 0, 5);

    /*
     * ----------------------------------------
     * Renderer
     * ----------------------------------------
     */

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 1.75),
    );

    renderer.setSize(
      container.clientWidth,
      container.clientHeight,
    );

    renderer.outputColorSpace = THREE.SRGBColorSpace;

    container.appendChild(renderer.domElement);

    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";

    /*
     * ----------------------------------------
     * Theme
     * ----------------------------------------
     */

    const getThemeColor = () => {
      const isDark =
        document.documentElement.classList.contains(
          "dark",
        );

      return isDark
        ? DARK_COLOR
        : LIGHT_COLOR;
    };

    /*
     * ----------------------------------------
     * Main Group
     * ----------------------------------------
     */

    const mainGroup = new THREE.Group();

    scene.add(mainGroup);

    /*
     * ----------------------------------------
     * Main Wireframe Object
     * ----------------------------------------
     */

    const objectGeometry =
      new THREE.IcosahedronGeometry(
        1.05,
        2,
      );

    const objectMaterial =
      new THREE.MeshBasicMaterial({
        color: getThemeColor(),
        wireframe: true,
        transparent: true,
        opacity: 0.32,
      });

    const object = new THREE.Mesh(
      objectGeometry,
      objectMaterial,
    );

    mainGroup.add(object);

    /*
     * ----------------------------------------
     * Inner Wireframe
     * ----------------------------------------
     */

    const innerGeometry =
      new THREE.IcosahedronGeometry(
        0.72,
        1,
      );

    const innerMaterial =
      new THREE.MeshBasicMaterial({
        color: getThemeColor(),
        wireframe: true,
        transparent: true,
        opacity: 0.14,
      });

    const innerObject = new THREE.Mesh(
      innerGeometry,
      innerMaterial,
    );

    mainGroup.add(innerObject);

    /*
     * ----------------------------------------
     * Core
     * ----------------------------------------
     */

    const coreGeometry =
      new THREE.SphereGeometry(
        0.28,
        32,
        32,
      );

    const coreMaterial =
      new THREE.MeshBasicMaterial({
        color: getThemeColor(),
        transparent: true,
        opacity: 0.12,
      });

    const core = new THREE.Mesh(
      coreGeometry,
      coreMaterial,
    );

    mainGroup.add(core);

    /*
     * ----------------------------------------
     * Orbit Ring 1
     * ----------------------------------------
     */

    const orbitGeometry =
      new THREE.TorusGeometry(
        1.38,
        0.008,
        8,
        160,
      );

    const orbitMaterial =
      new THREE.MeshBasicMaterial({
        color: getThemeColor(),
        transparent: true,
        opacity: 0.22,
      });

    const orbitOne = new THREE.Mesh(
      orbitGeometry,
      orbitMaterial,
    );

    orbitOne.rotation.x =
      Math.PI / 2.4;

    mainGroup.add(orbitOne);

    /*
     * ----------------------------------------
     * Orbit Ring 2
     * ----------------------------------------
     */

    const orbitTwoGeometry =
      new THREE.TorusGeometry(
        1.55,
        0.006,
        8,
        160,
      );

    const orbitTwoMaterial =
      new THREE.MeshBasicMaterial({
        color: getThemeColor(),
        transparent: true,
        opacity: 0.13,
      });

    const orbitTwo = new THREE.Mesh(
      orbitTwoGeometry,
      orbitTwoMaterial,
    );

    orbitTwo.rotation.x =
      Math.PI / 1.8;

    orbitTwo.rotation.z =
      Math.PI / 4;

    mainGroup.add(orbitTwo);

    /*
     * ----------------------------------------
     * Particle Field
     * ----------------------------------------
     */

    const isMobile =
      window.innerWidth < 768;

    const particleCount = isMobile
      ? 90
      : 180;

    const positions =
      new Float32Array(
        particleCount * 3,
      );

    for (
      let index = 0;
      index < particleCount;
      index += 1
    ) {
      const offset = index * 3;

      const radius =
        1.8 +
        Math.random() * 1.7;

      const angle =
        Math.random() *
        Math.PI *
        2;

      const vertical =
        (Math.random() - 0.5) *
        3.2;

      positions[offset] =
        Math.cos(angle) * radius;

      positions[offset + 1] =
        vertical;

      positions[offset + 2] =
        Math.sin(angle) * radius;
    }

    const particleGeometry =
      new THREE.BufferGeometry();

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(
        positions,
        3,
      ),
    );

    const particleMaterial =
      new THREE.PointsMaterial({
        color: getThemeColor(),
        size: isMobile
          ? 0.028
          : 0.035,
        transparent: true,
        opacity: 0.4,
        sizeAttenuation: true,
      });

    const particles =
      new THREE.Points(
        particleGeometry,
        particleMaterial,
      );

    scene.add(particles);

    /*
     * ----------------------------------------
     * Floating Particles
     * ----------------------------------------
     */

    const particleGroup =
      new THREE.Group();

    scene.add(particleGroup);

    const floatingParticleGeometry =
      new THREE.SphereGeometry(
        0.025,
        8,
        8,
      );

    const floatingParticleMaterial =
      new THREE.MeshBasicMaterial({
        color: getThemeColor(),
        transparent: true,
        opacity: 0.5,
      });

    const floatingParticles: THREE.Mesh[] =
      [];

    for (
      let index = 0;
      index < (isMobile ? 8 : 14);
      index += 1
    ) {
      const particle =
        new THREE.Mesh(
          floatingParticleGeometry,
          floatingParticleMaterial,
        );

      const angle =
        Math.random() *
        Math.PI *
        2;

      const radius =
        1.6 +
        Math.random() * 1.5;

      particle.position.set(
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 2.5,
        Math.sin(angle) * radius,
      );

      particle.userData = {
        speed:
          0.3 +
          Math.random() * 0.5,

        offset:
          Math.random() *
          Math.PI *
          2,
      };

      particleGroup.add(
        particle,
      );

      floatingParticles.push(
        particle,
      );
    }

    /*
     * ----------------------------------------
     * Mouse Interaction
     * ----------------------------------------
     */

    const mouse = {
      x: 0,
      y: 0,
    };

    const targetRotation = {
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
     * ----------------------------------------
     * Reduced Motion
     * ----------------------------------------
     */

    const reducedMotionQuery =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      );

    let prefersReducedMotion =
      reducedMotionQuery.matches;

    const handleReducedMotionChange = (
      event: MediaQueryListEvent,
    ) => {
      prefersReducedMotion =
        event.matches;
    };

    reducedMotionQuery.addEventListener(
      "change",
      handleReducedMotionChange,
    );

    /*
     * ----------------------------------------
     * Visibility
     * ----------------------------------------
     */

    let isVisible = true;

    const visibilityObserver =
      new IntersectionObserver(
        ([entry]) => {
          isVisible =
            entry.isIntersecting;
        },
        {
          threshold: 0.05,
        },
      );

    visibilityObserver.observe(
      container,
    );

    /*
     * ----------------------------------------
     * Theme Observer
     * ----------------------------------------
     */

    const themeObserver =
      new MutationObserver(() => {
        const color =
          getThemeColor();

        objectMaterial.color.setHex(
          color,
        );

        innerMaterial.color.setHex(
          color,
        );

        coreMaterial.color.setHex(
          color,
        );

        orbitMaterial.color.setHex(
          color,
        );

        orbitTwoMaterial.color.setHex(
          color,
        );

        particleMaterial.color.setHex(
          color,
        );

        floatingParticleMaterial.color.setHex(
          color,
        );
      });

    themeObserver.observe(
      document.documentElement,
      {
        attributes: true,
        attributeFilter: ["class"],
      },
    );

    /*
     * ----------------------------------------
     * Resize
     * ----------------------------------------
     */

    const resizeObserver =
      new ResizeObserver(() => {
        const width =
          container.clientWidth;

        const height =
          container.clientHeight;

        if (
          width === 0 ||
          height === 0
        ) {
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
            1.75,
          ),
        );
      });

    resizeObserver.observe(
      container,
    );

    /*
     * ----------------------------------------
     * Animation
     * ----------------------------------------
     */

    const clock =
      new THREE.Clock();

    let animationFrameId = 0;

    const animate = () => {
      animationFrameId =
        requestAnimationFrame(
          animate,
        );

      if (!isVisible) {
        return;
      }

      const elapsed =
        clock.getElapsedTime();

      if (!prefersReducedMotion) {
        /*
         * Main object rotation
         */

        object.rotation.x += 0.0015;

        object.rotation.y += 0.002;

        innerObject.rotation.x -=
          0.001;

        innerObject.rotation.y -=
          0.0015;

        /*
         * Orbit rotation
         */

        orbitOne.rotation.z +=
          0.002;

        orbitTwo.rotation.y +=
          0.0015;

        /*
         * Particle rotation
         */

        particles.rotation.y +=
          0.00035;

        particles.rotation.x +=
          0.0001;

        /*
         * Floating motion
         */

        floatingParticles.forEach(
          (particle) => {
            const {
              speed,
              offset,
            } = particle.userData;

            particle.position.y +=
              Math.sin(
                elapsed * speed +
                  offset,
              ) *
              0.0008;
          },
        );

        /*
         * Mouse parallax
         */

        targetRotation.x =
          mouse.y * 0.18;

        targetRotation.y =
          mouse.x * 0.18;

        mainGroup.rotation.x +=
          (targetRotation.x -
            mainGroup.rotation.x) *
          0.025;

        mainGroup.rotation.y +=
          (targetRotation.y -
            mainGroup.rotation.y) *
          0.025;

        /*
         * Core breathing
         */

        const pulse =
          1 +
          Math.sin(
            elapsed * 1.5,
          ) *
            0.06;

        core.scale.setScalar(
          pulse,
        );
      }

      renderer.render(
        scene,
        camera,
      );
    };

    animate();

    /*
     * ----------------------------------------
     * Cleanup
     * ----------------------------------------
     */

    return () => {
      cancelAnimationFrame(
        animationFrameId,
      );

      resizeObserver.disconnect();

      visibilityObserver.disconnect();

      themeObserver.disconnect();

      reducedMotionQuery.removeEventListener(
        "change",
        handleReducedMotionChange,
      );

      container.removeEventListener(
        "pointermove",
        handlePointerMove,
      );

      objectGeometry.dispose();
      objectMaterial.dispose();

      innerGeometry.dispose();
      innerMaterial.dispose();

      coreGeometry.dispose();
      coreMaterial.dispose();

      orbitGeometry.dispose();
      orbitMaterial.dispose();

      orbitTwoGeometry.dispose();
      orbitTwoMaterial.dispose();

      particleGeometry.dispose();
      particleMaterial.dispose();

      floatingParticleGeometry.dispose();
      floatingParticleMaterial.dispose();

      renderer.dispose();

      if (
        renderer.domElement
          .parentNode ===
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
      className="h-full w-full"
    />
  );
}