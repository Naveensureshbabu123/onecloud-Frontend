import { Routes, Route } from "react-router-dom";

import Navbar from "./components/landing-page/Navbar";
import Hero from "./components/landing-page/Hero";
import Modules from "./components/landing-page/Modules";
import TechnologyStack from "./components/landing-page/TechnologyStack";
import Footer from "./components/landing-page/Footer";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import Attendance from "./pages/attendance/Attendance";

import LeaveManagement from "./pages/leave/LeaveManagement";
import LeaveApproval from "./pages/leave/LeaveApproval";

import EmployeeDetails from "./pages/employee/EmployeeDetails";
import Employees from "./pages/employee/Employees";
import HRDashboard from "./pages/HRDashboard";
function App() {

    return (

        <Routes>



            <Route
                path="/"
                element={
                    <>
                        <Navbar />
                        <Hero />
                        <Modules />
                        <TechnologyStack />
                        <Footer />
                    </>
                }
            />



            <Route
                path="/login"
                element={<Login />}
            />



            <Route
                path="/register"
                element={<Register />}
            />



            <Route
                path="/dashboard"
                element={<Dashboard />}
            />


            <Route
                path="/employees"
                element={<Employees />}
            />
            <Route
                path="/employees/:id"
                element={<EmployeeDetails />}
            />



            <Route
                path="/attendance"
                element={<Attendance />}
            />



            <Route
                path="/leave"
                element={<LeaveManagement />}
            />



            <Route
                path="/leave-approval"
                element={<LeaveApproval />}
            />
            <Route
  path="/hr-dashboard"
  element={<HRDashboard />}
/>

        </Routes>

    );
}

export default App;