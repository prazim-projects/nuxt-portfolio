<script setup>
import { ref } from 'vue';
import about from '@/data/staticData.json'

const hoveredIndex = ref(null);

const ctf = about.about.CTF;
const edu = about.about.education;
const intern = about.about.Internship;

const groups = [
  { key: 'edu', title: 'Education', items: edu, tone: 'cyan' },
  { key: 'ctf', title: 'CTF Achievements', items: ctf, tone: 'pink' },
  { key: 'intern', title: 'Internship', items: intern, tone: 'green' }
];
</script>

<template>
  <section class="about-shell" id="about">
    <div class="section-head">
      <h2>Career, Achievements, & Hobbies</h2>
    </div>

    <div class="groups-grid">
      <article v-for="group in groups" :key="group.key" class="group-card">
        <h3 class="group-title" :class="group.tone">{{ group.title }}</h3>

        <div class="roadmap">
          <div
            class="card neon"
            v-for="(s, i) in group.items"
            :key="group.key + '-' + i"
            @mouseenter="hoveredIndex = group.key + '-' + i"
            @mouseleave="hoveredIndex = null"
            :class="{ expanded: hoveredIndex === group.key + '-' + i }"
          >
            <h4 class="glow-text" :class="group.tone">{{ s.title }}</h4>
            <p>{{ s.text }}</p>
            <span>{{ s.year }}</span>
            <transition name="fade-slide">
              <img
                v-if="hoveredIndex === group.key + '-' + i && s.img"
                :src="s.img"
                class="card-img"
              />
            </transition>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.about-shell {
  padding: 1rem;
}

.section-head {
  text-align: center;
  margin-bottom: 1rem;
}

.section-head h2 {
  margin: 0;
  color: #e7feff;
  font-size: 2.3rem;
  text-shadow: 0 0 18px rgba(0, 255, 255, 0.45);
}

.section-head p {
  margin: 0.35rem 0 0;
  color: #a8d0d6;
}

.groups-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.group-card {
  border: 1px solid rgba(0, 255, 255, 0.2);
  border-radius: 14px;
  padding: 1rem;
  background: linear-gradient(165deg, rgba(2, 18, 30, 0.65), rgba(14, 2, 21, 0.5));
  box-shadow: inset 0 0 16px rgba(0, 255, 255, 0.08);
}

.group-title {
  margin: 0 0 0.7rem;
  font-size: 1.08rem;
  letter-spacing: 0.03em;
}

.roadmap {
  display: grid;
  grid-template-columns: 1fr;
  align-items: start;
  gap: 1rem;
  background: radial-gradient(circle at top, #04080f, #000);
  border-radius: 10px;
  padding: 0.8rem;
  overflow: hidden;
}

.card {
  background: rgba(0, 5, 10, 0.7);
  color: #fff;
  border: 1px solid rgba(0, 255, 255, 0.3);
  border-radius: 1rem;
  padding: 1.2rem;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.35s ease;
  overflow: hidden;
  backdrop-filter: blur(6px);
}

/* Neon glow ring */
.neon::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border: 2px solid transparent;
  background: linear-gradient(45deg, #00ffff, #ff00ff, #00ffff) border-box;
  mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  -webkit-mask-composite: destination-out;
  opacity: 0.3;
  filter: blur(3px);
  transition: opacity 0.4s;
}

/* Hover expand with glow pulse */
.card.expanded {
  transform: translateY(-8px);
  border-color: #0ff;
  box-shadow: 0 0 20px #00ffff99, inset 0 0 15px #00ffff33;
}

.card.expanded::before {
  opacity: 1;
  animation: pulse 1.5s infinite alternate;
}

/* Flicker effect */
@keyframes pulse {
  0%, 100% { filter: blur(2px) brightness(1.2); }
  50% { filter: blur(3px) brightness(1.6); }
}

/* Glowing text */
.glow-text {
  color: #0ff;
  text-shadow: 0 0 5px #0ff, 0 0 15px #00ffff, 0 0 25px #00ffff;
  letter-spacing: 0.05em;
  transition: text-shadow 0.3s ease;
}

.cyan {
  color: #00ffff;
  text-shadow: 0 0 6px #00ffff, 0 0 16px rgba(0, 255, 255, 0.65);
}

.pink {
  color: #ff4fcf;
  text-shadow: 0 0 6px #ff4fcf, 0 0 16px rgba(255, 79, 207, 0.55);
}

.green {
  color: #74ffa6;
  text-shadow: 0 0 6px #74ffa6, 0 0 16px rgba(116, 255, 166, 0.5);
}

/* Flickering glitch animation */
@keyframes flicker {
  0%, 18%, 22%, 25%, 53%, 57%, 100% {
    opacity: 1;
  }
  20%, 24%, 55% {
    opacity: 0.4;
  }
}

.card.expanded h3 {
  animation: flicker 2s infinite;
}

.card.expanded h4 {
  animation: flicker 2s infinite;
}

/* Image reveal animation */
.card-img {
  width: 100%;
  margin-top: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 12px rgba(0, 255, 255, 0.5);
}

/* Transition animation for fade-slide */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Responsive layout */
@media (max-width: 900px) {
  .groups-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .groups-grid {
    grid-template-columns: 1fr;
  }

  .section-head h2 {
    font-size: 2rem;
  }
}
</style>