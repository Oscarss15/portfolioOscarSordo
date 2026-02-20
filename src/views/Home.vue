<template>
  <div class="home">
    <section id="inicio">
      <Hero />
    </section>

    <section id="proyectos">
      <Projects />
    </section>

    <section id="tecnologias">
      <TechSection />
    </section>

    <section id="perfil">
      <About />
    </section>

    <section id="footer">
      <Footer />
    </section>
  </div>
</template>

<script setup>
import Hero from "../components/Hero.vue";
import Projects from "../components/Projects.vue";
import TechSection from "../components/TechSection.vue";
import About from "../components/About.vue";
import Footer from "../components/Footer.vue";
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
}

.about {
  padding: 50px;
  background-color: var(--color-primary);
  color: #333;
}

.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 20s forwards;
  animation-fill-mode: forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
