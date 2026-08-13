function TechnologyStack() {

  const technologies = [
    "React",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "Vite",
    "AI",
  ];

  return (
    <section
      id="technology"
      className="bg-slate-900 px-6 py-24"
    >

      <div className="mx-auto max-w-7xl">

        <div className="mb-12 text-center">

          <p className="font-semibold uppercase tracking-wider text-blue-400">
            Technology
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            Built With Modern Technology
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            OneCloud uses modern technologies to provide a fast,
            scalable and reliable business platform.
          </p>

        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">

          {technologies.map(function (technology) {
            return (
              <div
                key={technology}
                className="border border-slate-700 bg-slate-800 p-6 text-center text-white hover:border-blue-500"
              >
                {technology}
              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default TechnologyStack;