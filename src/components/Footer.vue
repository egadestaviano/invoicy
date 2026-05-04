<template>
  <footer class="w-full border-t border-[#F99237]/15">
    <div class="bg-white">
      <div class="max-w-6xl mx-auto flex flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <p class="text-lg font-semibold text-[#031846]">Invoicy</p>
          <p class="mt-2 max-w-xl text-sm leading-7 text-slate-600">
            A cleaner way to create polished invoices, organize billing details, and export ready-to-send PDFs.
          </p>
        </div>

        <div class="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600">
          <RouterLink to="/" class="transition hover:text-[#E6712B]">Home</RouterLink>
          <RouterLink to="/generator" class="transition hover:text-[#E6712B]">Generator</RouterLink>
          <!-- <a href="mailto:support@invoicy.app" class="transition hover:text-[#E6712B]">support@invoicy.app</a> -->
        </div>
      </div>
    </div>

    <div class="bg-[#031846]">
      <div class="max-w-6xl mx-auto px-6 py-3 text-center text-sm text-white/85">
        (c) 2026 Invoicy. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
