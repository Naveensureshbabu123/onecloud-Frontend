import { useState } from "react";
import type { Employee } from "../../types/employee";

function EmployeeRegistration() {

    const [employee, setEmployee] = useState<Employee>({
        id: 0,
        name: "",
        email: "",
        department: "",
        designation: ""
    });

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) {

        const { name, value } = e.target;

        setEmployee({
            ...employee,
            [name]: name === "id" ? Number(value) : value
        });
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

        e.preventDefault();

        if (
            employee.id === 0 ||
            employee.name.trim() === "" ||
            employee.email.trim() === "" ||
            employee.department === "" ||
            employee.designation.trim() === ""
        ) {
            alert("Please fill all fields");
            return;
        }

        console.log("Employee:", employee);

        localStorage.setItem(
            "employee",
            JSON.stringify(employee)
        );

        alert("Employee Registered Successfully");

        setEmployee({
            id: 0,
            name: "",
            email: "",
            department: "",
            designation: ""
        });
    }

    function handleReset() {

        setEmployee({
            id: 0,
            name: "",
            email: "",
            department: "",
            designation: ""
        });
    }

    return (
        <div className="min-h-screen bg-gray-100 px-5 py-10">

            <div className="mx-auto max-w-2xl bg-white p-8 shadow-xl">

                <h1 className="mb-2 text-center text-3xl font-bold text-gray-800">
                    Employee Registration
                </h1>

                <p className="mb-8 text-center text-gray-500">
                    Register a new OneCloud employee
                </p>

                <form onSubmit={handleSubmit}>

                    <div className="mb-5">

                        <label className="mb-2 block font-medium text-gray-700">
                            Employee ID
                        </label>

                        <input
                            type="number"
                            name="id"
                            value={employee.id || ""}
                            onChange={handleChange}
                            placeholder="Enter Employee ID"
                            className="w-full border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
                        />

                    </div>

                    <div className="mb-5">

                        <label className="mb-2 block font-medium text-gray-700">
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={employee.name}
                            onChange={handleChange}
                            placeholder="Enter Full Name"
                            className="w-full border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
                        />

                    </div>

                    <div className="mb-5">

                        <label className="mb-2 block font-medium text-gray-700">
                            Email Address
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={employee.email}
                            onChange={handleChange}
                            placeholder="Enter Email"
                            className="w-full border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
                        />

                    </div>

                    <div className="mb-5">

                        <label className="mb-2 block font-medium text-gray-700">
                            Department
                        </label>

                        <select
                            name="department"
                            value={employee.department}
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
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

                            <option value="Development">
                                Development
                            </option>

                            <option value="CRM">
                                CRM
                            </option>

                        </select>

                    </div>

                    <div className="mb-8">

                        <label className="mb-2 block font-medium text-gray-700">
                            Designation
                        </label>

                        <input
                            type="text"
                            name="designation"
                            value={employee.designation}
                            onChange={handleChange}
                            placeholder="Enter Designation"
                            className="w-full border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
                        />

                    </div>

                    <div className="flex gap-4">

                        <button
                            type="submit"
                            className="bg-blue-600 px-7 py-3 font-medium text-white transition hover:bg-blue-700"
                        >
                            Register
                        </button>

                        <button
                            type="button"
                            onClick={handleReset}
                            className="border border-gray-400 px-7 py-3 font-medium text-gray-700 transition hover:bg-gray-100"
                        >
                            Reset
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default EmployeeRegistration;