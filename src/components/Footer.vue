<template>
  <footer class="w-full border-t border-orange-500/15">
    <div class="bg-white">
      <div class="max-w-6xl mx-auto flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p class="text-lg font-semibold text-slate-900">Invoicy</p>
          <p class="mt-2 max-w-xl text-sm leading-7 text-slate-600">
            A cleaner way to create polished invoices, organize billing details, and export ready-to-send PDFs.
          </p>
        </div>

        <div class="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600">
          <RouterLink to="/" class="transition hover:text-orange-600">Home</RouterLink>
          <RouterLink to="/generator" class="transition hover:text-orange-600">Generator</RouterLink>
          <!-- <a href="mailto:support@invoicy.app" class="transition hover:text-orange-600">support@invoicy.app</a> -->
        </div>
      </div>
    </div>

    <div class="bg-slate-950">
      <div class="max-w-6xl mx-auto text-center text-white/85 text-sm py-3 px-6">
        (c) 2026 Invoicy. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
