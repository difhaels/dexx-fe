"use client";
import { useState, useMemo } from "react";
import Head from "next/head";

// Dummy Data untuk mensimulasikan item di keranjang
const initialCartItems = [
  {
    id: 101,
    name: "Decentralized Storage Unit (1 TB)",
    price: 50.0,
    token: "MTK",
    quantity: 1,
    seller: "Alpha Corp",
  },
  {
    id: 102,
    name: "Digital Art NFT #345",
    price: 15.75,
    token: "USDC",
    quantity: 2,
    seller: "Crypto Artist",
  },
  {
    id: 103,
    name: "Smart Contract Audit Service",
    price: 200.0,
    token: "MTK",
    quantity: 1,
    seller: "Blockchain Devs",
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [isProcessing, setIsProcessing] = useState(false);

  // Fungsi untuk menghapus item
  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Fungsi untuk mengubah kuantitas
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Menghitung Subtotal
  const subtotal = useMemo(() => {
    // Note: Dalam aplikasi nyata, ini harus memperhitungkan token yang berbeda (MTK vs USDC)
    // Untuk simulasi ini, kita hanya menjumlahkan harga total (sebagai nilai mata uang)
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cartItems]);

  // Fungsi untuk Checkout (Smart Contract Interaction Simulation)
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Keranjang belanja Anda kosong!");
      return;
    }

    setIsProcessing(true);
    console.log("Memicu Transaksi Smart Contract...");

    // Simulasi interaksi blockchain:
    setTimeout(() => {
      setIsProcessing(false);
      alert(
        "✅ Checkout Berhasil! Smart Contract telah mengunci dana Anda (Escrow)."
      );
      // Dalam aplikasi nyata, keranjang akan dikosongkan setelah transaksi berhasil on-chain
      // setCartItems([]);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Head>
        <title>Keranjang Belanja | Marketplace</title>
      </Head>

      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-4xl font-bold text-gray-800">
          Keranjang Belanja
        </h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Kolom Kiri: Daftar Item */}
          <div className="lg:col-span-2">
            <div className="rounded-lg bg-white p-6 shadow-lg">
              {/* Pesan Kunci Blockchain */}
              <p className="mb-6 text-sm text-gray-600 border-l-4 border-purple-500 pl-3 py-2 bg-purple-50">
                **Pembayaran akan menggunakan Smart Contract Escrow** untuk
                menjamin keamanan dana sampai barang diterima.
              </p>

              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="mb-4 flex items-center justify-between border-b pb-4 last:border-b-0"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Penjual: {item.seller}
                      </p>
                      <p className="text-md font-medium text-indigo-600">
                        {item.price.toFixed(2)} {item.token}
                      </p>
                    </div>

                    <div className="flex items-center space-x-4">
                      {/* Input Kuantitas */}
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity - 1)
                          }
                          className="rounded-md border p-1"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
                          className="rounded-md border p-1"
                        >
                          +
                        </button>
                      </div>

                      {/* Total Baris */}
                      <span className="w-24 text-right font-bold text-gray-900">
                        {(item.price * item.quantity).toFixed(2)} {item.token}
                      </span>

                      {/* Hapus Item */}
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-10 text-gray-500">
                  Keranjang belanja Anda kosong.
                </div>
              )}
            </div>
          </div>

          {/* Kolom Kanan: Ringkasan & Checkout */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 rounded-lg bg-white p-6 shadow-lg">
              <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                Ringkasan Pesanan
              </h3>

              <div className="space-y-3">
                <div className="flex justify-between text-lg text-gray-600">
                  <span>Subtotal:</span>
                  <span className="font-semibold">
                    {subtotal.toFixed(2)} USD*
                  </span>
                </div>

                <div className="flex justify-between text-sm text-gray-500">
                  <span>Biaya Smart Contract (Gas Fee):</span>
                  <span className="font-semibold">0.005 ETH</span>
                </div>

                <hr className="my-2" />

                <div className="flex justify-between text-xl font-bold text-gray-900">
                  <span>Total Bayar:</span>
                  <span className="text-indigo-600">Lihat Wallet</span>
                </div>

                <p className="text-xs text-gray-500 pt-2">
                  *Total dalam USD adalah estimasi. Pembayaran akan dilakukan
                  dalam token ({initialCartItems.map((i) => i.token).join(", ")}
                  ) di harga saat transaksi diproses.
                </p>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isProcessing || cartItems.length === 0}
                className={`mt-6 w-full rounded-md py-3 text-white transition duration-300 ${
                  isProcessing || cartItems.length === 0
                    ? "cursor-not-allowed bg-gray-400"
                    : "bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50"
                }`}
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center">
                    {/* Simulasi Loading Spinner */}
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Memproses Smart Contract...
                  </span>
                ) : (
                  `Checkout & Kunci Dana (${cartItems.length} Item)`
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
