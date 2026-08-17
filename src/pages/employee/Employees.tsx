import { useState } from "react";
import EmployeeCard from "../../components/employee/EmployeeCard";
import employees from "../../data/employees";

function Employees() {

    const [search, setSearch] = useState("");
    const [department, setDepartment] = useState("All");
    const [status, setStatus] = useState("All");

    const filteredEmployees = employees.filter((employee) => {

        const searchMatch =
            employee.name
                .toLowerCase()
                .includes(search.toLowerCase()) ||
            employee.id
                .toString()
                .includes(search);

        const departmentMatch =
            department === "All" ||
            employee.department === department;

        const statusMatch =
            status === "All" ||
            employee.status === status;

        return (
            searchMatch &&
            departmentMatch &&
            statusMatch
        );
    });

    function resetFilters() {
        setSearch("");
        setDepartment("All");
        setStatus("All");
    }

    return (
        <div className="min-h-screen bg-gray-100 px-6 py-10">

            <div className="mx-auto max-w-7xl">

                <div className="mb-8">

                    <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                        OneCloud HRMS
                    </p>

                    <h1 className="mt-2 text-4xl font-bold text-gray-900">
                        Employee Directory
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Search and manage your employees.
                    </p>

                </div>

                <div className="mb-8 flex flex-wrap gap-4 bg-white p-5 shadow">

                    <input
                        type="text"
                        placeholder="Search by Name or ID"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
                    />

                    <select
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        className="border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-600"
                    >
                        <option value="All">
                            All Departments
                        </option>

                        <option value="Development">
                            Development
                        </option>

                        <option value="HR">
                            HR
                        </option>

                        <option value="Finance">
                            Finance
                        </option>

                        <option value="CRM">
                            CRM
                        </option>
                    </select>

                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-600"
                    >
                        <option value="All">
                            All Status
                        </option>

                        <option value="Active">
                            Active
                        </option>

                        <option value="Inactive">
                            Inactive
                        </option>
                    </select>

                    <button
                        onClick={resetFilters}
                        className="bg-red-500 px-6 py-3 font-semibold text-white hover:bg-red-600"
                    >
                        Reset Filters
                    </button>

                </div>

                <p className="mb-6 text-gray-600">
                    Showing {filteredEmployees.length} employees
                </p>

                {filteredEmployees.length > 0 ? (

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                        {filteredEmployees.map((employee) => (

                            <EmployeeCard
                                key={employee.id}
                                employee={employee}
                            />

                        ))}

                    </div>

                ) : (

                    <div className="bg-white p-10 text-center shadow">

                        <p className="text-lg text-gray-500">
                            No employees found.
                        </p>

                    </div>

                )}

            </div>

        </div>
    );
}

export default Employees;