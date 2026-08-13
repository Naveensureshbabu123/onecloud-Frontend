import { useState } from "react";
import EmployeeCard from "./EmployeeCard";
import employees from "../../data/employees";

function EmployeeDirectory() {
    const [search, setSearch] = useState("");
    const [department, setDepartment] = useState("All");
    const [designation, setDesignation] = useState("All");
    const [status, setStatus] = useState("All");
    const [sort, setSort] = useState("");

    const departments: string[] = [
        "All",
        "Development",
        "HR",
        "Finance",
        "CRM"
    ];

    const designations: string[] = [
        "All",
        "Frontend Developer",
        "HR Manager",
        "Accountant",
        "CRM Executive",
        "Backend Developer",
        "Finance Executive",
        "HR Executive",
        "Full Stack Developer",
        "CRM Manager",
        "Auditor",
        "UI Designer",
        "Sales Executive",
        "Recruiter",
        "Software Engineer",
        "Finance Manager",
        "Customer Support",
        "QA Engineer",
        "Training Coordinator",
        "React Developer",
        "Tax Consultant"
    ];

    let filteredEmployees = employees.filter((employee) => {
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

        const designationMatch =
            designation === "All" ||
            employee.designation === designation;

        const statusMatch =
            status === "All" ||
            employee.status === status;

        return (
            searchMatch &&
            departmentMatch &&
            designationMatch &&
            statusMatch
        );
    });

    if (sort === "az") {
        filteredEmployees.sort((a, b) =>
            a.name.localeCompare(b.name)
        );
    }

    if (sort === "za") {
        filteredEmployees.sort((a, b) =>
            b.name.localeCompare(a.name)
        );
    }

    if (sort === "idasc") {
        filteredEmployees.sort((a, b) =>
            a.id - b.id
        );
    }

    if (sort === "iddesc") {
        filteredEmployees.sort((a, b) =>
            b.id - a.id
        );
    }

    function resetFilters() {
        setSearch("");
        setDepartment("All");
        setDesignation("All");
        setStatus("All");
        setSort("");
    }

    return (
        <div className="min-h-screen bg-gray-100 px-6 py-10">

            <div className="mx-auto max-w-7xl">

                <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">
                    Employee Directory
                </h1>

                <div className="mb-8 flex flex-wrap items-center justify-center gap-3 rounded-xl bg-white p-5 shadow">

                    <input
                        type="text"
                        placeholder="Search by Name or ID"
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                        className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
                    />

                    <select
                        value={department}
                        onChange={(e) =>
                            setDepartment(e.target.value)
                        }
                        className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
                    >
                        {departments.map((item) => (
                            <option
                                key={item}
                                value={item}
                            >
                                {item === "All"
                                    ? "All Departments"
                                    : item}
                            </option>
                        ))}
                    </select>

                    <select
                        value={designation}
                        onChange={(e) =>
                            setDesignation(e.target.value)
                        }
                        className="max-w-52 rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
                    >
                        {designations.map((item) => (
                            <option
                                key={item}
                                value={item}
                            >
                                {item === "All"
                                    ? "All Designations"
                                    : item}
                            </option>
                        ))}
                    </select>

                    <select
                        value={status}
                        onChange={(e) =>
                            setStatus(e.target.value)
                        }
                        className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
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

                    <select
                        value={sort}
                        onChange={(e) =>
                            setSort(e.target.value)
                        }
                        className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
                    >
                        <option value="">
                            Sort
                        </option>

                        <option value="az">
                            Name A-Z
                        </option>

                        <option value="za">
                            Name Z-A
                        </option>

                        <option value="idasc">
                            ID Ascending
                        </option>

                        <option value="iddesc">
                            ID Descending
                        </option>
                    </select>

                    <button
                        onClick={resetFilters}
                        className="rounded-lg bg-red-500 px-5 py-2 font-semibold text-white hover:bg-red-600"
                    >
                        Reset Filters
                    </button>

                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                    {filteredEmployees.map((employee) => (
                        <EmployeeCard
                            key={employee.id}
                            employee={employee}
                        />
                    ))}

                </div>

                {filteredEmployees.length === 0 && (
                    <div className="mt-10 text-center text-lg text-gray-500">
                        No employees found.
                    </div>
                )}

            </div>

        </div>
    );
}

export default EmployeeDirectory;