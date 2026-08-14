import { Routes, Route } from "react-router-dom";

import Navbar from "./components/landing-page/Navbar";
import Hero from "./components/landing-page/Hero";
import Modules from "./components/landing-page/Modules";
import TechnologyStack from "./components/landing-page/TechnologyStack";
import Footer from "./components/landing-page/Footer";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
function App() {

    return (
        <>

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

            </Routes>

        </>
    );
}

export default App;