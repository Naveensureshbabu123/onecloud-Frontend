import { useEffect, useState } from "react";
import LeaveForm from "../../components/leave/LeaveForm";
import type { LeaveRequest } from "../../types/leave";

function LeaveManagement() {

    const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>([]);

    useEffect(() => {

        const savedLeaves = JSON.parse(
            localStorage.getItem("leaveRequests") || "[]"
        );

        setLeaveRequests(savedLeaves);

    }, []);

    function handleLeaveSubmit(leave: LeaveRequest) {

        const newLeave: LeaveRequest = {
            ...leave,
            id: String(Date.now()),
            status: "Pending",
        };

        const updatedLeaves = [
            ...leaveRequests,
            newLeave,
        ];

        setLeaveRequests(updatedLeaves);

        localStorage.setItem(
            "leaveRequests",
            JSON.stringify(updatedLeaves)
        );

        window.dispatchEvent(new Event("leaveUpdated"));
    }

    return (
        <div className="min-h-screen bg-gray-100 px-6 py-10">

            <LeaveForm
                onSubmit={handleLeaveSubmit}
            />

            {leaveRequests.length > 0 && (

                <div className="mx-auto mt-10 max-w-6xl rounded-xl bg-white p-6 shadow-lg">

                    <h2 className="mb-5 text-2xl font-bold text-gray-800">
                        My Leave Requests
                    </h2>

                    <div className="overflow-x-auto">

                        <table className="w-full border-collapse">

                            <thead>

                                <tr className="bg-gray-100 text-left">

                                    <th className="border p-3">
                                        Employee
                                    </th>

                                    <th className="border p-3">
                                        Leave Type
                                    </th>

                                    <th className="border p-3">
                                        From
                                    </th>

                                    <th className="border p-3">
                                        To
                                    </th>

                                    <th className="border p-3">
                                        Days
                                    </th>

                                    <th className="border p-3">
                                        Status
                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {leaveRequests.map((leave) => (

                                    <tr key={leave.id}>

                                        <td className="border p-3">
                                            {leave.name}
                                        </td>

                                        <td className="border p-3">
                                            {leave.type}
                                        </td>

                                        <td className="border p-3">
                                            {leave.from}
                                        </td>

                                        <td className="border p-3">
                                            {leave.to}
                                        </td>

                                        <td className="border p-3">
                                            {leave.days}
                                        </td>

                                        <td className="border p-3">

                                            <span
                                                className={
                                                    leave.status === "Pending"
                                                        ? "rounded bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700"
                                                        : leave.status === "Approved"
                                                            ? "rounded bg-green-100 px-3 py-1 text-sm font-semibold text-green-700"
                                                            : "rounded bg-red-100 px-3 py-1 text-sm font-semibold text-red-700"
                                                }
                                            >
                                                {leave.status}
                                            </span>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

            )}

        </div>
    );
}

export default LeaveManagement;