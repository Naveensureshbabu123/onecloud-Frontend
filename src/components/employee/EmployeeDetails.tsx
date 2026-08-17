import type { Employee } from "../../types/employee";

interface EmployeeDetailsProps {
    employee: Employee;
}

function EmployeeDetails({ employee }: EmployeeDetailsProps) {

    return (
        <div className="bg-white p-8 shadow">

            <div className="mb-8 flex items-center gap-5">

                <img
                    src={employee.photo}
                    alt={employee.name}
                    className="h-24 w-24 rounded-full object-cover"
                />

                <div>

                    <h1 className="text-3xl font-bold text-gray-900">
                        {employee.name}
                    </h1>

                    <p className="text-gray-500">
                        {employee.designation}
                    </p>

                </div>

            </div>

            <div className="grid gap-5 md:grid-cols-2">

                <div className="border border-gray-200 p-5">
                    <p className="text-sm text-gray-500">
                        Employee ID
                    </p>
                    <p className="mt-1 font-semibold">
                        {employee.id}
                    </p>
                </div>

                <div className="border border-gray-200 p-5">
                    <p className="text-sm text-gray-500">
                        Department
                    </p>
                    <p className="mt-1 font-semibold">
                        {employee.department}
                    </p>
                </div>

                <div className="border border-gray-200 p-5">
                    <p className="text-sm text-gray-500">
                        Designation
                    </p>
                    <p className="mt-1 font-semibold">
                        {employee.designation}
                    </p>
                </div>

                <div className="border border-gray-200 p-5">
                    <p className="text-sm text-gray-500">
                        Email
                    </p>
                    <p className="mt-1 font-semibold">
                        {employee.email}
                    </p>
                </div>

                <div className="border border-gray-200 p-5">
                    <p className="text-sm text-gray-500">
                        Phone
                    </p>
                    <p className="mt-1 font-semibold">
                        {employee.mobile}
                    </p>
                </div>

                <div className="border border-gray-200 p-5">
                    <p className="text-sm text-gray-500">
                        Joining Date
                    </p>
                    <p className="mt-1 font-semibold">
                        {employee.joiningDate}
                    </p>
                </div>

                <div className="border border-gray-200 p-5">
                    <p className="text-sm text-gray-500">
                        Status
                    </p>

                    <p
                        className={
                            employee.status === "Active"
                                ? "mt-1 font-semibold text-green-600"
                                : "mt-1 font-semibold text-red-600"
                        }
                    >
                        {employee.status}
                    </p>

                </div>

            </div>

        </div>
    );
}

export default EmployeeDetails;