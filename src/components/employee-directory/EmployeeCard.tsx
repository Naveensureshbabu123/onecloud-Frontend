import type { Employee } from "../../types/employee";
import EmployeeDetails from "./EmployeeDetails";

interface EmployeeCardProps {
    employee: Employee;
}

function EmployeeCard({ employee }: EmployeeCardProps) {
    return (
        <div className="rounded-xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg">

            <img
                src={employee.photo}
                alt={employee.name}
                className="mx-auto mb-4 h-24 w-24 rounded-full object-cover"
            />

            <h3 className="mb-4 text-center text-xl font-bold text-gray-800">
                {employee.name}
            </h3>

            <EmployeeDetails employee={employee} />

        </div>
    );
}

export default EmployeeCard;