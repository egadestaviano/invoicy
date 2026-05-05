<template>
  <footer class="w-full border-t border-zinc-200">
    <div class="bg-white">
      <div class="max-w-6xl mx-auto pt-4 pb-12 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div class="max-w-sm">
          <div class="flex items-center -ml-3">
            <img src="/icon.svg" alt="Logo Invoicy" class="h-12 w-12" />
            <p class="text-xl font-bold text-orange-500">Invoicy</p>
          </div>
          <p class="text-base text-slate-600 leading-tight">
            Create professional invoices easily. Set up billing details and export to PDF in seconds.
          </p>
        </div>
        <div class="flex gap-6 mt-4 text-sm font-medium text-slate-700">
          <RouterLink to="/" class="hover:text-orange-600 transition-colors text-base">
            Home
          </RouterLink>
          <RouterLink to="/generator" class="hover:text-orange-600 transition-colors text-base">
            Generator
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="bg-slate-900">
      <div class="max-w-6xl mx-auto px-6 py-4 text-center text-sm text-slate-400">
        © 2026 Invoicy. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>