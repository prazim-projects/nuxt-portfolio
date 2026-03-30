<script setup>
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { marked } from "marked";
import blogData from "@/data/blogData.json";

marked.setOptions({ gfm: true, breaks: true });

const route = useRoute();
const slug = computed(() => String(route.params.slug || ""));
const post = computed(() => blogData.posts.find((entry) => entry.slug === slug.value));
const content = ref("");
const isLoading = ref(true);
const loadError = ref("");
const debugInfo = ref({
  slug: "",
  resolvedPath: "",
  postFound: false,
  fetchStatus: "idle",
  error: "",
  contentChars: 0
});

function normalizeMarkdownAssetPaths(markdown) {
  return markdown.replace(/\]\(\/images\//g, "](/img/");
}

async function loadPost() {
  isLoading.value = true;
  loadError.value = "";
  content.value = "";

  debugInfo.value = {
    slug: slug.value,
    resolvedPath: "",
    postFound: Boolean(post.value),
    fetchStatus: "starting",
    error: "",
    contentChars: 0
  };

  if (!slug.value) {
    loadError.value = "404 - Post not found";
    debugInfo.value.fetchStatus = "invalid-slug";
    debugInfo.value.error = loadError.value;
    isLoading.value = false;
    return;
  }

  const markdownPath = post.value?.file || `/posts/${slug.value}.md`;
  debugInfo.value.resolvedPath = markdownPath;

  try {
    debugInfo.value.fetchStatus = "fetching";
    const markdown = await $fetch(markdownPath, {
      responseType: "text",
      baseURL: import.meta.server ? useRequestURL().origin : undefined
    });
    const normalizedMarkdown = normalizeMarkdownAssetPaths(String(markdown));
    content.value = marked.parse(normalizedMarkdown);
    debugInfo.value.fetchStatus = "success";
    debugInfo.value.contentChars = normalizedMarkdown.length;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    loadError.value = `404 - Post not found (${markdownPath})`;
    debugInfo.value.fetchStatus = "failed";
    debugInfo.value.error = errorMessage;
  } finally {
    isLoading.value = false;
  }
}

await loadPost();
watch(() => route.params.slug, loadPost);
</script>

<template>
  <div class="blog-post">
    <NuxtLink to="/blog" class="back-btn">← Back to Blog</NuxtLink>
    <!-- <pre class="debug-box">{{ JSON.stringify(debugInfo, null, 2) }}</pre> -->
    <p v-if="isLoading" class="post-status">Loading post...</p>
    <p v-else-if="loadError" class="post-status error">{{ loadError }}</p>
    <div v-else class="post-content" v-html="content"></div>
  </div>
</template>

<style scoped>
.blog-post {
  margin: 5px;
  padding: 4.5rem 3rem;
  max-width: 100%;
  margin: 0 auto;
  color: #e0faff;
  background: radial-gradient(circle at top, #05080f, #000);
  min-height: 100vh;
}

.back-btn {
  display: inline-block;
  text-decoration: none;
  background: none;
  border: 1px solid #0ff;
  color: #0ff;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 1rem;
}

.back-btn:hover {
  background: #0ff2;
  box-shadow: 0 0 10px #0ff;
}

.post-content h1,
.post-content h2,
.post-content h3 {
  color: #0ff;
  text-shadow: 0 0 12px #0ff, 0 0 20px #ff00ff55;
  width: fit-content;
}

.post-content pre {
  background: #011;
  border: 1px solid #0ff3;
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
}

.post-content code {
  color: #0ff;
}

.post-status {
  padding: 0.8rem 0;
  color: #bdf9ff;
}

.post-status.error {
  color: #ff9bdd;
}

.debug-box {
  margin: 0.5rem 0 1rem;
  padding: 0.75rem;
  border: 1px solid rgba(0, 255, 255, 0.35);
  border-radius: 8px;
  background: rgba(0, 18, 28, 0.6);
  color: #9cefff;
  font-size: 0.8rem;
  overflow-x: auto;
}
</style>
