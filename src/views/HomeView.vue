<template>
  <Header />

  <!-- Page Title -->
  <div class="max-w-5xl mx-auto px-4 md:px-6 pt-6">
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
      <h1 class="text-3xl font-extrabold text-gray-800 tracking-tight">
        Create Invoice
      </h1>
      <div class="text-sm text-gray-500">
        Fill the details and generate a downloadable PDF invoice
      </div>
    </div>
  </div>

  <form @submit.prevent="submitForm" class="max-w-5xl mx-auto px-4 md:px-6 py-8 space-y-6">

    <!-- Invoice Info -->
    <div class="section-card">
      <div class="section-title">📄 Invoice Information</div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label class="form-label">Invoice Number</label>
          <input v-model="form.invoice_number" type="text" class="form-input" />
        </div>
        <div>
          <label class="form-label">Process Date</label>
          <input v-model="form.process_date" type="date" class="form-input" />
        </div>
        <div>
          <label class="form-label">Due Date</label>
          <input v-model="form.due_date" type="date" class="form-input" />
        </div>
      </div>
    </div>

    <!-- Customer Info -->
    <div class="section-card">
      <div class="section-title">👤 Customer Details</div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="form-label">Customer Name</label>
          <input v-model="form.customer_name" type="text" class="form-input" />
        </div>
        <div>
          <label class="form-label">Customer ID</label>
          <input v-model="form.customer_id" type="text" class="form-input" />
        </div>
        <div class="md:col-span-2">
          <label class="form-label">Customer Address</label>
          <textarea v-model="form.customer_address" class="form-input"></textarea>
        </div>
      </div>
    </div>

    <!-- Contact Info -->
    <div class="section-card">
      <div class="section-title">☎ Contact & Payment</div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label class="form-label">Previous Balance</label>
          <input v-model.number="form.previous_balance" type="number" class="form-input" />
        </div>
        <div>
          <label class="form-label">Contact Person</label>
          <input v-model="form.contact_person" type="text" class="form-input" />
        </div>
        <div>
          <label class="form-label">Contact Phone</label>
          <input v-model="form.contact_phone" type="text" class="form-input" />
        </div>
        <div>
          <label class="form-label">Payment Account</label>
          <input v-model="form.payment_account" type="text" class="form-input" />
        </div>
        <div>
          <label class="form-label">Contact Email</label>
          <input v-model="form.contact_email" type="email" class="form-input" />
        </div>
      </div>
    </div>

    <!-- Notes -->
    <div class="section-card">
      <div class="section-title">📝 Notes</div>
      <textarea v-model="form.notes" class="form-input"></textarea>
    </div>

    <!-- Signature & Logo -->
    <div class="section-card">
      <div class="section-title">🖊 Branding & Signature</div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

        <!-- Signature -->
        <div>
          <label class="form-label">Signature</label>

          <canvas
            ref="signatureCanvas"
            class="w-full h-40 bg-white rounded-xl border-2 border-dashed border-gray-300 cursor-crosshair touch-none shadow-inner">
          </canvas>

          <div class="mt-3 flex gap-2">
            <button type="button"
              @click="clearSignature"
              class="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700">
              Clear
            </button>

            <button type="button"
              @click="saveSignature"
              class="px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-medium shadow-sm">
              Save Signature
            </button>
          </div>

          <div v-if="form.signature_image_path" class="mt-3">
            <p class="text-sm text-gray-600 mb-1">Preview:</p>
            <img :src="form.signature_image_path" class="h-20 object-contain border rounded-md" />
          </div>
        </div>

        <!-- Logo -->
        <div>
          <label class="form-label">Logo</label>

          <input
            ref="logoFileInput"
            type="file"
            @change="handleLogoUpload"
            accept=".jpg,.jpeg,.png,.gif"
            class="form-input" />

          <div v-if="form.logo_preview" class="mt-3">
            <p class="text-sm text-gray-600 mb-1">Preview:</p>
            <img :src="form.logo_preview" class="h-20 object-contain border rounded-md" />

            <button
              type="button"
              @click="clearLogo"
              class="mt-2 px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded-md">
              Remove Logo
            </button>
          </div>
        </div>

      </div>
    </div>

    <!-- Items -->
    <div class="section-card">
      <div class="flex items-center justify-between mb-3">
        <h3 class="text-lg font-bold text-gray-700">Items</h3>

        <button
          type="button"
          @click="addItem"
          class="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-medium shadow-sm">
          + Add Item
        </button>
      </div>

      <div class="overflow-x-auto">
        <table class="min-w-full border border-gray-200 text-sm rounded-xl overflow-hidden">
          <thead class="bg-orange-50 text-orange-800">
            <tr>
              <th class="table-th">Name</th>
              <th class="table-th">Description</th>
              <th class="table-th">Qty</th>
              <th class="table-th">Price</th>
              <th class="table-th">Subtotal</th>
              <th class="table-th">Amount</th>
              <th class="table-th w-12"></th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(item, index) in form.items" :key="index" class="hover:bg-orange-50">
              <td><input v-model="item.name" type="text" class="form-input" /></td>
              <td><input v-model="item.description" type="text" class="form-input" /></td>
              <td><input v-model.number="item.qty" type="number" class="form-input" /></td>
              <td><input v-model.number="item.price" type="number" class="form-input" /></td>
              <td><input v-model.number="item.subtotal" type="number" class="form-input" /></td>
              <td><input v-model.number="item.amount" type="number" class="form-input" /></td>
              <td class="text-center">
                <button type="button"
                  @click="removeItem(index)"
                  class="text-red-500 hover:text-red-700 font-bold">
                  ✖
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Submit -->
    <div class="section-card flex flex-col md:flex-row md:items-center md:justify-between gap-4">

      <button
        type="submit"
        :disabled="isSubmitting"
        class="px-7 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 disabled:bg-orange-300 text-white font-semibold shadow-md transition">
        {{ isSubmitting ? 'Submitting...' : 'Create & Generate Invoice' }}
      </button>

      <div v-if="lastCreatedInvoiceId" class="flex items-center gap-3">
        <button
          type="button"
          @click="downloadPdf(lastCreatedInvoiceId)"
          :disabled="isDownloading"
          class="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold shadow">
          {{ isDownloading ? 'Downloading...' : 'Download PDF' }}
        </button>

        <span class="text-sm text-gray-500">
          Invoice ID: {{ lastCreatedInvoiceId }}
        </span>
      </div>

    </div>

  </form>

  <Footer />
