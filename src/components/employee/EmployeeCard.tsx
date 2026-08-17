import type { Employee } from "../../types/employee";
import { Link } from "react-router-dom";

interface EmployeeCardProps {
    employee: Employee;
}

function EmployeeCard({ employee }: EmployeeCardProps) {

    return (
        <div className="overflow-hidden bg-white shadow transition hover:-translate-y-1 hover:shadow-xl">

            <div className="flex items-center gap-4 border-b border-gray-200 p-5">

                <img
                    src={employee.photo}
                    alt={employee.name}
                    className="h-16 w-16 rounded-full object-cover"
                />

                <div>

                    <h2 className="text-lg font-bold text-gray-900">
                        {employee.name}
                    </h2>

                    <p className="text-sm text-gray-500">
                        {employee.designation}
                    </p>

                </div>

            </div>

            <div className="space-y-3 p-5">

                <div>
                    <p className="text-xs text-gray-400">
                        Employee ID
                    </p>

                    <p className="font-medium">
                        {employee.id}
                    </p>
                </div>

                <div>
                    <p className="text-xs text-gray-400">
                        Department
                    </p>

                    <p className="font-medium">
                        {employee.department}
                    </p>
                </div>

                <div>
                    <p className="text-xs text-gray-400">
                        Email
                    </p>

                    <p className="break-all text-sm">
                        {employee.email}
                    </p>
                </div>

                <div>

                    <span
                        className={
                            employee.status === "Active"
                                ? "inline-block bg-green-100 px-3 py-1 text-sm font-medium text-green-700"
                                : "inline-block bg-red-100 px-3 py-1 text-sm font-medium text-red-700"
                        }
                    >
                        {employee.status}
                    </span>

                </div>

                <Link
                    to={`/employees/${employee.id}`}
                    className="block bg-blue-600 px-4 py-2 text-center font-medium text-white hover:bg-blue-700"
                >
                    View Details
                </Link>

            </div>

        </div>
    );
}

export default EmployeeCard;