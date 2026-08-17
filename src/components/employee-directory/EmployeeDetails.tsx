import type { Employee } from "../../types/employee";

interface EmployeeDetailsProps {
    employee: Employee;
}

function EmployeeDetails({ employee }: EmployeeDetailsProps) {
    return (
        <div className="space-y-2 text-sm text-gray-600">

            <p>
                <strong className="text-gray-800">
                    Employee ID:
                </strong>{" "}
                {employee.id}
            </p>

            <p>
                <strong className="text-gray-800">
                    Department:
                </strong>{" "}
                {employee.department}
            </p>

            <p>
                <strong className="text-gray-800">
                    Designation:
                </strong>{" "}
                {employee.designation}
            </p>

            <p>
                <strong className="text-gray-800">
                    Email:
                </strong>{" "}
                {employee.email}
            </p>

            <p>
                <strong className="text-gray-800">
                    Status:
                </strong>{" "}

                <span
                    className={
                        employee.status === "Active"
                            ? "font-semibold text-green-600"
                            : "font-semibold text-red-600"
                    }
                >
                    {employee.status}
                </span>
            </p>

        </div>
    );
}

export default EmployeeDetails;