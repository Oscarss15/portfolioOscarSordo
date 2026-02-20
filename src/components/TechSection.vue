<template>
  <section class="tech-section">
    <div class="tech-header">
      <h2 class="tech-title" ref="titleRef">
        <span
          v-for="(char, index) in titleLetters"
          :key="index"
          class="letter"
          :style="{ '--delay': index * 0.05 + 's' }"
          :class="{ visible: titleVisible }"
        >
          {{ char }}
        </span>
      </h2>

      <p class="tech-subtitle fade-in" ref="subtitleRef">
        Herramientas y lenguajes que utilizo
      </p>
    </div>

    <div class="tech-grid">
      <div
        class="tech-item"
        v-for="(tech, i) in techs"
        :key="tech.name"
        :data-index="i"
      >
        <div class="tech-box">
          <component :is="tech.iconComponent" class="tech-icon" />
         <span
  class="tech-name"
  :class="{ 'small-text': tech.name === 'Posicionamiento' }"
>
  {{
    tech.name === "Posicionamiento" && isMobile
      ? "Posición"
      : tech.name
  }}
</span>
        </div>

       <span class="tech-name-below">
  {{
    tech.name === "Posicionamiento" && isMobile
      ? "Posición"
      : tech.name
  }}
</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

import HtmlIcon from "../assets/icons/html.svg";
import CssIcon from "../assets/icons/css.svg";
import BootstrapIcon from "../assets/icons/bootstrap.svg";
import TailwindIcon from "../assets/icons/tailwind.svg";
import JsIcon from "../assets/icons/javascript.svg";
import VueIcon from "../assets/icons/vue.svg";
import FigmaIcon from "../assets/icons/figma.svg";
import WordpressIcon from "../assets/icons/wordpress.svg";

import JavaIcon from "../assets/icons/java.svg";
import SpringIcon from "../assets/icons/spring.svg";
import MySQLIcon from "../assets/icons/mysql.svg";
import PostmanIcon from "../assets/icons/postman.svg";

import GithubIcon from "../assets/icons/github.svg";
import SeoIcon from "../assets/icons/seo.svg";
import PosicionamientoIcon from "../assets/icons/posicionamiento.svg";
import JiraIcon from "../assets/icons/jira.svg";

const techs = [
  { name: "HTML", iconComponent: HtmlIcon },
  { name: "CSS", iconComponent: CssIcon },
  { name: "Bootstrap", iconComponent: BootstrapIcon },
  { name: "Tailwind", iconComponent: TailwindIcon },
  { name: "JavaScript", iconComponent: JsIcon },
  { name: "Vue", iconComponent: VueIcon },
  { name: "Figma", iconComponent: FigmaIcon },
  { name: "Wordpress", iconComponent: WordpressIcon },

  { name: "Java", iconComponent: JavaIcon },
  { name: "Spring", iconComponent: SpringIcon },
  { name: "MySQL", iconComponent: MySQLIcon },
  { name: "Postman", iconComponent: PostmanIcon },

  { name: "Git/GitHub", iconComponent: GithubIcon },
  { name: "SEO", iconComponent: SeoIcon },
  { name: "Posicionamiento", iconComponent: PosicionamientoIcon },
  { name: "Jira", iconComponent: JiraIcon },
];

const title = "Tecnologías";
const titleLetters = title.split("");

const titleRef = ref(null);
const subtitleRef = ref(null);
const titleVisible = ref(false);

onMounted(() => {
  const boxes = document.querySelectorAll(".tech-box");
  const columns = 8;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === titleRef.value) {
            titleVisible.value = true;
          }

          if (entry.target === subtitleRef.value) {
            entry.target.classList.add("visible");
          }

          if (entry.target.classList.contains("tech-box")) {
            const index = parseInt(
              entry.target.closest(".tech-item").dataset.index,
            );
            const row = Math.floor(index / columns);
            const col = index % columns;
            entry.target.style.transitionDelay = `${row * 0.15 + col * 0.15}s`;
            entry.target.classList.add("visible");
          }

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 },
  );

  observer.observe(titleRef.value);
  observer.observe(subtitleRef.value);
  boxes.forEach((el) => observer.observe(el));
});

const isMobile = ref(window.innerWidth <= 768);

const handleResize = () => {
  isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});
</script>

<style scoped>
.tech-section {
  width: 100%;
  height: 100vh;
  background: var(--color-primary);
  color: var(--color-secondary);
  font-family: "Science Gothic", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2vh;
  
}

.tech-header {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tech-title {
  font-size: clamp(2.5rem, 6vw, 8rem);
  display: inline-flex;
  gap: 2px;
  margin-bottom: 0;
}

.letter {
  opacity: 0;
  transform: translateY(-20px);
}

.letter.visible {
  animation: dropTitle 0.4s ease forwards;
  animation-delay: var(--delay);
}

@keyframes dropTitle {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.tech-subtitle {
  opacity: 0.8;
  margin-top: 0.5rem;
  font-size: clamp(1rem, 1.5vw, 1.5rem);
}

.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: 0.7s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

.tech-grid {
  width: 85%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 25px;
  margin-top: 3vh;
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tech-box {
  position: relative;
  aspect-ratio: 1 / 1;
  width: 100%;
  background: rgba(var(--color-secondary-rgb), 0.06);
  border: 2px solid rgba(var(--color-secondary-rgb), 0.15);
  border-radius: 20px;
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.tech-box.visible {
  opacity: 1;
  transform: translateY(0);
}

.tech-icon {
  width: 55%;
  transition:
    transform 0.5s ease,
    opacity 0.5s ease;
}

.tech-name {
  position: absolute;
  opacity: 0;
  transform: translateX(-100%);
  transition: 0.5s ease;
  pointer-events: none;
}

.tech-name.small-text {
  font-size: clamp(0.5rem, 0.8vw, 1.5rem);
}

.tech-name-below {
  margin-top: 8px;
  font-size: clamp(0.5rem, 0.9vw, 1.5rem);
  opacity: 0.8;
  transition: 0.3s ease;
  min-height: 1rem;
}

.tech-item:hover .tech-icon {
  transform: translateX(100%);
  opacity: 0;
}

.tech-item:hover .tech-name {
  transform: translateX(0);
  opacity: 1;
}

.tech-item:hover .tech-name-below {
  opacity: 0;
  transform: translateY(6px);
}

.tech-item:hover .tech-box {
  border-color: var(--color-tertiary);
  box-shadow: 0 0 20px var(--color-tertiary);
}
@media (max-width: 1024px) {
   .tech-section{
  height: 100vh;
 
  
 }
 .tech-grid{
  row-gap: auto;
 }
}
@media (max-width: 768px) {
  .tech-grid {
    grid-template-columns: repeat(4, 1fr);
   
  }
  .tech-section{
  height: auto;
  

 }
}


</style>
