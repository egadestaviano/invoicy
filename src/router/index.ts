import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('../views/HomeView.vue'),
      meta: {
        title: 'Invoicy | Fast and Neat Invoice Generator',
        description:
          'Create professional invoices quickly with your logo and signature, then download a ready-to-send PDF in one seamless workflow.',
      },
    },
    {
      path: '/generator',
      name: 'generator',
      component: () => import('../views/GeneratorView.vue'),
      meta: {
        title: 'Generator Invoice | Invoicy',
        description:
          'Fill in invoice details, add items, logo, and signature on the Invoicy generator page to create a ready-to-share invoice PDF.',
      },
    },
  ],
})

const setMetaContent = (selector: string, content: string) => {
  const element = document.head.querySelector(selector)

  if (element) {
    element.setAttribute('content', content)
  }
}

router.afterEach((to) => {
  const title = typeof to.meta.title === 'string' ? to.meta.title : 'Invoicy'
  const description =
    typeof to.meta.description === 'string'
      ? to.meta.description
      : 'Invoicy helps you create professional invoices quickly.'

  document.title = title
  setMetaContent('meta[name="description"]', description)
  setMetaContent('meta[property="og:title"]', title)
  setMetaContent('meta[property="og:description"]', description)
  setMetaContent('meta[name="twitter:title"]', title)
  setMetaContent('meta[name="twitter:description"]', description)

  let canonical = document.head.querySelector('link[rel="canonical"]')

  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }

  canonical.setAttribute('href', new URL(to.fullPath || '/', window.location.origin).toString())
})

export default router
