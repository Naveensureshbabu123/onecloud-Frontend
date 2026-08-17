export interface Employee {
    id: number;
    name: string;
    email: string;
    department: string;
    designation: string;
    photo: string;
    status: "Active" | "Inactive";
    mobile: string;
    joiningDate: string;
}