<template>
  <section class="hero">
    <div class="hero-content">
      <div class="hero-3d-space">
        <Object3D />
      </div>

      <div class="hero-texts">
        <p class="hero-specialty">
          <span id="dynamic-text" :class="animationClass">{{
            dynamicText
          }}</span>
        </p>

        <h2 class="hero-subtitle">Web Developer</h2>

        <h1 class="hero-name">
          <span>O</span><span>s</span><span>c</span><span>a</span><span>r</span>
          <span> </span>
          <span>S</span><span>o</span><span>r</span><span>d</span><span>o</span>
        </h1>
      </div>
    </div>

    <div class="wave-future wave1"></div>
    <div class="wave-future wave2"></div>
    <div class="wave-future wave3"></div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Object3D from "./Object3D.vue";

const texts = [
  "Diseño Web | Html · Css · Wordpress · Figma",
  "Front-End | JavaScript · Vue",
  "Full-Stack | Java · Spring · MySQL · Git",
  "SEO y Posicionamiento | Google Analytics · SEO on-page · SEO off-page",
];

const dynamicText = ref("");
const animationClass = ref("entering");

let index = 0;

function showNextText() {
  animationClass.value = "leaving";

  setTimeout(() => {
    dynamicText.value = texts[index];
    animationClass.value = "entering";
    index = (index + 1) % texts.length;
  }, 500);
}

onMounted(() => {
  dynamicText.value = texts[0];
  index = 1;
  setInterval(showNextText, 4000);
});
</script>

<style scoped>
.hero {
  position: relative;
  font-family: "Science Gothic", sans-serif;
  background-color: var(--color-primary);
  color: var(--color-secondary);
  height: calc(100vh - 10vh);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 5vh;
  padding-bottom: 5vh;
  overflow: hidden;
}

.hero-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: calc(100vh - 10vh);
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
}

.hero-3d-space {
  width: 45%;
  height: 65%;
  max-height: 500px;
  margin-bottom: 0;
  border-radius: 50%;
}

.hero-texts {
  height: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
}

.hero-specialty {
  font-size: clamp(1rem, 1.5vw, 1.5rem);
  color: var(--color-tertiary);
  margin-bottom: 10px;
  letter-spacing: 1px;
}

#dynamic-text {
  display: inline-block;
  opacity: 0;
  transition:
    transform 0.5s ease,
    opacity 0.5s ease;
}

.entering {
  transform: translateX(-50px);
  opacity: 0;
  animation: slideIn 0.5s forwards;
}

.leaving {
  transform: translateX(0);
  opacity: 1;
  animation: slideOut 0.5s forwards;
}

@keyframes slideIn {
  0% {
    transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideOut {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100px);
    opacity: 0;
  }
}

.hero-name span {
  display: inline-block;
  font-size: clamp(3rem, 6vw, 6rem);
  color: var(--color-tertiary);
  transition:
    transform 0.6s ease,
    color 0.3s ease;
  cursor: default;
  margin-top: -30px;
}

.hero-name span:hover {
  color: var(--color-secondary);
  transform: rotate(360deg);
}

.hero-subtitle {
  font-size: clamp(1.5rem, 2vw, 3rem);
  margin: 0;
  opacity: 0.85;
}

.wave-future {
  position: absolute;
  right: 0;
  top: 0;
  width: 50vw;
  height: 100vh;
  opacity: 0.4;
  z-index: 0;
  background: linear-gradient(
    120deg,
    var(--color-tertiary) 30%,
    transparent 70%
  );
  clip-path: polygon(60% 0%, 100% 0%, 100% 100%, 60% 100%, 40% 50%);
  animation: waveMove 10s ease-in-out infinite alternate;
}

.wave1 {
  opacity: 0.5;
  width: 45vw;
}

.wave2 {
  opacity: 0.35;
  width: 40vw;
  animation-duration: 12s;
  animation-direction: alternate-reverse;
  clip-path: polygon(65% 0%, 100% 10%, 100% 90%, 60% 100%, 45% 50%);
}

.wave3 {
  opacity: 0.25;
  width: 50vw;
  animation-duration: 15s;
  clip-path: polygon(55% 0%, 100% 0%, 100% 100%, 55% 100%, 45% 50%);
}

@keyframes waveMove {
  0% {
    clip-path: polygon(60% 0%, 100% 0%, 100% 100%, 60% 100%, 40% 50%);
  }
  50% {
    clip-path: polygon(65% 0%, 100% 5%, 100% 100%, 55% 100%, 35% 50%);
  }
  100% {
    clip-path: polygon(60% 0%, 100% 0%, 100% 100%, 60% 100%, 40% 50%);
  }
}

@media (max-width: 868px) {
  .hero {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .wave-future {
    display: none;
  }
  .hero-content {
    height: auto;
  }
  .hero-3d-space {
    width: 80%;
    height: 200px;
  }
  .hero-texts {
    height: auto;
  }
  .hero-name span {
    font-size: 2.5rem;
    pointer-events: none;
  }
  .hero-subtitle {
    font-size: 1.2rem;
  }
}

@media (max-width: 768px) {
  .hero {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hero-specialty {
    padding: 0 20px;
  }
}
@media (max-width: 480px) {
  .hero-3d-space {
    width: 90%;
    height: 180px;
  }
}
</style>
