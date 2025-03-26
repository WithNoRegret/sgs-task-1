<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import Dropdown from '@/shared/ui/Dropdown'
import type { City, Workshop, Employee, Brigade, Shift } from '@/shared/types'
import { fetchInitialData, getWorkshopsByCity, getEmployeesByWorkshop } from '../api'
import { useShiftFormStore } from '../model/store'
import { useFormWatchers, useFormSubmit } from '../model/hooks'

const store = useShiftFormStore();
const { watchCity, watchWorkshop } = useFormWatchers();
const { submitForm } = useFormSubmit();


const cities = ref<City[]>([]);
const workshops = ref<Workshop[]>([]);
const employees = ref<Employee[]>([]);
const brigades = ref<Brigade[]>([]);
const shifts = ref<Shift[]>([]);

onMounted(async () => {
  const data = await fetchInitialData();
  cities.value = data.cities;
  brigades.value = data.brigades;
  shifts.value = data.shifts;
  watchCity();
  watchWorkshop();
});

watch(() => store.form.city, (city) => {
  if (city) workshops.value = getWorkshopsByCity(city.id);
});

watch(() => store.form.workshop, (workshop) => {
  if (workshop) employees.value = getEmployeesByWorkshop(workshop.id);
});  
</script>

<template>
  <div class="form-container">
    <div class="form-card">
      <h2 class="form-title">Новая сменная запись</h2>

      <div class="form-group">
        <label for="city">Город</label>
        <Dropdown id="city" v-model="store.form.city" :options="cities" placeholder="Выберите город" />
      </div>

      <div class="form-group">
        <label for="workshop">Цех</label>
        <select id="workshop" v-model="store.form.workshop" class="form-select" :disabled="store.isWorkshopDisabled">
          <option :value="null" disabled>Выберите цех</option>
          <option v-for="workshop in workshops" :key="workshop.id" :value="workshop">
            {{ workshop.name }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label for="employee">Сотрудник</label>
        <select id="employee" v-model="store.form.employee" class="form-select" :disabled="store.isEmployeeDisabled">
          <option :value="null" disabled>Выберите сотрудника</option>
          <option v-for="employee in employees" :key="employee.id" :value="employee">
            {{ employee.name }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label for="brigade">Бригада</label>
        <select id="brigade" v-model="store.form.brigade" class="form-select">
          <option :value="null" disabled>Выберите бригаду</option>
          <option v-for="brigade in brigades" :key="brigade.id" :value="brigade">
            {{ brigade.name }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label for="shift">Смена</label>
        <select id="shift" v-model="store.form.shift" class="form-select">
          <option :value="null" disabled>Выберите смену</option>
          <option v-for="shift in shifts" :key="shift.id" :value="shift">
            {{ shift.name }}
          </option>
        </select>
      </div>

      <button class="submit-button" @click="submitForm">
        Сохранить запись
      </button>
    </div>
  </div>
</template>

<style scoped>
.form-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.form-card {
  background-color: var(--color-background-secondary);
  border: 1px solid var(--color-border-primary);
  border-radius: 8px;
  padding: 2rem;
  width: 100%;
  max-width: 600px;
}

.form-title {
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  color: var(--color-text-title);
  text-align: center;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--color-text-label);
}

.form-select {
  width: 100%;
  padding: 0.75rem;
  background-color: var(--color-background-primary);
  border: 1px solid var(--color-border-primary);
  border-radius: 6px;
  color: var(--color-text-primary);
  font-size: 1rem;
  transition: border-color 0.2s;
}

.form-select:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.form-select:focus {
  outline: none;
  border-color: var(--color-border-accent);
}

.form-select option {
  background-color: var(--color-background-secondary);
  padding: 0.5rem;
}

.submit-button {
  width: 100%;
  padding: 0.75rem;
  background-color: var(--color-background-buttons);
  color: var(--color-text-primary);
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 1rem;
}

.submit-button:hover:not(:disabled) {
  background-color: var(--color-background-buttons-hover);
}

.submit-button:active:not(:disabled) {
  background-color: var(--color-background-buttons-hover);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

@media (max-width: 640px) {
  .form-card {
    padding: 1.5rem;
  }
}
</style>