import { useState } from "react";
import LeaveApprovalTable from "../../components/leave/LeaveApproval";
import LeaveSummary from "../../components/leave/LeaveSummary";
import type { LeaveRequest } from "../../types/leave";

function LeaveApprovalPage() {

    const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>([]);

    function approveLeave(index: number) {

        setLeaveRequests((previous) =>
            previous.map((leave, i) =>
                i === index
                    ? { ...leave, status: "Approved" }
                    : leave
            )
        );
    }

    function rejectLeave(index: number) {

        setLeaveRequests((previous) =>
            previous.map((leave, i) =>
                i === index
                    ? { ...leave, status: "Rejected" }
                    : leave
            )
        );
    }

    function cancelLeave(index: number) {

        setLeaveRequests((previous) =>
            previous.map((leave, i) =>
                i === index
                    ? { ...leave, status: "Pending" }
                    : leave
            )
        );
    }

    const pendingCount = leaveRequests.filter(
        (leave) => leave.status === "Pending"
    ).length;

    const approvedCount = leaveRequests.filter(
        (leave) => leave.status === "Approved"
    ).length;

    const rejectedCount = leaveRequests.filter(
        (leave) => leave.status === "Rejected"
    ).length;

    return (
        <div className="min-h-screen bg-gray-100 px-6 py-10">

            <div className="mx-auto max-w-7xl">

                <div className="mb-8">

                    <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                        OneCloud HRMS
                    </p>

                    <h1 className="mt-2 text-4xl font-bold text-gray-800">
                        Leave Approval Dashboard
                    </h1>

                </div>

                <LeaveSummary
                    pending={pendingCount}
                    approved={approvedCount}
                    rejected={rejectedCount}
                />

                <div className="rounded-xl bg-white p-6 shadow-lg">

                    <h2 className="mb-5 text-2xl font-bold text-gray-800">
                        Leave Requests
                    </h2>

                    <LeaveApprovalTable
                        leaveRequests={leaveRequests}
                        onApprove={approveLeave}
                        onReject={rejectLeave}
                        onCancel={cancelLeave}
                    />

                </div>

            </div>

        </div>
    );
}

export default LeaveApprovalPage;