"use client";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

export default function SellerRegistrationPage() {
  // Dummy State untuk simulasi data
  const [storeName, setStoreName] = useState("");
  const [walletAddress, setWalletAddress] = useState(null); // Alamat dompet yang terhubung
  const [isConnecting, setIsConnecting] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  // Fungsi Simulasi Koneksi Dompet
  const handleConnectWallet = async () => {
    setIsConnecting(true);
    // Di aplikasi nyata, ini akan memanggil window.ethereum.request({ method: 'eth_requestAccounts' });
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const dummyAddress = "0xSellerDApp...800aa3";
      setWalletAddress(dummyAddress);
      alert("Dompet berhasil terhubung!");
    } catch (error) {
      alert("Gagal koneksi. Pastikan MetaMask/Dompet terinstal.");
    } finally {
      setIsConnecting(false);
    }
  };

  // Fungsi Pendaftaran Seller
  const handleRegisterSeller = (e) => {
    e.preventDefault();

    if (!walletAddress) {
      alert("Anda harus menghubungkan dompet kripto Anda terlebih dahulu!");
      return;
    }

    // --- Simulasi Interaksi Blockchain untuk Pendaftaran ---
    console.log(
      `Mencatat Seller: ${storeName} dengan Wallet: ${walletAddress} ke Smart Contract...`
    );

    // Di aplikasi nyata, ini akan memanggil Smart Contract function (misalnya, registerSeller(storeName, walletAddress))
    setIsRegistered(true);
    alert(`🎉 Selamat! Toko "${storeName}" berhasil didaftarkan.`);

    // Setelah ini, arahkan pengguna ke Dashboard Seller
    // router.push('/seller/dashboard');
  };

  if (isRegistered) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100 p-8">
        <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-4">
            Pendaftaran Sukses!
          </h2>
          <p className="text-gray-700">
            Toko Anda, <span className="font-bold">{storeName}</span>, kini aktif.
          </p>
          <p className="text-sm text-gray-500 mt-2 mb-5">
            Identitas Anda terikat pada alamat:{" "}
            <code className="font-mono text-xs">{walletAddress}</code>
          </p>
          <Link
            href="/seller/dashboard"
            className="w-full rounded-md bg-indigo-600 p-3 text-white hover:bg-indigo-700"
          >
            Lanjutkan ke Dashboard Seller
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-8">
      <Head>
        <title>Daftar Seller | Marketplace</title>
      </Head>

      <div className="w-full max-w-lg rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
          Daftar sebagai Penjual
        </h1>

        {/* Status Koneksi Wallet (Wajib) */}
        <div className="mb-6 rounded-md border p-4">
          <h3 className="text-lg font-semibold mb-2">
            Langkah 1: Hubungkan Dompet Kripto
          </h3>
          {walletAddress ? (
            <div className="text-sm">
              <span className="text-green-600 font-medium">✅ Terhubung:</span>
              <span className="font-mono text-xs block break-all mt-1">
                {walletAddress}
              </span>
              <p className="text-xs text-gray-500 mt-2">
                Alamat ini akan digunakan untuk menerima pembayaran Escrow.
              </p>
            </div>
          ) : (
            <button
              onClick={handleConnectWallet}
              disabled={isConnecting}
              className={`w-full rounded-md p-2 text-sm font-semibold text-white transition ${
                isConnecting
                  ? "bg-gray-500"
                  : "bg-purple-600 hover:bg-purple-700"
              }`}
            >
              {isConnecting ? "Menghubungkan..." : "Hubungkan Dompet Anda"}
            </button>
          )}
        </div>

        {/* Form Pendaftaran Seller */}
        <h3 className="text-lg font-semibold mb-3">Langkah 2: Detail Toko</h3>
        <form onSubmit={handleRegisterSeller} className="space-y-4">
          <div>
            <label
              htmlFor="storeName"
              className="block text-sm font-medium text-gray-700"
            >
              Nama Toko/Brand
            </label>
            <input
              type="text"
              id="storeName"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
              required
              disabled={!walletAddress}
              className={`mt-1 block w-full rounded-md border-gray-300 p-3 shadow-sm sm:text-sm ${
                !walletAddress ? "bg-gray-100 cursor-not-allowed" : ""
              }`}
              placeholder="Contoh: Crypto Goods Official"
            />
          </div>

          <button
            type="submit"
            disabled={!walletAddress || !storeName.trim()}
            className={`w-full rounded-md p-3 text-lg font-semibold text-white transition ${
              !walletAddress || !storeName.trim()
                ? "cursor-not-allowed bg-gray-400"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            Daftar Sekarang
          </button>
        </form>
      </div>
    </div>
  );
}
