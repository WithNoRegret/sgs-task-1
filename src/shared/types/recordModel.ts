export interface City {
  id: string;
  name: string;
}

export interface Workshop {
  id: string;
  cityId: string;
  name: string;
}

export interface Employee {
  id: string;
  workshopId: string;
  name: string;
}

export interface Brigade {
  id: string;
  name: string;
}

export interface Shift {
  id: string;
  name: string;
}