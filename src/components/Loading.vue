<template>
  <transition name="fade">
    <div v-if="isLoading" class="loading-screen">
      <svg class="logo" viewBox="0 0 250 100">
        <g transform="translate(125,50)">
          <text
            x="-70"
            y="0"
            class="glow glow-o"
            fill="none"
            stroke="white"
            stroke-width="8"
            font-size="60"
            text-anchor="middle"
            dominant-baseline="middle"
          >
            O
          </text>
          <text
            x="-70"
            y="0"
            class="draw draw-o"
            fill="none"
            stroke="white"
            stroke-width="2"
            font-family="Montserrat, sans-serif"
            font-size="60"
            text-anchor="middle"
            dominant-baseline="middle"
          >
            O
          </text>

          <text
            x="0"
            y="0"
            class="glow glow-s"
            fill="none"
            stroke="white"
            stroke-width="8"
            font-family="Montserrat, sans-serif"
            font-size="60"
            text-anchor="middle"
            dominant-baseline="middle"
          >
            S
          </text>
          <text
            x="0"
            y="0"
            class="draw draw-s"
            fill="none"
            stroke="white"
            stroke-width="2"
            font-family="Montserrat, sans-serif"
            font-size="60"
            text-anchor="middle"
            dominant-baseline="middle"
          >
            S
          </text>

          <text
            x="60"
            y="10"
            class="glow glow-star"
            fill="none"
            stroke="white"
            stroke-width="6"
            font-family="Montserrat, sans-serif"
            font-size="30"
            text-anchor="middle"
            dominant-baseline="middle"
          >
            ★
          </text>
          <text
            x="60"
            y="10"
            class="draw draw-star"
            fill="none"
            stroke="white"
            stroke-width="2"
            font-family="Montserrat, sans-serif"
            font-size="30"
            text-anchor="middle"
            dominant-baseline="middle"
          >
            ★
          </text>
        </g>
      </svg>
    </div>
  </transition>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  isLoading: Boolean,
});
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.logo {
  width: 300px;
  height: auto;
  display: block;
  margin: 0 auto;
}

.glow {
  opacity: 0.6;
  filter: blur(4px);
  animation: neonPulse 1.5s ease-in-out infinite alternate;
}

.draw {
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
  animation: draw 1s linear forwards;
}

.draw-o {
  animation-delay: 0s;
}
.draw-s {
  animation-delay: 1s;
}
.draw-star {
  animation-delay: 2s;
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes neonPulse {
  0% {
    opacity: 0.5;
    filter: blur(3px);
  }
  100% {
    opacity: 0.9;
    filter: blur(6px);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

@media (max-width: 480px) {
  .logo text {
    font-size: 30px;
  }

  .logo text.star {
    font-size: 20px;
  }
  .logo {
    width: 200px;
  }
}
</style>
