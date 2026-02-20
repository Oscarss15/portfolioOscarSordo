<template>
  <section class="about-section">
    <div class="about-header">
      <h2 class="about-title" ref="titleRef">
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

      <p class="about-subtitle fade-in" ref="subtitleRef">
        Mi experiencia y habilidades en desarrollo web y diseño
      </p>
    </div>

    <div class="about-content">
      <div class="about-left fade-in-left" ref="aboutLeftRef">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 408.000000 612.000000"
          preserveAspectRatio="xMidYMid meet"
          class="about-svg"
        >
          <g
            transform="translate(0.000000,612.000000) scale(0.100000,-0.100000)"
            fill="currentColor"
            stroke="var(--color-tertiary)"
            stroke-width="50"
          >
            <path
              d="M1815 5134 c-24 -26 -49 -61 -56 -77 -9 -22 -17 -28 -33 -24 -112 26
      -132 28 -161 17 l-30 -12 32 -26 c17 -15 55 -36 83 -47 65 -25 73 -34 59 -73
      -7 -22 -7 -36 0 -51 16 -30 13 -60 -9 -88 -24 -31 -25 -49 -4 -57 9 -3 14 -12
      11 -20 -9 -22 13 -159 28 -183 8 -12 30 -27 50 -34 29 -11 34 -17 29 -34 -4
      -11 -14 -24 -23 -30 -26 -16 -174 -64 -198 -65 -13 0 -36 -18 -61 -47 -49 -60
      -122 -181 -122 -204 0 -16 -36 -102 -64 -149 -8 -14 -35 -70 -59 -125 -49
      -107 -61 -176 -47 -255 13 -72 30 -80 182 -80 l130 0 -9 -52 c-8 -50 -9 -120
      -4 -233 3 -75 -17 -263 -39 -361 -13 -57 -13 -533 0 -642 5 -46 23 -147 41
      -225 17 -78 36 -178 41 -222 5 -44 11 -103 14 -131 4 -33 2 -54 -5 -58 -8 -5
      -6 -16 8 -34 13 -20 18 -39 15 -67 -2 -22 -7 -66 -10 -97 -6 -59 18 -342 38
      -438 12 -58 12 -69 8 -194 -1 -64 2 -83 17 -105 19 -25 19 -27 1 -45 -10 -11
      -18 -25 -18 -33 0 -7 -4 -13 -8 -13 -5 0 -16 -18 -26 -40 -9 -22 -36 -56 -58
      -77 -23 -21 -50 -47 -62 -58 -11 -11 -50 -31 -86 -45 -81 -32 -101 -62 -73
      -111 l18 -31 139 6 c77 4 167 13 200 20 34 8 100 20 148 26 48 7 93 17 100 21
      21 13 16 336 -7 395 -19 49 -18 80 5 283 8 68 10 170 6 295 -9 245 -9 325 -2
      411 3 39 8 133 9 210 4 132 30 295 47 295 8 0 16 -56 35 -268 8 -84 26 -198
      40 -254 17 -65 23 -112 19 -134 -4 -23 -1 -42 10 -59 11 -16 16 -47 16 -94 0
      -39 9 -134 20 -213 11 -79 24 -188 29 -243 5 -55 14 -111 19 -125 8 -20 4 -38
      -19 -90 l-29 -64 21 -80 c16 -60 22 -114 23 -206 1 -123 1 -124 26 -131 42
      -12 142 -9 195 4 62 16 76 44 56 110 -7 23 -17 69 -22 102 -5 33 -12 68 -15
      77 -3 9 4 25 16 36 18 17 19 20 5 32 -8 7 -15 23 -15 37 0 13 -7 35 -16 49
      -15 23 -15 28 -1 62 23 54 26 76 39 312 14 256 12 338 -7 404 -8 27 -15 76
      -15 107 0 32 -3 60 -8 62 -15 10 6 456 26 552 6 28 15 94 21 147 6 53 16 109
      23 125 6 15 10 33 8 38 -1 6 -2 53 -1 105 1 52 -3 126 -9 163 -6 37 -7 73 -3
      80 4 7 8 55 10 107 1 52 5 151 8 220 6 113 4 138 -21 255 -29 137 -30 143 -16
      245 9 69 25 113 54 145 31 36 58 178 65 342 l6 151 -51 54 c-39 40 -70 61
      -132 88 -83 35 -98 50 -110 105 -6 29 -7 30 -65 30 l-59 0 -7 35 c-10 44 6
      115 31 148 11 13 20 35 20 47 0 14 7 25 20 28 15 4 19 13 18 39 -1 19 2 40 6
      46 8 14 -30 159 -51 192 -9 14 -40 48 -68 75 -37 37 -59 50 -80 51 -17 0 -70
      4 -118 8 l-88 8 -44 -48z"
            />
          </g>
        </svg>
      </div>

      <div class="about-right" ref="aboutRightRef">
        <div class="about-text">
          <p
            v-for="(paragraph, pIndex) in aboutTextParagraphs"
            :key="pIndex"
            class="typewriter"
          >
            <span
              v-for="(word, wIndex) in paragraph.split(' ')"
              :key="wIndex"
              class="word"
            >
              <span
                v-for="(char, cIndex) in word.split('')"
                :key="cIndex"
                class="letter"
                :style="{
                  '--delay':
                    (charIndexOffset[pIndex] +
                      wCharOffsets[pIndex][wIndex] +
                      cIndex) *
                      0.03 +
                    's',
                }"
                :class="{ visible: textVisible }"
              >
                {{ char }}
              </span>

              &nbsp;
            </span>
          </p>
        </div>

        <div class="about-buttons">
          <a href="/public/docs/CvOscarSordo.pdf" download class="about-btn">
            <i class="fa-solid fa-file-pdf"></i>
            Descargar CV
          </a>
          <a
            href="/docs/Carta_recomendacion_OscarSordo.pdf"
            download
            class="about-btn outline"
          >
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

.about-svg {
  width: 40%;
  height: auto;
  color: var(--color-secondary);
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
  .about-section{
    height: auto;
  }

}
@media (max-width: 768px) {
  .about-section{
    height: auto;
  }
  .about-content {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  .about-text{
    margin-left: 20px;

  }
  .about-buttons{
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
