"use client";

import Head from "next/head";
import { useState } from "react";
import {
  FaBox,
  FaWallet,
  FaChartBar,
} from "react-icons/fa";
import Sidebar from "../../components/Sidebar";
import Link from "next/link";

// Data statis untuk contoh tampilan
const dashboardData = {
  walletBalance: "12.534 ETH",
  totalSold: 124,
  displayItems: 35,
};

export default function SellerDashboard() {
  const [activeTab, setActiveTab] = useState("home");
  const [activeTimeFilter, setActiveTimeFilter] = useState("Bulan");

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Head>
        <title>Seller Dashboard | MyMarketplace</title>
      </Head>

      {/* Sidebar */}
      <Sidebar x="home" edit={1}/>

      {/* Main Content */}
      <main className="ml-64 flex-1 p-8">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Selamat Datang, Seller!
          </h1>
          <p className="text-gray-600 mt-2">Pantau performa tokomu di sini.</p>
        </header>

        {/* Dashboard Home Content */}
        {activeTab === "home" && (
          <div>
            {/* Metriks */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href={"/seller/dashboard/balance"} className="bg-white rounded-lg shadow p-6 transform transition-transform duration-200 hover:scale-105 cursor-pointer">
                <div className="flex items-center mb-2">
                  <FaWallet className="text-3xl text-green-500 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Saldo MetaMask
                    </h3>
                    <p className="text-gray-500 text-sm">Jumlah di dompet</p>
                  </div>
                </div>
                <p className="text-3xl font-extrabold text-gray-900 mt-4">
                  {dashboardData.walletBalance}
                </p>
              </Link>

              <Link href={"/seller/products/sold"} className="bg-white rounded-lg shadow p-6 transform transition-transform duration-200 hover:scale-105 cursor-pointer">
                <div className="flex items-center mb-2">
                  <FaChartBar className="text-3xl text-yellow-500 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Barang Terjual
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Total produk terjual
                    </p>
                  </div>
                </div>
                <p className="text-3xl font-extrabold text-gray-900 mt-4">
                  {dashboardData.totalSold}
                </p>
              </Link>

              <Link href="/seller/products/display" className="bg-white rounded-lg shadow p-6 transform transition-transform duration-200 hover:scale-105 cursor-pointer">
                <div className="flex items-center mb-2">
                  <FaBox className="text-3xl text-blue-500 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Barang Didisplay
                    </h3>
                    <p className="text-gray-500 text-sm">Produk yang aktif</p>
                  </div>
                </div>
                <p className="text-3xl font-extrabold text-gray-900 mt-4">
                  {dashboardData.displayItems}
                </p>
              </Link>
            </div>
          </div>
        )}

        {/* Placeholder untuk halaman lain (Orders dan Products) */}
        {activeTab !== "home" && (
          <div className="mt-8 text-center text-gray-500">
            <p>
              Konten untuk halaman{" "}
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} akan
              dibuat di sini.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
