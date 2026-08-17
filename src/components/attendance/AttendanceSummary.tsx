interface AttendanceSummaryProps {
    total: number;
    present: number;
    absent: number;
    halfDay: number;
    wfh: number;
}

function AttendanceSummary({
    total,
    present,
    absent,
    halfDay,
    wfh
}: AttendanceSummaryProps) {

    const cards = [
        {
            title: "Total Employees",
            value: total
        },
        {
            title: "Present",
            value: present
        },
        {
            title: "Absent",
            value: absent
        },
        {
            title: "Half Day",
            value: halfDay
        },
        {
            title: "WFH",
            value: wfh
        }
    ];

    return (
        <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">

            {cards.map((card) => (

                <div
                    key={card.title}
                    className="bg-white p-6 shadow-lg"
                >

                    <h2 className="text-3xl font-bold text-gray-800">
                        {card.value}
                    </h2>

                    <p className="mt-2 text-gray-500">
                        {card.title}
                    </p>

                </div>

            ))}

        </div>
    );
}

export default AttendanceSummary;