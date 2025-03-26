import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { City, Workshop, Employee, Brigade, Shift } from '@/shared/types';

export const useShiftFormStore = defineStore('shiftForm', () => {
  const initialState = () => ({
    city: null as City | null,
    workshop: null as Workshop | null,
    employee: null as Employee | null,
    brigade: null as Brigade | null,
    shift: null as Shift | null,
  });

  const form = ref(initialState());

  const isWorkshopDisabled = ref(true);
  const isEmployeeDisabled = ref(true);

  const resetForm = () => {
    form.value = initialState();
    isWorkshopDisabled.value = true;
    isEmployeeDisabled.value = true;
  };

  return { form, resetForm, isWorkshopDisabled, isEmployeeDisabled };
});