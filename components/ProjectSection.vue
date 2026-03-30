<script setup>
import { ref } from 'vue';
import projs from '@/data/staticData.json'

const projects = ref(projs.projects.proj);
</script>

<template>
  <section class="projects-shell" id="projects">
    <div class="section-head">
      <h2>Projects</h2>
      <p>Some selected my projects across security, architecture, mobile and full-stack development.</p>
    </div>

    <div class="group-card">
      <h3>Featured Work</h3>
      <div class="projects-grid">
        <div v-for="project in projects" :key="project.title" class="project-card">
          <img :src="project.image" :alt="project.title" class="project-img" />
          <h4>{{ project.title }}</h4>
          <p>{{ project.description }}</p>
          <a :href="project.url" target="_blank" rel="noopener" class="project-link">View Project</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-shell {
  padding: 1rem;
}

.section-head {
  text-align: center;
  margin-bottom: 1rem;
}

.section-head h2 {
  margin: 0;
  color: #dffcff;
  font-size: 2.3rem;
  text-shadow: 0 0 18px rgba(0, 255, 255, 0.4);
}

.section-head p {
  margin: 0.35rem 0 0;
  color: #aad7dd;
}

.group-card {
  border: 1px solid rgba(0, 255, 255, 0.24);
  border-radius: 14px;
  padding: 1rem;
  background: linear-gradient(165deg, rgba(0, 16, 27, 0.7), rgba(14, 2, 21, 0.55));
  box-shadow: inset 0 0 18px rgba(0, 255, 255, 0.1);
}

.group-card h3 {
  margin: 0 0 0.9rem;
  color: #cbf7ff;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
}

.project-card {
  color: #e8f7fb;
  border: 1px solid rgba(0, 255, 255, 0.26);
  background: rgba(0, 13, 22, 0.58);
  border-radius: 12px;
  padding: 1rem;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.project-card:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 0 16px rgba(0, 255, 255, 0.28), 0 0 8px rgba(255, 0, 170, 0.2);
}

.project-img {
  width: 100%;
  height: 140px;
  object-fit: contain;
  border-radius: 8px;
  margin-bottom: 0.75rem;
  background: rgba(0, 0, 0, 0.25);
}

.project-card h4 {
  margin: 0 0 0.4rem;
  font-size: 1.03rem;
}

.project-card p {
  margin: 0 0 0.8rem;
  color: #bcd8df;
}

.project-link {
  color: #73f7ff;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease;
}

.project-link:hover {
  border-color: #73f7ff;
}

@media (max-width: 600px) {
  .section-head h2 {
    font-size: 2rem;
  }
}
</style>
