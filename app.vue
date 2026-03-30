<script setup lang="ts">

</script>

<template>
  <div class="app-wrapper" id="top">
    <header>
      <Navbar />
    </header>

    <main class="main-content">
      <NuxtPage />
    </main>

    <Footer class="footer" />
  </div>
</template>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

header{
  width: 100%;
}

.main-content {
  flex: 1 0 auto;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
}



</style>
