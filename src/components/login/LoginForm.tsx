import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [message, setMessage] = useState("");

    function handleLogin(e: React.FormEvent<HTMLFormElement>) {

        e.preventDefault();

        if (username === "admin" && password === "admin123") {

            localStorage.setItem("username", "Admin");

            if (remember) {
                localStorage.setItem("rememberMe", "true");
            } else {
                localStorage.removeItem("rememberMe");
            }

            navigate("/dashboard");

        } else {

            setMessage("Invalid Credentials");

        }
    }

    function handleForgotPassword() {

        alert("Please contact the administrator to reset your password.");

    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-5">

            <div className="w-full max-w-md bg-white p-8 shadow-xl">

                <div className="mb-6 flex justify-center">

                    <img
                        src="/images/logo.png"
                        alt="OneCloud Logo"
                        className="h-20 w-auto object-contain rounded-full"
                    />

                </div>

                <h1 className="mb-2 text-center text-3xl font-bold text-gray-800">
                    Login
                </h1>

                <p className="mb-8 text-center text-gray-500">
                    Login to your OneCloud account
                </p>

                <form onSubmit={handleLogin}>

                    <div className="mb-5">

                        <label className="mb-2 block font-medium text-gray-700">
                            Employee ID / Email
                        </label>

                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter Employee ID / Email"
                            className="w-full border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
                        />

                    </div>

                    <div className="mb-5">

                        <label className="mb-2 block font-medium text-gray-700">
                            Password
                        </label>

                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter Password"
                            className="w-full border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
                        />

                    </div>

                    <div className="mb-5 flex items-center justify-between">

                        <label className="flex items-center gap-2 text-gray-600">

                            <input
                                type="checkbox"
                                checked={remember}
                                onChange={(e) => setRemember(e.target.checked)}
                            />

                            Remember Me

                        </label>

                        <button
                            type="button"
                            onClick={handleForgotPassword}
                            className="text-blue-600 hover:underline"
                        >
                            Forgot Password?
                        </button>

                    </div>

                    {message && (
                        <p className="mb-5 text-center text-red-600">
                            {message}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700"
                    >
                        Login
                    </button>

                </form>

                <p className="mt-6 text-center text-gray-600">

                    Don't have an account?{" "}

                    <button
                        onClick={() => navigate("/register")}
                        className="font-medium text-blue-600 hover:underline"
                    >
                        Register
                    </button>

                </p>

            </div>

        </div>
    );
}

export default LoginForm;