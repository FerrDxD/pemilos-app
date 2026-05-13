<!-- components/CandidateCard.vue -->
<script setup lang="ts">
import type { Candidate } from '../types';

defineProps<{
  candidate: Candidate;
}>();

const emit = defineEmits(['showDetails', 'vote']);
</script>

<template>
  <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col">
    <!-- Image Section -->
    <div class="relative aspect-[3/4] overflow-hidden bg-slate-100">
      <img 
        :src="candidate.photo_url" 
        :alt="`Paslon ${candidate.sequence_number}`" 
        class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <!-- Nomor Urut -->
      <div class="absolute top-4 left-4 bg-brand-accent text-brand-dark w-12 h-12 flex items-center justify-center rounded-full font-bold text-2xl shadow-lg ring-4 ring-white/30 backdrop-blur-sm">
        {{ candidate.sequence_number }}
      </div>
    </div>

    <!-- Content Section -->
    <div class="p-6 flex flex-col flex-grow text-center">
      <h3 class="text-xl font-bold text-brand-primary truncate">{{ candidate.chairman_name }}</h3>
      <p class="text-sm text-slate-500 mb-6 font-medium truncate">&amp; {{ candidate.vice_chairman_name }}</p>
      
      <div class="mt-auto flex flex-col gap-3">
        <button 
          @click="emit('showDetails', candidate)" 
          class="w-full px-4 py-2.5 rounded-xl border-2 border-slate-200 text-slate-600 font-semibold hover:border-brand-primary hover:text-brand-primary transition-colors duration-300 flex items-center justify-center gap-2"
        >
          <Icon name="heroicons:document-text" class="text-lg" />
          Visi & Misi
        </button>
        <button 
          @click="emit('vote', candidate)" 
          class="w-full px-4 py-2.5 rounded-xl bg-brand-primary text-white font-semibold hover:bg-blue-800 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
        >
          <Icon name="heroicons:check-circle-solid" class="text-xl text-brand-accent" />
          Pilih Paslon {{ candidate.sequence_number }}
        </button>
      </div>
    </div>
  </div>
</template>