<script setup lang="ts">
import { useRecordsList } from '../model/useRecordList'
import ShiftRecord from '@/entities/shiftRecord/ui/ShiftRecord.vue'

const { shifts } = useRecordsList()
</script>

<template>
  <div class="records-list-container">
    <h2 class="records-title">Журнал сменных записей</h2>
    <div class="records-list" v-for="shift in shifts">
      <div class="record-item">
        <ShiftRecord :shift="shift" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.records-list-container {
  min-height: 100vh;
  padding: 2rem;
  color: var(--color-text-primary);
  max-width: 1200px;
  margin: 0 auto;
}

.records-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--color-border-primary);
  color: var(--color-text-title);
}

.records-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

@media (max-width: 768px) {
  .records-list-container {
    padding: 1rem;
  }
}
</style>
