<script setup lang="ts">
interface TextButtonProps {
  text: string
}

const props = defineProps<TextButtonProps>()
</script>

<template>
  <button class="text-btn">
    {{ props.text }}
  </button>
</template>

<style scoped>
.text-btn {
  background-color: var(--color-background-buttons-danger);
  color: var(--color-text-buttons);
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;
}

.text-btn:hover {
  background-color: var(--color-background-buttons-danger-hover);
}
</style>