import { useShiftsStore } from '@/entities/shiftRecord'

export const useRecordsList = () => {
  const shiftsStore = useShiftsStore()
  const shifts = shiftsStore.getRecords()
  
  return { shifts }
}