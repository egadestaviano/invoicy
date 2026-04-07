<template>
  <div class="bg-slate-50 text-slate-900">
    <Header />

    <main id="main-content" class="mx-auto max-w-6xl px-4 pb-16 pt-24 md:px-6 md:pt-28">
      <section class="pt-6">
        <div class="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
              Invoice workspace
            </p>
            <h1 class="text-3xl font-extrabold tracking-tight text-slate-900">Create Invoice</h1>
          </div>
          <p class="max-w-xl text-sm text-slate-600">
            Fill in invoice details, add line items, then generate a downloadable PDF invoice.
          </p>
        </div>
      </section>

      <form class="space-y-6 py-8" novalidate @submit.prevent="submitForm">
        <section class="section-card" aria-labelledby="invoice-information-title">
          <h2 id="invoice-information-title" class="section-title">Invoice Information</h2>

          <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div>
              <label class="form-label" :for="fieldIds.invoiceNumber">Invoice Number</label>
              <input
                :id="fieldIds.invoiceNumber"
                v-model="form.invoice_number"
                type="text"
                name="invoice_number"
                autocomplete="off"
                required
                :aria-invalid="Boolean(validationErrors.invoice_number)"
                :aria-describedby="validationErrors.invoice_number ? `${fieldIds.invoiceNumber}-error` : undefined"
                class="form-input"
              />
              <p
                v-if="validationErrors.invoice_number"
                :id="`${fieldIds.invoiceNumber}-error`"
                class="form-error"
              >
                {{ validationErrors.invoice_number }}
              </p>
            </div>

            <div>
              <label class="form-label" :for="fieldIds.processDate">Process Date</label>
              <input
                :id="fieldIds.processDate"
                v-model="form.process_date"
                type="date"
                name="process_date"
                autocomplete="off"
                required
                :aria-invalid="Boolean(validationErrors.process_date)"
                :aria-describedby="validationErrors.process_date ? `${fieldIds.processDate}-error` : undefined"
                class="form-input"
              />
              <p
                v-if="validationErrors.process_date"
                :id="`${fieldIds.processDate}-error`"
                class="form-error"
              >
                {{ validationErrors.process_date }}
              </p>
            </div>

            <div>
              <label class="form-label" :for="fieldIds.dueDate">Due Date</label>
              <input
                :id="fieldIds.dueDate"
                v-model="form.due_date"
                type="date"
                name="due_date"
                autocomplete="off"
                required
                :aria-invalid="Boolean(validationErrors.due_date)"
                :aria-describedby="validationErrors.due_date ? `${fieldIds.dueDate}-error` : undefined"
                class="form-input"
              />
              <p v-if="validationErrors.due_date" :id="`${fieldIds.dueDate}-error`" class="form-error">
                {{ validationErrors.due_date }}
              </p>
            </div>
          </div>
        </section>

        <section class="section-card" aria-labelledby="customer-details-title">
          <h2 id="customer-details-title" class="section-title">Customer Details</h2>

          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label class="form-label" :for="fieldIds.customerName">Customer Name</label>
              <input
                :id="fieldIds.customerName"
                v-model="form.customer_name"
                type="text"
                name="customer_name"
                autocomplete="organization"
                required
                :aria-invalid="Boolean(validationErrors.customer_name)"
                :aria-describedby="validationErrors.customer_name ? `${fieldIds.customerName}-error` : undefined"
                class="form-input"
              />
              <p
                v-if="validationErrors.customer_name"
                :id="`${fieldIds.customerName}-error`"
                class="form-error"
              >
                {{ validationErrors.customer_name }}
              </p>
            </div>

            <div>
              <label class="form-label" :for="fieldIds.customerId">Customer ID</label>
              <input
                :id="fieldIds.customerId"
                v-model="form.customer_id"
                type="text"
                name="customer_id"
                autocomplete="off"
                class="form-input"
              />
            </div>

            <div class="md:col-span-2">
              <label class="form-label" :for="fieldIds.customerAddress">Customer Address</label>
              <textarea
                :id="fieldIds.customerAddress"
                v-model="form.customer_address"
                name="customer_address"
                autocomplete="street-address"
                rows="4"
                class="form-input"
              ></textarea>
            </div>
          </div>
        </section>

        <section class="section-card" aria-labelledby="contact-payment-title">
          <h2 id="contact-payment-title" class="section-title">Contact & Payment</h2>

          <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div>
              <label class="form-label" :for="fieldIds.previousBalance">Previous Balance</label>
              <input
                :id="fieldIds.previousBalance"
                v-model.number="form.previous_balance"
                type="number"
                name="previous_balance"
                inputmode="decimal"
                min="0"
                step="0.01"
                class="form-input"
              />
            </div>

            <div>
              <label class="form-label" :for="fieldIds.contactPerson">Contact Person</label>
              <input
                :id="fieldIds.contactPerson"
                v-model="form.contact_person"
                type="text"
                name="contact_person"
                autocomplete="name"
                class="form-input"
              />
            </div>

            <div>
              <label class="form-label" :for="fieldIds.contactPhone">Contact Phone</label>
              <input
                :id="fieldIds.contactPhone"
                v-model="form.contact_phone"
                type="tel"
                name="contact_phone"
                autocomplete="tel"
                inputmode="tel"
                class="form-input"
              />
            </div>

            <div>
              <label class="form-label" :for="fieldIds.paymentAccount">Payment Account</label>
              <input
                :id="fieldIds.paymentAccount"
                v-model="form.payment_account"
                type="text"
                name="payment_account"
                autocomplete="off"
                class="form-input"
              />
            </div>

            <div>
              <label class="form-label" :for="fieldIds.contactEmail">Contact Email</label>
              <input
                :id="fieldIds.contactEmail"
                v-model="form.contact_email"
                type="email"
                name="contact_email"
                autocomplete="email"
                :aria-invalid="Boolean(validationErrors.contact_email)"
                :aria-describedby="validationErrors.contact_email ? `${fieldIds.contactEmail}-error` : undefined"
                class="form-input"
              />
              <p
                v-if="validationErrors.contact_email"
                :id="`${fieldIds.contactEmail}-error`"
                class="form-error"
              >
                {{ validationErrors.contact_email }}
              </p>
            </div>
          </div>
        </section>

        <section class="section-card" aria-labelledby="notes-title">
          <h2 id="notes-title" class="section-title">Notes</h2>
          <label class="sr-only" :for="fieldIds.notes">Invoice Notes</label>
          <textarea
            :id="fieldIds.notes"
            v-model="form.notes"
            name="notes"
            rows="4"
            class="form-input"
          ></textarea>
        </section>

        <section class="section-card" aria-labelledby="branding-signature-title">
          <h2 id="branding-signature-title" class="section-title">Branding & Signature</h2>

          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label class="form-label" :for="fieldIds.signatureCanvas">Signature</label>
              <p :id="fieldIds.signatureHelp" class="form-helper">
                Draw your signature in the box below. If you leave it empty, the app will confirm before continuing.
              </p>

              <canvas
                :id="fieldIds.signatureCanvas"
                ref="signatureCanvas"
                tabindex="0"
                role="img"
                :aria-describedby="fieldIds.signatureHelp"
                aria-label="Signature drawing area"
                class="mt-2 h-40 w-full cursor-crosshair rounded-xl border-2 border-dashed border-gray-300 bg-white shadow-inner touch-none"
              >
                Signature canvas for drawing your approval.
              </canvas>

              <div class="mt-3 flex flex-wrap gap-2">
                <button
                  type="button"
                  @click="clearSignature"
                  class="rounded-lg bg-gray-200 px-4 py-2 text-gray-700 transition hover:bg-gray-300"
                >
                  Clear
                </button>

                <button
                  type="button"
                  @click="saveSignature"
                  class="rounded-lg bg-orange-500 px-4 py-2 font-medium text-white shadow-sm transition hover:bg-orange-600"
                >
                  Save Signature
                </button>
              </div>

              <div v-if="form.signature_image_path" class="mt-3">
                <p class="mb-1 text-sm text-gray-600">Preview:</p>
                <img
                  :src="form.signature_image_path"
                  alt="Preview tanda tangan invoice"
                  class="h-20 rounded-md border object-contain"
                />
              </div>
            </div>

            <div>
              <label class="form-label" :for="fieldIds.logoFile">Logo</label>
              <p :id="fieldIds.logoHelp" class="form-helper">
                Upload a JPG, JPEG, PNG, or GIF file for your invoice branding.
              </p>

              <input
                :id="fieldIds.logoFile"
                ref="logoFileInput"
                type="file"
                name="logo"
                accept=".jpg,.jpeg,.png,.gif"
                :aria-describedby="fieldIds.logoHelp"
                class="form-input mt-2"
                @change="handleLogoUpload"
              />

              <div v-if="form.logo_preview" class="mt-3">
                <p class="mb-1 text-sm text-gray-600">Preview:</p>
                <img
                  :src="form.logo_preview"
                  alt="Preview logo invoice"
                  class="h-20 rounded-md border object-contain"
                />

                <button
                  type="button"
                  @click="clearLogo"
                  class="mt-2 rounded-md bg-red-500 px-3 py-1 text-sm text-white transition hover:bg-red-600"
                >
                  Remove Logo
                </button>
              </div>
            </div>
          </div>
        </section>

        <section class="section-card" aria-labelledby="items-title">
          <div class="mb-3 flex items-center justify-between gap-4">
            <h2 id="items-title" class="section-title mb-0">Items</h2>

            <button
              type="button"
              @click="addItem"
              class="rounded-xl bg-orange-500 px-4 py-2 font-medium text-white shadow-sm transition hover:bg-orange-600"
            >
              Add Item
            </button>
          </div>

          <p class="form-helper">
            Add at least one item with a name, quantity, and price greater than zero.
          </p>
          <p v-if="validationErrors.items" class="form-error mt-2">{{ validationErrors.items }}</p>

          <div class="mt-4 overflow-x-auto">
            <table class="min-w-full overflow-hidden rounded-xl border border-gray-200 text-sm">
              <thead class="bg-orange-50 text-orange-800">
                <tr>
                  <th scope="col" class="table-th">Name</th>
                  <th scope="col" class="table-th">Description</th>
                  <th scope="col" class="table-th">Qty</th>
                  <th scope="col" class="table-th">Price</th>
                  <th scope="col" class="table-th">Subtotal</th>
                  <th scope="col" class="table-th">Amount</th>
                  <th scope="col" class="table-th w-16">Action</th>
                </tr>
              </thead>

              <tbody>
                <tr
                  v-for="(item, index) in form.items"
                  :key="getItemRowKey(index)"
                  class="gap-2 hover:bg-orange-50"
                >
                  <td class="p-2">
                    <label class="sr-only" :for="getItemFieldId(index, 'name')">Item {{ index + 1 }} name</label>
                    <input
                      :id="getItemFieldId(index, 'name')"
                      v-model="item.name"
                      type="text"
                      :name="`items[${index}].name`"
                      class="form-input"
                    />
                  </td>
                  <td class="p-2">
                    <label class="sr-only" :for="getItemFieldId(index, 'description')">
                      Item {{ index + 1 }} description
                    </label>
                    <input
                      :id="getItemFieldId(index, 'description')"
                      v-model="item.description"
                      type="text"
                      :name="`items[${index}].description`"
                      class="form-input"
                    />
                  </td>
                  <td class="p-2">
                    <label class="sr-only" :for="getItemFieldId(index, 'qty')">Item {{ index + 1 }} quantity</label>
                    <input
                      :id="getItemFieldId(index, 'qty')"
                      v-model.number="item.qty"
                      type="number"
                      :name="`items[${index}].qty`"
                      inputmode="numeric"
                      min="1"
                      step="1"
                      class="form-input"
                    />
                  </td>
                  <td class="p-2">
                    <label class="sr-only" :for="getItemFieldId(index, 'price')">Item {{ index + 1 }} price</label>
                    <input
                      :id="getItemFieldId(index, 'price')"
                      v-model.number="item.price"
                      type="number"
                      :name="`items[${index}].price`"
                      inputmode="decimal"
                      min="0"
                      step="0.01"
                      class="form-input"
                    />
                  </td>
                  <td class="p-2">
                    <label class="sr-only" :for="getItemFieldId(index, 'subtotal')">
                      Item {{ index + 1 }} subtotal
                    </label>
                    <input
                      :id="getItemFieldId(index, 'subtotal')"
                      v-model.number="item.subtotal"
                      type="number"
                      :name="`items[${index}].subtotal`"
                      inputmode="decimal"
                      min="0"
                      step="0.01"
                      class="form-input"
                    />
                  </td>
                  <td class="p-2">
                    <label class="sr-only" :for="getItemFieldId(index, 'amount')">Item {{ index + 1 }} amount</label>
                    <input
                      :id="getItemFieldId(index, 'amount')"
                      v-model.number="item.amount"
                      type="number"
                      :name="`items[${index}].amount`"
                      inputmode="decimal"
                      min="0"
                      step="0.01"
                      class="form-input"
                    />
                  </td>
                  <td class="text-center">
                    <button
                      type="button"
                      :aria-label="`Remove item ${index + 1}`"
                      class="rounded-md px-2 py-1 font-bold text-red-500 transition hover:bg-red-50 hover:text-red-700"
                      @click="removeItem(index)"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section class="section-card flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div class="space-y-2">
            <button
              type="submit"
              :disabled="isSubmitting"
              class="rounded-xl bg-orange-600 px-7 py-3 font-semibold text-white shadow-md transition hover:bg-orange-700 disabled:bg-orange-300"
            >
              {{ isSubmitting ? 'Submitting...' : 'Create & Generate Invoice' }}
            </button>
            <p class="text-sm text-slate-500" aria-live="polite">
              {{ statusMessage }}
            </p>
          </div>

          <div v-if="lastCreatedInvoiceId" class="flex flex-wrap items-center gap-3">
            <button
              type="button"
              @click="downloadPdf(lastCreatedInvoiceId)"
              :disabled="isDownloading"
              class="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow transition hover:bg-blue-700 disabled:bg-blue-300"
            >
              {{ isDownloading ? 'Downloading...' : 'Download PDF' }}
            </button>

            <span class="text-sm text-gray-500">Invoice ID: {{ lastCreatedInvoiceId }}</span>
          </div>
        </section>
      </form>
    </main>

    <Footer />
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, reactive, ref } from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import invoiceService from '../services/invoiceService.js'
import SignaturePad from 'signature_pad'

const signatureCanvas = ref(null)
const logoFileInput = ref(null)
const lastCreatedInvoiceId = ref(null)
const isDownloading = ref(false)
const isSubmitting = ref(false)
const statusMessage = ref('Ready to create an invoice.')

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

const createEmptyItem = () => ({
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
  @apply mb-1 block text-sm font-semibold text-gray-700;
}

.form-helper {
  @apply text-sm leading-6 text-gray-500;
}

.form-error {
  @apply mt-1 text-sm font-medium text-red-600;
}

.form-input {
  @apply w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 transition duration-150
    focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200;
}

.form-input[aria-invalid='true'] {
  @apply border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-200;
}

.table-th {
  @apply px-3 py-3 text-left font-semibold text-gray-700;
}

.section-card {
  @apply rounded-xl border border-gray-200 bg-white p-5 shadow-sm;
}

.section-title {
  @apply mb-4 flex items-center gap-2 text-lg font-bold text-gray-800;
}
</style>
