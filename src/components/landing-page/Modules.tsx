import ModuleCard from "./ModuleCards";

function Modules() {

  const modules = [
    {
      title: "HRMS",
      description:
        "Manage employees, attendance, leave, payroll and other HR operations.",
      icon: "👨‍💼",
    },
    {
      title: "CRM",
      description:
        "Manage customers, leads, sales activities and business relationships.",
      icon: "📊",
    },
    {
      title: "ERP",
      description:
        "Connect and manage your organization's core business processes.",
      icon: "🏢",
    },
    {
      title: "Finance",
      description:
        "Track financial transactions, reports, budgets and expenses.",
      icon: "💰",
    },
    {
      title: "AI Platform",
      description:
        "Use intelligent automation and AI-powered tools to improve productivity.",
      icon: "🤖",
    },
    {
      title: "Analytics",
      description:
        "Convert business data into meaningful insights and reports.",
      icon: "📈",
    },
  ];

  return (
    <section
      id="modules"
      className="bg-white px-6 py-24"
    >

      <div className="mx-auto max-w-7xl">

        <div className="mb-14 text-center">

          <p className="font-semibold uppercase tracking-wider text-blue-600">
            One Platform
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Powerful Business Modules
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Everything your business needs in one connected platform.
          </p>

        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {modules.map(function (module) {
            return (
              <ModuleCard
                key={module.title}
                title={module.title}
                description={module.description}
                icon={module.icon}
              />
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default Modules;