<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import Dropdown from '@/shared/ui/Dropdown'
import TextButton from '@/shared/ui/TextButton'
import type { City, Workshop, Employee, Brigade, Shift } from '@/shared/types'
import { fetchInitialData, getWorkshopsByCity, getEmployeesByWorkshop } from '../api'
import { useShiftFormStore } from '../model/store'
import { useFormSubmit } from '../model/hooks'

const store = useShiftFormStore();
const { submitForm } = useFormSubmit();


const cities = ref<City[]>([]);
const workshops = ref<Workshop[]>([]);
const employees = ref<Employee[]>([]);
const brigades = ref<Brigade[]>([]);
const shifts = ref<Shift[]>([]);
const formData = ref([
  { id: 'city', label: 'Город', placeholder: 'Выберите город', options: cities.value, modelValue: store.form.city },
  { id: 'workshop', label: 'Цех', placeholder: 'Выберите цех', options: workshops.value, modelValue: store.form.workshop, disabled: store.isWorkshopDisabled },
  { id: 'employee', label: 'Сотрудник', placeholder: 'Выберите сотрудника', options: employees.value, modelValue: store.form.employee, disabled: store.isEmployeeDisabled },
  { id: 'brigade', label: 'Бригада', placeholder: 'Выберите бригаду', options: brigades.value, modelValue: store.form.brigade },
  { id: 'shift', label: 'Смена', placeholder: 'Выберите смену', options: shifts.value, modelValue: store.form.shift },
]);

onMounted(async () => {
  const data = await fetchInitialData();
  cities.value = data.cities;
  brigades.value = data.brigades;
  shifts.value = data.shifts;
  formData.value[0].options = data.cities;
  formData.value[3].options = data.brigades;
  formData.value[4].options = data.shifts;
});

watch(() => formData.value[0].modelValue, (city) => {
  if (city) {
    workshops.value = getWorkshopsByCity(city.id);
    formData.value[1].disabled = false;
    formData.value[1].options = workshops.value;
    formData.value[1].modelValue = null;
    formData.value[2].modelValue = null;
    formData.value[2].disabled = true;
    store.setCity(city);
  }
});

watch(() => formData.value[1].modelValue, (workshop) => {
  if (workshop) {
    employees.value = getEmployeesByWorkshop(workshop.id);
    formData.value[2].disabled = false;
    formData.value[2].options = employees.value;
    formData.value[2].modelValue = null;
    store.setWorkshop(workshop as Workshop);
  }
});

watch(() => formData.value[2].modelValue, (employee) => {
  if (employee) {
    store.setEmployee(employee as Employee);
  }
});

watch(() => formData.value[3].modelValue, (brigade) => {
  if (brigade) {
    store.setBrigade(brigade as Brigade);
  }
});

watch(() => formData.value[4].modelValue, (shift) => {
  if (shift) {
    store.setShift(shift as Shift);
  }
});

const submitButtonText = 'Сохранить запись';
</script>

<template>
  <div class="min-h-screen flex-center p-8">
    <div class="color-bg-secondary border-base color-border-primary rounded-[8px] p-6 md:p-8 w-full max-w-[600px]">
      <h2 class="mt-0 mb-6 text-2xl color-text-title text-center">Новая сменная запись</h2>

      <div class="mb-6" v-for="field in formData" :key="field.id">
        <label :for="field.id" class="block mb-2 font-medium color-text-label">{{ field.label }}</label>
        <Dropdown :id="field.id" v-model="field.modelValue" :options="field.options" :placeholder="field.placeholder"
          :disabled="field.disabled" />
      </div>

      <TextButton
        class="w-full mt-4 px-6 py-3 color-bg-buttons color-text-primary text-base hover:color-bg-buttons-hover"
        :text="submitButtonText" @click="submitForm" />
    </div>
  </div>
</template>