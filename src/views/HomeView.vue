<template>
  <div class="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.22),_transparent_28%),linear-gradient(180deg,#fff8ef_0%,#ffffff_38%,#fffaf5_100%)] text-slate-900">
    <Header />

    <main class="overflow-x-hidden pt-20 md:pt-24">
      <section class="px-4 md:px-6 pt-8 md:pt-12 pb-18">
        <div class="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div class="space-y-8 animate-rise">
            <div class="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/85 px-4 py-2 text-sm font-medium text-orange-700 shadow-sm backdrop-blur">
              Built for fast, polished invoices
            </div>

            <div class="space-y-5">
              <p class="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
                Meet Invoicy
              </p>
              <h1 class="max-w-3xl text-4xl md:text-6xl font-black tracking-tight text-slate-900">
                Create client-ready invoices in minutes with Invoicy.
              </h1>
              <p class="max-w-2xl text-lg leading-8 text-slate-600">
                Invoicy helps you draft invoices, add your logo and signature, and download a clean PDF from one focused workflow.
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <RouterLink
                to="/generator"
                class="inline-flex items-center justify-center rounded-2xl bg-orange-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-orange-200 transition duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-300/50"
              >
                Open Invoicy
              </RouterLink>
              <a
                href="#features"
                class="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-6 py-3.5 text-base font-semibold text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:bg-white hover:text-orange-600"
              >
                Explore Features
              </a>
            </div>

            <div class="grid gap-4 sm:grid-cols-3">
              <div class="feature-chip hover-lift animate-rise-delay-1">
                <p class="text-2xl font-black text-slate-900">3 steps</p>
                <p class="mt-1 text-sm text-slate-600">Fill in details, generate the invoice, and download the PDF.</p>
              </div>
              <div class="feature-chip hover-lift animate-rise-delay-2">
                <p class="text-2xl font-black text-slate-900">No detours</p>
                <p class="mt-1 text-sm text-slate-600">Go straight into the billing flow when you are ready to work.</p>
              </div>
              <div class="feature-chip hover-lift animate-rise-delay-3">
                <p class="text-2xl font-black text-slate-900">Brand ready</p>
                <p class="mt-1 text-sm text-slate-600">Add payment details, your logo, and signature in one place.</p>
              </div>
            </div>
          </div>

          <div class="relative animate-float-in">
            <div class="floating-orb absolute -top-8 -left-8 h-32 w-32 rounded-full bg-orange-200/60 blur-3xl"></div>
            <div class="floating-orb-delay absolute -bottom-10 right-0 h-40 w-40 rounded-full bg-amber-100 blur-3xl"></div>
            <div class="hover-lift relative overflow-hidden rounded-[2rem] border border-orange-100 bg-white/92 p-6 shadow-[0_30px_80px_-30px_rgba(249,115,22,0.35)] backdrop-blur">
              <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-300 via-orange-500 to-amber-300"></div>

              <div class="flex items-center justify-between border-b border-orange-100 pb-4">
                <div>
                  <p class="text-sm font-semibold text-orange-600">Product Preview</p>
                  <h2 class="mt-1 text-2xl font-bold text-slate-900">Invoicy workflow</h2>
                </div>
                <div class="rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700">
                  PDF ready
                </div>
              </div>

              <div class="mt-6 space-y-4">
                <div class="info-card hover-lift-subtle">
                  <p class="text-sm font-semibold text-slate-900">Invoice details</p>
                  <p class="mt-2 text-sm text-slate-600">Add invoice number, dates, customer information, notes, and line items.</p>
                </div>
                <div class="info-card hover-lift-subtle">
                  <p class="text-sm font-semibold text-slate-900">Branding and payment</p>
                  <p class="mt-2 text-sm text-slate-600">Upload your logo, include payment details, and capture a signature.</p>
                </div>
                <div class="info-card-highlight hover-lift-subtle">
                  <p class="text-sm font-semibold text-orange-700">Ready to send</p>
                  <p class="mt-2 text-sm text-slate-600">Generate the invoice, then download a polished PDF to share with clients.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" class="px-4 md:px-6 py-16">
        <div class="max-w-6xl mx-auto">
          <div class="max-w-2xl animate-rise">
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">Why teams choose Invoicy</p>
            <h2 class="mt-3 text-3xl md:text-4xl font-black tracking-tight text-slate-900">
              Everything you need to build a clean invoice without slowing down your workflow.
            </h2>
          </div>

          <div class="mt-10 grid gap-6 md:grid-cols-3">
            <article class="marketing-card hover-lift animate-rise-delay-1">
              <p class="text-sm font-semibold text-orange-600">Fast to complete</p>
              <h3 class="mt-3 text-xl font-bold text-slate-900">A focused form built around billing essentials</h3>
              <p class="mt-3 text-sm leading-7 text-slate-600">
                The core invoice fields are already organized, so you can move from draft to finished invoice with less friction.
              </p>
            </article>
            <article class="marketing-card hover-lift animate-rise-delay-2">
              <p class="text-sm font-semibold text-orange-600">Polished output</p>
              <h3 class="mt-3 text-xl font-bold text-slate-900">Logo, signature, and line items in one smooth flow</h3>
              <p class="mt-3 text-sm leading-7 text-slate-600">
                Bring brand identity and payment details into the same workspace instead of bouncing between multiple tools.
              </p>
            </article>
            <article class="marketing-card hover-lift animate-rise-delay-3">
              <p class="text-sm font-semibold text-orange-600">Ready to share</p>
              <h3 class="mt-3 text-xl font-bold text-slate-900">Download a PDF right after the invoice is created</h3>
              <p class="mt-3 text-sm leading-7 text-slate-600">
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
              <p class="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">How it works</p>
              <h2 class="mt-3 text-3xl md:text-4xl font-black tracking-tight text-slate-900">
                Three simple steps from draft to downloadable invoice.
              </h2>
            </div>
            <RouterLink
              to="/generator"
              class="text-sm font-semibold text-orange-600 transition hover:text-orange-700"
            >
              Open the generator
            </RouterLink>
          </div>

          <div class="mt-10 grid gap-6 md:grid-cols-3">
            <div class="process-card-dark hover-lift animate-rise-delay-1">
              <p class="text-sm font-semibold text-orange-300">01</p>
              <h3 class="mt-4 text-2xl font-bold">Add invoice details</h3>
              <p class="mt-3 text-sm leading-7 text-slate-300">
                Fill in customer information, dates, notes, and the line items you want to bill.
              </p>
            </div>
            <div class="process-card-warm hover-lift animate-rise-delay-2">
              <p class="text-sm font-semibold text-orange-600">02</p>
              <h3 class="mt-4 text-2xl font-bold text-slate-900">Apply your branding</h3>
              <p class="mt-3 text-sm leading-7 text-slate-600">
                Upload a logo, add payment information, and save a signature for a more professional finish.
              </p>
            </div>
            <div class="process-card-light hover-lift animate-rise-delay-3">
              <p class="text-sm font-semibold text-orange-600">03</p>
              <h3 class="mt-4 text-2xl font-bold text-slate-900">Generate and download</h3>
              <p class="mt-3 text-sm leading-7 text-slate-600">
                Submit the invoice, then download the finished PDF to deliver it to your client.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="px-4 md:px-6 py-16">
        <div class="cta-panel animate-float-in max-w-6xl mx-auto rounded-[2rem] px-8 py-12 text-center text-white">
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">Start now</p>
          <h2 class="mt-4 text-3xl md:text-5xl font-black tracking-tight">
            Start building polished invoices with Invoicy today.
          </h2>
          <p class="mt-4 max-w-2xl mx-auto text-base md:text-lg leading-8 text-slate-300">
            Open the generator and finish your next invoice with a faster, cleaner billing flow.
          </p>
          <div class="mt-8 flex justify-center">
            <RouterLink
              to="/generator"
              class="inline-flex items-center justify-center rounded-2xl bg-orange-500 px-6 py-3.5 text-base font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-300/50"
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
  @apply rounded-xl border border-orange-100 bg-white p-4 shadow-sm transition duration-300;
}

