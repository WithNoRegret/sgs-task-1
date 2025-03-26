import { useFormDataStore } from '@/shared/api';

export const fetchInitialData = async () => {
  const formData = useFormDataStore();
  await formData.fetchAllData();
  return {
    cities: formData.cities,
    brigades: formData.brigades,
    shifts: formData.shifts,
  };
};

export const getWorkshopsByCity = (cityId: string) => {
  return useFormDataStore().getWorkshopsByCity(cityId);
};

export const getEmployeesByWorkshop = (workshopId: string) => {
  return useFormDataStore().getEmployeesByWorkshop(workshopId);
}; 