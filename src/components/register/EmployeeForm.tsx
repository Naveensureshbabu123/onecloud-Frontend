import { useState } from "react";
import type { EmployeeRegistrationData } from "../../types/employee";

interface EmployeeFormProps {
    onRegister: (employee: EmployeeRegistrationData) => void;
}

function EmployeeForm({ onRegister }: EmployeeFormProps) {

    const [formData, setFormData] = useState({
        id: "",
        name: "",
        email: "",
        mobile: "",
        department: "",
        designation: "",
        joiningDate: "",
        password: "",
        confirmPassword: "",
    });

    function handleChange(
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {

        event.preventDefault();

        if (
            formData.id === "" ||
            formData.name === "" ||
            formData.email === "" ||
            formData.mobile === "" ||
            formData.department === "" ||
            formData.designation === "" ||
            formData.joiningDate === "" ||
            formData.password === "" ||
            formData.confirmPassword === ""
        ) {
            alert("Please fill all fields");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const employee: EmployeeRegistrationData = {
            id: Number(formData.id),
            name: formData.name,
            email: formData.email,
            department: formData.department,
            designation: formData.designation,
            mobile: formData.mobile,
            joiningDate: formData.joiningDate,
            password: formData.password,
        };

        onRegister(employee);

        alert("Employee Registered Successfully");

        handleReset();
    }

    function handleReset() {

        setFormData({
            id: "",
            name: "",
            email: "",
            mobile: "",
            department: "",
            designation: "",
            joiningDate: "",
            password: "",
            confirmPassword: "",
        });

    }

    return (
        <div className="mx-auto max-w-3xl bg-white p-8 shadow-xl">

            <div className="mb-8 text-center">

                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                    OneCloud HRMS
                </p>

                <h2 className="mt-2 text-3xl font-bold text-gray-900">
                    Employee Registration
                </h2>

                <p className="mt-2 text-gray-500">
                    Register a new employee into the OneCloud HRMS system.
                </p>

            </div>

            <form onSubmit={handleSubmit}>

                <div className="grid gap-6 md:grid-cols-2">

                    <div>
                        <label className="mb-2 block font-medium text-gray-700">
                            Employee ID
                        </label>

                        <input
                            type="number"
                            name="id"
                            value={formData.id}
                            onChange={handleChange}
                            placeholder="Enter Employee ID"
                            className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-medium text-gray-700">
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter Full Name"
                            className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-medium text-gray-700">
                            Email Address
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter Email"
                            className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-medium text-gray-700">
                            Mobile Number
                        </label>

                        <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            placeholder="Enter Mobile Number"
                            className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-medium text-gray-700">
                            Department
                        </label>

                        <select
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            className="w-full border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-600"
                        >
                            <option value="">
                                Select Department
                            </option>

                            <option value="Human Resources">
                                Human Resources
                            </option>

                            <option value="Finance">
                                Finance
                            </option>

                            <option value="Sales">
                                Sales
                            </option>

                            <option value="Marketing">
                                Marketing
                            </option>

                            <option value="IT">
                                IT
                            </option>
                        </select>
                    </div>

                    <div>
                        <label className="mb-2 block font-medium text-gray-700">
                            Designation
                        </label>

                        <input
                            type="text"
                            name="designation"
                            value={formData.designation}
                            onChange={handleChange}
                            placeholder="Enter Designation"
                            className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-medium text-gray-700">
                            Date of Joining
                        </label>

                        <input
                            type="date"
                            name="joiningDate"
                            value={formData.joiningDate}
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-medium text-gray-700">
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter Password"
                            className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
                        />
                    </div>

                    <div className="md:col-span-2">

                        <label className="mb-2 block font-medium text-gray-700">
                            Confirm Password
                        </label>

                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm Password"
                            className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
                        />

                    </div>

                </div>

                <div className="mt-8 flex gap-4">

                    <button
                        type="submit"
                        className="bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
                    >
                        Register
                    </button>

                    <button
                        type="button"
                        onClick={handleReset}
                        className="border border-gray-300 px-8 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
                    >
                        Reset
                    </button>

                </div>

            </form>

        </div>
    );
}

export default EmployeeForm;