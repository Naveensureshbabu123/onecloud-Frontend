import { useEffect, useState } from "react";
import type { LeaveRequest } from "../../types/leave";

function HRLeaveRequests() {

    const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>([]);

    function loadLeaves() {

        const savedLeaves: LeaveRequest[] = JSON.parse(
            localStorage.getItem("leaveRequests") || "[]"
        );

        setLeaveRequests(savedLeaves);
    }

    useEffect(() => {

        loadLeaves();

        function handleLeaveUpdate() {
            loadLeaves();
        }

        window.addEventListener(
            "leaveUpdated",
            handleLeaveUpdate
        );

        return () => {

            window.removeEventListener(
                "leaveUpdated",
                handleLeaveUpdate
            );

        };

    }, []);

    function updateLeaveStatus(
        id: string,
        status: "Approved" | "Rejected"
    ) {

        const updatedLeaves = leaveRequests.map((leave) =>
            leave.id === id
                ? {
                    ...leave,
                    status,
                }
                : leave
        );

        setLeaveRequests(updatedLeaves);

        localStorage.setItem(
            "leaveRequests",
            JSON.stringify(updatedLeaves)
        );

        window.dispatchEvent(
            new Event("leaveUpdated")
        );
    }

    const pendingLeaves = leaveRequests.filter(
        (leave) => leave.status === "Pending"
    );

    return (
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="mb-6 flex items-center justify-between">

                <div>

                    <h2 className="text-xl font-bold text-slate-900">
                        Leave Requests
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Review employee leave requests
                    </p>

                </div>

                <div className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
                    {pendingLeaves.length} Pending
                </div>

            </div>

            {leaveRequests.length === 0 ? (

                <div className="rounded-xl bg-slate-50 p-8 text-center">

                    <div className="text-4xl">
                        📭
                    </div>

                    <p className="mt-3 font-semibold text-slate-700">
                        No leave requests
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                        Employee leave requests will appear here.
                    </p>

                </div>

            ) : (

                <div className="overflow-x-auto">

                    <table className="w-full text-left">

                        <thead>

                            <tr className="border-b border-slate-200">

                                <th className="px-4 py-3 text-sm font-semibold text-slate-600">
                                    Employee
                                </th>

                                <th className="px-4 py-3 text-sm font-semibold text-slate-600">
                                    Department
                                </th>

                                <th className="px-4 py-3 text-sm font-semibold text-slate-600">
                                    Leave Type
                                </th>

                                <th className="px-4 py-3 text-sm font-semibold text-slate-600">
                                    From
                                </th>

                                <th className="px-4 py-3 text-sm font-semibold text-slate-600">
                                    To
                                </th>

                                <th className="px-4 py-3 text-sm font-semibold text-slate-600">
                                    Days
                                </th>

                                <th className="px-4 py-3 text-sm font-semibold text-slate-600">
                                    Status
                                </th>

                                <th className="px-4 py-3 text-sm font-semibold text-slate-600">
                                    Action
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {leaveRequests.map((leave) => (

                                <tr
                                    key={leave.id}
                                    className="border-b border-slate-100"
                                >

                                    <td className="px-4 py-4 font-medium text-slate-800">
                                        {leave.name}
                                    </td>

                                    <td className="px-4 py-4 text-slate-600">
                                        {leave.department}
                                    </td>

                                    <td className="px-4 py-4 text-slate-600">
                                        {leave.type}
                                    </td>

                                    <td className="px-4 py-4 text-slate-600">
                                        {leave.from}
                                    </td>

                                    <td className="px-4 py-4 text-slate-600">
                                        {leave.to}
                                    </td>

                                    <td className="px-4 py-4 text-slate-600">
                                        {leave.days}
                                    </td>

                                    <td className="px-4 py-4">

                                        <span
                                            className={
                                                leave.status === "Pending"
                                                    ? "rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700"
                                                    : leave.status === "Approved"
                                                        ? "rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700"
                                                        : "rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700"
                                            }
                                        >
                                            {leave.status}
                                        </span>

                                    </td>

                                    <td className="px-4 py-4">

                                        {leave.status === "Pending" && (

                                            <div className="flex gap-2">

                                                <button
                                                    onClick={() =>
                                                        updateLeaveStatus(
                                                            leave.id,
                                                            "Approved"
                                                        )
                                                    }
                                                    className="rounded-lg bg-green-600 px-3 py-2 text-xs font-semibold text-white hover:bg-green-700"
                                                >
                                                    Approve
                                                </button>

                                                <button
                                                    onClick={() =>
                                                        updateLeaveStatus(
                                                            leave.id,
                                                            "Rejected"
                                                        )
                                                    }
                                                    className="rounded-lg bg-red-600 px-3 py-2 text-xs font-semibold text-white hover:bg-red-700"
                                                >
                                                    Reject
                                                </button>

                                            </div>

                                        )}

                                        {leave.status === "Approved" && (
                                            <span className="text-xs font-semibold text-green-600">
                                                Approved
                                            </span>
                                        )}

                                        {leave.status === "Rejected" && (
                                            <span className="text-xs font-semibold text-red-600">
                                                Rejected
                                            </span>
                                        )}

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            )}

        </div>
    );
}

export default HRLeaveRequests;