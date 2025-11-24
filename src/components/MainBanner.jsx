import React, { useEffect, useRef } from 'react';
import Button from './Button';

export default function ThreeDBanner({
  title = 'Hi, I’m Naeem — Frontend & UI',
  subtitle = 'Interactive 3D banner to attract clients',
}) {
  const mountRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const meshRef = useRef(null);
  const animationRef = useRef(null);

  // Pointer / drag state
  const pointerState = useRef({
    dragging: false,
    pointerId: null,
    lastX: 0,
    lastY: 0,
    velX: 0,
    velY: 0,
  });

  // Parallax state
  const parallax = useRef({
    targetX: 0,
    targetY: 0,
    currentX: 0,
    currentY: 0,
  });

  // Tunables
  const PARALLAX_STRENGTH = 0.5; // max camera offset in units
  const PARALLAX_LERP = 0.08; // smoothing (0.02 very smooth, 0.2 snappy)

  useEffect(() => {
    startThree();
    return () => stopThree();
  }, []);

  function startThree() {
    import('three').then(THREE => {
      if (!mountRef.current) return;

      const container = mountRef.current;
      const width = container.clientWidth || 800;
      const height = container.clientHeight || 450;

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x071022);

      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.set(0, 0, 5);
      cameraRef.current = camera;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio || 1);
      renderer.setSize(width, height);
      renderer.outputEncoding = THREE.sRGBEncoding;

      // Lights
      const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
      hemi.position.set(0, 20, 0);
      scene.add(hemi);

      const dir = new THREE.DirectionalLight(0xffffff, 0.9);
      dir.position.set(5, 10, 7.5);
      scene.add(dir);

      // Main geometry (your rotating object or laptop — keep your mesh)
      const geometry = new THREE.TorusKnotGeometry(0.9, 0.35, 128, 32);
      const mat = new THREE.MeshStandardMaterial({
        metalness: 0.6,
        roughness: 0.25,
        color: 0x77a6ff,
        emissive: 0x001122,
      });
      const mesh = new THREE.Mesh(geometry, mat);
      mesh.rotation.x = 0.6;
      scene.add(mesh);

      // Inner sphere
      const sphereGeo = new THREE.SphereGeometry(0.35, 32, 32);
      const sphereMat = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.2, roughness: 0.6 });
      const inner = new THREE.Mesh(sphereGeo, sphereMat);
      scene.add(inner);

      // -------------------------
      // NEW: Floating objects (animated background shards)
      // -------------------------
      const COUNT = 40; // tweak for performance (reduce on mobile)
      const floatingGroup = new THREE.Group();
      const floatingItems = []; // store per-item meta for animation & cleanup

      // base geometry + material for shards (reused where possible)
      const shardGeom = new THREE.IcosahedronGeometry(0.08, 0); // low-poly shard
      const shardMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: 0.1,
        roughness: 0.5,
        transparent: true,
        opacity: 0.95,
      });

      for (let i = 0; i < COUNT; i++) {
        const meshItem = new THREE.Mesh(shardGeom, shardMat);
        // random base position in a ring around center
        const angle = Math.random() * Math.PI * 2;
        const radius = 1.8 + Math.random() * 1.8;
        const x = Math.cos(angle) * radius;
        const y = (Math.random() - 0.5) * 1.2;
        const z = Math.sin(angle) * radius;
        meshItem.position.set(x, y, z);

        // random rotation
        meshItem.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);

        // scale variation
        const s = 0.6 + Math.random() * 1.2;
        meshItem.scale.set(s, s, s);

        floatingGroup.add(meshItem);

        floatingItems.push({
          mesh: meshItem,
          basePos: new THREE.Vector3(x, y, z),
          angle,
          radius,
          phase: Math.random() * Math.PI * 2,
          speed: 0.4 + Math.random() * 0.8,
          rotSpeed: 0.3 + Math.random() * 1.2,
          scale: s,
        });
      }

      scene.add(floatingGroup);

      // store refs
      rendererRef.current = renderer;
      sceneRef.current = scene;
      meshRef.current = { mesh, inner, floatingGroup, floatingItems, shardGeom, shardMat };

      container.appendChild(renderer.domElement);

      const onResize = () => {
        if (!container) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener('resize', onResize);

      // Animation loop
      let last = performance.now();
      const animate = (t) => {
        const dt = (t - last) / 1000;
        last = t;
        const time = t / 1000;

        // Auto rotate base
        const baseSpeedY = 0.35;
        const baseSpeedX = 0.06;

        if (meshRef.current) {
          mesh.rotation.y += baseSpeedY * dt;
          mesh.rotation.x += baseSpeedX * dt;

          // user velocity influence (from dragging)
          const s = pointerState.current;
          mesh.rotation.y += (s.velX * 0.01);
          mesh.rotation.x += (s.velY * 0.005);
          s.velX *= 0.92;
          s.velY *= 0.92;
        }

        // Animate floating objects
        for (let i = 0; i < floatingItems.length; i++) {
          const it = floatingItems[i];
          // orbital motion: slowly change angle
          it.angle += (it.speed * 0.2) * dt;
          const orbitX = Math.cos(it.angle + time * it.speed * 0.2) * it.radius;
          const orbitZ = Math.sin(it.angle + time * it.speed * 0.2) * it.radius;
          // bobbing in Y
          const bob = Math.sin(time * it.speed + it.phase) * 0.12 * (0.5 + Math.sin(it.phase) * 0.5);
          // small radial pulse
          const pulse = 1 + Math.sin(time * (it.speed * 0.6) + it.phase) * 0.05;

          it.mesh.position.x = orbitX * pulse;
          it.mesh.position.y = it.basePos.y + bob;
          it.mesh.position.z = orbitZ * pulse;

          // rotate each shard
          it.mesh.rotation.x += (0.5 * it.rotSpeed) * dt;
          it.mesh.rotation.y += (0.7 * it.rotSpeed) * dt;
          it.mesh.rotation.z += (0.3 * it.rotSpeed) * dt;

          // subtle opacity/visibility variation (flicker)
          const fade = 0.5 + (Math.sin(time * it.speed * 1.2 + it.phase) * 0.5) * 0.5; // between ~0.25..1
          it.mesh.material.opacity = 0.5 + fade * 0.5; // keep not fully transparent
        }

        // Parallax lerp
        const p = parallax.current;
        p.currentX += (p.targetX - p.currentX) * PARALLAX_LERP;
        p.currentY += (p.targetY - p.currentY) * PARALLAX_LERP;

        // Apply to camera position (subtle)
        if (cameraRef.current) {
          cameraRef.current.position.x = p.currentX * PARALLAX_STRENGTH;
          cameraRef.current.position.y = p.currentY * PARALLAX_STRENGTH * 0.6; // slightly less vertical movement
          cameraRef.current.lookAt(0, 0, 0);
        }

        renderer.render(scene, camera);
        animationRef.current = requestAnimationFrame(animate);
      };

      animationRef.current = requestAnimationFrame(animate);

      // Pointer handlers using Pointer Events (works for mouse/touch/pen)
      const canvas = renderer.domElement;
      canvas.style.touchAction = 'none';

      // Hover-based pointer move -> update parallax target continuously
      const onPointerHover = (e) => {
        const rect = container.getBoundingClientRect();
        const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
        const ny = -((e.clientY - rect.top) / rect.height - 0.5) * 2; // invert Y
        parallax.current.targetX = nx; // store target
        parallax.current.targetY = ny;
      };

      // Drag handlers (only when pointer is down) to rotate model
      const onPointerDown = (e) => {
        if (pointerState.current.dragging) return;
        pointerState.current.dragging = true;
        pointerState.current.pointerId = e.pointerId;
        pointerState.current.lastX = e.clientX;
        pointerState.current.lastY = e.clientY;
        try {
          canvas.setPointerCapture && canvas.setPointerCapture(e.pointerId);
        } catch (err) {}
      };

      const onPointerMove = (e) => {
        // always update parallax target for hover & touch move
        onPointerHover(e);

        // if dragging, use movement for rotation
        if (!pointerState.current.dragging || e.pointerId !== pointerState.current.pointerId) return;
        e.preventDefault && e.preventDefault();
        const x = e.clientX;
        const y = e.clientY;
        const dx = x - pointerState.current.lastX;
        const dy = y - pointerState.current.lastY;
        pointerState.current.lastX = x;
        pointerState.current.lastY = y;
        if (meshRef.current) {
          meshRef.current.mesh.rotation.y += dx * 0.01;
          meshRef.current.mesh.rotation.x += dy * 0.005;
        }
        pointerState.current.velX = dx;
        pointerState.current.velY = dy;
      };

      const onPointerUp = (e) => {
        if (!pointerState.current.dragging || e.pointerId !== pointerState.current.pointerId) return;
        pointerState.current.dragging = false;
        try {
          canvas.releasePointerCapture && canvas.releasePointerCapture(e.pointerId);
        } catch (err) {}
        pointerState.current.pointerId = null;
      };

      // Attach listeners
      canvas.addEventListener('pointermove', onPointerMove, { passive: false }); // handles hover + drag
      canvas.addEventListener('pointerdown', onPointerDown, { passive: false });
      canvas.addEventListener('pointerup', onPointerUp);
      canvas.addEventListener('pointercancel', onPointerUp);
      canvas.addEventListener('pointerleave', onPointerUp);

      // Friendly: also listen for mouse leaving the container to reset parallax
      container.addEventListener('mouseleave', () => {
        parallax.current.targetX = 0;
        parallax.current.targetY = 0;
      });

      // cleanup function
      rendererRef.current._cleanup = () => {
        cancelAnimationFrame(animationRef.current);
        window.removeEventListener('resize', onResize);
        try {
          canvas.removeEventListener('pointermove', onPointerMove);
          canvas.removeEventListener('pointerdown', onPointerDown);
          canvas.removeEventListener('pointerup', onPointerUp);
          canvas.removeEventListener('pointercancel', onPointerUp);
          canvas.removeEventListener('pointerleave', onPointerUp);
        } catch (e) {}
        try {
          container.removeChild(canvas);
        } catch (e) {}
        // dispose geometry/materials
        try {
          geometry && geometry.dispose && geometry.dispose();
          mat && mat.dispose && mat.dispose();
          sphereGeo && sphereGeo.dispose && sphereGeo.dispose();
          sphereMat && sphereMat.dispose && sphereMat.dispose();
        } catch (err) {}
        // dispose shard geometry/material only once
        try {
          shardGeom && shardGeom.dispose && shardGeom.dispose();
          shardMat && shardMat.dispose && shardMat.dispose();
        } catch (err) {}
        // dispose each floating mesh (three disposes geometry/material are shared)
        floatingItems.forEach(it => {
          // nothing to individually dispose if sharing geometry/material, but if you create per-item material, dispose here
        });
        renderer.dispose();
      };
    }).catch(err => {
      console.error('Failed to load three:', err);
    });
  }

  function stopThree() {
    const renderer = rendererRef.current;
    if (renderer && renderer._cleanup) renderer._cleanup();
    rendererRef.current = null;
    sceneRef.current = null;
    cameraRef.current = null;
    meshRef.current = null;
    animationRef.current = null;
  }

  return (
    <div className="banner-section w-full mx-auto section-padding xl:pd-0">
      <div className="banner-content-wrap grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-3xl font-bold mb-4">{title}</h2>
          <p className="text-1x mb-6">{subtitle}</p>
          <div className="flex gap-3">
            <Button
                className='md:wd-60 md:h-17 w-60 h-12'
                id='work'
                text='See my Work'
            />
            <a
              href="#contact"
              className="btn-hire w-30 h-15 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-gray-200 hover:bg-gray-50 transition"
            >
              Hire Me
            </a>
          </div>
        </div>

        <div className="banner-modal-outer relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden border border-gray-200 bg-gradient-to-tr from-[#071022] to-[#0b1630]">
          <div ref={mountRef} className="absolute inset-0" />
          <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
            <div className="text-center text-white/90">
                <div className="text-xl font-semibold">Interactive 3D UI/UX | Frontend Experience</div>
                <div className="text-sm mt-2 text-white/70">React · Next.js · Three.js · GSAP Animations · WordPress · Webflow</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
