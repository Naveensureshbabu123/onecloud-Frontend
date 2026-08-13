import { Routes, Route } from "react-router-dom";


import EmployeeRegistration from "./components/register/EmployeeRegistration";


function AppRoutes() {
    return (
        <Routes>

           

            <Route
                path="/register"
                element={<EmployeeRegistration />}
            />

           

        </Routes>
    );
}

export default AppRoutes;