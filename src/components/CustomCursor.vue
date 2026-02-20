<template>
  <canvas ref="canvas" id="particle-cursor"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const canvas = ref(null);
let ctx, width, height;
let particles = [];
const maxParticles = 30;

// Función que obtiene el color terciario activo
function getTertiaryColor() {
  // Lee directamente de body, que tiene dataset.theme y variables custom
  return getComputedStyle(document.body)
    .getPropertyValue("--color-secondary-rgb")
    .trim();
}

function createParticle(x, y) {
  return {
    x,
    y,
    size: Math.random() * 6 + 2,
    alpha: 1,
    dx: (Math.random() - 0.5) * 2,
    dy: (Math.random() - 0.5) * 2,
    color: getTertiaryColor(), // cada partícula toma el color actual
  };
}

function animate() {
  ctx.clearRect(0, 0, width, height);

  particles.forEach((p, index) => {
    p.x += p.dx;
    p.y += p.dy;
    p.alpha -= 0.02;

    if (p.alpha <= 0) {
      particles.splice(index, 1);
    } else {
      ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  requestAnimationFrame(animate);
}

onMounted(() => {
  const c = canvas.value;
  ctx = c.getContext("2d");

  width = window.innerWidth;
  height = window.innerHeight;
  c.width = width;
  c.height = height;

  c.style.position = "fixed";
  c.style.top = "0";
  c.style.left = "0";
  c.style.pointerEvents = "none";
  c.style.zIndex = "9999";

  const mouseMoveHandler = (e) => {
    if (e.target.closest(".techBox")) return;

    for (let i = 0; i < 2; i++) {
      if (particles.length < maxParticles) {
        particles.push(createParticle(e.clientX, e.clientY));
      }
    }
  };

  document.addEventListener("mousemove", mouseMoveHandler);
  animate();

  onUnmounted(() => {
    document.removeEventListener("mousemove", mouseMoveHandler);
  });
});
</script>

<style scoped>
canvas#particle-cursor {
  display: block;
}
</style>