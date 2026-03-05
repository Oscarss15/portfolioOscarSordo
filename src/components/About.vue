<template>
  <section class="about-section">
    <div class="about-header">
      <h2 class="about-title" ref="titleRef">
        <span v-for="(char, index) in titleLetters" :key="index" class="letter"
          :style="{ '--delay': index * 0.05 + 's' }" :class="{ visible: titleVisible }">
          {{ char }}
        </span>
      </h2>

      <p class="about-subtitle fade-in" ref="subtitleRef">
        Mi experiencia y habilidades en desarrollo web y diseño
      </p>
    </div>

    <div class="about-content">
     <div class="about-left fade-in-left" ref="aboutLeftRef">
  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
       width="171.000000pt" height="181.000000pt" viewBox="0 0 171.000000 181.000000"
       preserveAspectRatio="xMidYMid meet"
       class="about-svg">
    <g transform="translate(0.000000,181.000000) scale(0.100000,-0.100000)"
       fill="currentColor" stroke="none">
      <path d="M800 1559 c-61 -21 -201 -128 -231 -176 -32 -51 -51 -146 -46 -241 2
      -48 7 -97 12 -110 6 -18 4 -21 -8 -16 -10 3 -20 -2 -26 -15 -13 -24 -14 -167
      -2 -207 5 -16 12 -41 15 -56 5 -22 12 -28 32 -28 27 0 27 1 42 -84 7 -33 21
      -77 32 -98 14 -27 20 -58 20 -104 0 -62 -1 -66 -31 -82 -67 -37 -68 -39 -30
      -71 74 -64 236 -123 255 -92 9 14 152 15 161 1 12 -19 67 -10 138 24 98 47
      125 69 108 90 -18 21 -4 187 20 243 10 24 24 70 31 104 9 45 18 63 33 69 24 9
      39 48 59 161 17 88 12 132 -15 141 -9 3 -9 16 1 57 16 69 8 168 -20 246 -18
      47 -37 74 -89 125 -37 36 -93 81 -126 100 -57 34 -63 35 -170 37 -88 2 -121
      -2 -165 -18z"/>
    </g>
  </svg>
</div>

      <div class="about-right" ref="aboutRightRef">
        <div class="about-text">
          <p v-for="(paragraph, pIndex) in aboutTextParagraphs" :key="pIndex" class="typewriter">
            <span v-for="(word, wIndex) in paragraph.split(' ')" :key="wIndex" class="word">
              <span v-for="(char, cIndex) in word.split('')" :key="cIndex" class="letter" :style="{
                '--delay':
                  (charIndexOffset[pIndex] +
                    wCharOffsets[pIndex][wIndex] +
                    cIndex) *
                  0.03 +
                  's',
              }" :class="{ visible: textVisible }">
                {{ char }}
              </span>

              &nbsp;
            </span>
          </p>
        </div>

        <div class="about-buttons">
          <a href="/docs/CvOscarSordo.pdf" target="_blank" rel="noopener noreferrer" class="about-btn">
            <i class="fa-solid fa-file-pdf"></i>
            Descargar CV
          </a>
          <a href="/docs/Carta_recomendacion_OscarSordo.pdf" target="_blank" rel="noopener noreferrer"
            class="about-btn outline">
            <i class="fa-solid fa-file-signature"></i>
            Carta de recomendación
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const title = "Perfil";
const titleLetters = title.split("");
const titleVisible = ref(false);

const subtitleRef = ref(null);

const aboutTextParagraphs = [
  "Soy un diseñador web y desarrollador full stack, con especial interés en el desarrollo front-end.",
  "Domino los lenguajes HTML, CSS, JavaScript y Vue en el front-end, así como Java, Spring y MySQL en el back-end.",
  "Me considero una persona responsable, con aprendizaje rápido y que disfruta trabajando en equipo, aportando un buen ambiente.",
];
const textVisible = ref(false);

const charIndexOffset = aboutTextParagraphs.map((p, i, arr) =>
  arr.slice(0, i).reduce((sum, cur) => sum + cur.length + 1, 0),
);

