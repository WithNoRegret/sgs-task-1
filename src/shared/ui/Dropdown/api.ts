export interface DropdownOption {
  id: string;
  name: string;
  cityId?: string;
  workshopId?: string;
}

export interface DropdownProps {
  options: DropdownOption[]
  placeholder: string
  disabled?: boolean
}