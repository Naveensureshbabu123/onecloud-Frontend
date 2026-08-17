import type { LeaveRequest } from "../../types/leave";

interface LeaveApprovalProps {
    leaveRequests: LeaveRequest[];
    onApprove: (index: number) => void;
    onReject: (index: number) => void;
    onCancel: (index: number) => void;
}

function LeaveApproval({
    leaveRequests,
    onApprove,
    onReject,
    onCancel
}: LeaveApprovalProps) {

    return (
        <div className="overflow-x-auto">

            <table className="w-full border-collapse">

                <thead>

                    <tr className="bg-gray-100 text-left">

                        <th className="border p-3">
                            Employee ID
                        </th>

                        <th className="border p-3">
                            Employee Name
                        </th>

                        <th className="border p-3">
                            Department
                        </th>

                        <th className="border p-3">
                            Leave Type
                        </th>

                        <th className="border p-3">
                            Total Days
                        </th>

                        <th className="border p-3">
                            Status
                        </th>

                        <th className="border p-3">
                            Actions
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {leaveRequests.map((leave, index) => (

                        <tr key={index}>

                            <td className="border p-3">
                                {leave.id}
                            </td>

                            <td className="border p-3">
                                {leave.name}
                            </td>

                            <td className="border p-3">
                                {leave.department}
                            </td>

                            <td className="border p-3">
                                {leave.type}
                            </td>

                            <td className="border p-3">
                                {leave.days}
                            </td>

                            <td className="border p-3">

                                <span
                                    className={
                                        leave.status === "Pending"
                                            ? "bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700"
                                            : leave.status === "Approved"
                                            ? "bg-green-100 px-3 py-1 text-sm font-semibold text-green-700"
                                            : "bg-red-100 px-3 py-1 text-sm font-semibold text-red-700"
                                    }
                                >
                                    {leave.status}
                                </span>

                            </td>

                            <td className="border p-3">

                                <div className="flex flex-wrap gap-2">

                                    <button
                                        onClick={() => onApprove(index)}
                                        className="bg-green-600 px-3 py-2 text-sm font-semibold text-white hover:bg-green-700"
                                    >
                                        Approve
                                    </button>

                                    <button
                                        onClick={() => onReject(index)}
                                        className="bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-700"
                                    >
                                        Reject
                                    </button>

                                    <button
                                        onClick={() => onCancel(index)}
                                        className="border border-gray-400 px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100"
                                    >
                                        Cancel
                                    </button>

                                </div>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

            {leaveRequests.length === 0 && (
                <p className="py-10 text-center text-gray-500">
                    No leave requests available.
                </p>
            )}

        </div>
    );
}

export default LeaveApproval;