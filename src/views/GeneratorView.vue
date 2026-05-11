<template>
  <div class="bg-slate-50 text-[#031846]">
    <Header />

    <main id="main-content" class="mx-auto max-w-6xl px-4 sm:px-6 pb-12 pt-[77px] md:pb-16 md:pt-28">
      <form class="space-y-4 py-4 md:space-y-6 md:py-8" novalidate @submit.prevent="submitForm">
        <section class="section-card" aria-labelledby="invoice-information-title">
          <h2 id="invoice-information-title" class="section-title">
            <span class="section-title-icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="9" y1="13" x2="15" y2="13" />
                <line x1="9" y1="17" x2="13" y2="17" />
              </svg>
            </span>
            Invoice Information
            <button type="button" @click="isParserOpen = true" class="ml-auto inline-flex items-center gap-1.5 px-3 py-1.5 border border-orange-200 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-wider transition-all active:scale-95 hover:bg-orange-600 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="h-3.5 w-3.5">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
              </svg>
              Magic Fill
            </button>
          </h2>

          <div class="grid grid-cols-1 gap-3 md:gap-4 md:grid-cols-3">
            <div>
              <label class="form-label" :for="fieldIds.invoiceNumber">Invoice Number</label>
              <div class="input-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="input-icon" aria-hidden="true">
                  <line x1="4" y1="9" x2="20" y2="9" />
                  <line x1="4" y1="15" x2="20" y2="15" />
                  <line x1="10" y1="3" x2="8" y2="21" />
                  <line x1="16" y1="3" x2="14" y2="21" />
                </svg>
                <input :id="fieldIds.invoiceNumber" v-model="form.invoice_number" type="text" name="invoice_number"
                  autocomplete="off" placeholder="INV-0001" required
                  :aria-invalid="Boolean(validationErrors.invoice_number)"
                  :aria-describedby="validationErrors.invoice_number ? `${fieldIds.invoiceNumber}-error` : undefined"
                  class="form-input has-icon" />
              </div>
              <p v-if="validationErrors.invoice_number" :id="`${fieldIds.invoiceNumber}-error`" class="form-error">
                {{ validationErrors.invoice_number }}
              </p>
            </div>

            <div>
              <label class="form-label" :for="fieldIds.processDate">Process Date</label>
              <div class="input-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="input-icon" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <input :id="fieldIds.processDate" v-model="form.process_date" type="date" name="process_date"
                  autocomplete="off" required :aria-invalid="Boolean(validationErrors.process_date)"
                  :aria-describedby="validationErrors.process_date ? `${fieldIds.processDate}-error` : undefined"
                  class="form-input has-icon" />
              </div>
              <p v-if="validationErrors.process_date" :id="`${fieldIds.processDate}-error`" class="form-error">
                {{ validationErrors.process_date }}
              </p>
            </div>

            <div>
              <label class="form-label" :for="fieldIds.dueDate">Due Date</label>
              <div class="input-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="input-icon" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <input :id="fieldIds.dueDate" v-model="form.due_date" type="date" name="due_date" autocomplete="off"
                  required :aria-invalid="Boolean(validationErrors.due_date)"
                  :aria-describedby="validationErrors.due_date ? `${fieldIds.dueDate}-error` : undefined"
                  class="form-input has-icon" />
              </div>
              <p v-if="validationErrors.due_date" :id="`${fieldIds.dueDate}-error`" class="form-error">
                {{ validationErrors.due_date }}
              </p>
            </div>
          </div>
        </section>

        <section class="section-card" aria-labelledby="customer-details-title">
          <h2 id="customer-details-title" class="section-title">
            <span class="section-title-icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </span>
            Customer Details
          </h2>

          <div class="grid grid-cols-1 gap-3 md:gap-4 md:grid-cols-2">
            <div>
              <label class="form-label" :for="fieldIds.customerName">Customer Name</label>
              <div class="input-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="input-icon" aria-hidden="true">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <input :id="fieldIds.customerName" v-model="form.customer_name" type="text" name="customer_name"
                  autocomplete="organization" placeholder="Acme Corp." required
                  :aria-invalid="Boolean(validationErrors.customer_name)"
                  :aria-describedby="validationErrors.customer_name ? `${fieldIds.customerName}-error` : undefined"
                  class="form-input has-icon" />
              </div>
              <p v-if="validationErrors.customer_name" :id="`${fieldIds.customerName}-error`" class="form-error">
                {{ validationErrors.customer_name }}
              </p>
            </div>

            <div>
              <label class="form-label" :for="fieldIds.customerId">Customer ID</label>
              <div class="input-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="input-icon" aria-hidden="true">
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <circle cx="9" cy="12" r="2.5" />
                  <line x1="14" y1="10" x2="18" y2="10" />
                  <line x1="14" y1="14" x2="17" y2="14" />
                </svg>
                <input :id="fieldIds.customerId" v-model="form.customer_id" type="text" name="customer_id"
                  autocomplete="off" placeholder="Optional" class="form-input has-icon" />
              </div>
            </div>

            <div class="md:col-span-2">
              <label class="form-label" :for="fieldIds.customerAddress">Customer Address</label>
              <textarea :id="fieldIds.customerAddress" v-model="form.customer_address" name="customer_address"
                autocomplete="street-address" rows="4" placeholder="Street, City, Postal Code"
                class="form-input"></textarea>
            </div>
          </div>
        </section>

        <section class="section-card" aria-labelledby="contact-payment-title">
          <h2 id="contact-payment-title" class="section-title">
            <span class="section-title-icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
              </svg>
            </span>
            Contact &amp; Payment
          </h2>

          <div class="grid grid-cols-1 gap-3 md:gap-4 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <label class="form-label" :for="fieldIds.previousBalance">Previous Balance</label>
              <div class="input-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="input-icon" aria-hidden="true">
                  <line x1="12" y1="2" x2="12" y2="22" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                <input :id="fieldIds.previousBalance" v-model.number="form.previous_balance" type="number"
                  name="previous_balance" inputmode="decimal" min="0" step="0.01" placeholder="0.00"
                  class="form-input has-icon" />
              </div>
            </div>

            <div>
              <label class="form-label" :for="fieldIds.contactPerson">Contact Person</label>
              <div class="input-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="input-icon" aria-hidden="true">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <input :id="fieldIds.contactPerson" v-model="form.contact_person" type="text" name="contact_person"
                  autocomplete="name" placeholder="Full name" class="form-input has-icon" />
              </div>
            </div>

            <div>
              <label class="form-label" :for="fieldIds.contactPhone">Contact Phone</label>
              <div class="input-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="input-icon" aria-hidden="true">
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <input :id="fieldIds.contactPhone" v-model="form.contact_phone" type="tel" name="contact_phone"
                  autocomplete="tel" inputmode="tel" placeholder="+62 812 3456 7890" class="form-input has-icon" />
              </div>
            </div>

            <div>
              <label class="form-label" :for="fieldIds.paymentAccount">Payment Account</label>
              <div class="input-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="input-icon" aria-hidden="true">
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <line x1="2" y1="10" x2="22" y2="10" />
                  <line x1="6" y1="15" x2="10" y2="15" />
                </svg>
                <input :id="fieldIds.paymentAccount" v-model="form.payment_account" type="text" name="payment_account"
                  autocomplete="off" placeholder="Bank · Account number" class="form-input has-icon" />
              </div>
            </div>

            <div>
              <label class="form-label" :for="fieldIds.contactEmail">Contact Email</label>
              <div class="input-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="input-icon" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <input :id="fieldIds.contactEmail" v-model="form.contact_email" type="email" name="contact_email"
                  autocomplete="email" placeholder="name@company.com"
                  :aria-invalid="Boolean(validationErrors.contact_email)"
                  :aria-describedby="validationErrors.contact_email ? `${fieldIds.contactEmail}-error` : undefined"
                  class="form-input has-icon" />
              </div>
              <p v-if="validationErrors.contact_email" :id="`${fieldIds.contactEmail}-error`" class="form-error">
                {{ validationErrors.contact_email }}
              </p>
            </div>
          </div>
        </section>

        <section class="section-card" aria-labelledby="notes-title">
          <h2 id="notes-title" class="section-title">
            <span class="section-title-icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
              </svg>
            </span>
            Notes
          </h2>
          <label class="sr-only" :for="fieldIds.notes">Invoice Notes</label>
          <textarea :id="fieldIds.notes" v-model="form.notes" name="notes" rows="4"
            placeholder="Add any additional notes for this invoice..." class="form-input"></textarea>
        </section>

        <section class="section-card" aria-labelledby="branding-signature-title">
          <h2 id="branding-signature-title" class="section-title">
            <span class="section-title-icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                <path d="M2 2l7.586 7.586" />
                <circle cx="11" cy="11" r="2" />
              </svg>
            </span>
            Branding &amp; Signature
          </h2>

          <div class="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2">
            <div>
              <label class="form-label" :for="fieldIds.signatureCanvas">Signature</label>
              <p :id="fieldIds.signatureHelp" class="form-helper">
                Draw your signature in the box below. If you leave it empty, the app will confirm before continuing.
              </p>

              <canvas :id="fieldIds.signatureCanvas" ref="signatureCanvas" tabindex="0" role="img"
                :aria-describedby="fieldIds.signatureHelp" aria-label="Signature drawing area"
                class="mt-2 h-40 w-full cursor-crosshair touch-none rounded-sm border-2 border-dashed border-slate-300 bg-gradient-to-br from-slate-50 to-white shadow-inner transition-colors hover:border-[#F99237]/60">
                Signature canvas for drawing your approval.
              </canvas>

              <div class="mt-3 flex flex-wrap gap-2">
                <button type="button" @click="clearSignature"
                  class="inline-flex cursor-pointer items-center gap-1.5 rounded-sm border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" aria-hidden="true">
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6" />
                  </svg>
                  Clear
                </button>

                <button type="button" @click="saveSignature"
                  class="inline-flex cursor-pointer items-center gap-1.5 rounded-sm bg-[#F99237] px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" aria-hidden="true">
                    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                    <polyline points="17 21 17 13 7 13 7 21" />
                    <polyline points="7 3 7 8 15 8" />
                  </svg>
                  Save Signature
                </button>
              </div>

              <div v-if="form.signature_image_path" class="mt-4">
                <p class="mb-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500">Preview</p>
                <img :src="form.signature_image_path" alt="Preview tanda tangan invoice"
                  class="h-20 rounded-sm border border-slate-200 bg-white object-contain p-2 shadow-sm" />
              </div>
            </div>

            <div>
              <label class="form-label" :for="fieldIds.logoFile">Logo</label>
              <p :id="fieldIds.logoHelp" class="form-helper">
                Upload a JPG, JPEG, PNG, or GIF file for your invoice branding.
              </p>

              <input :id="fieldIds.logoFile" ref="logoFileInput" type="file" name="logo" accept=".jpg,.jpeg,.png,.gif"
                :aria-describedby="fieldIds.logoHelp" class="form-input mt-2" @change="handleLogoUpload" />

              <div v-if="form.logo_preview" class="mt-4">
                <p class="mb-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500">Preview</p>
                <img :src="form.logo_preview" alt="Preview logo invoice"
                  class="h-20 rounded-sm border border-slate-200 bg-white object-contain p-2 shadow-sm" />

                <button type="button" @click="clearLogo"
                  class="mt-3 inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-sm font-semibold text-red-600 transition hover:border-red-300 hover:bg-red-100">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3.5 w-3.5"
                    aria-hidden="true">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  Remove Logo
                </button>
              </div>
            </div>
          </div>
        </section>

        <section class="section-card" aria-labelledby="items-title">
          <div class="mb-3 flex items-center justify-between gap-2">
            <h2 id="items-title" class="section-title mb-0">
              <span class="section-title-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </span>
              Items
            </h2>

            <button type="button" @click="addItem"
              class="inline-flex cursor-pointer items-center gap-1.5 rounded-sm bg-[#F99237] px-3 py-2 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all active:scale-95 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" aria-hidden="true">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              Add Item
            </button>
          </div>

          <p class="form-helper">
            Add at least one item with a name, quantity, and price greater than zero.
          </p>
          <p v-if="validationErrors.items" class="form-error mt-2">{{ validationErrors.items }}</p>

          <div
            class="mt-4 overflow-x-auto rounded-sm border border-slate-300/60 shadow-sm bg-white ring-1 ring-slate-100">
            <table class="min-w-full text-sm border-collapse border-spacing-0">
              <thead class="bg-white border-b-2 border-slate-100 text-slate-800">
                <tr>
                  <th scope="col" class="table-th">Name</th>
                  <th scope="col" class="table-th">Description</th>
                  <th scope="col" class="table-th">Qty</th>
                  <th scope="col" class="table-th">Price</th>
                  <th scope="col" class="table-th">Subtotal</th>
                  <th scope="col" class="table-th">Amount</th>
                  <th scope="col" class="table-th w-16 text-center">Action</th>
                </tr>
              </thead>

              <tbody class="bg-white">
                <tr v-for="(item, index) in form.items" :key="item._id"
                  class="border-b border-orange-50/50 transition-colors hover:bg-orange-50/30">
                  <td class="p-2">
                    <label class="sr-only" :for="getItemFieldId(index, 'name')">Item {{ index + 1 }} name</label>
                    <input :id="getItemFieldId(index, 'name')" v-model="item.name" type="text"
                      :name="`items[${index}].name`" class="form-input-table" />
                  </td>
                  <td class="p-2">
                    <label class="sr-only" :for="getItemFieldId(index, 'description')">
                      Item {{ index + 1 }} description
                    </label>
                    <input :id="getItemFieldId(index, 'description')" v-model="item.description" type="text"
                      :name="`items[${index}].description`" class="form-input-table" />
                  </td>
                  <td class="p-2">
                    <label class="sr-only" :for="getItemFieldId(index, 'qty')">Item {{ index + 1 }} quantity</label>
                    <input :id="getItemFieldId(index, 'qty')" v-model.number="item.qty" type="number"
                      :name="`items[${index}].qty`" inputmode="numeric" min="1" step="1" class="form-input-table" />
                  </td>
                  <td class="p-2">
                    <label class="sr-only" :for="getItemFieldId(index, 'price')">Item {{ index + 1 }} price</label>
                    <input :id="getItemFieldId(index, 'price')" v-model.number="item.price" type="number"
                      :name="`items[${index}].price`" inputmode="decimal" min="0" step="0.01"
                      class="form-input-table" />
                  </td>
                  <td class="p-2">
                    <label class="sr-only" :for="getItemFieldId(index, 'subtotal')">
                      Item {{ index + 1 }} subtotal
                    </label>
                    <input :id="getItemFieldId(index, 'subtotal')" v-model.number="item.subtotal" type="number"
                      :name="`items[${index}].subtotal`" inputmode="decimal" min="0" step="0.01"
                      class="form-input-table" />
                  </td>
                  <td class="p-2">
                    <label class="sr-only" :for="getItemFieldId(index, 'amount')">Item {{ index + 1 }} amount</label>
                    <input :id="getItemFieldId(index, 'amount')" v-model.number="item.amount" type="number"
                      :name="`items[${index}].amount`" inputmode="decimal" min="0" step="0.01"
                      class="form-input-table" />
                  </td>
                  <td class="p-2 text-center">
                    <button type="button" :aria-label="`Remove item ${index + 1}`"
                      class="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-red-500 transition hover:bg-red-50 hover:text-red-700"
                      @click="removeItem(index)">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"
                        aria-hidden="true">
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6" />
                        <path d="M10 11v6" />
                        <path d="M14 11v6" />
                        <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
                      </svg>
                      <span class="sr-only">Remove</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="mt-4 space-y-2 md:mt-6">
            <button type="submit" :disabled="isSubmitting"
              class="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-sm bg-[#F99237] px-7 py-3 font-semibold text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all active:scale-95 sm:w-auto">
              <svg v-if="isSubmitting" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="h-5 w-5 animate-spin" aria-hidden="true">
                <line x1="12" y1="2" x2="12" y2="6" />
                <line x1="12" y1="18" x2="12" y2="22" />
                <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
                <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
                <line x1="2" y1="12" x2="6" y2="12" />
                <line x1="18" y1="12" x2="22" y2="12" />
                <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
                <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5" aria-hidden="true">
                <path d="M22 2L11 13" />
                <path d="M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
              {{ isSubmitting ? 'Submitting...' : 'Create & Generate Invoice' }}
            </button>
            <p class="text-sm text-slate-500" aria-live="polite">
              {{ statusMessage }}
            </p>
          </div>

          <div v-if="lastCreatedInvoiceId"
            class="mt-4 flex flex-wrap items-center gap-3 rounded-sm border border-blue-100 bg-blue-50/40 p-3 md:p-4">
            <button type="button" @click="downloadPdf(lastCreatedInvoiceId)" :disabled="isDownloading"
              class="inline-flex cursor-pointer items-center gap-2 rounded-sm bg-gradient-to-br from-blue-600 to-blue-700 px-6 py-2.5 font-semibold text-white shadow-md shadow-blue-500/20 transition hover:from-blue-700 hover:to-blue-800 disabled:cursor-not-allowed disabled:from-blue-300 disabled:to-blue-300 disabled:shadow-none cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {{ isDownloading ? 'Downloading...' : 'Download PDF' }}
            </button>

            <span class="text-sm text-slate-600">Invoice ID: <span class="font-mono font-semibold text-[#031846]">{{
              lastCreatedInvoiceId }}</span></span>
          </div>
        </section>

      </form>
    </main>

    <Footer />

    <InvoiceParser 
      :is-open="isParserOpen" 
      @close="isParserOpen = false" 
      @parsed="handleAiParsed" 
    />
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, reactive, ref } from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import InvoiceParser from '../components/InvoiceParser.vue'
import invoiceService from '../services/invoiceService.js'
import SignaturePad from 'signature_pad'

