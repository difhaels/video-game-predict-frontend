"use client";
import { useState, useEffect } from 'react';

export default function Explorer() {
  const [allGames, setAllGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Pastikan path-nya bener: /data/games_master.json
    fetch('/data/games_master.json')
      .then(res => {
        if (!res.ok) throw new Error("Gagal load JSON");
        return res.json();
      })
      .then(data => {
        setAllGames(data);
        setLoading(false);
      })
      .catch(err => console.error("Error:", err));
  }, []);

  // Filter langsung dihitung di sini, lebih aman & anti-error line 38
  const filteredGames = allGames
    .filter(game => 
      game.Name && game.Name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, 50); // Batasi 50 baris biar browser gak nangis

  if (loading) return <div className="p-10 font-bold text-brand-blue">Loading 16.000+ data game...</div>;

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-2 text-slate-800">Deep Explorer</h1>
      <p className="text-slate-500 mb-8">Cari data spesifik dari database global.</p>
      
      {/* Search Input */}
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Ketik nama game (misal: Pokemon, GTA, Mario)..."
          className="w-full p-4 pl-12 bg-white border border-slate-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-brand-blue outline-none transition-all"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span className="absolute left-4 top-4.5 text-slate-400">🔍</span>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 text-slate-500 uppercase text-xs font-bold border-b border-slate-200">
              <tr>
                <th className="p-4">Rank</th>
                <th className="p-4">Game Name</th>
                <th className="p-4">Platform</th>
                <th className="p-4">Genre</th>
                <th className="p-4 text-right">Global Sales</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredGames.length > 0 ? (
                filteredGames.map((game, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors group">
                    <td className="p-4 text-slate-400 font-mono">#{game.Rank}</td>
                    <td className="p-4 font-bold text-slate-700 group-hover:text-brand-blue transition">
                      {game.Name}
                    </td>
                    <td className="p-4">
                      <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-xs font-bold">
                        {game.Platform}
                      </span>
                    </td>
                    <td className="p-4 text-slate-600">{game.Genre}</td>
                    <td className="p-4 text-right font-bold text-brand-red">
                      {game.Global_Sales}M
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="p-10 text-center text-slate-400 italic">
                    Game tidak ditemukan, coba kata kunci lain.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}