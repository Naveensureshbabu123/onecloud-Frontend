function Footer() {
  return (
    <footer
      id="contact"
      className="bg-slate-950 px-6 py-12 text-white"
    >

      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row">

        <div>

          <h2 className="text-2xl font-bold text-blue-500">
            OneCloud
          </h2>

          <p className="mt-3 max-w-md text-slate-400">
            One platform for managing your entire business.
          </p>

        </div>

        <div>

          <h3 className="mb-3 font-semibold">
            Contact
          </h3>

          <p className="text-slate-400">
            contact@onecloud.com
          </p>

          <p className="mt-2 text-slate-400">
            +91 12345 67890
          </p>

        </div>

      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
         2026 OneCloud. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;