const isParserOpen = ref(false)
const signatureCanvas = ref(null)
const logoFileInput = ref(null)
const lastCreatedInvoiceId = ref(null)
const isDownloading = ref(false)
const isSubmitting = ref(false)
const statusMessage = ref('')

const fieldIds = {
  invoiceNumber: 'invoice-number',
  processDate: 'process-date',
  dueDate: 'due-date',
  customerName: 'customer-name',
  customerId: 'customer-id',
  customerAddress: 'customer-address',
  previousBalance: 'previous-balance',
  contactPerson: 'contact-person',
  contactPhone: 'contact-phone',
  paymentAccount: 'payment-account',
  contactEmail: 'contact-email',
  notes: 'invoice-notes',
  signatureCanvas: 'signature-canvas',
  signatureHelp: 'signature-help',
  logoFile: 'logo-file',
  logoHelp: 'logo-help',
}

const validationErrors = reactive({
  invoice_number: '',
  process_date: '',
  due_date: '',
  customer_name: '',
  contact_email: '',
  items: '',
})

let _itemIdCounter = 0
const createEmptyItem = () => ({
  _id: ++_itemIdCounter,
  name: '',
  description: '',
  qty: 1,
  price: 0,
  subtotal: 0,
  amount: 0,
})

const form = reactive({
  invoice_number: '',
  process_date: '',
  due_date: '',
  customer_name: '',
  customer_id: '',
  customer_address: '',
  previous_balance: 0,
  contact_person: '',
  contact_phone: '',
  payment_account: '',
  contact_email: '',
  notes: '',
  signature_image_path: '',
  logo_image_path: '',
  logo_image_file: null,
  logo_preview: '',
  items: [createEmptyItem()],
})

