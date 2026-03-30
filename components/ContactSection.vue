<script setup>

const form = ref({ name: '', email: '', message: '' });
const isSubmitting = ref(false);
const status = ref('');

const _EMAIL = '74b28d1f2b9b9d3d0929c55589e44a3a'; 

const submitForm = async () => {
  isSubmitting.value = true;
  status.value = 'Sending...';
  
  const formData = new FormData();
  
  // REQUIRED: 'email' field enables "Reply-To" in your inbox
  formData.append('name', form.value.name);
  formData.append('email', form.value.email); 
  formData.append('message', form.value.message);
  
  // CONFIGURATION: Using standard FormSubmit underscore prefixes
  formData.append('_subject', `New Portfolio Message from ${form.value.name}`);
  formData.append('_template', 'table');
  formData.append('_captcha', 'false');
  
  try {
    const response = await fetch(`https://formsubmit.co/ajax/${_EMAIL}`, {
      method: 'POST',
      body: formData
    });
    
    const result = await response.json();

    if (response.ok && result.success === "true") {
      status.value = 'Message sent successfully!';
      form.value = { name: '', email: '', message: '' }; // Reset all fields
      setTimeout(() => status.value = '', 3000);
    } else {
      // Check if it's the activation error
      status.value = result.message || 'Failed to send.';
    }
  } catch (error) {
    status.value = 'Check your connection and try again.';
    setTimeout(() => status.value = '', 3000);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <section class="max-w-2xl mx-auto px-4 py-16">
    <div class="bg-white/5 backdrop-blur-sm border border-gray-700 rounded-xl p-6 md:p-8">
      <h2 class="text-3xl font-bold text-white mb-2">Contact Me</h2>
      <p class="text-gray-400 mb-8">Get in touch for opportunities or collaborations.</p>
      
      <form @submit.prevent="submitForm" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
            <input 
              v-model="form.name" 
              type="text" 
              required
              placeholder="John Doe"
              class="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
            />
          </div>

          <!-- ADDED EMAIL INPUT -->
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
            <input 
              v-model="form.email" 
              type="email" 
              required
              placeholder="john@example.com"
              class="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
            />
          </div>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-300 mb-2">Message</label>
          <textarea 
            v-model="form.message" 
            rows="5" 
            required
            placeholder="Your message here..."
            class="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition resize-none"
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          :disabled="isSubmitting"
          class="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ isSubmitting ? 'Sending...' : 'Send Message' }}
        </button>
        
        <p v-if="status" class="text-center text-sm" :class="status.includes('success') ? 'text-green-400' : 'text-red-400'">
          {{ status }}
        </p>
      </form>
    </div>
  </section>
</template>


<style scoped>
@keyframes gridMove {
  0% { transform: translateY(0); }
  100% { transform: translateY(50px); }
}

@keyframes scan {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}

@keyframes glitchText {
  0%, 100% { text-shadow: 0 0 0 #0ff; }
  95% { text-shadow: 0 0 0 #0ff; }
  96% { text-shadow: -1px 0 #f0f, 1px 0 #0ff; }
  97% { text-shadow: 1px 0 #f0f, -1px 0 #0ff; }
}

.animation-delay-500 {
  animation-delay: 500ms;
}

.animation-delay-1000 {
  animation-delay: 1000ms;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>