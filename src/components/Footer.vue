<template>
  <footer class="w-full border-t border-zinc-200 bg-white mt-auto">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-16 flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
      <div class="max-w-sm">
        <div class="flex items-center gap-2.5">
          <img src="/icon.svg" alt="Logo Invoicy" class="h-10 w-10 rounded-lg" />
          <p class="text-xl font-bold text-orange-500 tracking-tight">Invoicy</p>
        </div>
        <p class="mt-4 text-sm text-slate-500 leading-relaxed">
          Create professional invoices easily. Set up billing details and export to PDF in seconds.
        </p>
      </div>

      <div class="flex gap-8 text-sm font-medium text-slate-600">
        <RouterLink to="/" class="hover:text-orange-500 transition-colors">Home</RouterLink>
        <RouterLink to="/generator" class="hover:text-orange-500 transition-colors">Generator</RouterLink>
      </div>
    </div>

    <div class="border-t border-zinc-100 bg-slate-50/50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-xs text-slate-400 font-medium tracking-wide">© 2026 Invoicy. All rights reserved.</p>
        <div class="flex items-center gap-4">
          <p class="text-xs text-slate-400 font-medium">Simple &amp; Elegant</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>