let signaturePad = null
let handleResize = null
let onSignatureEnd = null

const clearValidationErrors = () => {
  validationErrors.invoice_number = ''
  validationErrors.process_date = ''
  validationErrors.due_date = ''
  validationErrors.customer_name = ''
  validationErrors.contact_email = ''
  validationErrors.items = ''
}

const setFieldError = (field, message) => {
  validationErrors[field] = message
}

const getItemFieldId = (index, field) => `item-${index}-${field}`
const getItemRowKey = (index) => `item-row-${index}`

const resizeSignatureCanvas = () => {
  if (!signatureCanvas.value) {
    return
  }

  const canvas = signatureCanvas.value
  const rect = canvas.getBoundingClientRect()
  const snapshot =
    signaturePad && typeof signaturePad.isEmpty === 'function' && !signaturePad.isEmpty()
      ? signaturePad.toDataURL()
      : ''

  canvas.width = rect.width
  canvas.height = rect.height

  if (!signaturePad) {
    signaturePad = new SignaturePad(canvas)
  }

  if (snapshot) {
    signaturePad.fromDataURL(snapshot)
  } else {
    signaturePad.clear()
  }
}

onMounted(() => {
  resizeSignatureCanvas()

  if (signaturePad) {
    onSignatureEnd = () => {
      if (!signaturePad.isEmpty()) {
        form.signature_image_path = signaturePad.toDataURL()
      }
    }

    signaturePad.addEventListener('endStroke', onSignatureEnd)
  }

  handleResize = () => {
    resizeSignatureCanvas()
  }

  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  if (signaturePad && onSignatureEnd) {
    signaturePad.removeEventListener('endStroke', onSignatureEnd)
  }

  if (handleResize) {
    window.removeEventListener('resize', handleResize)
  }

  if (form.logo_preview) {
    URL.revokeObjectURL(form.logo_preview)
  }
})

