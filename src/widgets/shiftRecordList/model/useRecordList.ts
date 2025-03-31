import { computed } from 'vue'
import { useShiftsStore } from '@/entities/shiftRecord'

export const useRecordsList = () => {
  const shiftsStore = useShiftsStore()
  const records = computed(() => shiftsStore.getRecords())

  return { records }
}