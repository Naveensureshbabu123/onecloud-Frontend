function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[600px] items-start justify-center bg-slate-50 px-6 pt-32 text-center"
    >
      <div className="max-w-4xl">

        <h1 className="text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
          One Enterprise Cloud Platform
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          These platforms provide a range of services for data storage,
          computing power, and infrastructure management, catering to
          various business needs.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <button className="bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700">
            Get Started
          </button>

          <button className="border border-blue-600 bg-white px-8 py-3 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white">
            Request Demo
          </button>

        </div>

      </div>
    </section>
  );
}

export default Hero;
