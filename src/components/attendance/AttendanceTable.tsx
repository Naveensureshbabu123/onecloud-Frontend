import type { Employee } from "../../types/employee";
import type {
    Attendance,
    AttendanceStatus
} from "../../types/attendance";

interface AttendanceTableProps {
    employees: Employee[];
    attendance: Attendance[];
    onMark: (id: number, status: AttendanceStatus) => void;
    onReset: (id: number) => void;
}

function AttendanceTable({
    employees,
    attendance,
    onMark,
    onReset
}: AttendanceTableProps) {

    function getStatus(id: number) {

        const record = attendance.find(
            (item) => item.id === id
        );

        return record?.status || "Present";
    }

    return (
        <div className="overflow-x-auto bg-white shadow-lg">

            <table className="w-full min-w-[800px]">

                <thead className="bg-gray-900 text-white">

                    <tr>

                        <th className="px-5 py-4 text-left">
                            ID
                        </th>

                        <th className="px-5 py-4 text-left">
                            Name
                        </th>

                        <th className="px-5 py-4 text-left">
                            Department
                        </th>

                        <th className="px-5 py-4 text-left">
                            Attendance
                        </th>

                        <th className="px-5 py-4 text-left">
                            Action
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {employees.map((employee) => {

                        const currentStatus = getStatus(employee.id);

                        return (
                            <tr
                                key={employee.id}
                                className="border-b border-gray-200 hover:bg-gray-50"
                            >

                                <td className="px-5 py-4 font-semibold">
                                    {employee.id}
                                </td>

                                <td className="px-5 py-4">
                                    {employee.name}
                                </td>

                                <td className="px-5 py-4">
                                    {employee.department}
                                </td>

                                <td className="px-5 py-4">

                                    <select
                                        value={currentStatus}
                                        onChange={(event) =>
                                            onMark(
                                                employee.id,
                                                event.target.value as AttendanceStatus
                                            )
                                        }
                                        className="border border-gray-300 bg-white px-3 py-2 outline-none focus:border-blue-600"
                                    >

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

                                </td>

                                <td className="px-5 py-4">

                                    <div className="flex gap-2">

                                        <button
                                            onClick={() =>
                                                onMark(
                                                    employee.id,
                                                    currentStatus
                                                )
                                            }
                                            className="bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
                                        >
                                            Mark
                                        </button>

                                        <button
                                            onClick={() =>
                                                onReset(employee.id)
                                            }
                                            className="bg-red-500 px-4 py-2 font-medium text-white hover:bg-red-600"
                                        >
                                            Reset
                                        </button>

                                    </div>

                                </td>

                            </tr>
                        );
                    })}

                </tbody>

            </table>

            {employees.length === 0 && (
                <div className="p-10 text-center text-gray-500">
                    No employees found.
                </div>
            )}

        </div>
    );
}

export default AttendanceTable;