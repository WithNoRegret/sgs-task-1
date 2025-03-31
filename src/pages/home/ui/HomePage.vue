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
      class="mt-6 px-6 py-3 w-full max-w-[300px] color-bg-buttons color-text-primary text-base font-medium hover:-translate-y-[1px] transition-transform"
      :text="buttonText" :icon="iconText" @click="handleCreateRecordButton" />
    <ShiftRecordList />
  </div>
</template>