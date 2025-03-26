<script setup lang="ts">
import { useDropdown } from './model'
import type { DropdownProps } from './api'

const props = defineProps<DropdownProps>()
const emit = defineEmits(['update:modelValue'])

const { normalizedOptions } = useDropdown(props)

const updateValue = (event: Event) => {
  const select = event.target as HTMLSelectElement
  const selectedValue = select.value
  const selectedOption = selectedValue
    ? props.options.find(opt =>
      String(opt[props.optionValue || 'id']) === selectedValue
    )
    : null
  emit('update:modelValue', selectedOption)
}
</script>

<template>
  <select :value="modelValue ? String(modelValue[optionValue || 'id']) : ''" @change="updateValue" :disabled="disabled"
    class="dropdown-select">
    <option value="" disabled>
      {{ placeholder || 'Выберите значение' }}
    </option>
    <option v-for="option in normalizedOptions" :key="option.value" :value="String(option.value)">
      {{ option.label }}
    </option>
  </select>
</template>

<style scoped>
.dropdown-select {
  width: 100%;
  padding: 0.75rem;
  background-color: var(--color-background-primary);
  border: 1px solid var(--color-border-primary);
  border-radius: 6px;
  color: var(--color-text-primary);
  font-size: 1rem;
  transition: border-color 0.2s;
}

.dropdown-select:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.dropdown-select:focus {
  outline: none;
  border-color: var(--color-border-accent);
}

.dropdown-select option {
  background-color: var(--color-background-secondary);
  padding: 0.5rem;
}
</style>