const clearSignature = () => {
  if (signaturePad && typeof signaturePad.clear === 'function') {
    signaturePad.clear()
    form.signature_image_path = ''
    statusMessage.value = 'Signature cleared.'
  }
}

const saveSignature = () => {
  if (signaturePad && typeof signaturePad.isEmpty === 'function' && !signaturePad.isEmpty()) {
    form.signature_image_path = signaturePad.toDataURL()
    statusMessage.value = 'Signature saved.'
    alert('Signature saved successfully!')
    return
  }

  alert('Please draw a signature first!')
}

const handleLogoUpload = (event) => {
  const input = event.target
  const [file] = input.files || []

  if (!file) {
    return
  }

  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif']
  const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif']
  const fileExtension = `.${file.name.split('.').pop().toLowerCase()}`

  if (!allowedTypes.includes(file.type) || !allowedExtensions.includes(fileExtension)) {
    alert('Please select a valid image file (JPEG, PNG, or GIF). WebP files are not supported.')
    input.value = ''
    return
  }

  if (form.logo_preview) {
    URL.revokeObjectURL(form.logo_preview)
  }

  form.logo_image_file = file
  form.logo_preview = URL.createObjectURL(file)
  statusMessage.value = 'Logo selected.'
}

const clearLogo = () => {
  if (form.logo_preview) {
    URL.revokeObjectURL(form.logo_preview)
  }

  form.logo_image_file = null
  form.logo_preview = ''

  if (logoFileInput.value) {
    logoFileInput.value.value = ''
  }

  statusMessage.value = 'Logo removed.'
}

