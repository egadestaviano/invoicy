<template>
  <div class="min-h-screen text-[#031846]">
    <Header />

    <main class="overflow-x-hidden pt-20 md:pt-24">
      <section class="px-4 md:px-6 pt-6 md:pt-6 pb-16">
        <div class="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div class="space-y-8 animate-rise">
            <div class="space-y-5">
              <p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#c05a1a]">
                Meet Invoicy
              </p>
              <h1 class="max-w-3xl text-4xl md:text-6xl font-[#031846] tracking-tight leading-none text-[#031846]">
                Create invoices in minutes with Invoicy.
              </h1>
              <p class="max-w-2xl text-lg leading-tight text-slate-600">
                Invoicy helps you draft invoices, add your logo and signature, and download a clean PDF from one focused workflow.
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <RouterLink
                to="/generator"
                class="inline-flex items-center justify-center rounded-lg border-2 border-[#F99237] bg-white px-6 py-3.5 text-base font-semibold text-[#F99237] transition duration-200 hover:bg-[#F99237] hover:text-white"
              >
                Open Invoicy
              </RouterLink>
              <a
                href="#features"
                class="inline-flex items-center justify-center rounded-lg border border-slate-300 px-6 py-3.5 text-base font-semibold text-slate-700 transition duration-200 hover:border-slate-400 hover:bg-slate-50"
              >
                Explore Features
              </a>
            </div>

            <div class="grid gap-6 sm:grid-cols-3">
              <div class="feature-chip p-5 animate-rise-delay-1">
                <p class="text-xl font-semibold text-[#031846]">3 steps</p>
                <p class="mt-1 text-sm text-slate-600 leading-tight">Fill in details, generate, and download the PDF.</p>
              </div>
              <div class="feature-chip p-5 animate-rise-delay-2">
                <p class="text-xl font-semibold text-[#031846]">No detours</p>
                <p class="mt-1 text-sm text-slate-600 leading-tight">Start billing when ready.</p>
              </div>
              <div class="feature-chip p-5 animate-rise-delay-3">
                <p class="text-xl font-semibold text-[#031846]">Brand ready</p>
                <p class="mt-1 text-sm text-slate-600 leading-tight">Add payment details, logo, and signature .</p>
              </div>
            </div>
          </div>

          <!-- Product Preview Card – flat, no shadow, no float animation -->
          <div class="relative select-none animate-rise-delay-2">
            <!-- Floating orbs removed (commented out) -->
            <div class="relative overflow-hidden border border-orange-100 bg-white p-6">
              <div class="flex items-center justify-between border-b border-orange-100 pb-4">
                <div>
                  <p class="text-sm font-semibold text-[#c05a1a]">Product Preview</p>
                  <h2 class="mt-0.5 text-2xl text-[#031846]">Invoicy workflow</h2>
                </div>
                <div class="bg-orange-50 px-3 py-1 text-sm font-medium text-[#c05a1a]">
                  PDF ready
                </div>
              </div>

              <div class="mt-6 space-y-3">
                <div class="info-card">
                  <p class="text-sm font-semibold text-[#031846]">Invoice details</p>
                  <p class="mt-1 text-sm text-slate-600">Add invoice number, dates, customer information, notes, and line items.</p>
                </div>
                <div class="info-card">
                  <p class="text-sm font-semibold text-[#031846]">Branding and payment</p>
                  <p class="mt-1 text-sm text-slate-600">Upload your logo, include payment details, and capture a signature.</p>
                </div>
                <div class="info-card-highlight">
                  <p class="text-sm font-semibold text-[#c05a1a]">Ready to send</p>
                  <p class="mt-1 text-sm text-slate-600">Generate the invoice, then download a polished PDF to share with clients.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" class="px-4 md:px-6 py-8">
        <div class="max-w-6xl mx-auto">
          <div class="max-w-2xl animate-rise">
            <p class="text-sm font-semibold uppercase tracking-[0.1em] text-[#c05a1a]">Why teams choose Invoicy</p>
            <h2 class="mt-2 text-3xl max-w-3xl md:text-4xl font-[#031846] tracking-tight text-[#031846]">
              Everything you need to build a clean invoice without slowing down your workflow.
            </h2>
          </div>

          <div class="mt-10 grid gap-6 md:grid-cols-3">
            <article class="marketing-card hover-lift animate-rise-delay-1">
              <p class="text-sm font-semibold leading-0 text-[#c05a1a]">Fast to complete</p>
              <h3 class="mt-4 text-xl leading-tight text-[#031846]">A focused form built around billing essentials</h3>
              <p class="mt-3 text-sm leading-tight text-slate-600">
                The core invoice fields are already organized, so you can move from draft to finished invoice with less friction.
              </p>
            </article>
            <article class="marketing-card hover-lift animate-rise-delay-2">
              <p class="text-sm font-semibold leading-0 text-[#c05a1a]">Polished output</p>
              <h3 class="mt-4 text-xl leading-tight text-[#031846]">Logo, signature, and line items in one smooth flow</h3>
              <p class="mt-3 text-sm leading-tight text-slate-600">
                Bring brand identity and payment details into the same workspace instead of bouncing between multiple tools.
              </p>
            </article>
            <article class="marketing-card hover-lift animate-rise-delay-3">
              <p class="text-sm font-semibold leading-0 text-[#c05a1a]">Ready to share</p>
              <h3 class="mt-4 text-xl leading-tight text-[#031846]">Download a PDF right after the invoice is created</h3>
              <p class="mt-3 text-sm leading-tight text-slate-600">
                Complete the invoice once, then export a PDF that is ready to send to your client right away.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section class="bg-white/70 px-4 md:px-6 py-16">
        <div class="max-w-6xl mx-auto">
          <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between animate-rise">
            <div>
              <p class="text-sm font-semibold uppercase tracking-[0.1em] text-[#c05a1a]">How it works</p>
              <h2 class="mt-2 text-3xl max-w-3xl md:text-4xl font-[#031846] tracking-tight text-[#031846]">
                Three simple steps from draft to downloadable invoice.
              </h2>
            </div>
            <!-- <RouterLink
              to="/generator"
              class="text-sm font-semibold text-[#c05a1a] transition hover:text-[#F99237]"
            >
              Open the generator
            </RouterLink> -->
          </div>

          <div class="mt-10 grid gap-6 md:grid-cols-3">
            <div class="process-card-light hover-lift animate-rise-delay-1">
              <p class="text-sm font-semibold text-[#F99237] leading-0">01</p>
              <h3 class="mt-4 text-2xl leading-tight">Add invoice details</h3>
              <p class="mt-3 text-sm leading-tight text-slate-600">
                Fill in customer information, dates, notes, and the line items you want to bill.
              </p>
            </div>
            <div class="process-card-warm hover-lift animate-rise-delay-2">
              <p class="text-sm font-semibold text-[#c05a1a] leading-0">02</p>
              <h3 class="mt-4 text-2xl leading-tight text-[#031846]">Apply your branding</h3>
              <p class="mt-3 text-sm leading-tight text-slate-600">
                Upload a logo, add payment information, and save a signature for a more professional finish.
              </p>
            </div>
            <div class="process-card-light hover-lift animate-rise-delay-3">
              <p class="text-sm font-semibold text-[#c05a1a] leading-0">03</p>
              <h3 class="mt-4 text-2xl leading-tight text-[#031846]">Generate and download</h3>
              <p class="mt-3 text-sm leading-tight text-slate-600">
                Submit the invoice, then download the finished PDF to deliver it to your client.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section – flat, no shadow, lighter background -->
      <section class="px-4 md:px-6 py-16">
        <div class="max-w-6xl mx-auto bg-orange-50 px-8 py-12 text-center text-[#031846]">
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#c05a1a]">Start now</p>
          <h2 class="mt-4 text-3xl md:text-5xl font-[#031846] tracking-tight">
            Start building polished invoices with Invoicy today.
          </h2>
          <p class="mt-4 max-w-2xl mx-auto text-base md:text-lg leading-8 text-slate-600">
            Open the generator and finish your next invoice with a faster, cleaner billing flow.
          </p>
          <div class="mt-8 flex justify-center">
            <RouterLink
              to="/generator"
              class="inline-flex items-center justify-center rounded-lg bg-[#F99237] px-6 py-3.5 text-base font-semibold text-white transition duration-200 hover:bg-[#E6712B] hover:shadow-md"
            >
              Launch Invoicy
            </RouterLink>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
