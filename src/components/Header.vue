<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-[#F99237]/20 bg-white/75 backdrop-blur-xl">
    <div class="bg-[#F99237]">
      <div class="max-w-6xl mx-auto flex items-center justify-between md:px-6">
        <RouterLink to="/" class="group flex items-center">
          <img src="/icon.svg" alt="Logo Invoicy" class="h-20 w-20" />
          <div>
            <span class="block text-xl font-semibold text-white">Invoicy</span>
            <span class="block text-xs uppercase tracking-[0.18em] text-orange-100">
              Smart Invoice Flow
            </span>
          </div>
        </RouterLink>

        <nav class="flex items-center gap-3 text-sm font-medium text-white md:gap-6 md:text-base">
          <RouterLink to="/" class=" px-3 py-1.5 transition hover:bg-white/12 hover:text-orange-50">
            Home
          </RouterLink>
          <RouterLink
            to="/generator"
            class="px-3 py-1.5 transition hover:bg-white/12 hover:text-orange-50"
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
