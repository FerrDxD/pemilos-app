<!-- layouts/default.vue -->
<script setup lang="ts">
// Layout dasar
</script>

<template>
  <div class="min-h-screen bg-brand-light font-sans text-brand-dark flex flex-col selection:bg-brand-accent selection:text-brand-dark">
    <Navbar />
    <main class="flex-grow container mx-auto px-4 py-8 md:py-12">
      <slot />
    </main>
    <Footer />
  </div>
</template>