const wCharOffsets = aboutTextParagraphs.map((p) => {
  const words = p.split(" ");
  const offsets = [];
  let acc = 0;
  for (const w of words) {
    offsets.push(acc);
    acc += w.length + 1;
  }
  return offsets;
});

const titleRef = ref(null);
const aboutLeftRef = ref(null);
const aboutRightRef = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === titleRef.value) titleVisible.value = true;

          if (entry.target === subtitleRef.value)
            entry.target.classList.add("visible");

          if (entry.target === aboutLeftRef.value)
            entry.target.classList.add("visible");

          if (entry.target === aboutRightRef.value) textVisible.value = true;

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 },
  );

  observer.observe(titleRef.value);
  observer.observe(subtitleRef.value);
  observer.observe(aboutLeftRef.value);
  observer.observe(aboutRightRef.value);
});
</script>

<style scoped>
.about-section {
  height: 100vh;
  width: 100%;
  background: var(--color-primary);
  color: var(--color-secondary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Science Gothic", sans-serif;
  padding: 2rem 1rem;
  box-sizing: border-box;
}
.about-image{
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
 
  
}
.about-header {
  text-align: center;
  margin-bottom: 40px;
}

.about-title {
  font-size: clamp(2.5rem, 6vw, 8rem);
  margin: 0;
  display: inline-flex;
  gap: 2px;
  cursor: default;
}

.letter {
  opacity: 0;
  display: inline-block;
}

.letter.visible {
  animation: dropTitle 0.4s ease forwards;
  animation-delay: var(--delay);
}
.about-svg {
  width: 95%;
  max-width: 300px;
  height: auto;
  display: block;
  color: var(--color-secondary);         
}

.about-svg path {
  stroke: var(--color-tertiary);
  stroke-width: 20;
  fill: currentColor;

  stroke-dasharray: 5000;
  stroke-dashoffset: 5000;
}

.about-left.visible .about-svg path {
  animation: drawBorder 4s linear forwards;
}
@keyframes drawBorder {
  to {
    stroke-dashoffset: 0;        
  }
}                 
@keyframes dropTitle {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.about-subtitle {
  font-size: clamp(1rem, 1.5vw, 1.5rem);
  margin-top: 10px;

  cursor: default;
}

.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: 0.7s ease;
}

.fade-in.visible {
  opacity: 0.8;
  transform: translateY(0);
}

.about-content {
  display: flex;
  gap: 1.5rem;
  max-width: 900px;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.about-left {
  flex: 1;
  opacity: 0;
  transform: translateX(-30px);
  transition: 0.7s ease;
  display: flex;
  justify-content: center;
}

.about-left.visible {
  opacity: 1;
  transform: translateX(0);
}


.about-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}

.about-text p {
  margin-bottom: -0.3rem;
  white-space: normal;
  opacity: 0.8;
  text-align: justify;
  text-align-last: left;
  font-size: clamp(1rem, 1.1vw, 1.5rem);
}

.word {
  white-space: nowrap;
  display: inline-block;
}

.typewriter .letter {
  opacity: 0;
}

.typewriter .letter.visible {
  animation: typing 0.03s forwards;
  animation-delay: var(--delay);
}

@keyframes typing {
  to {
    opacity: 1;
  }
}

.about-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 1.2rem;
}

.about-btn {
  padding: 0.7rem 1.4rem;
  border-radius: 25px;
  background: var(--color-tertiary);
  color: var(--color-primary);
  text-decoration: none;
  font-size: clamp(0.5rem, 0.9vw, 1.5rem);
  transition: 0.3s ease;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-btn.outline {
  background: transparent;
  border: 2px solid var(--color-secondary);
  color: var(--color-secondary);
}

.about-btn:hover {
  transform: translateY(-2px);
  background-color: var(--color-secondary);
  color: var(--color-tertiary);
}

@media (max-width: 1024px) {
  .about-section {
    height: auto;
  }

}

@media (max-width: 768px) {
  .about-section {
    height: auto;
  }

  .about-content {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .about-text {
    margin-left: 20px;

  }

  .about-buttons {
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .about-left img {
    width: 80%;
    max-width: none;
  }
}
</style>
