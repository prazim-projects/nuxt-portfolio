<script lang="js" setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import staticData from '@/data/staticData.json'

const navs = staticData.navbar.links
const route = useRoute()
const isMobileMenuOpen = ref(false)

function linkTo(path) {
  return path.startsWith('/') ? path : `/${path}`
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}

watch(() => route.fullPath, () => {
  closeMobileMenu()
})
</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <NuxtLink class="navbar-brand text-white" to="/"><em>Beal</em></NuxtLink>
      
      <button
        class="navbar-toggler bg-light"
        type="button"
        aria-label="Toggle navigation"
        :aria-expanded="isMobileMenuOpen"
        @click="toggleMobileMenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="nav-collapse" :class="{ open: isMobileMenuOpen }" id="navbarSupportedContent">
        <ul class="navbar-nav nav-list w-100 justify-content-center gap-lg-3">
          <li class="nav-item" v-for="(value, key) in navs" :key="key">
            <NuxtLink class="nav-link" :to="linkTo(value.path)" @click="closeMobileMenu">{{ value.label }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  margin-bottom: 2px;
  padding: 0.25rem 0.75rem;
  background: linear-gradient(90deg, rgba(15, 27, 44, 0.95), rgba(28, 44, 62, 0.95)) !important;
  backdrop-filter: blur(4px);
  border-bottom: 1px solid rgba(166, 201, 255, 0.28);
}

.nav-link {
  color: #f4f7ff !important;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
  padding: 0.5rem 0.5rem !important;
}

.nav-link:hover {
  color: #9dd6ff !important;
}

.navbar-brand {
  color: #f8fbff !important;
  font-weight: bold;
}

.nav-collapse {
  width: 100%;
}

@media (max-width: 991.98px) {
  .nav-collapse {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transform: translateY(-8px);
    transition: max-height 0.35s ease, opacity 0.28s ease, transform 0.35s ease;
  }

  .nav-collapse.open {
    max-height: 360px;
    opacity: 1;
    transform: translateY(0);
    margin-top: 0.4rem;
    padding: 0.35rem 0.2rem;
    border-top: 1px solid rgba(219, 236, 255, 0.3);
    background: rgba(17, 29, 45, 0.72);
    border-radius: 8px;
  }

  .nav-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.35rem;
  }

  .nav-item {
    width: 100%;
    opacity: 0;
    transform: translateY(-8px);
    transition: opacity 0.22s ease, transform 0.22s ease;
  }

  .nav-collapse.open .nav-item {
    opacity: 1;
    transform: translateY(0);
  }

  .nav-collapse.open .nav-item:nth-child(1) { transition-delay: 0.03s; }
  .nav-collapse.open .nav-item:nth-child(2) { transition-delay: 0.07s; }
  .nav-collapse.open .nav-item:nth-child(3) { transition-delay: 0.11s; }
  .nav-collapse.open .nav-item:nth-child(4) { transition-delay: 0.15s; }
  .nav-collapse.open .nav-item:nth-child(5) { transition-delay: 0.19s; }
  .nav-collapse.open .nav-item:nth-child(6) { transition-delay: 0.23s; }

  .nav-link {
    display: block;
    width: 100%;
    padding: 0.55rem 0.6rem !important;
  }
}

.router-link-active, router-link-exact-active nav-link{
  color: #9dd6ff !important;
  text-shadow: 0 0 8px #9dd6ff, 0
  
}
@media (min-width: 992px) {
  .nav-collapse {
    display: flex !important;
    max-height: none !important;
    opacity: 1 !important;
    overflow: visible;
    transform: none !important;
  }
}
</style>
