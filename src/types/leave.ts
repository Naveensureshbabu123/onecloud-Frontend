export interface LeaveRequest {
    id: string;
    name: string;
    department: string;
    type: string;
    from: string;
    to: string;
    days: number;
    reason: string;
    status: "Pending" | "Approved" | "Rejected";
}