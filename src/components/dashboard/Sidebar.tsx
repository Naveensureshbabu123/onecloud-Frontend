import { useNavigate } from "react-router-dom";

function Sidebar() {

    const navigate = useNavigate();

    return (
        <aside className="fixed left-0 top-0 h-screen w-64 overflow-y-auto bg-slate-900 text-white">

            <div className="border-b border-slate-700 px-6 py-6">

                <h1 className="text-2xl font-bold">
                    OneCloud
                </h1>

                <p className="mt-1 text-sm text-slate-400">
                    HRMS Platform
                </p>

            </div>

            <nav className="px-4 py-6">

                <button
                    onClick={() => navigate("/dashboard")}
                    className="mb-2 flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-blue-600"
                >
                    🏠 Dashboard
                </button>

                <button
                    onClick={() => navigate("/hr-dashboard")}
                    className="mb-2 flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-blue-600"
                >
                    👨‍💼 HR Dashboard
                </button>

                <button
                    onClick={() => navigate("/employees")}
                    className="mb-2 flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-blue-600"
                >
                    👨‍💼 Employees
                </button>

                <button
                    onClick={() => navigate("/attendance")}
                    className="mb-2 flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-blue-600"
                >
                    📅 Attendance
                </button>

                <button
                    onClick={() => navigate("/leave")}
                    className="mb-2 flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-blue-600"
                >
                    📝 Leave Management
                </button>

                <button
                    onClick={() => navigate("/payroll")}
                    className="mb-2 flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-blue-600"
                >
                    💰 Payroll
                </button>

                <button
                    onClick={() => navigate("/crm")}
                    className="mb-2 flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-blue-600"
                >
                    📊 CRM
                </button>

                <button
                    onClick={() => navigate("/finance")}
                    className="mb-2 flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-blue-600"
                >
                    💳 Finance
                </button>

                <button
                    onClick={() => navigate("/reports")}
                    className="mb-2 flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-blue-600"
                >
                    📈 Reports
                </button>

                <button
                    onClick={() => navigate("/settings")}
                    className="flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-blue-600"
                >
                    ⚙️ Settings
                </button>

            </nav>

        </aside>
    );
}

export default Sidebar;