import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { City, Workshop, Employee, Brigade, Shift } from '@/shared/types';

export const useFormDataStore = defineStore('formData', () => {
  const cities = ref<City[]>([])
  const workshops = ref<Workshop[]>([])
  const employees = ref<Employee[]>([])
  const brigades = ref<Brigade[]>([])
  const shifts = ref<Shift[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const getWorkshopsByCity = computed(() => (cityId: string) => {
    return workshops.value.filter(w => w.cityId === cityId)
  })

  const getEmployeesByWorkshop = computed(() => (workshopId: string) => {
    return employees.value.filter(e => e.workshopId === workshopId)
  })

  const fetchAllData = async () => {
    isLoading.value = true
    error.value = null

    try {
      const [citiesRes, workshopsRes, employeesRes, brigadesRes, shiftsRes] = await Promise.all([
        import('../data/cities.json'),
        import('../data/workshops.json'),
        import('../data/employees.json'),
        import('../data/brigades.json'),
        import('../data/shifts.json')
      ])

      cities.value = citiesRes.default
      workshops.value = workshopsRes.default
      employees.value = employeesRes.default
      brigades.value = brigadesRes.default
      shifts.value = shiftsRes.default
    } catch (err) {
      error.value = 'Ошибка загрузки данных'
    } finally {
      isLoading.value = false
    }
  }

  return {
    cities,
    workshops,
    employees,
    brigades,
    shifts,
    isLoading,
    error,

    getWorkshopsByCity,
    getEmployeesByWorkshop,

    fetchAllData
  }
})