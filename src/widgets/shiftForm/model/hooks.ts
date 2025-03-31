import { useShiftFormStore } from './store';
import { useRouter } from 'vue-router';
import { useShiftsStore, type IShiftRecord } from '@/entities/shiftRecord';

export const useFormSubmit = () => {
  const store = useShiftFormStore();
  const router = useRouter();
  const shiftsStore = useShiftsStore();

  const submitForm = () => {
    console.log(store.form);
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