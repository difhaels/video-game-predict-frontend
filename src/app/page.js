import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6">
        <div className="text-2xl font-bold text-brand-blue">
          VGP<span className="text-brand-red">.</span>
        </div>
        <div className="space-x-8 font-medium">
          <Link href="/dashboard" className="hover:text-brand-blue transition">
            Dashboard
          </Link>
          <Link href="/explorer" className="hover:text-brand-blue transition">
            Explorer
          </Link>
          <Link
            href="/predictor"
            className="px-5 py-2 bg-brand-blue text-white rounded-full hover:bg-opacity-90 transition"
          >
            Try Predictor
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center px-6 py-20 bg-slate-50">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Level Up Your <span className="text-brand-blue">Game Analysis</span>{" "}
          <br />
          with <span className="text-brand-red">AI Power</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mb-10">
          Analisis lebih dari 16.000 data penjualan video game dunia. Pahami
          tren masa lalu dan prediksi angka penjualan proyek game masa depanmu
          menggunakan Machine Learning.
        </p>
        <div className="flex gap-4">
          <Link
            href="/dashboard"
            className="px-8 py-4 bg-brand-blue text-white rounded-lg font-bold shadow-lg shadow-blue-200 hover:-translate-y-1 transition"
          >
            Mulai Analisis
          </Link>
          <Link
            href="/predictor"
            className="px-8 py-4 border-2 border-brand-orange text-brand-orange rounded-lg font-bold hover:bg-brand-orange hover:text-white transition"
          >
            Coba Prediksi
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 px-10 grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="p-8 rounded-2xl border-b-4 border-brand-yellow bg-white shadow-sm hover:shadow-md transition">
          <div className="w-12 h-12 bg-brand-yellow rounded-lg mb-6 flex items-center justify-center text-white text-2xl">
            📊
          </div>
          <h3 className="text-xl font-bold mb-4">Market Insights</h3>
          <p className="text-slate-600">
            Visualisasi data interaktif untuk melihat dominasi platform dan
            genre di berbagai wilayah dunia.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-8 rounded-2xl border-b-4 border-brand-orange bg-white shadow-sm hover:shadow-md transition">
          <div className="w-12 h-12 bg-brand-orange rounded-lg mb-6 flex items-center justify-center text-white text-2xl">
            🔍
          </div>
          <h3 className="text-xl font-bold mb-4">Deep Explorer</h3>
          <p className="text-slate-600">
            Cari dan filter database game berdasarkan nama, publisher, atau
            konsol favoritmu secara instan.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-8 rounded-2xl border-b-4 border-brand-red bg-white shadow-sm hover:shadow-md transition">
          <div className="w-12 h-12 bg-brand-red rounded-lg mb-6 flex items-center justify-center text-white text-2xl">
            🤖
          </div>
          <h3 className="text-xl font-bold mb-4">AI Predictor</h3>
          <p className="text-slate-600">
            Gunakan model Machine Learning untuk mengestimasi potensi penjualan
            global game baru yang akan rilis.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center border-t border-slate-100 text-slate-400 text-sm">
        © 2026 Video Game Predictor Project. Built for Data Science Insight.
      </footer>
    </div>
  );
}
