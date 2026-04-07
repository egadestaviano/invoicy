<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-orange-500/20 bg-white/75 backdrop-blur-xl">
    <div class="bg-gradient-to-r from-orange-500 via-orange-500 to-amber-400 shadow-[0_10px_30px_-18px_rgba(249,115,22,0.7)]">
      <div class="max-w-6xl mx-auto flex items-center justify-between px-4 py-4 md:px-6">
        <RouterLink to="/" class="group flex items-center space-x-3">
          <img src="/favicon.ico" alt="Logo Invoicy" class="h-10 w-10" />
          <div>
            <span class="block text-xl font-semibold text-white">Invoicy</span>
            <span class="block text-xs uppercase tracking-[0.18em] text-orange-100">
              Smart Invoice Flow
            </span>
          </div>
        </RouterLink>

        <nav class="flex items-center gap-3 text-sm font-medium text-white md:gap-6 md:text-base">
          <RouterLink to="/" class="rounded-full px-3 py-1.5 transition hover:bg-white/12 hover:text-orange-50">
            Home
          </RouterLink>
          <RouterLink
            to="/generator"
            class="rounded-full px-3 py-1.5 transition hover:bg-white/12 hover:text-orange-50"
          >
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