const resetForm = () => {
  if (form.logo_preview) {
    URL.revokeObjectURL(form.logo_preview)
  }

  Object.assign(form, {
    invoice_number: '',
    process_date: '',
    due_date: '',
    customer_name: '',
    customer_id: '',
    customer_address: '',
    previous_balance: 0,
    contact_person: '',
    contact_phone: '',
    payment_account: '',
    contact_email: '',
    notes: '',
    signature_image_path: '',
    logo_image_path: '',
    logo_image_file: null,
    logo_preview: '',
    items: [createEmptyItem()],
  })

  clearValidationErrors()

  if (signaturePad && typeof signaturePad.clear === 'function') {
    signaturePad.clear()
  }

  if (logoFileInput.value) {
    logoFileInput.value.value = ''
  }
}

const addItem = () => {
  form.items.push(createEmptyItem())
}

const removeItem = (index) => {
  form.items.splice(index, 1)
}

const handleAiParsed = (data) => {
  // Map AI data to form
  Object.keys(data).forEach(key => {
    if (key in form && key !== 'items') {
      form[key] = data[key]
    }
  })

  // Handle items separately to ensure reactive assignment and proper IDs
  if (data.items && Array.isArray(data.items)) {
    form.items = data.items.map(item => ({
      ...createEmptyItem(),
      ...item
    }))
  }

  statusMessage.value = 'Form populated by Magic AI!'
  setTimeout(() => {
    statusMessage.value = ''
  }, 3000)
}

