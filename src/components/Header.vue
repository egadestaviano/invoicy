<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-zinc-200">
    <div class="bg-gradient-to-r bg-orange-500/80 backdrop-blur-lg">
      <div class="max-w-6xl mx-auto py-3 flex items-center justify-between">
        <RouterLink to="/" class="flex items-center -ml-4">
          <img src="/icon.svg" alt="Logo Invoicy" class="h-12 w-12" />
          <span class="text-xl font-bold text-white tracking-tight">Invoicy</span>
        </RouterLink>

        <nav class="flex gap-1 text-sm font-medium">
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
      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>