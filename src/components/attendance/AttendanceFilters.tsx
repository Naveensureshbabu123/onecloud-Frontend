interface AttendanceFiltersProps {
    search: string;
    department: string;
    status: string;
    onSearchChange: (value: string) => void;
    onDepartmentChange: (value: string) => void;
    onStatusChange: (value: string) => void;
    onReset: () => void;
}

function AttendanceFilters({
    search,
    department,
    status,
    onSearchChange,
    onDepartmentChange,
    onStatusChange,
    onReset
}: AttendanceFiltersProps) {

    return (
        <div className="mb-8 flex flex-wrap gap-4 bg-white p-5 shadow-lg">

            <input
                type="text"
                value={search}
                onChange={(event) =>
                    onSearchChange(event.target.value)
                }
                placeholder="Search Name or ID"
                className="border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
            />

            <select
                value={department}
                onChange={(event) =>
                    onDepartmentChange(event.target.value)
                }
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
                onChange={(event) =>
                    onStatusChange(event.target.value)
                }
                className="border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-600"
            >

                <option value="All">
                    All Status
                </option>

                <option value="Present">
                    Present
                </option>

                <option value="Absent">
                    Absent
                </option>

                <option value="Half Day">
                    Half Day
                </option>

                <option value="WFH">
                    WFH
                </option>

            </select>

            <button
                onClick={onReset}
                className="bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600"
            >
                Reset
            </button>

        </div>
    );
}

export default AttendanceFilters;