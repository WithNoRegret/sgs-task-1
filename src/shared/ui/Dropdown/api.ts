export interface DropdownOption {
  id: number | string
  name: string
  [key: string]: any
}

export interface DropdownProps {
  modelValue: any
  options: DropdownOption[]
  disabled?: boolean
  placeholder?: string
  optionLabel?: string
  optionValue?: string
}