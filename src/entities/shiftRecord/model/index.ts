import { defineStore } from 'pinia'
import type { IShiftRecord } from './types'
import { ref } from 'vue'

export const useShiftsStore = defineStore('shifts', () => {

  const records = ref<IShiftRecord[]>([])

  const addRecord = (record: IShiftRecord) => {
    records.value.push(record)
  }

  const getRecords = () => {
    return records.value
  }

  return {
    records,

    addRecord,
    getRecords
  }
})