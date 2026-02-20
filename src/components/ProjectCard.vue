<template>
  <div
    class="project-card"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="card-inner" :class="{ flipped: isFlipped }">
      <div class="card-face front">
        <div class="contImagen">
          <div
            class="img"
            :style="{ backgroundImage: 'url(' + project.image + ')' }"
          >
            <component
              v-if="currentModel"
              :is="currentModel"
              :active="isHovered"
            />
          </div>
        </div>

        <div class="contTitulo">{{ project.title }}</div>

        <div class="contTech">
          <div
            class="techBox"
            v-for="tech in project.tech"
            :key="tech"
            :data-tech="tech"
          >
            <component :is="getTechIcon(tech)" class="tech-icon" />
          </div>
        </div>

        <div class="contActions">
          <div class="btnAction" @click="flipCard">
            <span>
              <svg class="icon" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 4a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm1 12h-2v-7h2v7z"
                />
              </svg>
              Info
            </span>
          </div>
          <a
            class="btnAction"
            :href="project.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <svg class="icon" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"
                />
                <path fill="currentColor" d="M5 5h5V3H3v7h2V5z" />
              </svg>
              Visitar
            </span>
          </a>
        </div>
      </div>

      <div class="card-face back">
        <div class="backContent">
          <div class="backText">
            <p>{{ project.description }}</p>
          </div>

          <div class="backButton">
            <div class="btnAction" @click="flipCard">
              <span>
                <svg class="icon" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M10 19l-7-7 7-7v4h8v6h-8v4z" />
                </svg>
                Volver
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

import HtmlIcon from "../assets/icons/html.svg?component";
import CssIcon from "../assets/icons/css.svg?component";
import VueIcon from "../assets/icons/vue.svg?component";
import JsIcon from "../assets/icons/javascript.svg?component";
import WordpressIcon from "../assets/icons/wordpress.svg?component";
import SeoIcon from "../assets/icons/seo.svg?component";
import SpringIcon from "../assets/icons/spring.svg?component";
import ProjectOne3D from "./ProjectOne3D.vue";
import ProjectTwo3D from "./ProjectTwo3D.vue";

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const componentsMap = {
  ProjectOne3D,
  ProjectTwo3D,
};

const currentModel = computed(() => {
  return componentsMap[props.project.model];
});

const isHovered = ref(false);
const isFlipped = ref(false);
const flipCard = () => {
  isFlipped.value = !isFlipped.value;
};

const techIcons = {
  HTML: HtmlIcon,
  CSS: CssIcon,
  Vue: VueIcon,
  JavaScript: JsIcon,
  Wordpress: WordpressIcon,
  Seo: SeoIcon,
  Spring: SpringIcon,
};

const getTechIcon = (tech) => techIcons[tech] || HtmlIcon;
</script>

<style scoped>
.project-card {
  width: 100%;
  height: 50vh;
  border-radius: 20px;
  border: 2px solid rgba(var(--color-secondary-rgb), 0.15);
  background: rgba(var(--color-secondary-rgb), 0.06);
  backdrop-filter: blur(8px);
  perspective: 1200px;
  transition:
    0.3s ease,
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  border-color: var(--color-tertiary);
  box-shadow: 0 0 15px var(--color-tertiary);
}

.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.card-inner.flipped {
  transform: rotateY(180deg);
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  top: 0;
  left: 0;
  border-radius: 20px;
  padding: 0;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}

.front {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.back {
  transform: rotateY(180deg);
  justify-content: center;
  align-items: center;
}

.backContent {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 12px;
}

.backText {
  width: 100%;
  height: 70%;
  flex: 0 0 80%;
  overflow-y: auto;
  color: var(--color-tertiary);
  white-space: pre-line;
}
.backText p {
  font-size: clamp(1rem, 0.8vw, 1.5rem);
  line-height: 1.5rem;
  text-align: center;
  padding: 5%;
}

.backText {
  overflow-y: auto;
  scrollbar-width: 15px;
  scrollbar-color: var(--color-tertiary) transparent;
}

.backText::-webkit-scrollbar {
  width: 6px;
}

.backText::-webkit-scrollbar-thumb {
  background: var(--color-tertiary);
  border-radius: 20px;
}
.backButton {
  width: 100%;
  flex: 0 0 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contActions {
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
}

.btnAction {
  width: 35%;
  height: 45%;
  border-radius: 10px;
  border: 2px solid var(--color-tertiary);
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(var(--color-tertiary-rgb), 0.85);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition:
    color 0.3s ease,
    transform 0.3s ease,
    border-radius 0.3s ease;
  font-size: clamp(1rem, 0.8vw, 1.5rem);
  text-decoration: none;
}

.btnAction::before {
  content: "";
  position: absolute;
  inset: 0;
  background: var(--color-tertiary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s ease;
  z-index: 0;
  pointer-events: none;
}

.btnAction span {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 8px;
}

.icon {
  width: 16px;
  height: 16px;
}

.btnAction:hover::before {
  transform: scaleX(1);
}
.btnAction:hover {
  color: var(--color-primary);
  border-radius: 2px;
}

.contImagen {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img {
  width: 60%;
  height: 80%;
  border-radius: 15px;
}
.contTitulo {
  width: 100%;
  height: 10%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-tertiary);
  font-size: clamp(1rem, 1.5vw, 1.5rem);
}
.contTech {
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
}

.techBox {
  width: 15%;
  height: 50%;
  border-radius: 8px;
  border: 2px solid rgba(var(--color-tertiary-rgb), 0.55);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 8px var(--color-primary);
  transition: 0.3s ease;
  color: rgba(var(--color-secondary-rgb), 0.55);
  position: relative;
}

.techBox .tech-icon {
  width: 18px;
  height: 18px;
  fill: currentColor;
  transition:
    transform 0.6s ease,
    fill 0.3s ease;
}

.techBox:hover .tech-icon {
  transform: rotate(360deg);
  fill: var(--color-primary);
  color: var(--color-secondary);
}

.techBox::after {
  content: attr(data-tech);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-8px);
  background-color: rgba(var(--color-secondary-rgb), 0.9);
  color: var(--color-primary);
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 0.7rem;
  opacity: 0;
  pointer-events: none;
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  white-space: nowrap;
  z-index: 10;
}

.techBox:hover::after {
  opacity: 1;
  transform: translateX(-50%) translateY(-12px);
}
</style>
