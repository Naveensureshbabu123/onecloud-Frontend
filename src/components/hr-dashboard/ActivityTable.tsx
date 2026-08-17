interface Activity {
    id: string;
    employeeName: string;
    activity: string;
    status: string;
}

interface ActivityTableProps {
    activities: Activity[];
    onViewAll: () => void;
}

function ActivityTable({
    activities,
    onViewAll,
}: ActivityTableProps) {

    return (
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="mb-5 flex items-center justify-between">

                <div>

                    <h2 className="text-xl font-bold text-slate-900">
                        Recent Activities
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Latest HR activities
                    </p>

                </div>

                <button
                    onClick={onViewAll}
                    className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                    View All
                </button>

            </div>

            {activities.length === 0 ? (

                <div className="rounded-xl bg-slate-50 p-8 text-center text-sm text-slate-500">
                    No recent activities
                </div>

            ) : (

                <div className="overflow-x-auto">

                    <table className="w-full text-left">

                        <thead>

                            <tr className="border-b border-slate-200">

                                <th className="px-4 py-3 text-sm font-semibold text-slate-600">
                                    Employee Name
                                </th>

                                <th className="px-4 py-3 text-sm font-semibold text-slate-600">
                                    Activity
                                </th>

                                <th className="px-4 py-3 text-sm font-semibold text-slate-600">
                                    Status
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {activities.slice(-10).reverse().map(
                                (activity) => (

                                    <tr
                                        key={activity.id}
                                        className="border-b border-slate-100 hover:bg-slate-50"
                                    >

                                        <td className="px-4 py-4 font-medium text-slate-800">
                                            {activity.employeeName}
                                        </td>

                                        <td className="px-4 py-4 text-slate-600">
                                            {activity.activity}
                                        </td>

                                        <td className="px-4 py-4">

                                            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                                                {activity.status}
                                            </span>

                                        </td>

                                    </tr>

                                )
                            )}

                        </tbody>

                    </table>

                </div>

            )}

        </div>
    );
}

export default ActivityTable;