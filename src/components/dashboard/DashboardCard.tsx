interface DashboardCardProps {
    title: string;
    value: string;
    icon: string;
    description: string;
}

function DashboardCard({
    title,
    value,
    icon,
    description
}: DashboardCardProps) {

    return (
        <div className="border border-gray-200 bg-white p-6 shadow-sm">

            <div className="flex items-center justify-between">

                <div>

                    <p className="text-sm font-medium text-gray-500">{title} </p>

                    <h2 className="mt-2 text-3xl font-bold text-gray-800">{value}</h2>

                </div>

                <div className="flex h-12 w-12 items-center justify-center bg-blue-100 text-2xl">{icon} </div>

            </div>

            <p className="mt-4 text-sm text-green-600">{description}</p>

        </div>
    );
}

export default DashboardCard;