import { useParams } from "react-router-dom";
import employees from "../../data/employees";

function EmployeeDetails() {

    const { id } = useParams();

    const employee = employees.find(
        (item) => item.id === Number(id)
    );

    if (!employee) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center px-5">
                <div className="bg-white p-8 shadow-lg text-center">
                    <h1 className="text-2xl font-bold text-gray-900">
                        Employee Not Found
                    </h1>

                    <p className="mt-2 text-gray-500">
                        The employee you are looking for does not exist.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 px-5 py-10">

            <div className="mx-auto max-w-5xl">

                <div className="mb-8">
                    <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                        OneCloud HRMS
                    </p>

                    <h1 className="mt-2 text-4xl font-bold text-gray-900">
                        Employee Details
                    </h1>

                    <p className="mt-2 text-gray-500">
                        View complete employee information.
                    </p>
                </div>

                <div className="bg-white shadow-lg">

                    <div className="bg-blue-600 px-8 py-8 text-white">

                        <div className="flex items-center gap-6">

                            <img
                                src={employee.photo}
                                alt={employee.name}
                                className="h-24 w-24 object-cover"
                            />

                            <div>
                                <h2 className="text-3xl font-bold">
                                    {employee.name}
                                </h2>

                                <p className="mt-1 text-blue-100">
                                    {employee.designation}
                                </p>

                                <span
                                    className={`mt-3 inline-block px-3 py-1 text-sm font-semibold ${
                                        employee.status === "Active"
                                            ? "bg-green-500"
                                            : "bg-gray-500"
                                    }`}
                                >
                                    {employee.status}
                                </span>
                            </div>

                        </div>

                    </div>

                    <div className="grid grid-cols-1 gap-5 p-8 md:grid-cols-2">

                        <div className="border border-gray-200 p-5">
                            <p className="text-sm text-gray-500">
                                Employee ID
                            </p>

                            <p className="mt-2 text-lg font-semibold text-gray-900">
                                {employee.id}
                            </p>
                        </div>

                        <div className="border border-gray-200 p-5">
                            <p className="text-sm text-gray-500">
                                Employee Name
                            </p>

                            <p className="mt-2 text-lg font-semibold text-gray-900">
                                {employee.name}
                            </p>
                        </div>

                        <div className="border border-gray-200 p-5">
                            <p className="text-sm text-gray-500">
                                Department
                            </p>

                            <p className="mt-2 text-lg font-semibold text-gray-900">
                                {employee.department}
                            </p>
                        </div>

                        <div className="border border-gray-200 p-5">
                            <p className="text-sm text-gray-500">
                                Designation
                            </p>

                            <p className="mt-2 text-lg font-semibold text-gray-900">
                                {employee.designation}
                            </p>
                        </div>

                        <div className="border border-gray-200 p-5">
                            <p className="text-sm text-gray-500">
                                Email
                            </p>

                            <p className="mt-2 text-lg font-semibold text-gray-900">
                                {employee.email}
                            </p>
                        </div>

                        <div className="border border-gray-200 p-5">
                            <p className="text-sm text-gray-500">
                                Status
                            </p>

                            <p className="mt-2 text-lg font-semibold text-gray-900">
                                {employee.status}
                            </p>
                        </div>

                    </div>

                    <div className="border-t border-gray-200 px-8 py-6">

                        <a
                            href="/dashboard"
                            className="inline-block bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
                        >
                            Back to Dashboard
                        </a>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default EmployeeDetails;