.marketing-card {
  @apply rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300;
}

.info-card {
  @apply rounded-2xl bg-slate-50 p-4 transition duration-300;
}

.info-card-highlight {
  @apply rounded-2xl bg-orange-50 p-4 ring-1 ring-orange-100 transition duration-300;
}

.process-card-dark {
  @apply rounded-2xl bg-slate-900 p-6 text-white shadow-xl shadow-slate-200 transition duration-300;
}

.process-card-warm {
  @apply rounded-2xl border border-orange-100 bg-orange-50 p-6 shadow-sm transition duration-300;
}

.process-card-light {
  @apply rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300;
}

.cta-panel {
  background:
    radial-gradient(circle at top, rgba(251, 146, 60, 0.25), transparent 35%),
    linear-gradient(135deg, #0f172a 0%, #111827 55%, #1e293b 100%);
  box-shadow: 0 30px 80px -30px rgba(15, 23, 42, 0.6);
}

.hover-lift {
  transition:
    transform 240ms ease,
    box-shadow 240ms ease,
    border-color 240ms ease;
}

.hover-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 24px 48px -24px rgba(15, 23, 42, 0.28);
  border-color: rgba(251, 146, 60, 0.38);
}

.hover-lift-subtle {
  transition:
    transform 220ms ease,
    background-color 220ms ease,
    box-shadow 220ms ease;
}

.hover-lift-subtle:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 32px -24px rgba(15, 23, 42, 0.24);
}

.animate-rise {
  animation: rise-in 700ms ease-out both;
}

.animate-rise-delay-1 {
  animation: rise-in 750ms ease-out 80ms both;
}

.animate-rise-delay-2 {
  animation: rise-in 750ms ease-out 160ms both;
}

.animate-rise-delay-3 {
  animation: rise-in 750ms ease-out 240ms both;
}

.animate-float-in {
  animation: float-in 900ms cubic-bezier(0.22, 1, 0.36, 1) both;
}

.floating-orb {
  animation: drift 7s ease-in-out infinite;
}

.floating-orb-delay {
  animation: drift 9s ease-in-out infinite reverse;
}

@keyframes rise-in {
  from {
    opacity: 0;
    transform: translateY(24px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float-in {
  from {
    opacity: 0;
    transform: translateY(32px) scale(0.96);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes drift {
  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }

  50% {
    transform: translate3d(10px, -12px, 0);
  }
}
</style>
