export interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  designation: string;
}

export interface EmployeeRegistrationData extends Employee {
  mobile: string;
  joiningDate: string;
  password: string;
}