</template>

<script setup>
import { reactive, toRaw, onMounted, onUnmounted, ref } from "vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import invoiceService from "../services/invoiceService.js";
import SignaturePad from "signature_pad";
import { generateInvoicePdf } from "../utils/pdf/generateInvoicePdf"; 

const signatureCanvas = ref(null);
const logoFileInput = ref(null);
const lastCreatedInvoiceId = ref(null);
const isDownloading = ref(false);
const isSubmitting = ref(false);
let signaturePad = null;
let handleResize = null;

onMounted(() => {
  if (signatureCanvas.value) {
    const canvas = signatureCanvas.value;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width;
    canvas.height = rect.height;

    signaturePad = new SignaturePad(canvas);
    signaturePad.addEventListener('endStroke', () => {
      if (!signaturePad.isEmpty()) {
        form.signature_image_path = signaturePad.toDataURL();
      }
    });
  }
});

onUnmounted(() => {
  if (handleResize) {
    window.removeEventListener('resize', handleResize);
  }
});

const clearSignature = () => {
  if (signaturePad && typeof signaturePad.clear === 'function') {
    signaturePad.clear();
    form.signature_image_path = '';
  }
};

const saveSignature = () => {
  if (signaturePad && typeof signaturePad.isEmpty === 'function' && !signaturePad.isEmpty()) {
    form.signature_image_path = signaturePad.toDataURL();
    console.log('Signature saved:', form.signature_image_path.substring(0, 50) + '...');
    alert('Signature saved successfully!');
  } else {
    alert('Please draw a signature first!');
  }
};

const handleLogoUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    const fileExtension = '.' + file.name.split('.').pop().toLowerCase();

    if (!allowedTypes.includes(file.type) || !allowedExtensions.includes(fileExtension)) {
      alert('Please select a valid image file (JPEG, PNG, or GIF). WebP files are not supported.');
      e.target.value = '';
      return;
    }

    form.logo_image_file = file;
    form.logo_preview = URL.createObjectURL(file);
  }
};

const clearLogo = () => {
  if (form.logo_preview) {
    URL.revokeObjectURL(form.logo_preview);
  }
  form.logo_image_file = null;
  form.logo_preview = '';
  if (logoFileInput.value) {
    logoFileInput.value.value = '';
  }
};

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
  items: [
    {
      name: '',
      description: '',
      qty: 1,
      price: 0,
      subtotal: 0,
      amount: 0,
    },
  ],
})

const resetForm = () => {
  if (form.logo_preview) {
    URL.revokeObjectURL(form.logo_preview);
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
    items: [
      {
        name: '',
        description: '',
        qty: 1,
        price: 0,
        subtotal: 0,
        amount: 0,
      },
    ],
  })

  if (signaturePad && typeof signaturePad.clear === 'function') {
    signaturePad.clear();
  }

  if (logoFileInput.value) {
    logoFileInput.value.value = '';
  }
}

const addItem = () => {
  form.items.push({
    name: "",
    description: "",
    qty: 1,
    price: 0,
    subtotal: 0,
    amount: 0,
  });
};

