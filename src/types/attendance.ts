export type AttendanceStatus =
    | "Present"
    | "Absent"
    | "Half Day"
    | "WFH";

export interface Attendance {
    id: number;
    status: AttendanceStatus;
}