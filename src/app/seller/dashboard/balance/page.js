// pages/seller/balance.js
"use client";
import Sidebar from "@/app/components/Sidebar";
import Head from "next/head"; 
import { FaWallet, FaArrowUp, FaArrowDown } from "react-icons/fa";

// Data statis untuk simulasi
const currentBalance = "Rp 14.500.000";

const transactionHistory = [
  {
    id: 1,
    type: "credit",
    description: "Penjualan Kemeja Katun Pria",
    amount: 120000,
    date: "2025-08-25",
    time: "14:30",
  },
  {
    id: 2,
    type: "debit",
    description: "Penarikan Dana ke Bank BCA ****123",
    amount: 5000000,
    date: "2025-08-24",
    time: "10:00",
  },
  {
    id: 3,
    type: "credit",
    description: "Penjualan Sepatu Lari Sport",
    amount: 450000,
    date: "2025-08-23",
    time: "09:15",
  },
  {
    id: 4,
    type: "debit",
    description: "Penarikan Dana ke Bank BCA ****123",
    amount: 8000000,
    date: "2025-08-22",
    time: "18:45",
  },
  {
    id: 5,
    type: "credit",
    description: "Penjualan Air Fryer Multifungsi",
    amount: 850000,
    date: "2025-08-21",
    time: "11:00",
  },
];

const formatRupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};

export default function SellerBalance() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Head>
        <title>Saldo | Seller Dashboard</title>
      </Head>

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8 ml-64">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900">Saldo</h1>
          <p className="text-gray-600 mt-2">
            Pantau saldo dan riwayat transaksi Anda di sini.
          </p>
        </header>

        {/* Kartu Saldo Utama */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Saldo Saat Ini</p>
            <h2 className="text-4xl font-extrabold text-green-600 mt-2">
              {currentBalance}
            </h2>
          </div>
          <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition-colors">
            Tarik Saldo
          </button>
        </div>

        {/* Rincian Transaksi */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Rincian Transaksi
          </h3>
          <div className="space-y-4">
            {transactionHistory.map((transaction) => (
              <div
                key={transaction.id}
                className={`flex justify-between items-center rounded-lg p-4 shadow-sm ${
                  transaction.type === "credit" ? "bg-green-100" : "bg-red-100"
                }`}
              >
                <div className="flex items-center">
                  <div
                    className={`p-2 rounded-full mr-4 ${
                      transaction.type === "credit"
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {transaction.type === "credit" ? (
                      <FaArrowUp />
                    ) : (
                      <FaArrowDown />
                    )}
                  </div>
                  <div>
                    <p
                      className={`font-semibold ${
                        transaction.type === "credit"
                          ? "text-green-800"
                          : "text-red-800"
                      }`}
                    >
                      {transaction.description}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {new Date(transaction.date).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}{" "}
                      | {transaction.time} WIB
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className={`font-bold text-lg ${
                      transaction.type === "credit"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {transaction.type === "credit" ? "+" : "-"}{" "}
                    {formatRupiah(transaction.amount)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
