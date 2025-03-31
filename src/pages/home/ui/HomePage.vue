<script setup lang="ts">
import { useRouter } from 'vue-router'
import ShiftRecordList from '@/widgets/shiftRecordList'
import TextButton from '@/shared/ui/TextButton'

const router = useRouter()

const handleCreateRecordButton = () => {
  router.push('/form')
}

const buttonText = 'Создать новую запись';
const iconText = '+';
</script>

<template>
  <div class="container mx-auto p-6 min-h-screen color-text-primary">
    <TextButton
      class="mt-6 px-6 py-3 w-full max-w-[300px] color-bg-buttons color-text-primary text-base font-medium hover:color-bg-buttons-hover hover:-translate-y-[1px] active:translate-y-0 active:color-bg-buttons-hover transition-transform"
      :text="buttonText" :icon="iconText" @click="handleCreateRecordButton" />
    <ShiftRecordList />
  </div>
</template>

<style scoped>
.create-button {
  font-size: 16px;
  font-weight: 500;
}

.create-button:hover {
  background-color: var(--color-background-buttons-hover);
  transform: translateY(-1px);
}

.create-button:active {
  transform: translateY(0);
  background-color: var(--color-background-buttons-hover);
}

.plus-icon {
  font-size: 20px;
  font-weight: bold;
  line-height: 1;
}

@media (max-width: 768px) {
  .container {
    padding: 16px;
  }

  .create-button {
    max-width: 100%;
  }
}
</style>