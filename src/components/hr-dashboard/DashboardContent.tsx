import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import type { Employee } from "../../types/employee";
import type { Attendance } from "../../types/attendance";
import type { LeaveRequest } from "../../types/leave";

import HRMetricCard from "./HRMetricCard";
import ActivityTable from "./ActivityTable";
import HRLeaveRequests from "./HRLeaveRequests";

interface DashboardContentProps {
    employees: Employee[];
}

interface Activity {
    id: string;
    employeeName: string;
    activity: string;
    status: string;
}

function DashboardContent({
    employees,
}: DashboardContentProps) {

    const navigate = useNavigate();

    const [attendance, setAttendance] = useState<Attendance[]>([]);
    const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>([]);
    const [activities, setActivities] = useState<Activity[]>([]);

    function loadDashboardData() {

        const savedAttendance: Attendance[] = JSON.parse(
            localStorage.getItem("attendance") || "[]"
        );

        const savedLeaveRequests: LeaveRequest[] = JSON.parse(
            localStorage.getItem("leaveRequests") || "[]"
        );

        setAttendance(savedAttendance);
        setLeaveRequests(savedLeaveRequests);

        const employeeActivities: Activity[] = employees
            .slice(-5)
            .map((employee) => ({
                id: `employee-${employee.id}`,
                employeeName: employee.name,
                activity: "Employee Added",
                status: employee.department,
            }));

        const leaveActivities: Activity[] = savedLeaveRequests
            .slice(-5)
            .map((leave) => ({
                id: `leave-${leave.id}`,
                employeeName: leave.name,
                activity: "Leave Request",
                status: leave.status,
            }));

        const attendanceActivities: Activity[] = savedAttendance
            .slice(-5)
            .map((item, index) => {

                const employee = employees.find(
                    (employee) => employee.id == item.id
                );

                if (!employee) {
                    return null;
                }

                return {
                    id: `attendance-${item.id}-${index}`,
                    employeeName: employee.name,
                    activity: "Attendance",
                    status: item.status,
                };
            })
            .filter(
                (activity): activity is Activity =>
                    activity !== null
            );

        setActivities([
            ...employeeActivities,
            ...leaveActivities,
            ...attendanceActivities,
        ]);
    }

    useEffect(() => {

        loadDashboardData();

        function handleUpdate() {
            loadDashboardData();
        }

        window.addEventListener(
            "leaveUpdated",
            handleUpdate
        );

        window.addEventListener(
            "attendanceUpdated",
            handleUpdate
        );

        return () => {

            window.removeEventListener(
                "leaveUpdated",
                handleUpdate
            );

            window.removeEventListener(
                "attendanceUpdated",
                handleUpdate
            );
        };

    }, [employees]);

    const totalEmployees = employees.length;

    const presentToday = attendance.filter(
        (item) => item.status === "Present"
    ).length;

    const employeesOnLeave = leaveRequests.filter(
        (item) => item.status === "Approved"
    ).length;

    const pendingLeaves = leaveRequests.filter(
        (item) => item.status === "Pending"
    ).length;

    const departments = new Set(
        employees.map(
            (employee) => employee.department
        )
    ).size;

    const activeEmployees = employees.filter(
        (employee) => employee.status === "Active"
    ).length;

    const absentToday = attendance.filter(
        (item) => item.status === "Absent"
    ).length;

    const lateToday = attendance.filter(
        (item) => item.status === "Late"
    ).length;

    const stats = [
        {
            title: "Total Employees",
            value: totalEmployees,
            icon: "👥",
            color: "bg-blue-50 text-blue-600",
            path: "/employees",
        },
        {
            title: "Present Today",
            value: presentToday,
            icon: "✓",
            color: "bg-green-50 text-green-600",
            path: "/attendance",
        },
        {
            title: "Employees on Leave",
            value: employeesOnLeave,
            icon: "🏖️",
            color: "bg-orange-50 text-orange-600",
            path: "/leave",
        },
        {
            title: "Pending Leave Requests",
            value: pendingLeaves,
            icon: "⏳",
            color: "bg-purple-50 text-purple-600",
            path: "/leave-approval",
        },
        {
            title: "Departments",
            value: departments,
            icon: "🏢",
            color: "bg-cyan-50 text-cyan-600",
            path: "/employees",
        },
        {
            title: "Active Employees",
            value: activeEmployees,
            icon: "●",
            color: "bg-emerald-50 text-emerald-600",
            path: "/employees",
        },
    ];

    return (
        <main className="min-h-screen bg-slate-50 p-6">

            <div className="mx-auto max-w-7xl">

                <div className="mb-8">

                    <h1 className="text-3xl font-bold text-slate-900">
                        HR Dashboard
                    </h1>

                    <p className="mt-1 text-sm text-slate-500">
                        Manage employees, attendance and leave activities
                    </p>

                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                    {stats.map((stat) => (

                        <HRMetricCard
                            key={stat.title}
                            title={stat.title}
                            value={stat.value}
                            icon={stat.icon}
                            color={stat.color}
                            onClick={() => navigate(stat.path)}
                        />

                    ))}

                </div>

                <div className="mt-6 grid gap-5 md:grid-cols-3">

                    <button
                        onClick={() => navigate("/attendance")}
                        className="rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:shadow-md"
                    >

                        <p className="text-sm text-slate-500">
                            Absent Today
                        </p>

                        <p className="mt-2 text-2xl font-bold text-red-600">
                            {absentToday}
                        </p>

                        <p className="mt-2 text-xs text-slate-400">
                            View attendance →
                        </p>

                    </button>

                    <button
                        onClick={() => navigate("/attendance")}
                        className="rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:shadow-md"
                    >

                        <p className="text-sm text-slate-500">
                            Late Today
                        </p>

                        <p className="mt-2 text-2xl font-bold text-yellow-600">
                            {lateToday}
                        </p>

                        <p className="mt-2 text-xs text-slate-400">
                            View attendance →
                        </p>

                    </button>

                    <button
                        onClick={() => navigate("/leave-approval")}
                        className="rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:shadow-md"
                    >

                        <p className="text-sm text-slate-500">
                            Pending Approvals
                        </p>

                        <p className="mt-2 text-2xl font-bold text-purple-600">
                            {pendingLeaves}
                        </p>

                        <p className="mt-2 text-xs text-slate-400">
                            Review requests →
                        </p>

                    </button>

                </div>

                <HRLeaveRequests />

                <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                    <h2 className="text-xl font-bold text-slate-900">
                        HR Management
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Access HR management functions
                    </p>

                    <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                        <button
                            onClick={() => navigate("/employees")}
                            className="rounded-xl bg-blue-50 p-5 text-left text-blue-700 transition hover:bg-blue-100"
                        >

                            <span className="text-2xl">
                                👨‍💼
                            </span>

                            <h3 className="mt-3 font-semibold">
                                Employees
                            </h3>

                            <p className="mt-1 text-xs">
                                Manage employees
                            </p>

                        </button>

                        <button
                            onClick={() => navigate("/attendance")}
                            className="rounded-xl bg-green-50 p-5 text-left text-green-700 transition hover:bg-green-100"
                        >

                            <span className="text-2xl">
                                📅
                            </span>

                            <h3 className="mt-3 font-semibold">
                                Attendance
                            </h3>

                            <p className="mt-1 text-xs">
                                Manage attendance
                            </p>

                        </button>

                        <button
                            onClick={() => navigate("/leave")}
                            className="rounded-xl bg-orange-50 p-5 text-left text-orange-700 transition hover:bg-orange-100"
                        >

                            <span className="text-2xl">
                                📝
                            </span>

                            <h3 className="mt-3 font-semibold">
                                Leave Management
                            </h3>

                            <p className="mt-1 text-xs">
                                Manage leave requests
                            </p>

                        </button>

                        <button
                            onClick={() => navigate("/leave-approval")}
                            className="rounded-xl bg-purple-50 p-5 text-left text-purple-700 transition hover:bg-purple-100"
                        >

                            <span className="text-2xl">
                                ✅
                            </span>

                            <h3 className="mt-3 font-semibold">
                                Leave Approval
                            </h3>

                            <p className="mt-1 text-xs">
                                Approve or reject requests
                            </p>

                        </button>

                    </div>

                </div>

                <ActivityTable
                    activities={activities}
                    onViewAll={() => navigate("/leave-approval")}
                />

            </div>

        </main>
    );
}

export default DashboardContent;