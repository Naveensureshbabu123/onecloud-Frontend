import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";
import DashboardCard from "../components/dashboard/DashboardCard";


function Dashboard() {

    return (
        <div className="min-h-screen bg-gray-100">

            <Sidebar />

            <div className="ml-64 min-h-screen">

                <Header />

                <main className="p-8">

                    <div className="mb-8">

                        <h1 className="text-3xl font-bold text-gray-800">
                            Dashboard Overview
                        </h1>

                        
                    </div>


                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

                        <DashboardCard
                            title="Total Employees"
                            value="20"
                            icon="👨‍💼"
                            description="+2 this month"
                        />

                       

                    </div>


                    

                </main>


                <footer className=" border-gray-200 bg-white px-8 py-5 text-center text-sm text-gray-500">

                    2026 OneCloud HRMS. All rights reserved.

                </footer>

            </div>

        </div>
    );
}

export default Dashboard;