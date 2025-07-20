export default function ProyekPage() {
  const proyekList = [
    {
      nama: "Website Portofolio",
      deskripsi:
        "Website portofolio prtibadi menggunakan Next.js dan Tailwind CSS.",
    },
    {
      nama: "Aplikasi To-Do List",
      deskripsi:
        "Aplikasi to-do llist sederhana untuk manajemen tugas harian dengan fitur drag-and-drop.",
    },
    {
      nama: "Blog Pribadi",
      deskripsi:
        "Blog pribadi yang menampilkan artikel tentang kehidupan sehari-hari",
    },
  ];
  return (
    <div>
      <main className="min-h-screen bg-white px-10 py-10 text-gray-800 lg:px-25">
        <h1 className="text-4xl font-bold mb-6"> Proyek Saya</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proyekList.map((proyek, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold mb-2">{proyek.nama}</h2>
              <p className="text-sm text-gray-600">{proyek.deskripsi}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
