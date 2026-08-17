function RecentActivities() {

    return (
        <div className="mt-10 border border-gray-200 bg-white shadow-sm">

            <div className="border-b border-gray-200 px-6 py-5">

                <h2 className="text-xl font-bold text-gray-800">
                    Recent Activities
                </h2>

            </div>

            <div className="overflow-x-auto">

                <table className="w-full">

                    <thead className="bg-gray-50">

                        <tr>

                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                Employee
                            </th>

                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                Activity
                            </th>

                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                Status
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        <tr className="border-t border-gray-100">

                            <td className="px-6 py-4">
                                Naveen
                            </td>

                            <td className="px-6 py-4 text-gray-600">
                                Submitted leave request
                            </td>

                            <td className="px-6 py-4">

                                <span className="bg-yellow-100 px-3 py-1 text-sm text-yellow-700">
                                    Pending
                                </span>

                            </td>

                        </tr>


                        <tr className="border-t border-gray-100">

                            <td className="px-6 py-4">
                                Shruthi
                            </td>

                            <td className="px-6 py-4 text-gray-600">
                                Attendance marked
                            </td>

                            <td className="px-6 py-4">

                                <span className="bg-green-100 px-3 py-1 text-sm text-green-700">
                                    Completed
                                </span>

                            </td>

                        </tr>


                        <tr className="border-t border-gray-100">

                            <td className="px-6 py-4">
                                Karthik
                            </td>

                            <td className="px-6 py-4 text-gray-600">
                                Employee profile updated
                            </td>

                            <td className="px-6 py-4">

                                <span className="bg-blue-100 px-3 py-1 text-sm text-blue-700">
                                    Updated
                                </span>

                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default RecentActivities;