<template>
  <footer ref="footerRef" class="contFooter" :class="{ active: isVisible }">
    <p>
      Oscar Sordo Somohano · Programador & Diseñador Web · Portfolio creado con
      Vue
    </p>

    <div class="socials">
      <a
        href="https://www.linkedin.com/in/oscar-sordo-somohano/"
        target="_blank"
        rel="noopener"
        aria-label="LinkedIn"
      >
        <i class="fab fa-linkedin-in"></i>
      </a>

      <a
        href="https://github.com/Oscarss15"
        target="_blank"
        rel="noopener"
        aria-label="GitHub"
      >
        <i class="fab fa-github"></i>
      </a>

      <a href="mailto:oscar15-91@hotmail.com" aria-label="Email">
        <i class="fas fa-envelope"></i>
      </a>

      <a
        href="https://wa.me/34666272696"
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
      >
        <i class="fab fa-whatsapp"></i>
      </a>
    </div>

    <p>© 2026. Todos los derechos reservados.</p>
  </footer>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const footerRef = ref(null);
const isVisible = ref(false);

let observer = null;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        isVisible.value = true;
        observer.disconnect();
      }
    },
    {
      threshold: 0.2,
    },
  );

  if (footerRef.value) {
    observer.observe(footerRef.value);
  }
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
});
</script>

<style scoped>
.contFooter {
  position: relative;
  width: 100%;
  background-color: var(--color-tertiary);
  font-family: "Science Gothic", sans-serif;
  font-size: 0.8rem;
  padding: 10px 0;
  overflow: hidden;
}

.contFooter::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 5px;
  width: 0%;
  background-color: var(--color-secondary);
}

.contFooter.active::before {
  animation: growLine 3s linear forwards;
  animation-delay: 0.2s;
}

@keyframes growLine {
  from {
    width: 0%;
  }

  to {
    width: 100%;
  }
}

p {
  text-align: center;
  color: var(--color-primary);
  margin: 5px 0;
  opacity: 0.8;
}

.socials {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin: 2px 0;
}

.socials a {
  color: var(--color-primary);
  font-size: 1.2rem;
  opacity: 1;
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.socials a:hover {
  opacity: 1;
  transform: translateY(-2px);
}

.socials a:hover .fa-linkedin-in {
  color: var(--color-secondary);
}

.socials a:hover .fa-github {
  color: var(--color-secondary);
}

.socials a:hover .fa-envelope {
  color: var(--color-secondary);
}

.socials a:hover .fa-whatsapp {
  color: var(--color-secondary);
}

@media (max-width: 768px) {
  .contFooter p {
    padding: 0 10px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .contFooter.active::before {
    animation: none;
    width: 100%;
  }

  .socials a:hover {
    transform: none;
  }
}
</style>
