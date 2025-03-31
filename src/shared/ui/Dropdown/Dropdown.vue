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
    class="w-full p-3 color-bg-primary border-base color-border-primary rounded-full color-text-primary text-sm transition-colors disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none no-appearance">
    <option value="" disabled class="color-bg-secondary p-2">
      {{ placeholder || 'Выберите значение' }}
    </option>
    <option v-for="option in normalizedOptions" :key="option.value" :value="String(option.value)"
      class="color-bg-secondary p-2">
      {{ option.label }}
    </option>
  </select>
</template>