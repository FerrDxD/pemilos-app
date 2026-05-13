<!-- components/Navbar.vue -->
<template>
  <header class="bg-brand-primary text-white shadow-lg sticky top-0 z-40">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <div class="flex items-center gap-3">
        <Icon name="heroicons:academic-cap-solid" class="text-brand-accent text-3xl" />
        <h1 class="text-xl font-bold tracking-wide">
          PEMILOS <span class="font-light text-brand-accent">2026</span>
        </h1>
      </div>
      <!-- Indikator Keamanan (Opsional/Estetika) -->
      <div class="hidden md:flex items-center gap-2 text-sm text-blue-200">
        <Icon name="heroicons:shield-check" class="text-lg" />
        <span>Sistem Voting Aman & Rahasia</span>
      </div>
    </div>
  </header>
</template>
