<script setup lang="ts">
interface TextButtonProps {
  text: string
  icon?: string
}

const props = defineProps<TextButtonProps>()
</script>

<template>
  <button class="border-none rounded-full cursor-pointer transition-colors duration-200 flex-center gap-2">
    <span v-if="props.icon">{{ props.icon }}</span>
    <span>{{ props.text }}</span>
  </button>
</template>