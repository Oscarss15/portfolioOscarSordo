<template>
  <section class="projects-section">
    <div class="projects-header">
      <h2 class="projects-title">
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

      <div class="filter-buttons fade-in">
        <button
          v-for="option in filterOptions"
          :key="option.value"
          :class="{ active: currentFilter === option.value }"
          @click="currentFilter = option.value"
        >
          {{ option.label }}
        </button>
      </div>
    </div>

    <div class="cards-grid fade-in">
      <ProjectCard
        v-for="card in visibleCards"
        :key="card.id"
        :project="card"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import ProjectCard from "./ProjectCard.vue";

const title = "Proyectos";
const titleLetters = title.split("");
const titleVisible = ref(false);

const filterOptions = [
  { label: "Todos", value: "all" },
  { label: "Frontend", value: "front" },
  { label: "FullStack", value: "fullstack" },
];
const currentFilter = ref("all");

const allCards = [
  {
    id: 1,
    title: "Frutal Joker",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "Frutal Joker es un juego web interactivo de emparejar cartas desarrollado como proyecto frontend, centrado en la lógica de juego, la experiencia de usuario y la personalización visual.\n\nEl objetivo del juego es encontrar todas las parejas de cartas. A medida que el jugador avanza, los niveles introducen variaciones en la disposición y forma de mostrar las cartas, aumentando progresivamente la dificultad y dinamismo del juego.",
    image: "/images/frutal-joker.jpg",
    url: "https://frutaljoker.netlify.app",
    type: "front",
    model: "ProjectTwo3D",
  },
  {
    id: 2,
    title: "ButtonPress Gaming",
    tech: ["Wordpress", "Seo", "Css"],
    description:
      "Button Press Gaming es una web especializada en noticias, análisis y artículos de opinión sobre videojuegos, desarrollada íntegramente en WordPress.\n\nEl proyecto fue concebido como un medio digital orientado a la actualidad del sector gaming, combinando una estructura clara, diseño atractivo y optimización SEO para mejorar su visibilidad en buscadores.",
    image: "/images/landing-x.jpg",
    url: "https://buttonpressgaming.es",
    type: "front",
    model: "ProjectOne3D",
  },
  {
    id: 3,
    title: "En progreso",
    tech: ["Vue", "Spring", "Html", "Css"],
    description: "En progreso",
    image: "",
    url: "",
    type: "fullstack",
    model: "",
  },
];

const filteredCards = computed(() => {
  if (currentFilter.value === "all") return allCards;
  return allCards.filter((card) => card.type === currentFilter.value);
});

const visibleCards = computed(() => filteredCards.value);

onMounted(() => {
  const fades = document.querySelectorAll(".fade-in");
  const titleRef = document.querySelector(".projects-title");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === titleRef) titleVisible.value = true;
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 },
  );

  observer.observe(titleRef);
  fades.forEach((el) => observer.observe(el));
});
</script>

<style scoped>
.projects-section {
  width: 100%;
  min-height: 100vh;
  background: var(--color-primary);
  color: var(--color-secondary);
  font-family: "Science Gothic", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2vh;
}

.projects-header {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.projects-title {
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

.filter-buttons {
  margin-top: 0.5rem;
  display: flex;
  gap: 15px;
  justify-content: center;
}

.filter-buttons button {
  padding: 1rem 3rem;
  border-radius: 8px;
  color: var(--color-secondary);
  cursor: pointer;
  transition: 0.3s ease;
  font-family: "Science Gothic", sans-serif;
  background: rgba(var(--color-secondary-rgb), 0.06);
  border: 2px solid rgba(var(--color-secondary-rgb), 0.15);
}

.filter-buttons button.active {
  background: var(--color-tertiary);
  color: var(--color-primary);
  border-color: var(--color-tertiary);
}

.filter-buttons button:hover {
  border-color: var(--color-tertiary);
  box-shadow: 0 0 20px var(--color-tertiary);
}

.cards-grid {
  width: 85%;
  margin: 3vh auto 0 auto;
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 360px));
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

@media (max-width: 1024px) {
  .cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .projects-section {
    height: auto;
    padding-bottom: 4vh;
  }
  .cards-grid {
    grid-template-columns: 1fr;
  }
  .filter-buttons {
    width: 95%;
    display: flex;
    gap: 8px;
    margin-top: 20px;
    margin-bottom: 20px;
    justify-content: center;
  }

  .filter-buttons button {
    padding: 0.5rem 1.1rem;
    font-size: clamp(0.8rem, 1vw, 1rem);
    border-radius: 6px;
  }
}
</style>
