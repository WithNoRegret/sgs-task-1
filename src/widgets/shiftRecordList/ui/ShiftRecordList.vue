<script setup lang="ts">
import { useRecordsList } from '../model/useRecordList'
import ShiftRecord from '@/entities/shiftRecord/ui/ShiftRecord.vue'

const { records } = useRecordsList()
</script>

<template>
  <div class="p-4 md:p-8 color-text-primary max-w-[1200px] mx-auto my-0">
    <h2 class="text-2xl mb-6 pb-3 border-b-base color-border-primary color-text-title">Журнал сменных
      записей
    </h2>
    <div class="flex flex-col gap-5">
      <div v-for="record in records" :key="record.id">
        <ShiftRecord v-bind="record" />
      </div>
    </div>
  </div>
</template>
