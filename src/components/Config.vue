<template>
  <div class="config-container">
    <div class="config-panel" :class="{ open: isOpen }">
      <h3>Configuración</h3>

      <!-- Idioma -->
      <div class="config-item">
        <label class="config-label">Idioma</label>
        <div class="language-selector">
          <div
            class="language-option"
            :class="{ active: language === 'es' }"
            @click="selectLanguage('es', $event)"
          >
            <img src="https://flagcdn.com/es.svg" alt="Español" />
            <span>Español</span>
          </div>
          <div
            class="language-option"
            :class="{ active: language === 'en' }"
            @click="selectLanguage('en', $event)"
          >
            <img src="https://flagcdn.com/gb.svg" alt="English" />
            <span>English</span>
          </div>
        </div>
      </div>

      <!-- Tema -->
      <div class="config-item">
        <label class="config-label">Tema</label>
        <div class="theme-selector">
          <div
            class="theme-option"
            :class="{ active: theme === 'dark' }"
            @click="selectTheme('dark', $event)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.752 15.002A9 9 0 0112 3a9 9 0 109.752 12.002z" />
            </svg>
            Oscuro
          </div>

          <div
            class="theme-option"
            :class="{ active: theme === 'light' }"
            @click="selectTheme('light', $event)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 4.75a.75.75 0 010-1.5V4.75zm0 15.5a.75.75 0 010 1.5V20.25zm7.25-7.25a.75.75 0 011.5 0H19.25zm-15.5 0a.75.75 0 01-1.5 0H4.75zm12.02-5.28l.53-.53-.53.53zm-10.54 10.54l-.53.53.53-.53zm10.54 0l.53.53-.53-.53zm-10.54-10.54l-.53-.53.53.53zM12 7a5 5 0 100 10 5 5 0 000-10z"/>
            </svg>
            Claro
          </div>

          <div
            class="theme-option"
            :class="{ active: theme === 'custom' }"
            @click="selectTheme('custom', $event)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2a8 8 0 110 16 8 8 0 010-16z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            Custom
          </div>
        </div>

        <!-- Colores custom -->
        <transition name="fade-slide" mode="out-in">
          <div v-if="theme === 'custom'" class="custom-colors">
            <div
              class="custom-color"
              v-for="(color, key, index) in customColors"
              :key="key"
              :style="{ transitionDelay: index * 0.15 + 's' }"
            >
              <label>{{ key }}</label>
              <input
                type="color"
                v-model="customColors[key]"
                @input="updateCustomTheme"
              />
            </div>
          </div>
        </transition>
      </div>

      <!-- Notificaciones -->
      <div class="config-item">
        <label class="config-label">Notificaciones</label>
        <div class="notification-toggle" @click="toggleNotifications($event)">
          <span>{{ notificationsEnabled ? "Activadas" : "Desactivadas" }}</span>
          <svg v-if="notificationsEnabled" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 11l5-5-1-1-4 4-2-2-1 1 3 3z"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM4.646 4.646l6.708 6.708-1.414 1.414L3.232 6.06 4.646 4.646z"/>
          </svg>
        </div>
      </div>
    </div>

    <svg
      class="config-icon"
      :style="{ transform: `rotate(${rotation}deg)` }"
      @click.stop="handleClick"
      width="32"
      height="32"
      viewBox="0 0 24 24"
    >
      <path
        fill="var(--color-secondary)"
        d="M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58a.5.5 0 0 0 .11-.63l-1.92-3.32a.5.5 0 0 0-.61-.22l-2.39.96a7.03 7.03 0 0 0-1.62-.94l-.36-2.54A.5.5 0 0 0 14.29 2h-4.58a.5.5 0 0 0-.49.42l-.36 2.54c-.6.25-1.14.57-1.63.94l-2.39-.96a.5.5 0 0 0-.61.22L2.31 8.05a.5.5 0 0 0 .11.63l2.03 1.58c-.04.31-.06.64-.06.94s.02.63.06.94l-2.03 1.58a.5.5 0 0 0-.11.63l1.92 3.32c.13.23.4.32.61.22l2.39-.96c.49.38 1.03.7 1.62.95l.36 2.54c.04.24.25.42.49.42h4.58c.24 0 .46-.18.49-.42l.36-2.54c.6-.25 1.14-.57 1.62-.95l2.39.96c.22.1.48.01.61-.22l1.92-3.32a.5.5 0 0 0-.11-.63l-2.03-1.58ZM12 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z"
      />
    </svg>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";

