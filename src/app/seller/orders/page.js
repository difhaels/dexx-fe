"use client";
import Head from "next/head";
import { useState } from "react";
import {
  FaArrowCircleDown,
  FaCheckCircle,
  FaTruck,
  FaClock,
  FaClipboardCheck,
  FaSort,
  FaSortAmountDown,
  FaSortAmountUp,
} from "react-icons/fa";
import Link from "next/link";
import Sidebar from "../../components/Sidebar";

// Data statis untuk contoh tampilan
const allOrders = [
  {
    id: 1,
    product: "Laptop Gaming ROG",
    status: "Selesai",
    date: "2025-08-25",
    buyer: "Pembeli 1",
    amount: 25000000,
  },
  {
    id: 2,
    product: "Headset Gaming",
    status: "Sedang Kirim",
    date: "2025-08-24",
    buyer: "Pembeli 2",
    amount: 650000,
  },
  {
    id: 3,
    product: "Air Fryer Multifungsi",
    status: "Menunggu Konfirmasi Pembeli",
    date: "2025-08-24",
    buyer: "Pembeli 3",
    amount: 850000,
  },
  {
    id: 4,
    product: "Kemeja Katun Pria",
    status: "Selesai",
    date: "2025-08-23",
    buyer: "Pembeli 4",
    amount: 120000,
  },
  {
    id: 5,
    product: "Sepatu Lari Sport",
    status: "Sedang Kirim",
    date: "2025-08-22",
    buyer: "Pembeli 5",
    amount: 450000,
  },
];

const formatRupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};

// Logika penyaringan dan pengurutan data
const incomingOrdersCount = allOrders.filter(
  (order) => order.status === "Menunggu Konfirmasi Pembeli"
).length;

const acceptedOrdersCount = allOrders.filter(
  (order) => order.status !== "Menunggu Konfirmasi Pembeli"
).length;


export default function SellerOrders() {
  const [activeSidebarTab] = useState("orders");
  const [sortBy, setSortBy] = useState(null); // 'date_newest', 'date_oldest', 'price_cheapest', 'price_most_expensive'

  const getSortedOrders = () => {
    let ordersToShow = [...allOrders];

    if (sortBy === "date_newest") {
      ordersToShow.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === "date_oldest") {
      ordersToShow.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortBy === "price_cheapest") {
      ordersToShow.sort((a, b) => a.amount - b.amount);
    } else if (sortBy === "price_most_expensive") {
      ordersToShow.sort((a, b) => b.amount - a.amount);
    }
    return ordersToShow;
  };

  const sortedOrders = getSortedOrders();

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Head>
        <title>Orders | Seller Dashboard</title>
      </Head>

      {/* Sidebar */}
      <Sidebar x="orders"/>

      {/* Main Content */}
      <main className="ml-64 flex-1 p-8">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900">Orders</h1>
          <p className="text-gray-600 mt-2">Kelola semua pesanan Anda di sini.</p>
        </header>

        {/* Tombol Navigasi ke Halaman Lain */}
        <div className="flex space-x-4 mb-8">
          <Link href="/seller/orders/incoming">
            <span
              className={`relative flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors font-semibold bg-blue-600 text-white hover:bg-blue-700`}
            >
              <FaArrowCircleDown className="text-lg" />
              <span>Orderan Masuk</span>
              {incomingOrdersCount > 0 && (
                <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {incomingOrdersCount}
                </span>
              )}
            </span>
          </Link>
          <Link href="/seller/orders/accepted">
            <span
              className={`relative flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors font-semibold bg-green-600 text-white hover:bg-green-700`}
            >
              <FaCheckCircle className="text-lg" />
              <span>Orderan Diterima</span>
              {acceptedOrdersCount > 0 && (
                <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {acceptedOrdersCount}
                </span>
              )}
            </span>
          </Link>
        </div>

        {/* Kontrol Sortir */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Transaksi</h2>
          <div className="relative inline-block text-left">
            <div className="group">
              <button
                type="button"
                className="inline-flex justify-center items-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
              >
                <FaSort className="mr-2" />
                Sortir
              </button>
              <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                <div className="py-1">
                  <button onClick={() => setSortBy('date_newest')} className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <FaSortAmountDown className="mr-2" /> Tanggal Terbaru
                  </button>
                  <button onClick={() => setSortBy('date_oldest')} className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <FaSortAmountUp className="mr-2" /> Tanggal Terlama
                  </button>
                  <button onClick={() => setSortBy('price_cheapest')} className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <FaSortAmountUp className="mr-2" /> Harga Termurah
                  </button>
                  <button onClick={() => setSortBy('price_most_expensive')} className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <FaSortAmountDown className="mr-2" /> Harga Termahal
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Daftar Transaksi */}
        <div>
          {sortedOrders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-lg shadow-sm p-4 mb-4 flex items-center justify-between"
            >
              <div className="flex-1">
                <p className="text-lg font-semibold text-gray-900">{order.product}</p>
                <p className="text-sm text-gray-500">
                  Oleh: {order.buyer} - {new Date(order.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                </p>
                <p className="text-xl font-extrabold text-indigo-600 mt-2">
                  {formatRupiah(order.amount)}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                {order.status === "Selesai" && (
                  <FaClipboardCheck className="text-green-500 text-2xl" />
                )}
                {order.status === "Sedang Kirim" && (
                  <FaTruck className="text-yellow-500 text-2xl" />
                )}
                {order.status === "Menunggu Konfirmasi Pembeli" && (
                  <FaClock className="text-blue-500 text-2xl" />
                )}
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    order.status === "Selesai"
                      ? "bg-green-200 text-green-800"
                      : order.status === "Sedang Kirim"
                      ? "bg-yellow-200 text-yellow-800"
                      : "bg-blue-200 text-blue-800"
                  }`}
                >
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}