const removeItem = (index) => {
  form.items.splice(index, 1);
};

const downloadPdf = async (invoiceId) => {
  try {
    isDownloading.value = true;

    const response = await invoiceService.downloadPdf(invoiceId);

    const invoice = response.data?.data?.invoice;

    if (!invoice) {
      alert("Invoice data not found from server");
      return;
    }

    invoice.items = Array.isArray(invoice.items) ? invoice.items : [];

    generateInvoicePdf(invoice);
  } catch (error) {
    console.error("Error downloading PDF:", error);
    alert("Failed to download invoice. Please try again later.");
  } finally {
    isDownloading.value = false;
  }
};


const submitForm = async () => {
  if (!form.invoice_number.trim()) {
    alert('Invoice Number is required!');
    return;
  }

  if (!form.customer_name.trim()) {
    alert('Customer Name is required!');
    return;
  }

  if (!form.process_date) {
    alert('Process Date is required!');
    return;
  }

  if (!form.due_date) {
    alert('Due Date is required!');
    return;
  }

  if (form.process_date && form.due_date) {
    const processDate = new Date(form.process_date);
    const dueDate = new Date(form.due_date);
    if (dueDate < processDate) {
      alert('Due Date must be the same as or after the Process Date!');
      return;
    }
  }

  if (form.contact_email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.contact_email)) {
    alert('Please enter a valid email address!');
    return;
  }

  const validItems = form.items.filter(item =>
    item.name.trim() && item.qty > 0 && item.price > 0
  );

  if (validItems.length === 0) {
    alert('At least one item with name, quantity, and price is required!');
    return;
  }

  if (!form.signature_image_path) {
    if (signaturePad && typeof signaturePad.isEmpty === 'function' && !signaturePad.isEmpty()) {
      form.signature_image_path = signaturePad.toDataURL();
    } else {
      const confirmSignature = confirm(
        'No signature detected. Do you want to continue without signature?'
      );
      if (!confirmSignature) {
        return;
      }
    }
  }

  try {
    isSubmitting.value = true;
    const formData = new FormData();

    formData.append('invoice_number', form.invoice_number);
    formData.append('process_date', form.process_date);
    formData.append('due_date', form.due_date);
    formData.append('customer_name', form.customer_name);
    formData.append('customer_id', form.customer_id);
    formData.append('customer_address', form.customer_address);
    formData.append('previous_balance', form.previous_balance);
    formData.append('contact_person', form.contact_person);
    formData.append('contact_phone', form.contact_phone);
    formData.append('payment_account', form.payment_account);
    formData.append('contact_email', form.contact_email);
    formData.append('notes', form.notes);

    if (form.signature_image_path) {
      formData.append('signature', form.signature_image_path);
    }

    if (form.logo_image_file) {
      formData.append('logo', form.logo_image_file);
    }

    validItems.forEach((item, index) => {
      formData.append(`items[${index}][name]`, item.name);
      formData.append(`items[${index}][description]`, item.description);
      formData.append(`items[${index}][qty]`, item.qty);
      formData.append(`items[${index}][price]`, item.price);
      formData.append(`items[${index}][subtotal]`, item.subtotal);
      formData.append(`items[${index}][amount]`, item.amount);
    });

    const res = await invoiceService.create(formData);
    alert("Invoice Successfully Created!");  

    if (res.data.data.id) {
      lastCreatedInvoiceId.value = res.data?.id;
      await new Promise(resolve => setTimeout(resolve, 1000));
      await downloadPdf(res.data?.data.id);
    }

    resetForm();
  } catch (error) {
    if (error.response) {
      // kalau Laravel validation error
      if (error.response.status === 422) {
        const errors = error.response.data.errors;
        if (errors) {
          const messages = Object.values(errors).flat().join("\n");
          alert(`Validation Error:\n${messages}`);
        } else {
          alert("Validation failed, but no details provided.");
        }
      } else {
        console.error("API Error:", error.response);
        alert(`Error ${error.response.status}: ${error.response.statusText}`);
      }
    } else {
      console.error("Unexpected Error:", error);
      alert("Something went wrong, please try again.");
    }
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
@reference "tailwindcss";

.form-label {
  @apply block text-sm font-semibold text-gray-600 mb-1;
}

.form-input {
  @apply w-full rounded-xl border border-gray-300 px-3 py-2 bg-gray-50
         focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200
         outline-none transition duration-150;
}

.table-th {
  @apply px-3 py-3 text-left font-semibold text-gray-600;
}

.section-card {
  @apply bg-white rounded-2xl shadow-sm border border-gray-200 p-5;
}

.section-title {
  @apply text-lg font-bold text-gray-700 mb-4 flex items-center gap-2;
}
</style>