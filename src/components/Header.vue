<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-zinc-200">
    <div class="bg-orange-500/80 backdrop-blur-lg">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <RouterLink to="/" class="flex items-center gap-2.5">
          <img src="/icon.svg" alt="Logo Invoicy" class="h-9 w-9 rounded-lg" />
          <span class="text-xl font-bold text-white tracking-tight">Invoicy</span>
        </RouterLink>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex gap-1 text-sm font-medium">
          <RouterLink to="/" class="px-4 py-2 text-white/90 rounded-md transition hover:bg-white/15 hover:text-white"
            active-class="bg-white/20 text-white">
            Home
          </RouterLink>
          <RouterLink to="/generator"
            class="px-4 py-2 text-white/90 rounded-md transition hover:bg-white/15 hover:text-white"
            active-class="bg-white/20 text-white">
            Generator
          </RouterLink>
        </nav>

        <!-- Mobile Hamburger Button -->
        <button
          id="mobile-menu-btn"
          @click="toggleMenu"
          class="md:hidden flex items-center justify-center w-9 h-9 rounded-md text-white hover:bg-white/15 transition"
          :aria-expanded="isMenuOpen"
          aria-label="Toggle navigation menu"
        >
          <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>

      <!-- Mobile Dropdown Menu -->
      <Transition
        enter-active-class="transition-all duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="isMenuOpen" class="md:hidden border-t border-white/20">
          <nav class="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
            <RouterLink
              to="/"
              @click="closeMenu"
              class="px-4 py-3 text-white/90 rounded-md transition hover:bg-white/15 hover:text-white text-sm font-medium"
              active-class="bg-white/20 text-white"
            >
              Home
            </RouterLink>
            <RouterLink
              to="/generator"
              @click="closeMenu"
              class="px-4 py-3 text-white/90 rounded-md transition hover:bg-white/15 hover:text-white text-sm font-medium"
              active-class="bg-white/20 text-white"
            >
              Generator
            </RouterLink>
          </nav>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>