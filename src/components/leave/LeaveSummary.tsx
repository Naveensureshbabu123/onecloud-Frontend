interface LeaveSummaryProps {
    pending: number;
    approved: number;
    rejected: number;
}

function LeaveSummary({
    pending,
    approved,
    rejected
}: LeaveSummaryProps) {

    return (
        <div className="mb-8 grid gap-5 md:grid-cols-3">

            <div className="rounded-xl bg-white p-6 text-center shadow">
                <h2 className="text-3xl font-bold text-yellow-500">
                    {pending}
                </h2>

                <p className="mt-2 text-gray-600">
                    Pending Requests
                </p>
            </div>

            <div className="rounded-xl bg-white p-6 text-center shadow">
                <h2 className="text-3xl font-bold text-green-600">
                    {approved}
                </h2>

                <p className="mt-2 text-gray-600">
                    Approved Leaves
                </p>
            </div>

            <div className="rounded-xl bg-white p-6 text-center shadow">
                <h2 className="text-3xl font-bold text-red-600">
                    {rejected}
                </h2>

                <p className="mt-2 text-gray-600">
                    Rejected Leaves
                </p>
            </div>

        </div>
    );
}

export default LeaveSummary;