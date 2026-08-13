import { useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    return (
        <header className="flex items-center justify-between border-b border-gray-200 bg-white px-8 py-4">

            <div className="flex items-center">
                <img
                    src="./images/logo.png"
                    alt="OneCloud Logo"
                    className="h-16 w-auto object-contain rounded-full"
                />
            </div>

            <nav className="hidden md:block">

                <ul className="flex items-center gap-8">

                    <li>
                        <a
                            href="#home"
                            className="font-medium text-gray-700 transition hover:text-blue-600"
                        >
                            Home
                        </a>
                    </li>

                    <li>
                        <a
                            href="#Modules"
                            className="font-medium text-gray-700 transition hover:text-blue-600"
                        >
                            Modules
                        </a>
                    </li>

                    <li>
                        <a
                            href="#solutions"
                            className="font-medium text-gray-700 transition hover:text-blue-600"
                        >
                            Solutions
                        </a>
                    </li>

                    <li>
                        <a
                            href="#about"
                            className="font-medium text-gray-700 transition hover:text-blue-600"
                        >
                            About
                        </a>
                    </li>

                    <li>
                        <a
                            href="#contact"
                            className="font-medium text-gray-700 transition hover:text-blue-600"
                        >
                            Contact
                        </a>
                    </li>

                </ul>

            </nav>

            <div className="flex items-center gap-3">

                <button
                    onClick={() => navigate("/login")}
                    className="rounded-full border border-blue-600 px-5 py-2 font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white"
                >
                    Login
                </button>

                <button
                    onClick={() => navigate("/register")}
                    className="rounded-full bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
                >
                    Register
                </button>

            </div>

        </header>
    );
}

export default Navbar;