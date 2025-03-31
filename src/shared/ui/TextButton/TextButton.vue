<script setup lang="ts">
import type { TextButtonProps } from './api'

const { icon, text } = defineProps<TextButtonProps>()
</script>

<template>
  <button class="border-none rounded-full cursor-pointer transition-colors duration-200 flex-center gap-2">
    <span v-if="icon">{{ icon }}</span>
    <span>{{ text }}</span>
  </button>
</template>