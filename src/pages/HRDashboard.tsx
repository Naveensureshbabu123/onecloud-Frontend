import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";
import DashboardContent from "../components/hr-dashboard/DashboardContent";
import employees from "../data/employees";

function HRDashboard() {
    return (
        <div className="min-h-screen bg-slate-50">

            <Sidebar />

            <div className="ml-64 min-h-screen">

                <Header />

                <DashboardContent
                    employees={employees}
                />

                <footer className="border-t border-gray-200 bg-white px-8 py-5 text-center text-sm text-gray-500">
                    2026 OneCloud HRMS. All rights reserved.
                </footer>

            </div>

        </div>
    );
}

export default HRDashboard;