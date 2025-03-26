<script setup lang="ts">
import type { IShiftRecord } from '../model/types'

const { shift } = defineProps<{
  shift: IShiftRecord
}>()
</script>

<template>
  <div class="shift-record">
    <div class="record-field">
      <span class="field-label">Город:</span>
      <span class="field-value">{{ shift.city }}</span>
    </div>
    <div class="record-field">
      <span class="field-label">Цех:</span>
      <span class="field-value">{{ shift.workshop }}</span>
    </div>
    <div class="record-field">
      <span class="field-label">Сотрудник:</span>
      <span class="field-value">{{ shift.employee }}</span>
    </div>
    <div class="record-field">
      <span class="field-label">Бригада:</span>
      <span class="field-value">{{ shift.brigade }}</span>
    </div>
    <div class="record-field">
      <span class="field-label">Смена:</span>
      <span class="field-value">{{ shift.shift }}</span>
    </div>
  </div>
</template>

<style scoped>
.shift-record {
  background-color: #161b22;
  border: 1px solid #30363d;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 0.75rem;
  transition: all 0.2s ease;
}

.shift-record:hover {
  background-color: #1f2937;
  border-color: #58a6ff;
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
  color: #8b949e;
  font-weight: 500;
  min-width: 100px;
  margin-right: 1rem;
}

.field-value {
  color: #c9d1d9;
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