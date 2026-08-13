interface ModuleCardProps {
  title: string;
  description: string;
  icon: string;
}

function ModuleCard({
  title,
  description,
  icon,
}: ModuleCardProps) {
  return (
    <div className="border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-lg">

      <div className="mb-4 text-4xl">
        {icon}
      </div>

      <h3 className="mb-3 text-xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="leading-7 text-gray-600">
        {description}
      </p>

      <button className="mt-5 font-semibold text-blue-600 hover:text-blue-800">
        Learn More →
      </button>

    </div>
  );
}

export default ModuleCard;