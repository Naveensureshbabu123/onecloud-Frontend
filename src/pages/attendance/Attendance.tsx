import { useState } from "react";

import employees from "../../data/employees";

import AttendanceSummary from "../../components/attendance/AttendanceSummary";
import AttendanceFilters from "../../components/attendance/AttendanceFilters";
import AttendanceTable from "../../components/attendance/AttendanceTable";

import type {
    Attendance as AttendanceRecord,
    AttendanceStatus
} from "../../types/attendance";

function Attendance() {

    const [attendance, setAttendance] =
        useState<AttendanceRecord[]>([]);

    const [search, setSearch] = useState("");

    const [department, setDepartment] =
        useState("All");

    const [status, setStatus] =
        useState("All");

    function markAttendance(
        id: number,
        newStatus: AttendanceStatus
    ) {

        setAttendance((previousAttendance) => {

            const employeeExists =
                previousAttendance.some(
                    (employee) => employee.id === id
                );

            if (employeeExists) {

                return previousAttendance.map(
                    (employee) =>
                        employee.id === id
                            ? {
                                ...employee,
                                status: newStatus
                            }
                            : employee
                );

            }

            return [
                ...previousAttendance,
                {
                    id: id,
                    status: newStatus
                }
            ];
        });
    }

    function resetAttendance(id: number) {

        setAttendance((previousAttendance) =>
            previousAttendance.filter(
                (employee) => employee.id !== id
            )
        );
    }

    function resetFilters() {

        setSearch("");
        setDepartment("All");
        setStatus("All");

    }

    const filteredEmployees = employees.filter(
        (employee) => {

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

            const employeeAttendance =
                attendance.find(
                    (item) => item.id === employee.id
                );

            const statusMatch =
                status === "All" ||
                employeeAttendance?.status === status;

            return (
                searchMatch &&
                departmentMatch &&
                statusMatch
            );
        }
    );

    const present =
        attendance.filter(
            (employee) =>
                employee.status === "Present"
        ).length;

    const absent =
        attendance.filter(
            (employee) =>
                employee.status === "Absent"
        ).length;

    const halfDay =
        attendance.filter(
            (employee) =>
                employee.status === "Half Day"
        ).length;

    const wfh =
        attendance.filter(
            (employee) =>
                employee.status === "WFH"
        ).length;

    return (

        <div className="min-h-screen bg-gray-100 px-5 py-10">

            <div className="mx-auto max-w-7xl">

                <div className="mb-8">

                    <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                        OneCloud HRMS
                    </p>

                    <h1 className="mt-2 text-4xl font-bold text-gray-900">
                        Attendance Management
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Manage and track employee attendance.
                    </p>

                    <p className="mt-3 text-sm text-gray-500">
                        {new Date().toDateString()}
                    </p>

                </div>

                <AttendanceSummary
                    total={employees.length}
                    present={present}
                    absent={absent}
                    halfDay={halfDay}
                    wfh={wfh}
                />

                <AttendanceFilters
                    search={search}
                    department={department}
                    status={status}
                    onSearchChange={setSearch}
                    onDepartmentChange={setDepartment}
                    onStatusChange={setStatus}
                    onReset={resetFilters}
                />

                <AttendanceTable
                    employees={filteredEmployees}
                    attendance={attendance}
                    onMark={markAttendance}
                    onReset={resetAttendance}
                />

            </div>

        </div>
    );
}

export default Attendance;