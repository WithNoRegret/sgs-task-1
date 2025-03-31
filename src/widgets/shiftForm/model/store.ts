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

  const setCity = (city: City) => {
    form.value.city = city;
    isWorkshopDisabled.value = false;
  };

  const setWorkshop = (workshop: Workshop) => {
    form.value.workshop = workshop;
    isEmployeeDisabled.value = false;
  };

  const setEmployee = (employee: Employee) => {
    form.value.employee = employee;
  };

  const setBrigade = (brigade: Brigade) => {
    form.value.brigade = brigade;
  };

  const setShift = (shift: Shift) => {
    form.value.shift = shift;
  };

  return { form, resetForm, setCity, setWorkshop, setEmployee, setBrigade, setShift, isWorkshopDisabled, isEmployeeDisabled };
});