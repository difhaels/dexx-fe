"use client";
import { useState } from "react";
import Head from "next/head";

// Dummy Data untuk mensimulasikan riwayat pembelian
const dummyHistory = [
  {
    id: 1,
    productName: "NFT Art - 'Sunset'",
    amount: 0.5,
    token: "ETH",
    status: "Selesai",
    date: "2025-11-28",
    txHash:
      "0xab1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c",
  },
  {
    id: 2,
    productName: "Decentralized Hosting Plan",
    amount: 150,
    token: "MTK",
    status: "Diproses",
    date: "2025-12-05",
    txHash:
      "0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b",
  },
  {
    id: 3,
    productName: "Wireless Earbuds",
    amount: 25.75,
    token: "USDC",
    status: "Gagal (Rollback)",
    date: "2025-12-08",
    txHash:
      "0xdeadbeef1234567890abcdef1234567890abcdef1234567890abcdef12345678",
  },
];

export default function HistoryPage() {
  const [purchaseHistory, setPurchaseHistory] = useState(dummyHistory);

  // Fungsi utilitas untuk menentukan warna badge status
  const getStatusBadge = (status) => {
    switch (status) {
      case "Selesai":
        return "bg-green-100 text-green-800";
      case "Diproses":
        return "bg-yellow-100 text-yellow-800";
      case "Gagal (Rollback)":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Head>
        <title>Riwayat Pembelian | Marketplace</title>
      </Head>

      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-4xl font-bold text-gray-800">
          Riwayat Pembelian
        </h1>

        <div className="rounded-lg bg-white p-6 shadow-lg">
          <p className="mb-4 text-sm text-gray-600 border-l-4 border-indigo-500 pl-3 py-1 bg-indigo-50">
            Semua transaksi pembelian dijamin oleh **Smart Contract** dan
            dicatat di *blockchain*.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    ID Transaksi
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Produk
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Jumlah
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Tanggal
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Tx Hash (Blockchain)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {purchaseHistory.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                      #{item.id}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                      {item.productName}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                      <span className="font-semibold">{item.amount}</span>{" "}
                      {item.token}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      {item.date}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold leading-5 ${getStatusBadge(
                          item.status
                        )}`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {/* Tautan ke Blockchain Explorer (dummy link) */}
                      <a
                        href={`https://explorer.example.com/tx/${item.txHash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-indigo-600 hover:text-indigo-800 hover:underline"
                        title={item.txHash}
                      >
                        {item.txHash.substring(0, 8)}...
                        {item.txHash.substring(item.txHash.length - 8)}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {purchaseHistory.length === 0 && (
            <div className="py-10 text-center text-gray-500">
              Belum ada riwayat pembelian ditemukan.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