const validateForm = () => {
  clearValidationErrors()

  if (!form.invoice_number.trim()) {
    setFieldError('invoice_number', 'Invoice number is required.')
    alert('Invoice Number is required!')
    return false
  }

  if (!form.customer_name.trim()) {
    setFieldError('customer_name', 'Customer name is required.')
    alert('Customer Name is required!')
    return false
  }

  if (!form.process_date) {
    setFieldError('process_date', 'Process date is required.')
    alert('Process Date is required!')
    return false
  }

  if (!form.due_date) {
    setFieldError('due_date', 'Due date is required.')
    alert('Due Date is required!')
    return false
  }

  if (form.process_date && form.due_date) {
    const processDate = new Date(form.process_date)
    const dueDate = new Date(form.due_date)

    if (dueDate < processDate) {
      setFieldError('due_date', 'Due date must be the same as or after the process date.')
      alert('Due Date must be the same as or after the Process Date!')
      return false
    }
  }

  if (form.contact_email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.contact_email)) {
    setFieldError('contact_email', 'Please enter a valid email address.')
    alert('Please enter a valid email address!')
    return false
  }

  const validItems = form.items.filter((item) => item.name.trim() && item.qty > 0 && item.price > 0)

  if (validItems.length === 0) {
    setFieldError('items', 'Add at least one valid item before submitting.')
    alert('At least one item with name, quantity, and price is required!')
    return false
  }

  return true
}

