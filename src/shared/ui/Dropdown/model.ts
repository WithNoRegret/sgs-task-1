import { computed } from 'vue'
import type { DropdownProps } from './api'

export const useDropdown = (props: DropdownProps) => {
  const normalizedOptions = computed(() => {
    return props.options.map(option => ({
      label: option[props.optionLabel || 'name'],
      value: option[props.optionValue || 'id'],
      raw: option
    }))
  })

  return { normalizedOptions }
}