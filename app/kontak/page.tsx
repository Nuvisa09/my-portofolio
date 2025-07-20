export default function Home() {
  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <main className="bg-slate-100 p-8 rounded-2xl shadow-lg w-full max-w-md animate-fade-in-up">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">
          Hubungi Saya
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          Silakan isi formulir di bawah ini
        </p>
        <form className="space-y-4">
          <label className="block text-gray-700 font-medium mb-1">Nama:</label>{" "}
          <input
            type="text"
            placeholder="Nama Anda"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <br />
          <label className="block text-gray-700 font-medium mb-1">
            Email:
          </label>{" "}
          <input
            type="email"
            placeholder="email@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <br />
          <label className="block text-gray-700 font-medium mb-1">
            Pesan:
          </label>{" "}
          <textarea
            placeholder="Tulis pesan Anda di sini"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <br />
          <button
            type="submit"
            className="w-full bg-slate-700 text-white py-2 rounded-lg hover:bg-slate-500 transition duration-200 ease-in-out"
          >
            Kirim
          </button>
        </form>
      </main>
    </div>
  );
}
