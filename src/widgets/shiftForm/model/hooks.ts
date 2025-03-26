import { watch } from 'vue';
import { useShiftFormStore } from './store';
import { useRouter } from 'vue-router';
import { useShiftsStore, type IShiftRecord } from '@/entities/shiftRecord';

export const useFormWatchers = () => {
  const store = useShiftFormStore();

  const watchCity = () => {
    watch(() => store.form.city, (newCity) => {
      if (!newCity) {
        store.isWorkshopDisabled = true;
        store.form.workshop = null;
        return;
      }
      store.form.workshop = null;
      store.form.employee = null;
      store.isWorkshopDisabled = false;
      store.isEmployeeDisabled = true;
    });
  };

  const watchWorkshop = () => {
    watch(() => store.form.workshop, (newWorkshop) => {
      if (!newWorkshop) {
        store.isEmployeeDisabled = true;
        store.form.employee = null;
        return;
      }
      store.form.employee = null;
      store.isEmployeeDisabled = false;
    });
  };

  return { watchCity, watchWorkshop };
};


export const useFormSubmit = () => {
  const store = useShiftFormStore();
  const router = useRouter();
  const shiftsStore = useShiftsStore();

  const submitForm = () => {
    if (!store.form.city || !store.form.workshop || !store.form.employee || !store.form.brigade || !store.form.shift) return;

    const newRecord: IShiftRecord = {
      city: store.form.city.name,
      workshop: store.form.workshop.name,
      employee: store.form.employee.name,
      brigade: store.form.brigade.name,
      shift: store.form.shift.name,
    }

    shiftsStore.addRecord(newRecord);
    store.resetForm();
    router.push('/');
  };

  return { submitForm };
};