import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";

interface DashboardStats {
  totalBooks: number;
  totalMembers: number;
  activeCirculations: number;
  totalCirculations: number;
}

const DashboardAdmin: React.FC = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState<DashboardStats>({
    totalBooks: 0,
    totalMembers: 0,
    activeCirculations: 0,
    totalCirculations: 0
  });
  const [isLoading, setIsLoading] = useState(true);

  const fetchStats = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/dashboard-stats");
      const data = await response.json();
      setStats(data);
    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 flex-1 bg-gray-100 p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Dashboard Administrator</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            className="bg-blue-600 text-white p-6 rounded-lg shadow-lg hover:bg-blue-700 transition-colors cursor-pointer"
            onClick={() => handleNavigation("/data-buku")}
          >
            {isLoading ? (
              <div className="animate-pulse bg-gray-300 h-24 rounded-lg" />
            ) : (
              <>
                <h2 className="text-3xl font-bold mb-2">{stats.totalBooks}</h2>
                <p className="text-lg mb-2">Buku</p>
                <p className="text-sm underline">More info</p>
              </>
            )}
          </div>
          <div
            className="bg-orange-500 text-white p-6 rounded-lg shadow-lg hover:bg-orange-600 transition-colors cursor-pointer"
            onClick={() => handleNavigation("/data-anggota")}
          >
            {isLoading ? (
              <div className="animate-pulse bg-gray-300 h-24 rounded-lg" />
            ) : (
              <>
                <h2 className="text-3xl font-bold mb-2">{stats.totalMembers}</h2>
                <p className="text-lg mb-2">Anggota</p>
                <p className="text-sm underline">More info</p>
              </>
            )}
          </div>
          <div
            className="bg-green-600 text-white p-6 rounded-lg shadow-lg hover:bg-green-700 transition-colors cursor-pointer"
            onClick={() => handleNavigation("/sirkulasi")}
          >
            {isLoading ? (
              <div className="animate-pulse bg-gray-300 h-24 rounded-lg" />
            ) : (
              <>
                <h2 className="text-3xl font-bold mb-2">{stats.activeCirculations}</h2>
                <p className="text-lg mb-2">Sirkulasi yang sedang berjalan</p>
                <p className="text-sm underline">More info</p>
              </>
            )}
          </div>
          <div
            className="bg-red-600 text-white p-6 rounded-lg shadow-lg hover:bg-red-700 transition-colors cursor-pointer"
            onClick={() => handleNavigation("/laporan")}
          >
            {isLoading ? (
              <div className="animate-pulse bg-gray-300 h-24 rounded-lg" />
            ) : (
              <>
                <h2 className="text-3xl font-bold mb-2">{stats.totalCirculations}</h2>
                <p className="text-lg mb-2">Laporan Sirkulasi</p>
                <p className="text-sm underline">More info</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
