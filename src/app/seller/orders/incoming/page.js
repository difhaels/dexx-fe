"use client";
import Head from "next/head";
import Sidebar from "@/app/components/Sidebar";
import { useState, useMemo } from "react";
import {
  FaBox,
  FaUser,
  FaCity,
  FaShippingFast,
  FaStickyNote,
  FaCommentDots,
  FaCheck,
  FaTimes,
  FaThumbtack,
  FaArrowCircleDown,
} from "react-icons/fa";
import Link from "next/link";

// Data statis untuk simulasi orderan masuk
const initialOrders = [
  {
    id: 1,
    productName: "Rak Dinding Minimalis",
    buyerName: "Rina Hermawan",
    quantity: 2,
    destinationCity: "Bekasi",
    shippingService: "JNE Reguler",
    notes: "Tolong packing yang aman ya kak.",
    isPinned: false,
  },
  {
    id: 2,
    productName: "Beras Premium 5kg",
    buyerName: "Ahmad Sudrajat",
    quantity: 1,
    destinationCity: "Jakarta Pusat",
    shippingService: "GrabExpress Sameday",
    notes: null,
    isPinned: false,
  },
  {
    id: 3,
    productName: "Set Panci Anti Lengket",
    buyerName: "Siti Fatimah",
    quantity: 1,
    destinationCity: "Tangerang",
    shippingService: "Gosend Instant",
    notes: null,
    isPinned: true, // Contoh orderan yang dipin
  },
];

export default function IncomingOrdersPage() {
  const [orders, setOrders] = useState(initialOrders);

  // Mengurutkan pesanan: yang dipin di atas, sisanya di bawah
  const sortedOrders = useMemo(() => {
    return [...orders].sort((a, b) => b.isPinned - a.isPinned);
  }, [orders]);

  const togglePin = (id) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, isPinned: !order.isPinned } : order
      )
    );
  };

  const handleAccept = (id) => {
    console.log(`Pesanan ID ${id} diterima.`);
    alert("Pesanan berhasil diterima!");
    // Tambahkan logika untuk menghapus pesanan dari daftar
  };

  const handleReject = (id) => {
    console.log(`Pesanan ID ${id} ditolak.`);
    alert("Pesanan berhasil ditolak.");
    // Tambahkan logika untuk menghapus pesanan dari daftar
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Head>
        <title>Orderan Masuk | Seller Dashboard</title>
      </Head>

      <Sidebar />

      <main className="flex-1 p-8 ml-64">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Orderan Masuk
          </h1>
          <p className="text-gray-600 mt-2">
            Daftar pesanan baru yang menunggu konfirmasi Anda.
          </p>
        </header>

        <Link href="/seller/orders">
          <span className="mb-6 flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors font-semibold">
            <FaArrowCircleDown />
            <span>Kembali ke Halaman Orders</span>
          </span>
        </Link>

        {sortedOrders.length > 0 ? (
          <div className="space-y-6">
            {sortedOrders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-lg shadow-md p-6 relative"
              >
                {/* Pin Icon */}
                <button
                  onClick={() => togglePin(order.id)}
                  className={`absolute top-4 right-4 text-2xl transition-colors ${
                    order.isPinned
                      ? "text-blue-500"
                      : "text-gray-300 hover:text-blue-400"
                  }`}
                  title={order.isPinned ? "Lepas Pin" : "Pin ke Atas"}
                >
                  <FaThumbtack />
                </button>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {order.productName}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-3">
                    <FaUser className="text-gray-400" />
                    <span>
                      Nama Pembeli:{" "}
                      <span className="font-semibold">{order.buyerName}</span>
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaBox className="text-gray-400" />
                    <span>
                      Jumlah:{" "}
                      <span className="font-semibold">{order.quantity}</span>
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaCity className="text-gray-400" />
                    <span>
                      Kota Tujuan:{" "}
                      <span className="font-semibold">
                        {order.destinationCity}
                      </span>
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaShippingFast className="text-gray-400" />
                    <span>
                      Jasa Kirim:{" "}
                      <span className="font-semibold">
                        {order.shippingService}
                      </span>
                    </span>
                  </div>
                </div>

                {order.notes && (
                  <div className="mt-4 p-4 rounded-md bg-gray-50 border border-gray-200">
                    <div className="flex items-center space-x-2 text-gray-700 font-semibold mb-1">
                      <FaStickyNote />
                      <span>Catatan Pembeli</span>
                    </div>
                    <p className="text-sm text-gray-600 italic">
                      {order.notes}
                    </p>
                  </div>
                )}

                <div className="mt-6 border-t pt-4 flex items-center justify-between">
                  <Link href={`/seller/chat/${order.buyerName}`}>
                    <span className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors font-semibold">
                      <FaCommentDots className="text-lg" />
                      <span>Chat Pembeli</span>
                    </span>
                  </Link>

                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleAccept(order.id)}
                      className="flex items-center space-x-2 px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition-colors"
                    >
                      <FaCheck />
                      <span>Terima</span>
                    </button>
                    <button
                      onClick={() => handleReject(order.id)}
                      className="flex items-center space-x-2 px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors"
                    >
                      <FaTimes />
                      <span>Tolak</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 text-gray-500">
            <p>Tidak ada orderan masuk saat ini.</p>
          </div>
        )}
      </main>
    </div>
  );
}
