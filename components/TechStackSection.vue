<script lang="js" setup>
import { ref } from 'vue';
import stackList from '@/data/staticData.json'


const secTools = [
    { category: 'Network Security & pentest with Nmap', img: '/svgs/Nmap Project.png' },
    { category: 'Web application security with Burp Suite', img: '/svgs/burpsuite-security.svg' },
    { category: 'Android Testing with ADB', img: '/svgs/Adb.svg'}

]

const frameworks = ref(stackList.offers.stack)
</script>

<template>
  <h2 class="slide-title" id="skills">Skills & Tools</h2>
  <div class="container-sk">
    <section class="group-card">
      <h3>Core Stack</h3>
      <div class="stack-grid">
        <article v-for="(value, key) in frameworks" :key="key" class="stack-item">
          <img :src="value.img" :alt="value.title" loading="lazy" />
          <h4>{{ value.title }}</h4>
          <p>{{ value.desc }}</p>
        </article>
      </div>
    </section>

    <section class="group-card">
      <h3>Security Tooling</h3>
      <div class="tools-grid">
        <article v-for="(tool, index) in secTools" :key="index" class="tool-item">
          <img :src="tool.img" :alt="tool.category" loading="lazy" />
          <p>{{ tool.category }}</p>
        </article>
      </div>
    </section>
  </div>
</template>

<style lang="css" scoped>
h2 {
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
  color: #e8faff;
  font-size: 2.5rem;
  text-shadow: 0 0 16px rgba(60, 249, 255, 0.5), 0 0 6px rgba(255, 60, 166, 0.35);
}

.container-sk {
  --cp-cyan: #3cf9ff;
  --cp-pink: #ff3ca6;
  --cp-lime: #a5ff47;
  --cp-deep: #05010d;
  --cp-panel: #0a1022;

  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
  gap: 1.25rem;
  width: 100%;
  padding: 0.5rem 1rem 1rem;
  box-sizing: border-box;
  position: relative;
}

.container-sk::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 16px;
  background:
    linear-gradient(rgba(60, 249, 255, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(60, 249, 255, 0.08) 1px, transparent 1px),
    radial-gradient(circle at top right, rgba(255, 60, 166, 0.1), transparent 40%),
    radial-gradient(circle at bottom left, rgba(165, 255, 71, 0.08), transparent 35%);
  background-size: 28px 28px, 28px 28px, auto, auto;
  pointer-events: none;
}

.group-card {
  position: relative;
  background: linear-gradient(170deg, rgba(10, 16, 34, 0.8), rgba(5, 1, 13, 0.8));
  border: 1px solid rgba(60, 249, 255, 0.32);
  border-radius: 14px;
  padding: 1rem;
  backdrop-filter: blur(6px);
  box-shadow: inset 0 0 22px rgba(60, 249, 255, 0.1), 0 0 12px rgba(255, 60, 166, 0.1);
}

.group-card h3 {
  margin: 0 0 0.9rem;
  color: var(--cp-cyan);
  font-size: 1.05rem;
  letter-spacing: 0.02em;
  text-shadow: 0 0 10px rgba(60, 249, 255, 0.35);
}

.stack-grid,
.tools-grid {
  display: grid;
  gap: 0.9rem;
}

.stack-grid {
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
}

.tools-grid {
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}

.stack-item,
.tool-item {
  border: 1px solid rgba(60, 249, 255, 0.25);
  border-radius: 10px;
  background: linear-gradient(150deg, rgba(4, 22, 36, 0.72), rgba(12, 6, 26, 0.72));
  padding: 0.8rem;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.stack-item:hover,
.tool-item:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 60, 166, 0.5);
  box-shadow: 0 8px 20px rgba(60, 249, 255, 0.22), 0 0 14px rgba(255, 60, 166, 0.2);
}

.stack-item img,
.tool-item img {
  width: 88px;
  height: 88px;
  object-fit: contain;
  display: block;
  margin: 0 auto 0.6rem;
}

.stack-item h4 {
  margin: 0 0 0.35rem;
  color: #f8ffff;
  font-size: 0.95rem;
}

.stack-item p,
.tool-item p {
  margin: 0;
  color: #c5dbe5;
  font-size: 0.86rem;
  line-height: 1.35;
}

@media (max-width: 940px) {
  .container-sk {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  h2 {
    font-size: 2rem;
  }

  .stack-grid,
  .tools-grid {
    grid-template-columns: 1fr 1fr;
  }

  .stack-item img,
  .tool-item img {
    width: 76px;
    height: 76px;
  }
}

@media (max-width: 420px) {
  .stack-grid,
  .tools-grid {
    grid-template-columns: 1fr;
  }
}

</style>