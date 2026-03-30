<script setup>
import { ref } from "vue";
import blogData from "@/data/blogData.json";

const posts = ref(blogData.posts);
</script>

<template>
  <section class="blog-list" id="blog">
    <div class="section-head">
      <h2>Blog</h2>
      <p>Write-ups and notes from web development and cybersecurity practice.</p>
    </div>

    <div class="group-card">
      <h3>Latest Articles</h3>
      <div class="post-grid">
      <NuxtLink
        v-for="post in posts"
        :key="post.slug"
        :to="`/blog/${post.slug}`"
        class="post-card"
      >
        <h2>{{ post.title }}</h2>
        <p>{{ post.excerpt || post.description }}</p>
        <div class="tags">
          <span v-for="tag in post.tags" :key="tag">{{ tag }}</span>
        </div>
        <span class="date">{{ post.date }}</span>
        <div class="read-more">Read More →</div>
      </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.blog-list {
  margin: 1rem;
  padding: 1.5rem;
  color: #e0faff;
}

.section-head {
  text-align: center;
  margin-bottom: 1rem;
}

.section-head h2 {
  margin: 0;
  font-size: 2.2rem;
  color: #b3feff;
  text-shadow: 0 0 12px #0ff8;
}

.section-head p {
  margin: 0.35rem 0 0;
  color: #b2dce0;
}

.group-card {
  border: 1px solid rgba(0, 255, 255, 0.3);
  border-radius: 14px;
  background: linear-gradient(160deg, rgba(0, 19, 30, 0.6), rgba(11, 1, 16, 0.55));
  padding: 1rem;
  box-shadow: inset 0 0 20px rgba(0, 255, 255, 0.08);
}

.group-card h3 {
  margin: 0 0 0.8rem;
  color: #d6fbff;
}

.post-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.post-card {
  display: block;
  text-decoration: none;
  color: inherit;
  border: 1px solid rgba(0, 255, 255, 0.35);
  border-radius: 12px;
  padding: 1rem;
  background: rgba(0, 12, 22, 0.55);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  cursor: pointer;
}

.post-card:hover {
  box-shadow: 0 0 18px rgba(0, 255, 255, 0.35), 0 0 8px rgba(255, 0, 170, 0.2);
  border-color: #58fcff;
  transform: translateY(-5px);
}

.post-card h2 {
  margin: 0 0 0.45rem;
  font-size: 1.15rem;
  color: #e8ffff;
}

.post-card p {
  margin: 0 0 0.8rem;
  color: #c6e5ea;
}

.tags span {
  background: rgba(0,255,255,0.1);
  border: 1px solid #0ff3;
  margin-right: 0.4rem;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
}

.date {
  display: inline-block;
  margin-top: 0.7rem;
  color: #7ed6df;
  font-size: 0.82rem;
}
</style>
