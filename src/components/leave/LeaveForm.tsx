import { useState } from "react";
import type { LeaveRequest } from "../../types/leave";

interface LeaveFormProps {
    onSubmit: (leave: LeaveRequest) => void;
}

function LeaveForm({ onSubmit }: LeaveFormProps) {

    const [formData, setFormData] = useState({
        id: "",
        name: "",
        department: "",
        type: "",
        from: "",
        to: "",
        reason: ""
    });

    const [days, setDays] = useState(0);

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

        if (name === "from" || name === "to") {

            const from = name === "from" ? value : formData.from;
            const to = name === "to" ? value : formData.to;

            if (from && to) {

                const start = new Date(from);
                const end = new Date(to);

                if (end < start) {
                    setDays(0);
                    return;
                }

                const difference =
                    end.getTime() - start.getTime();

                const total =
                    difference / (1000 * 60 * 60 * 24) + 1;

                setDays(total);
            }
        }
    }

    function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault();

        if (
            !formData.id ||
            !formData.name ||
            !formData.department ||
            !formData.type ||
            !formData.from ||
            !formData.to ||
            !formData.reason
        ) {
            alert("Please fill all fields");
            return;
        }

        if (days <= 0) {
            alert("Please select valid dates");
            return;
        }

        const leave: LeaveRequest = {
            id: formData.id,
            name: formData.name,
            department: formData.department,
            type: formData.type,
            from: formData.from,
            to: formData.to,
            days: days,
            reason: formData.reason,
            status: "Pending"
        };

        onSubmit(leave);

        alert("Leave Request Submitted Successfully");

        setFormData({
            id: "",
            name: "",
            department: "",
            type: "",
            from: "",
            to: "",
            reason: ""
        });

        setDays(0);
    }

    function handleReset() {
        setFormData({
            id: "",
            name: "",
            department: "",
            type: "",
            from: "",
            to: "",
            reason: ""
        });

        setDays(0);
    }

    return (
        <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-lg">

            <div className="mb-8 text-center">

                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                    OneCloud HRMS
                </p>

                <h1 className="mt-2 text-3xl font-bold text-gray-800">
                    Employee Leave Request
                </h1>

                <p className="mt-2 text-gray-500">
                    Submit a leave request for employee approval
                </p>

            </div>

            <form onSubmit={handleSubmit}>

                <div className="grid gap-5 md:grid-cols-2">

                    <div>
                        <label className="mb-2 block font-medium text-gray-700">
                            Employee ID
                        </label>

                        <input
                            type="text"
                            name="id"
                            value={formData.id}
                            onChange={handleChange}
                            placeholder="Enter Employee ID"
                            className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-medium text-gray-700">
                            Employee Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter Employee Name"
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

                            <option value="Development">
                                Development
                            </option>

                            <option value="HR">
                                HR
                            </option>

                            <option value="Finance">
                                Finance
                            </option>

                            <option value="CRM">
                                CRM
                            </option>
                        </select>
                    </div>

                    <div>
                        <label className="mb-2 block font-medium text-gray-700">
                            Leave Type
                        </label>

                        <select
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            className="w-full border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-600"
                        >
                            <option value="">
                                Select Leave Type
                            </option>

                            <option value="Casual Leave">
                                Casual Leave
                            </option>

                            <option value="Sick Leave">
                                Sick Leave
                            </option>

                            <option value="Earned Leave">
                                Earned Leave
                            </option>

                            <option value="Maternity Leave">
                                Maternity Leave
                            </option>
                        </select>
                    </div>

                    <div>
                        <label className="mb-2 block font-medium text-gray-700">
                            From Date
                        </label>

                        <input
                            type="date"
                            name="from"
                            value={formData.from}
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-medium text-gray-700">
                            To Date
                        </label>

                        <input
                            type="date"
                            name="to"
                            value={formData.to}
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-medium text-gray-700">
                            Total Leave Days
                        </label>

                        <input
                            type="text"
                            value={days}
                            readOnly
                            className="w-full border border-gray-300 bg-gray-100 px-4 py-3 outline-none"
                        />
                    </div>

                    <div className="md:col-span-2">

                        <label className="mb-2 block font-medium text-gray-700">
                            Reason
                        </label>

                        <textarea
                            name="reason"
                            value={formData.reason}
                            onChange={handleChange}
                            placeholder="Enter reason for leave"
                            rows={4}
                            className="w-full resize-none border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
                        />

                    </div>

                </div>

                <div className="mt-7 flex gap-4">

                    <button
                        type="submit"
                        className="bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
                    >
                        Apply Leave
                    </button>

                    <button
                        type="button"
                        onClick={handleReset}
                        className="border border-gray-300 px-7 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
                    >
                        Reset
                    </button>

                </div>

            </form>

        </div>
    );
}

export default LeaveForm;