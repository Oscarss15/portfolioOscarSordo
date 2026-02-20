<template>
  <div>
    <div class="hamburger" @click="toggleMenu">
      <span :class="{ open: isOpen }"></span>
      <span :class="{ open: isOpen }"></span>
    </div>

    <div class="menu" :class="{ open: isOpen, closing: isClosing }">
      <ul>
        <li><a @click="goTo('inicio')">Inicio</a></li>
        <li><a @click="goTo('proyectos')">Proyectos</a></li>
        <li><a @click="goTo('tecnologias')">Tecnologías</a></li>
        <li><a @click="goTo('perfil')">Perfil</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);
const isClosing = ref(false);

const toggleMenu = () => {
  if (isOpen.value) {
    isClosing.value = true;
    setTimeout(() => {
      isOpen.value = false;
      isClosing.value = false;
    }, 1000);
  } else {
    isOpen.value = true;
  }
};

const goTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
  toggleMenu();
};
</script>

<style scoped>
.hamburger {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  z-index: 1002;
}
.hamburger span {
  display: block;
  height: 7px;
  background: var(--color-secondary);
  border-radius: 3px;
  transition: all 0.4s ease;
}
.hamburger span.open:nth-child(1) {
  transform: rotate(45deg) translate(10px, 10px);
}
.hamburger span.open:nth-child(2) {
  transform: rotate(-45deg) translate(10px, -10px);
}

.menu {
  font-family: "Science Gothic", sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--color-primary);
  transform-origin: top;
  transform: scaleY(0);
  opacity: 0;
  pointer-events: none;
  transition:
    transform 1s cubic-bezier(0.7, -1.2, 0.27, 1.5),
    opacity 0.3s ease;
  z-index: 1001;
}
.menu.open {
  transform: scaleY(1);
  opacity: 1;
  pointer-events: all;
}

.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.menu li {
  margin: 1.2rem 0;
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
  transition: all 0.6s ease-out;
}

.menu.open li:nth-child(1) {
  transition-delay: 0.2s;
  opacity: 1;
  transform: translateY(0) scale(1);
}
.menu.open li:nth-child(2) {
  transition-delay: 0.3s;
  opacity: 1;
  transform: translateY(0) scale(1);
}
.menu.open li:nth-child(3) {
  transition-delay: 0.4s;
  opacity: 1;
  transform: translateY(0) scale(1);
}
.menu.open li:nth-child(4) {
  transition-delay: 0.5s;
  opacity: 1;
  transform: translateY(0) scale(1);
}

.menu.closing li:nth-child(1) {
  transition-delay: 0.6s;
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
}
.menu.closing li:nth-child(2) {
  transition-delay: 0.5s;
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
}
.menu.closing li:nth-child(3) {
  transition-delay: 0.4s;
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
}
.menu.closing li:nth-child(4) {
  transition-delay: 0.3s;
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
}

.menu a {
  color: var(--color-secondary);
  font-size: 2rem;
  text-decoration: none;
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;
}
.menu a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 0;
  height: 3px;
  background: var(--color-tertiary);
  transition: width 0.3s ease;
}
.menu a:hover::after {
  width: 100%;
}
.menu a:hover {
  color: var(--color-tertiary);
  transform: translateY(-3px);
  text-shadow: 0 0 8px var(--color-tertiary);
}
</style>