const downloadPdf = async (invoiceId) => {
  try {
    isDownloading.value = true
    statusMessage.value = 'Downloading invoice PDF...'

    const response = await invoiceService.downloadPdf(invoiceId)
    const invoice = response.data?.data?.invoice

    if (!invoice) {
      alert('Invoice data not found from server')
      return
    }

    invoice.items = Array.isArray(invoice.items) ? invoice.items : []

    const { generateInvoicePdf } = await import('../utils/pdf/generateInvoicePdf.js')

    await generateInvoicePdf(invoice)
    statusMessage.value = 'Invoice PDF downloaded.'
  } catch (error) {
    statusMessage.value = 'Failed to download invoice PDF.'
    console.error('Error downloading PDF:', error)
    alert('Failed to download invoice. Please try again later.')
  } finally {
    isDownloading.value = false
  }
}

const submitForm = async () => {
  if (!validateForm()) {
    statusMessage.value = 'Please fix the highlighted fields and try again.'
    return
  }

  const validItems = form.items.filter((item) => item.name.trim() && item.qty > 0 && item.price > 0)

  if (!form.signature_image_path) {
    if (signaturePad && typeof signaturePad.isEmpty === 'function' && !signaturePad.isEmpty()) {
      form.signature_image_path = signaturePad.toDataURL()
    } else {
      const confirmSignature = confirm('No signature detected. Do you want to continue without signature?')

      if (!confirmSignature) {
        return
      }
    }
  }

  try {
    isSubmitting.value = true
    statusMessage.value = 'Submitting invoice...'

    const formData = new FormData()
    formData.append('invoice_number', form.invoice_number)
    formData.append('process_date', form.process_date)
    formData.append('due_date', form.due_date)
    formData.append('customer_name', form.customer_name)
    formData.append('customer_id', form.customer_id)
    formData.append('customer_address', form.customer_address)
    formData.append('previous_balance', String(form.previous_balance))
    formData.append('contact_person', form.contact_person)
    formData.append('contact_phone', form.contact_phone)
    formData.append('payment_account', form.payment_account)
    formData.append('contact_email', form.contact_email)
    formData.append('notes', form.notes)

    if (form.signature_image_path) {
      formData.append('signature', form.signature_image_path)
    }

    if (form.logo_image_file) {
      formData.append('logo', form.logo_image_file)
    }

    validItems.forEach((item, index) => {
      formData.append(`items[${index}][name]`, item.name)
      formData.append(`items[${index}][description]`, item.description)
      formData.append(`items[${index}][qty]`, String(item.qty))
      formData.append(`items[${index}][price]`, String(item.price))
      formData.append(`items[${index}][subtotal]`, String(item.subtotal))
      formData.append(`items[${index}][amount]`, String(item.amount))
    })

    const response = await invoiceService.create(formData)
    const createdInvoiceId = response.data?.data?.id ?? null

    alert('Invoice Successfully Created!')
    lastCreatedInvoiceId.value = createdInvoiceId
    statusMessage.value = 'Invoice created successfully.'

    if (createdInvoiceId) {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      await downloadPdf(createdInvoiceId)
    }

    resetForm()
  } catch (error) {
    statusMessage.value = 'Failed to create invoice.'

    if (error.response) {
      if (error.response.status === 422) {
        const errors = error.response.data.errors

        if (errors) {
          const messages = Object.values(errors).flat().join('\n')
          alert(`Validation Error:\n${messages}`)
        } else {
          alert('Validation failed, but no details provided.')
        }
      } else {
        console.error('API Error:', error.response)
        alert(`Error ${error.response.status}: ${error.response.statusText}`)
      }
    } else {
      console.error('Unexpected Error:', error)
      alert('Something went wrong, please try again.')
    }
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
@reference "tailwindcss";

.form-label {
  @apply mb-1.5 block text-xs font-bold uppercase tracking-[0.15em] text-slate-500;
}

.form-helper {
  @apply text-sm leading-6 text-slate-500;
}

.form-error {
  @apply mt-1.5 flex items-center gap-1 text-sm font-medium text-red-600;
}

.input-wrap {
  @apply relative;
}

.input-icon {
  @apply pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 transition-colors duration-150;
}

.input-wrap:focus-within .input-icon {
  @apply text-[#F99237];
}

.form-input {
  @apply block w-full rounded-sm border-2 border-slate-100 bg-white px-4 py-2.5 text-sm text-slate-800 transition-all duration-200 placeholder:text-slate-400 hover:border-slate-200 focus:border-[#F99237] focus:bg-white focus:outline-none focus:ring-0;
}

.form-input.has-icon {
  @apply pl-11;
}

.form-input[aria-invalid='true'] {
  @apply border-red-200 bg-red-50/40 focus:border-red-400;
}

.form-input-table {
  @apply block w-full rounded-sm border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-orange-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-orange-400/20;
}

textarea.form-input {
  @apply leading-relaxed;
}

input[type='date'].form-input {
  @apply pr-3;
}

input[type='file'].form-input {
  @apply cursor-pointer p-0 file:mr-4 file:cursor-pointer file:rounded-none file:border-0 file:bg-orange-500 file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-white file:transition file:hover:bg-orange-600;
}

.table-th {
  @apply px-3 py-3 text-left text-xs font-bold uppercase tracking-widest border-b-2 border-orange-100;
}

.section-card {
  @apply relative overflow-hidden rounded-sm border-2 border-slate-100 bg-white p-5 sm:p-7 md:p-10 transition-shadow duration-200 hover:shadow-xl hover:shadow-slate-100/50;
}

.section-title {
  @apply mb-5 flex items-center gap-3 text-base font-bold tracking-tight text-slate-800 md:mb-8 md:text-lg;
}

.section-title-icon {
  @apply flex h-6 w-6 items-center justify-center text-orange-500;
}
</style>
