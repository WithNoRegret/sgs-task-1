export interface IShiftRecord {
  city: string;
  workshop: string;
  employee: string;
  brigade: string;
  shift: string;
}

export interface IShiftRecordId {
  id: string,
  record: IShiftRecord
}