<script lang="js" setup>
import { onUnmounted, ref, onMounted } from 'vue';
import profileImage from '@/assets/me.jpg'

const greetings = [
  'Hello there',
  'ሰላም',
  'Bonjour',
  'Hola',
  'こんにちは',
  'Guten Tag'
]

const currentIndex = ref(0)
const currentGreet = ref(greetings[0])

const full_name = ref('Bealprasim Demere')

function startRotation(interval = 2000) {
  const timer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % greetings.length
    currentGreet.value = greetings[currentIndex.value]
  }, interval)

  onUnmounted(() => clearInterval(timer))
}

onMounted(() => startRotation(2000)) // 2s interval

</script>


<template>
<div class="hero text-light">
  <div id="content">
    <div id="info">
      <h1 class="text-4xl font-bold text-white">
        {{currentGreet}} , Welcome to my page! I am {{ full_name }} a software engineer hailing from the lands of Abyssinia 🇪🇹.
      </h1>
      <p class="text-gray-300 mt-2">Full-Stack web Developer • Progressive Web App Developer • Cyber Security Practitioner • CTF Player </p>
    </div>
  </div>

  <div class="text-center" id="middle">
    <div class="glitch">
      <img :src="profileImage" class="profile-img" alt="Profile Image">
    </div>
  </div>
</div>

<TechStackSection />
<ProjectSection />
<AboutSection />

<BlogSection />
<ContactSection />

<div class="text-center my-4">
  <a href="#top">
    <button class="btn btn-primary bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded">
      Back to Top
    </button>
  </a>
</div>
</template>


<style scoped>
.glitch {
  width: 300px;
  height: 200px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
}

img{
  width: 100%;
  height: 100%;

}

.hero {
  padding-top: 1.25rem;
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 25px;
}

.hero > div {
  flex: 1 1 calc(50% - 32px);
  box-sizing: border-box;
  min-width: 300px;
}

.profile-img {
  object-fit: cover;
}
 

.btn {
  padding: 0.5rem 1.5rem;
  transition: transform 0.3s ease;
}
.btn:hover { transform: translateY(-10px); }

/* --------- Form styling --------- */
form {
  background: #1d3044;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  color: antiquewhite;
}

input, select {
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}

/* --------- Vue Transitions --------- */
.v-enter-active, .v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from, .v-leave-to {
  opacity: 0;
}

/* --------- Responsive Design --------- */
@media (max-width: 780px) {
  .hero { flex-direction: column; }
  #info h2:first-child { font-size: 2rem; }
  .img-fluid { max-width: 250px; margin: 1rem auto; }
  .btn { width: 80%; margin: 0.5rem; }
  form { margin: 1rem; }
}

@media (max-width: 576px) {
  #info h2:first-child { font-size: 1.8rem; }
  .img-fluid { max-width: 220px; }
}
</style>
