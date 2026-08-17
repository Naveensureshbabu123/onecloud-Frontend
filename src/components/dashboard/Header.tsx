import { useNavigate } from "react-router-dom";

function Header() {

    const navigate = useNavigate();

    return (
        <header className="flex items-center justify-between border-b border-gray-200 bg-white px-8 py-5">

            <div>

                <h2 className="text-2xl font-bold text-gray-800">HRMS Dashboard</h2>

                <p className="text-sm text-gray-500">Welcome to OneCloud HRMS</p>

            </div>

            <button
                onClick={() => navigate("/login")}
                className="bg-red-500 px-5 py-2 font-medium text-white hover:bg-red-600"
            >
                Logout
            </button>

        </header>
    );
}

export default Header;