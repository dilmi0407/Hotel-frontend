"use client";
import MainLayout from "@/components/Layouts/MainLayout";
import { useEffect, useState } from "react";
import { CalendarDays, Users, BedDouble, CreditCard } from "lucide-react";

const Dashboard = () => {
  const [bookingCount, setBookingCount] = useState(0);
  const [roomCount, setRoomCount] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [customers, setCustomers] = useState(0);

  useEffect(() => {
    // Replace with real API data later
    setBookingCount(120);
    setRoomCount(40);
    setRevenue(1500000);
    setCustomers(80);
  }, []);

  return (
    <MainLayout>
      <div className="min-h-screen">
      <div className="max-w-7xl mx-auto p-6 space-y-10">
        <h1 className="text-4xl font-extrabold text-blue-900 tracking-tight">Admin Dashboard</h1>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-80">Bookings</p>
                <h2 className="text-3xl font-semibold">{bookingCount}</h2>
              </div>
              <CalendarDays className="w-10 h-10 opacity-80" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-400 to-green-600 text-white p-6 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-80">Rooms Available</p>
                <h2 className="text-3xl font-semibold">{roomCount}</h2>
              </div>
              <BedDouble className="w-10 h-10 opacity-80" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-500 to-pink-700 text-white p-6 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-80">Revenue</p>
                <h2 className="text-3xl font-semibold">LKR {revenue.toLocaleString()}</h2>
              </div>
              <CreditCard className="w-10 h-10 opacity-80" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white p-6 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-80">Customers</p>
                <h2 className="text-3xl font-semibold">{customers}</h2>
              </div>
              <Users className="w-10 h-10 opacity-80" />
            </div>
          </div>
        </div>

        {/* Recent Bookings */}
        <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Recent Bookings</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100 text-gray-700 uppercase text-xs tracking-wider border-b">
                <tr>
                  <th className="py-3 px-5">Customer</th>
                  <th className="py-3 px-5">Room Type</th>
                  <th className="py-3 px-5">Check-In</th>
                  <th className="py-3 px-5">Check-Out</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
     </div>
     </MainLayout>
  );
};

export default Dashboard;