</script>

<style scoped>
@reference "tailwindcss";

.feature-chip {
  @apply border border-orange-100 bg-white transition duration-200;
}

.marketing-card {
  @apply border border-slate-200 bg-white p-6 transition duration-200;
}

.info-card {
  @apply rounded-sm bg-slate-50 p-4 transition duration-200 outline-1 outline-orange-200;
}

.info-card-highlight {
  @apply rounded-sm bg-orange-50 p-4 ring-1 ring-orange-100 transition duration-200;
}

.process-card-dark {
  @apply bg-slate-900 p-6 text-white shadow-xl shadow-slate-200 transition duration-200;
}

.process-card-warm {
  @apply border border-orange-100 bg-orange-50 p-6 transition duration-200;
}

.process-card-light {
  @apply border border-slate-200 bg-white p-6 transition duration-200;
}

/* Flat hover: lift minimal, very subtle shadow */
.hover-lift {
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    border-color 180ms ease;
}

.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
  border-color: rgba(251, 146, 60, 0.15);
}

.hover-lift-subtle {
  transition:
    transform 180ms ease,
    background-color 180ms ease,
    box-shadow 180ms ease;
}

.hover-lift-subtle:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 16px -8px rgba(15, 23, 42, 0.1);
}

.animate-rise {
  animation: rise-in 400ms ease-out both;
}

.animate-rise-delay-1 {
  animation: rise-in 450ms ease-out 80ms both;
}

.animate-rise-delay-2 {
  animation: rise-in 450ms ease-out 160ms both;
}

.animate-rise-delay-3 {
  animation: rise-in 450ms ease-out 240ms both;
}

/* Diperhalus */
@keyframes rise-in {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Floating orbs animation dihilangkan; jika tetap ingin ada, keyframes drift masih bisa ada tapi tidak dipakai */
@keyframes drift {
  0%, 100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(10px, -12px, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .animate-rise,
  .animate-rise-delay-1,
  .animate-rise-delay-2,
  .animate-rise-delay-3,
  .hover-lift,
  .hover-lift-subtle {
    animation: none !important;
    transform: none !important;
    transition-duration: 0ms !important;
  }
}
</style>