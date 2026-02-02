"use client";
import { useState } from 'react';
import Link from 'next/link';
import { LayoutDashboard, Search, BrainCircuit, Home, ChevronLeft, Menu } from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { name: 'Home', href: '/', icon: <Home size={20} /> },
    { name: 'Dashboard', href: '/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Explorer', href: '/explorer', icon: <Search size={20} /> },
    { name: 'Predictor', href: '/predictor', icon: <BrainCircuit size={20} /> },
  ];

  return (
    <aside className={`${isOpen ? 'w-64' : 'w-20'} bg-slate-50 border-r border-slate-200 h-screen sticky top-0 flex flex-col transition-all duration-300 ease-in-out`}>
      {/* Logo Area */}
      <div className="p-6 text-2xl font-bold text-brand-blue border-b border-slate-200 overflow-hidden whitespace-nowrap">
        {isOpen ? <span>VGP<span className="text-brand-red">.</span></span> : <span className="text-brand-red">.</span>}
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <Link 
            key={item.name} 
            href={item.href}
            className="flex items-center gap-4 px-3 py-3 text-slate-600 hover:bg-brand-blue hover:text-white rounded-xl transition-all group"
          >
            <div className="min-w-[20px]">{item.icon}</div>
            {isOpen && <span className="font-medium overflow-hidden whitespace-nowrap">{item.name}</span>}
          </Link>
        ))}
      </nav>

      {/* Toggle Button di Pojok Kiri Bawah */}
      <div className="p-4 border-t border-slate-200">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-center p-2 rounded-lg hover:bg-slate-200 text-slate-500 transition-colors"
        >
          {isOpen ? <ChevronLeft size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </aside>
  );
}