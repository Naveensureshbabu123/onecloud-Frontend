interface HRMetricCardProps {
    title: string;
    value: number;
    icon: string;
    color: string;
    onClick: () => void;
}

function HRMetricCard({
    title,
    value,
    icon,
    color,
    onClick,
}: HRMetricCardProps) {

    return (
        <button
            onClick={onClick}
            className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >

            <div className="flex items-center justify-between">

                <div>

                    <p className="text-sm font-medium text-slate-500">
                        {title}
                    </p>

                    <p className="mt-2 text-3xl font-bold text-slate-900">
                        {value}
                    </p>

                </div>

                <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl ${color}`}
                >
                    {icon}
                </div>

            </div>

        </button>
    );
}

export default HRMetricCard;