<template>
  <footer class="w-full border-t border-zinc-200">
    <div class="bg-white">
      <div class="max-w-6xl mx-auto px-6 py-12 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div class="max-w-sm">
          <p class="text-lg font-bold text-slate-900">Invoicy</p>
          <p class="mt-3 text-sm text-slate-600 leading-relaxed">
            Buat invoice profesional dengan mudah. Atur detail penagihan dan export ke PDF dalam hitungan detik.
          </p>
        </div>

        <div class="flex gap-6 text-sm font-medium text-slate-700">
          <RouterLink to="/" class="hover:text-orange-600 transition-colors">
            Home
          </RouterLink>
          <RouterLink to="/generator" class="hover:text-orange-600 transition-colors">
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