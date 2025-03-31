<script setup lang="ts">
interface TextButtonProps {
  text: string
  icon?: string
}

const props = defineProps<TextButtonProps>()
</script>

<template>
  <button class="text-btn">
    <span>{{ props.icon }}</span>
    <span>{{ props.text }}</span>
  </button>
</template>

<style scoped>
.text-btn {
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;

  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
}
</style>