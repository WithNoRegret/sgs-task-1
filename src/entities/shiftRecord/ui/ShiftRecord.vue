<script setup lang="ts">
import TextButton from '@/shared/ui/TextButton'
import { useShiftsStore, type IShiftRecordId } from '../model'

const { shift } = defineProps<{
  shift: IShiftRecordId
}>()

const { deleteRecordById } = useShiftsStore();

const handleClick = () => {
  deleteRecordById(shift.id);
}

const buttonText = "Удалить";
</script>

<template>
  <div class="shift-record">
    <TextButton class="delete-button" :text="buttonText" @click="handleClick" />
    <div class="record-field">
      <span class="field-label">Город:</span>
      <span class="field-value">{{ shift.record.city }}</span>
    </div>
    <div class="record-field">
      <span class="field-label">Цех:</span>
      <span class="field-value">{{ shift.record.workshop }}</span>
    </div>
    <div class="record-field">
      <span class="field-label">Сотрудник:</span>
      <span class="field-value">{{ shift.record.employee }}</span>
    </div>
    <div class="record-field">
      <span class="field-label">Бригада:</span>
      <span class="field-value">{{ shift.record.brigade }}</span>
    </div>
    <div class="record-field">
      <span class="field-label">Смена:</span>
      <span class="field-value">{{ shift.record.shift }}</span>
    </div>
  </div>
</template>

<style scoped>
.shift-record {
  background-color: var(--color-background-secondary);
  border: 1px solid var(--color-border-primary);
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 0.75rem;
  transition: all 0.2s ease;
  position: relative;
}

.delete-button {
  position: absolute;
  top: 8px;
  right: 8px;
}

.record-field {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

.record-field:last-child {
  margin-bottom: 0;
}

.field-label {
  color: var(--color-text-label);
  font-weight: 500;
  min-width: 100px;
  margin-right: 1rem;
}

.field-value {
  color: var(--color-text-primary);
  font-weight: 400;
}

@media (max-width: 768px) {
  .shift-record {
    padding: 0.75rem;
  }

  .record-field {
    flex-direction: column;
    align-items: flex-start;
  }

  .field-label {
    margin-bottom: 0.25rem;
    margin-right: 0;
  }
}
</style>