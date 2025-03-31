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
  <div class="container">
    <TextButton class="create-button" :text="buttonText" :icon="iconText" @click="handleCreateRecordButton" />
    <ShiftRecordList />
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  min-height: 100vh;
  color: var(--color-text-primary);
}

.create-button {
  margin-top: 24px;
  padding: 12px 24px;
  width: 100%;
  max-width: 300px;

  background-color: var(--color-background-buttons);
  color: var(--color-text-primary);
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