<template>
  <div class="model-container" ref="container"></div>
</template>

<script setup>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { ref, onMounted, onBeforeUnmount } from "vue";

const container = ref(null);
let scene, camera, renderer, model, observer, animationId;

function getColorFromCSS(varName) {
  const style = getComputedStyle(document.body);
  const color = style.getPropertyValue(varName).trim();
  if (!color) return 0x348577;
  return parseInt(color.replace("#", ""), 16);
}

function applyColor(cssVar) {
  const hex = getColorFromCSS(cssVar);
  if (!model) return;
  model.traverse((child) => {
    if (child.isMesh) {
      child.material.color.setHex(hex);
      child.material.needsUpdate = true;
    }
  });
}

function animate() {
  animationId = requestAnimationFrame(animate);
  if (model) model.rotation.y += 0.005;
  renderer.render(scene, camera);
}

function resizeRendererAndCamera() {
  if (!container.value || !camera || !renderer) return;
  const width = container.value.clientWidth;
  const height = container.value.clientHeight;

  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  if (model) {
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    const center = new THREE.Vector3();
    box.getCenter(center);
    model.position.sub(center);

    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = camera.fov * (Math.PI / 180);
    let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));
    cameraZ *= 1.0;
    camera.position.set(0, 0, cameraZ);
    camera.lookAt(0, 0, 0);

    const scaleFactor = 1.5 / maxDim;
    model.scale.set(scaleFactor, scaleFactor, scaleFactor);
  }
}

onMounted(() => {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 0, 5);

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  container.value.appendChild(renderer.domElement);

  const dirLight = new THREE.DirectionalLight(0xffffff, 1);
  dirLight.position.set(5, 10, 7.5);
  scene.add(dirLight);
  scene.add(new THREE.AmbientLight(0xffffff, 0.6));

  const loader = new GLTFLoader();
  loader.load("/models/3d.glb", (gltf) => {
    model = gltf.scene;
    applyColor("--color-tertiary");
    scene.add(model);
    resizeRendererAndCamera();
    animate();
  });

  observer = new MutationObserver(() => {
    applyColor("--color-tertiary");
  });
  observer.observe(document.body, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

  window.addEventListener("resize", resizeRendererAndCamera);
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
  if (animationId) cancelAnimationFrame(animationId);
  if (renderer) {
    renderer.dispose();
    renderer.forceContextLoss?.();
  }
  window.removeEventListener("resize", resizeRendererAndCamera);
});
</script>

<style scoped>
.model-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
</style>