const isOpen = ref(false);
const rotation = ref(0);
const language = ref("es");
const theme = ref("light"); // ⬅ Por defecto Light
const notificationsEnabled = ref(true);

// Colores por defecto para Custom
const customColors = ref({
  primary: "#404C6E",
  secondary: "#FFFFFF",
  tertiary: "#000000",
});

onMounted(() => {
  const savedTheme = localStorage.getItem("theme");
  const savedColors = localStorage.getItem("customColors");

  if (savedTheme) {
    theme.value = savedTheme;

    if (savedTheme === "custom" && savedColors) {
      customColors.value = JSON.parse(savedColors);
      updateCustomTheme();
    } else {
      // Para Light o Dark
      clearCustomOverrides();
      document.body.dataset.theme = savedTheme;
    }
  } else {
    // Si no hay nada guardado, usar Light
    clearCustomOverrides();
    document.body.dataset.theme = "light";
  }
});

const handleClick = () => {
  isOpen.value = !isOpen.value;
  rotation.value += 360;
};

const handleDocumentClick = (event) => {
  const panel = document.querySelector(".config-panel");
  const icon = document.querySelector(".config-icon");
  if (
    isOpen.value &&
    panel &&
    !panel.contains(event.target) &&
    icon &&
    !icon.contains(event.target)
  ) {
    isOpen.value = false;
  }
};

watch(isOpen, (newOpenState) => {
  if (newOpenState) document.addEventListener("click", handleDocumentClick);
  else document.removeEventListener("click", handleDocumentClick);
});

watch(theme, (newTheme) => {
  if (newTheme === "custom") {
    updateCustomTheme();
  } else {
    clearCustomOverrides();
    document.body.dataset.theme = newTheme;
  }
});

const selectLanguage = (lang, event) => {
  if (language.value !== lang) {
    language.value = lang;
    bounceOption(event);
  }
};

const selectTheme = (newTheme, event) => {
  if (theme.value !== newTheme) {
    theme.value = newTheme;
    bounceOption(event);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "custom") updateCustomTheme();
  }
};

const toggleNotifications = (event) => {
  notificationsEnabled.value = !notificationsEnabled.value;
  bounceOptionSmall(event);
};

// Aplicar colores custom
const updateCustomTheme = () => {
  document.body.dataset.theme = ""; // Quitar Light/Dark
  document.body.style.setProperty("--color-primary", customColors.value.primary);
  document.body.style.setProperty("--color-secondary", customColors.value.secondary);
  document.body.style.setProperty("--color-tertiary", customColors.value.tertiary);

  // Si quieres usar RGB también
  document.body.style.setProperty(
    "--color-primary-rgb",
    hexToRgb(customColors.value.primary)
  );
  document.body.style.setProperty(
    "--color-secondary-rgb",
    hexToRgb(customColors.value.secondary)
  );
  document.body.style.setProperty(
    "--color-tertiary-rgb",
    hexToRgb(customColors.value.tertiary)
  );

  localStorage.setItem("customColors", JSON.stringify(customColors.value));
};

// Limpiar overrides custom para Light/Dark
const clearCustomOverrides = () => {
  document.body.style.removeProperty("--color-primary");
  document.body.style.removeProperty("--color-secondary");
  document.body.style.removeProperty("--color-tertiary");
  document.body.style.removeProperty("--color-primary-rgb");
  document.body.style.removeProperty("--color-secondary-rgb");
  document.body.style.removeProperty("--color-tertiary-rgb");
};

