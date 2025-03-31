<script setup lang="ts">
import { computed } from 'vue'
import TextButton from '@/shared/ui/TextButton'
import { useShiftsStore, type IShiftRecord } from '../model'

interface ShiftRecordProps {
  record: IShiftRecord,
  id: string
}

const { record, id } = defineProps<ShiftRecordProps>()

const { deleteRecordById } = useShiftsStore();

const handleClick = () => {
  deleteRecordById(id);
}

const buttonText = "Удалить";
const recordData = computed(() => [
  { label: 'Город:', value: record.city },
  { label: 'Цех:', value: record.workshop },
  { label: 'Сотрудник:', value: record.employee },
  { label: 'Бригада:', value: record.brigade },
  { label: 'Смена:', value: record.shift }
]);
</script>

<template>
  <div class="color-bg-secondary border-base color-border-primary rounded-[6px] p-3 mb-3 relative md:p-4">
    <TextButton class="absolute top-2 right-2 color-text-buttons color-bg-danger px-2 py-1" :text="buttonText"
      @click="handleClick" />
    <div class="flex flex-col items-start mb-2 last:mb-0 md:flex-row md:items-center" v-for="field in recordData">
      <span class="color-text-label font-medium min-w-[100px] mr-0 mb-1 md:mr-4 md:mb-0">{{ field.label }}</span>
      <span class="color-text-primary font-normal">{{ field.value }}</span>
    </div>
  </div>
</template>