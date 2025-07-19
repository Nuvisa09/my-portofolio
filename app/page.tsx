export default function HomePage() {
  // Daftar tautan yang akan ditampilkan
  const links = [
    {
      name: "GitHub",
      url: "https://github.com/Nuvisa09",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/nor-vita-sari-07402a15b",
    },
    {
      name: "Website",
      url: "https://portofolio-cv-two.vercel.app/",
    },
  ];

  return (
    // Kita gunakan flexbox untuk membuat semua elemen berada di tengah
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="text-center ">
        {/* Placeholder untuk foto profil */}
        <div className="mx-auto mb-6 size-32 rounded-full bg-slate-300"></div>
        <h1 className="text-4xl font-bold">Nor Vita Sari</h1>
        <p className="mt-2 text-slate-500">
          Frontend Developer | Tech Enthusiast | Coffee Lover
        </p>

        {/* Bagian untuk daftar tautan */}
        <div className="mt-8 flex flex-col gap-4 w-full max-w-xs mx-auto">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 text-white p-4 rounded-lg font-semibold text-center hover:bg-slate-700 hover:scale-105 transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