// Utils
const hexToRgb = (hex) => {
  let h = hex.replace("#", "");
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  const bigint = parseInt(h, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
};

// Animaciones bounce
const bounceOption = (event) => {
  const el = event.currentTarget;
  el.classList.remove("bounce");
  void el.offsetWidth;
  el.classList.add("bounce");
};
const bounceOptionSmall = (event) => {
  const el = event.currentTarget;
  el.classList.remove("bounce-small");
  void el.offsetWidth;
  el.classList.add("bounce-small");
};
</script>
<style scoped>
/* Tu CSS actual sin cambios, ya que funciona perfectamente con var() */
.config-container { position: fixed; bottom: 25px; left: 25px; z-index: 9999; display: flex; align-items: flex-end; }
.config-icon { cursor: pointer; transition: transform 0.4s ease, filter 0.3s ease; position: relative; z-index: 10; }
.config-icon:hover { transform: scale(1.15) rotate(var(--rotation, 0deg)); filter: drop-shadow(0 0 3px rgba(255,255,255,0.2)) drop-shadow(0 0 1.5px rgba(255,255,255,0.1)); }
.config-item { margin-top: 15px; }
.config-item:first-child { margin-top: 7px; }
.config-panel { position: fixed; bottom: 20px; left: 15px; width: 240px; background: var(--color-primary, #303030); border-radius: 5px; color: var(--color-secondary, white); padding: 15px; padding-bottom: 50px; font-family: "Science Gothic", sans-serif; opacity: 0; transform: scale(0); transform-origin: bottom left; pointer-events: none; text-align: center; transition: opacity 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease; box-shadow: 0 0 10px 5px rgba(255,255,255,0.25); }
body[data-theme="light"] .config-panel { box-shadow: 0 0 10px 5px rgba(0,0,0,0.35); }
.config-panel.open { opacity: 1; transform: scale(1); pointer-events: auto; }
.bounce { animation: option-bounce 0.4s ease forwards; }
.bounce-small { animation: small-option-bounce 0.4s ease forwards; }
@keyframes option-bounce {0%{transform:scale(1);}50%{transform:scale(1.2);}70%{transform:scale(0.95);}100%{transform:scale(1);}}
@keyframes small-option-bounce {0%{transform:scale(1);}50%{transform:scale(1.1);}70%{transform:scale(0.98);}100%{transform:scale(1);}}
.config-label { display:block; font-size:0.75rem; margin-bottom:7px; font-weight:600; }
.language-selector, .theme-selector { display:flex; justify-content:center; gap:6px; flex-wrap:wrap; }
.language-option, .theme-option { display:flex; align-items:center; gap:4px; padding:5px 8px; border-radius:5px; cursor:pointer; opacity:0.7; transition: all 0.3s ease; font-size:0.7rem; justify-content:center; max-width:70px; white-space:nowrap; }
.language-option img { width:24px; height:16px; }
.language-option.active, .theme-option.active { opacity:1; background: rgba(255,255,255,0.2); }
.notification-toggle { display:flex; align-items:center; justify-content:space-between; gap:5px; padding:5px 8px; border-radius:5px; cursor:pointer; opacity:0.7; transition:all 0.3s ease; font-size:0.75rem; }
.notification-toggle:hover { opacity:1; background: rgba(255,255,255,0.2); }
.fade-slide-enter-active, .fade-slide-leave-active { transition: opacity 1s cubic-bezier(0.25,0.8,0.5,1), transform 1s cubic-bezier(0.9,0.8,0.5,1); }
.fade-slide-enter-from, .fade-slide-leave-to { opacity:0; transform:translateY(-8px); }
.fade-slide-enter-to, .fade-slide-leave-from { opacity:1; transform:translateY(0); }
.custom-colors { display:flex; flex-direction:column; gap:8px; margin-top:8px; }
.custom-color { display:flex; align-items:center; justify-content:space-between; font-size:0.75rem; }
.custom-color input[type="color"] { width:35px; height:25px; border:none; padding:0; cursor:pointer; background:none; }
</style>