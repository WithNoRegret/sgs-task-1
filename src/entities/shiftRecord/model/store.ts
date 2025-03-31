import { defineStore } from 'pinia'
import uuid4 from "uuid4";
import type { IShiftRecord, IShiftRecordId } from './types'
import { ref } from 'vue'

export const useShiftsStore = defineStore('shifts', () => {

  const records = ref<IShiftRecordId[]>([])

  const addRecord = (record: IShiftRecord) => {
    const newRecord = {
      id: uuid4(),
      record
    }
    records.value.push(newRecord)
  }

  const getRecords = () => {
    return records.value
  }

  const deleteRecordById = (id: string) => {
    records.value = records.value.filter(record => record.id !== id);
  }

  return {
    records,

    addRecord,
    getRecords,
    deleteRecordById
  }
})