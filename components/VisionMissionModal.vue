<!-- components/VisionMissionModal.vue -->
<script setup lang="ts">
import type { Candidate } from '../types';

defineProps<{
  isOpen: boolean;
  candidate: Candidate | null;
}>();

const emit = defineEmits(['close']);
</script>

<template>
  <Transition name="fade">
    <div v-if="isOpen && candidate" class="fixed inset-0 z-50 flex items-center justify-center px-4">
      <!-- Backdrop Glassmorphism -->
      <div class="absolute inset-0 bg-brand-dark/60 backdrop-blur-sm" @click="emit('close')"></div>
      
      <!-- Modal Content -->
      <div class="relative bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl">
        
        <!-- Header -->
        <div class="bg-brand-primary px-6 py-4 flex justify-between items-center text-white">
          <div>
            <h2 class="text-lg font-bold text-brand-accent">Paslon Nomor {{ candidate.sequence_number }}</h2>
            <p class="text-sm opacity-90">{{ candidate.chairman_name }} & {{ candidate.vice_chairman_name }}</p>
          </div>
          <button @click="emit('close')" class="text-white hover:text-brand-accent transition-colors">
            <Icon name="heroicons:x-mark" class="text-3xl" />
          </button>
        </div>

        <!-- Body (Scrollable) -->
        <div class="p-6 overflow-y-auto custom-scrollbar flex-grow text-left">
          <div class="mb-6">
            <h3 class="text-xl font-bold text-brand-dark mb-3 flex items-center gap-2">
              <Icon name="heroicons:eye" class="text-brand-primary" />
              Visi
            </h3>
            <p class="text-slate-600 leading-relaxed whitespace-pre-line">{{ candidate.vision }}</p>
          </div>
          
          <div class="w-full h-px bg-slate-200 mb-6"></div>

          <div>
            <h3 class="text-xl font-bold text-brand-dark mb-3 flex items-center gap-2">
              <Icon name="heroicons:flag" class="text-brand-primary" />
              Misi
            </h3>
            <p class="text-slate-600 leading-relaxed whitespace-pre-line">{{ candidate.mission }}</p>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* Transisi halus untuk modal */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active .relative,
.fade-leave-active .relative {
  transition: all 0.3s ease;
}

.fade-enter-from .relative,
.fade-leave-to .relative {
  transform: translateY(20px) scale(0.95);
}

/* Scrollbar kustom untuk estetika */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f5f9;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>