<script setup lang="ts">
import { onMounted } from 'vue';
import type { DropdownOption, DropdownProps } from './api'

const { options, placeholder, disabled } = defineProps<DropdownProps>();
const model = defineModel<DropdownOption | null>();
onMounted(() => {
  if (options.length > 0 && model.value === null) {
    model.value = options[0];
  }
});
</script>

<template>
  <select v-model="model" :disabled="disabled"
    class="w-full p-3 color-bg-primary color-border-primary rounded-full color-text-primary text-sm transition-colors disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus:color-border-accent no-appearance">
    <option :value="null" disabled class="color-bg-secondary p-2">
      {{ placeholder || 'Выберите значение' }}
    </option>
    <option v-for="option in options" :key="option.id" :value="option" class="color-bg-secondary p-2">
      {{ option.name }}
    </option>
  </select>
</template>