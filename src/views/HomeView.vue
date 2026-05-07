<script setup>
import { RouterLink } from 'vue-router'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

import heroMockup from '@/assets/images/hero_mockup.png';
import appPreview from '@/assets/images/app_preview.png';
</script>

<template>
  <div class="min-h-screen bg-white text-[#031846]">
    <Header />

    <main class="pt-[61px]">
      <!-- Hero Section -->
      <section class="pb-16 md:pb-24 overflow-hidden">
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <div class="grid md:grid-cols-2 gap-8 md:gap-16 items-center py-10 md:py-20">
            <div class="space-y-6 md:space-y-10 text-left">
              <div class="space-y-4 md:space-y-6">
                <p class="text-xs font-bold uppercase tracking-[0.2em] text-[#c05a1a]">
                  Introducing Invoicy
                </p>
                <h1 class="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] text-[#031846]">
                  Professional invoices,<br />in minutes.
                </h1>
                <p class="max-w-xl text-base md:text-xl leading-relaxed text-slate-500">
                  Draft invoices, add your brand assets, and download a polished PDF from one focused, elegant workflow.
                </p>
              </div>

              <div class="flex flex-col sm:flex-row gap-3 pt-2">
                <RouterLink to="/generator"
                  class="inline-flex items-center justify-center rounded bg-[#F99237] px-6 py-3.5 text-sm font-semibold text-white transition duration-200 hover:bg-[#0a2663]">
                  Open Generator
                </RouterLink>
                <a href="#features"
                  class="inline-flex items-center justify-center rounded border border-slate-200 px-6 py-3.5 text-sm font-semibold text-slate-600 transition duration-200 hover:bg-slate-50">
                  Learn More
                </a>
              </div>
            </div>

            <div class="relative">
              <div class="absolute -inset-4 bg-orange-50/50 rounded-full blur-3xl -z-10"></div>
              <img :src="heroMockup" alt="Professional Invoice Mockup"
                class="w-full max-h-72 md:max-h-none h-auto object-contain drop-shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 pt-8 md:pt-16">
            <div
              class="text-left border-2 border-slate-100 p-5 sm:p-6 md:p-8 rounded-sm hover:border-[#F99237] transition-colors duration-300">
              <p class="text-3xl md:text-4xl font-bold text-[#031846]">3 steps</p>
              <p class="mt-3 md:mt-4 text-sm text-slate-500 uppercase tracking-widest leading-relaxed">Simple
                &<br />streamlined</p>
            </div>
            <div
              class="text-left border-2 border-slate-100 p-5 sm:p-6 md:p-8 rounded-sm hover:border-[#F99237] transition-colors duration-300">
              <p class="text-3xl md:text-4xl font-bold text-[#031846]">No detours</p>
              <p class="mt-3 md:mt-4 text-sm text-slate-500 uppercase tracking-widest leading-relaxed">Focused
                on<br />results</p>
            </div>
            <div
              class="text-left border-2 border-slate-100 p-5 sm:p-6 md:p-8 rounded-sm hover:border-[#F99237] transition-colors duration-300">
              <p class="text-3xl md:text-4xl font-bold text-[#031846]">Brand ready</p>
              <p class="mt-3 md:mt-4 text-sm text-slate-500 uppercase tracking-widest leading-relaxed">
                Fully<br />customizable</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Product Preview Section -->
      <section class="bg-slate-50 py-16 md:py-24 border-y-2 border-slate-100 overflow-hidden">
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <div class="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div class="order-2 md:order-1 relative">
              <div class="absolute -inset-10 bg-[#031846]/5 rounded-full blur-3xl -z-10"></div>
              <img :src="appPreview" alt="Invoicy Application Interface" class="w-full h-auto" />
            </div>

            <div class="order-1 md:order-2 space-y-6 md:space-y-8">
              <div>
                <p class="text-xs font-bold uppercase tracking-widest text-[#c05a1a]">The Experience</p>
                <h2 class="mt-3 md:mt-4 text-3xl md:text-4xl font-bold text-[#031846]">Seamless Workflow</h2>
                <p class="mt-4 md:mt-6 text-base md:text-lg text-slate-500 leading-relaxed">
                  Our interface is designed to be intuitive and fast. No training required, just professional results
                  every time.
                </p>
              </div>

              <div class="space-y-5 md:space-y-8 pt-2 md:pt-4">
                <div
                  class="flex gap-6 items-start border-l-4 border-slate-100 pl-6 py-2 hover:border-[#F99237] transition-colors">
                  <div>
                    <p class="text-sm font-bold text-[#031846] uppercase tracking-wider">Smart Details</p>
                    <p class="mt-2 text-slate-500 text-sm leading-relaxed">Automated numbering and intelligent field
                      mapping for error-free billing.</p>
                  </div>
                </div>
                <div
                  class="flex gap-6 items-start border-l-4 border-slate-100 pl-6 py-2 hover:border-[#F99237] transition-colors">
                  <div>
                    <p class="text-sm font-bold text-[#031846] uppercase tracking-wider">Brand Identity</p>
                    <p class="mt-2 text-slate-500 text-sm leading-relaxed">One-click logo uploads and digital signature
                      capture to reflect your professionalism.</p>
                  </div>
                </div>
                <div
                  class="flex gap-6 items-start border-l-4 border-slate-100 pl-6 py-2 hover:border-[#F99237] transition-colors">
                  <div>
                    <p class="text-sm font-bold text-[#c05a1a] uppercase tracking-wider">Instant Export</p>
                    <p class="mt-2 text-slate-500 text-sm leading-relaxed">Generate industry-standard PDFs ready for
                      immediate sharing with your clients.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Grid -->
      <section id="features" class="relative py-16 md:py-32 overflow-hidden">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div class="max-w-2xl">
            <p class="text-xs font-bold uppercase tracking-[0.2em] text-[#c05a1a]">Core Philosophy</p>
            <h2 class="mt-3 text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-[#031846]">
              Designed for clarity and speed.
            </h2>
          </div>

          <div class="mt-10 md:mt-20 grid gap-1 grid-cols-1 md:grid-cols-3 border-2 border-slate-100">
            <article class="p-6 md:p-10 bg-white hover:bg-slate-50 transition-colors border-b-2 md:border-b-0 border-slate-100">
              <p class="text-xs font-bold text-[#c05a1a] uppercase tracking-widest">Efficiency</p>
              <h3 class="mt-6 md:mt-8 text-xl font-bold text-[#031846]">Billing Essentials</h3>
              <p class="mt-3 md:mt-4 text-slate-500 leading-relaxed text-sm">
                A focused interface that eliminates distraction, allowing you to move from draft to finished invoice in
                seconds.
              </p>
            </article>
            <article class="p-6 md:p-10 bg-white hover:bg-slate-50 transition-colors border-b-2 md:border-b-0 md:border-x-2 border-slate-100">
              <p class="text-xs font-bold text-[#c05a1a] uppercase tracking-widest">Aesthetics</p>
              <h3 class="mt-6 md:mt-8 text-xl font-bold text-[#031846]">Polished Output</h3>
              <p class="mt-3 md:mt-4 text-slate-500 leading-relaxed text-sm">
                Every element is precisely aligned. Your logo, signature, and items are presented with professional
                rigor.
              </p>
            </article>
            <article class="p-6 md:p-10 bg-white hover:bg-slate-50 transition-colors">
              <p class="text-xs font-bold text-[#c05a1a] uppercase tracking-widest">Delivery</p>
              <h3 class="mt-6 md:mt-8 text-xl font-bold text-[#031846]">Instant PDF</h3>
              <p class="mt-3 md:mt-4 text-slate-500 leading-relaxed text-sm">
                No complex exports. Just one click to generate a clean, industry-standard PDF ready for distribution.
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- How it Works -->
      <section class="bg-orange-50/50 py-16 md:py-32">
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <div class="max-w-2xl mb-12 md:mb-24">
            <p class="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">The Process</p>
            <h2 class="mt-3 text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-slate-800">Three steps to completion.</h2>
          </div>

          <div class="grid gap-10 md:gap-20 grid-cols-1 md:grid-cols-3">
            <div class="space-y-4 md:space-y-8 flex md:block gap-5 items-start">
              <p class="text-5xl md:text-6xl font-bold text-orange-500/20 shrink-0">01</p>
              <div>
                <h3 class="text-xl font-bold text-slate-800">Input Details</h3>
                <p class="mt-2 md:mt-0 text-slate-500 leading-relaxed text-sm md:text-base">
                  Fill in the essential information: customer data, dates, and line items. Everything is validated in
                  real-time.
                </p>
              </div>
            </div>
            <div class="space-y-4 md:space-y-8 flex md:block gap-5 items-start">
              <p class="text-5xl md:text-6xl font-bold text-orange-500/20 shrink-0">02</p>
              <div>
                <h3 class="text-xl font-bold text-slate-800">Apply Brand</h3>
                <p class="mt-2 md:mt-0 text-slate-500 leading-relaxed text-sm md:text-base">
                  Add your logo and digital signature to ensure the invoice reflects your professional identity and
                  authority.
                </p>
              </div>
            </div>
            <div class="space-y-4 md:space-y-8 flex md:block gap-5 items-start">
              <p class="text-5xl md:text-6xl font-bold text-orange-500/20 shrink-0">03</p>
              <div>
                <h3 class="text-xl font-bold text-slate-800">Export PDF</h3>
                <p class="mt-2 md:mt-0 text-slate-500 leading-relaxed text-sm md:text-base">
                  One click to generate your invoice. Download it instantly as a pixel-perfect PDF ready for your client.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-24 md:py-40 text-center relative overflow-hidden">
        <div class="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-orange-50 blur-3xl opacity-50"></div>
        <div class="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-slate-50 blur-3xl opacity-50"></div>

        <div class="max-w-3xl mx-auto px-4 sm:px-6 relative">
          <h2 class="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-[#031846]">
            Ready to streamline your billing?
          </h2>
          <p class="mt-6 md:mt-8 text-base md:text-xl text-slate-500 max-w-xl mx-auto">
            Join professionals who trust Invoicy for their daily operations.
          </p>
          <div class="mt-8 md:mt-12">
            <RouterLink to="/generator"
              class="inline-flex items-center justify-center rounded bg-[#F99237] px-8 md:px-12 py-4 md:py-5 text-base md:text-lg font-bold text-white transition duration-200 hover:bg-[#e88126] shadow-xl shadow-orange-500/10">
              Launch Invoicy Now
            </RouterLink>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<style scoped>
@reference "tailwindcss";

@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition-duration: 0ms !important;
  }
}
</style>