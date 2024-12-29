import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Book, Users, Repeat, History, FileText, Settings, LogOut } from 'lucide-react';

const Sidebar: React.FC = () => {
  const location = useLocation();
  
  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-700 text-black fixed h-full flex flex-col">
        {/* Logo Header */}

        {/* User Profile */}
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
              <img 
                src="" 
                alt="Admin Avatar"
                className="w-8 h-8 object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-black">Chandra</h3>
              <span className="text-sm px-2 py-0.5 bg-orange-500 text-white rounded">
                Administrator
              </span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto">
          <div className="px-3 py-2 text-sm text-gray-400 uppercase">
            MAIN NAVIGATION
          </div>
          <ul>
            <li>
              <Link 
                to="/dashboard" 
                className={`flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-green-600 hover:text-white transition-colors ${
                  location.pathname === '/dashboard' ? 'bg-green-600 text-white' : ''
                }`}
              >
                <LayoutDashboard className="w-5 h-5" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link 
                to="/data-buku" 
                className={`flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-green-600 hover:text-white transition-colors ${
                  location.pathname === '/data-buku' ? 'bg-green-600 text-white' : ''
                }`}
              >
                <Book className="w-5 h-5" />
                Kelola Data
              </Link>
            </li>
            <li>
              <Link 
                to="/data-anggota" 
                className={`flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-green-600 hover:text-white transition-colors ${
                  location.pathname === '/data-anggota' ? 'bg-green-600 text-white' : ''
                }`}
              >
                <Users className="w-5 h-5" />
                Data Anggota
              </Link>
            </li>
            <li>
              <Link 
                to="/sirkulasi" 
                className={`flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-green-600 hover:text-white transition-colors ${
                  location.pathname === '/sirkulasi' ? 'bg-green-600 text-white' : ''
                }`}
              >
                <Repeat className="w-5 h-5" />
                Sirkulasi
              </Link>
            </li>
            <li>
              <Link 
                to="/log-data" 
                className={`flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-green-600 hover:text-white transition-colors ${
                  location.pathname === '/log-data' ? 'bg-green-600 text-white' : ''
                }`}
              >
                <History className="w-5 h-5" />
                Log Data
              </Link>
            </li>
            <li>
              <Link 
                to="/laporan" 
                className={`flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-green-600 hover:text-white transition-colors ${
                  location.pathname === '/laporan' ? 'bg-green-600 text-white' : ''
                }`}
              >
                <FileText className="w-5 h-5" />
                Laporan
              </Link>
            </li>
          </ul>

          <div className="px-3 py-2 text-sm text-gray-400 uppercase mt-4">
            SETTING
          </div>
          <ul>
            <li>
              <Link 
                to="/pengguna-sistem" 
                className={`flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-green-600 hover:text-white transition-colors ${
                  location.pathname === '/pengguna-sistem' ? 'bg-green-600 text-white' : ''
                }`}
              >
                <Settings className="w-5 h-5" />
                Pengguna Sistem
              </Link>
            </li>
            <li>
              <Link 
                to="/logout" 
                className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-green-600 hover:text-white transition-colors"
              >
                <LogOut className="w-5 h-5" />
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

