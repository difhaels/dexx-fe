"use client";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
// Importasi icon (misalnya menggunakan react-icons jika sudah terinstal)
// import { FaWallet, FaShoppingCart, FaHistory, FaUserCircle } from 'react-icons/fa';

export default function UserProfile() {
  // Dummy State untuk simulasi data pengguna
  const [isWalletConnected, setIsWalletConnected] = useState(true);
  const [walletAddress, setWalletAddress] = useState("0xABC123...XYZ789");
  const [username, setUsername] = useState("Marketplace_User");
  const [nativeTokenBalance, setNativeTokenBalance] = useState("540.25");
  const [profileBio, setProfileBio] = useState(
    "Pengguna setia DApp Marketplace."
  );

  // Fungsi Dummy untuk koneksi/diskoneksi dompet
  const handleConnectWallet = () => {
    setIsWalletConnected(true);
    setWalletAddress("0xABC123...XYZ789");
    alert("Dompet berhasil terhubung!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Head>
        <title>Profil Pengguna | Marketplace</title>
      </Head>

      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold text-gray-800">
          Profil Pengguna
        </h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Kolom Kiri: Informasi Dasar & Wallet */}
          <div className="md:col-span-1">
            <div className="rounded-lg bg-white p-6 shadow-lg">
              {/* Foto Profil */}
              <div className="mb-4 flex flex-col items-center">
                {/* <FaUserCircle className="h-20 w-20 text-gray-400" /> */}
                <div className="h-20 w-20 rounded-full bg-indigo-200 flex items-center justify-center text-4xl text-indigo-800">
                  U
                </div>
                <h2 className="mt-4 text-xl font-semibold text-gray-800">
                  {username}
                </h2>
                <p className="text-sm text-gray-500">{profileBio}</p>
              </div>

              <hr className="my-4" />

              {/* Status Wallet */}
              <h3 className="mb-3 text-lg font-medium text-gray-700">
                Identitas Blockchain
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">
                    Status Wallet:
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      isWalletConnected
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {isWalletConnected ? "Terkoneksi" : "Belum Terkoneksi"}
                  </span>
                </div>

                <div className="text-sm break-words">
                  <span className="block text-gray-600 font-medium">
                    Alamat Wallet:
                  </span>
                  <span className="text-gray-900 font-mono">
                    {isWalletConnected ? walletAddress : "N/A"}
                  </span>
                </div>

                {!isWalletConnected && (
                  <button
                    onClick={handleConnectWallet}
                    className="mt-2 w-full rounded-md bg-indigo-500 py-1.5 text-sm text-white hover:bg-indigo-600"
                  >
                    Hubungkan Dompet
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Detail Keuangan & Aktivitas */}
          <div className="md:col-span-2">
            {/* Bagian Keuangan */}
            <div className="mb-6 rounded-lg bg-white p-6 shadow-lg">
              <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                Keuangan Saya
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-lg text-gray-600">
                  Saldo Token (MTK):
                </span>
                <span className="text-3xl font-bold text-indigo-600">
                  {nativeTokenBalance} MTK
                </span>
              </div>
              <div className="mt-4">
                {/* Tautan ke Blockchain Explorer */}
                <span
                  href={`https://explorer.example.com/address/${walletAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-indigo-500 hover:text-indigo-700 hover:underline"
                >
                  Lihat Riwayat Transaksi di Blockchain Explorer
                </span>
              </div>
            </div>

            {/* Bagian Aktivitas Marketplace */}
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                Aktivitas
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {/* Fitur Keranjang Belanja (No. 7) */}
                <Link href="/cart">
                  <span className="flex flex-col items-center justify-center rounded-lg bg-purple-50 p-6 text-center shadow-md transition duration-300 hover:bg-purple-100 hover:shadow-lg">
                    {/* <FaShoppingCart className="h-8 w-8 text-purple-600" /> */}
                    <span className="text-3xl">🛒</span>
                    <span className="mt-2 text-lg font-medium text-purple-800">
                      Keranjang Belanja
                    </span>
                    <span className="text-sm text-gray-500">
                      ({/* Hitungan item dari state */} 3 item)
                    </span>
                  </span>
                </Link>

                {/* Fitur Riwayat Pembelian Saya (No. 8) */}
                <Link href="/history">
                  <span className="flex flex-col items-center justify-center rounded-lg bg-blue-50 p-6 text-center shadow-md transition duration-300 hover:bg-blue-100 hover:shadow-lg">
                    {/* <FaHistory className="h-8 w-8 text-blue-600" /> */}
                    <span className="text-3xl">🧾</span>
                    <span className="mt-2 text-lg font-medium text-blue-800">
                      Riwayat Pembelian
                    </span>
                    <span className="text-sm text-gray-500">
                      Lihat pesanan yang sudah selesai
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
