"use client";
import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import {
  FaWallet,
  FaArrowRight,
  FaFingerprint,
  FaShieldAlt,
  FaEthereum,
} from "react-icons/fa";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // FUNGSI UTAMA: Login Web3 via MetaMask
  const handleWeb3Login = async () => {
    setLoading(true);

    // 1. Cek apakah MetaMask terinstall
    if (typeof window.ethereum !== "undefined") {
      try {
        // 2. Minta akses akun (Metode eth_requestAccounts)
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        const walletAddress = accounts[0];
        console.log("Connected to DiecastChain with:", walletAddress);

        // 3. Jika berhasil, arahkan ke Marketplace
        // Di sini lu bisa tambahin logika validasi ke Smart Contract jika perlu
        router.push("/marketplace");
      } catch (error) {
        console.error("User rejected connection", error);
        alert("Koneksi dibatalkan oleh pengguna.");
      }
    } else {
      alert(
        "MetaMask tidak terdeteksi! Harap install ekstensi MetaMask di browser lu.",
      );
      window.open("https://metamask.io/download/", "_blank");
    }
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#1A0533] p-6 relative overflow-hidden">
      <Head>
        <title>Login | DiecastChain Network</title>
      </Head>

      {/* Ornamen Background Glow - Tetap Konsisten */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-[#E91E63] opacity-10 blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#FFB300] opacity-5 blur-[120px]"></div>

      <div className="relative z-10 w-full max-w-md rounded-[40px] bg-[#2D0B5A] p-10 shadow-2xl border border-white/5">
        <header className="mb-12 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#E91E63] to-[#2D0B5A] text-white shadow-lg shadow-[#E91E63]/20">
            <FaFingerprint className="text-4xl animate-pulse" />
          </div>
          <h1 className="text-3xl font-black italic uppercase tracking-tighter text-white leading-none">
            Collector <span className="text-[#FFB300]">Gate</span>
          </h1>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mt-3">
            Decentralized Identity Protocol
          </p>
        </header>

        <div className="space-y-8">
          {/* Card Info Login Web3 */}
          <div className="bg-[#1A0533] rounded-2xl p-6 border border-white/5 text-center">
            <div className="flex justify-center mb-4 space-x-2">
              <FaShieldAlt className="text-[#E91E63] text-xl" />
              <FaEthereum className="text-[#FFB300] text-xl" />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed italic">
              "Sistem ini menggunakan autentikasi blockchain. Gunakan dompet
              MetaMask Anda untuk mengakses jaringan P2P."
            </p>
          </div>

          {/* Tombol Login Utama: Connect Wallet */}
          <button
            onClick={handleWeb3Login}
            disabled={loading}
            className="group w-full rounded-2xl bg-[#E91E63] p-5 text-xs font-black uppercase tracking-[0.3em] text-white transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-[#E91E63]/20 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-wait"
          >
            <FaWallet className="text-lg" />
            <span>{loading ? "Synchronizing..." : "Connect MetaMask"}</span>
            {!loading && (
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            )}
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-col items-center space-y-6">
            <p className="text-[9px] font-black text-slate-600 uppercase tracking-[0.2em]">
              Secured by DiecastChain Smart Contract
            </p>

            {/* Menggunakan Icon sebagai ganti Image yang error */}
            <div className="flex items-center space-x-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center space-x-2">
                {/* Logo MetaMask Manual (Sederhana & Stabil) */}
                <svg viewBox="0 0 318.6 318.6" className="h-6 w-6">
                  <path
                    fill="#E2761B"
                    d="M286.6 19.3l-130.3 44.1 14.5 16.2 115.8-60.3z"
                  />
                  <path
                    fill="#E4761B"
                    d="M32 19.3l130.3 44.1-14.5 16.2-115.8-60.3z"
                  />
                  <path
                    fill="#D7C1B3"
                    d="M267.3 153.5l-20.4-52.2-94.3 31 114.7 21.2z"
                  />
                  <path
                    fill="#D7C1B3"
                    d="M51.3 153.5l20.4-52.2 94.3 31-114.7 21.2z"
                  />
                  <path
                    fill="#233447"
                    d="M159.3 188.5l-48 48.8 13.5 14.2 34.5-35.1 34.5 35.1 13.5-14.2z"
                  />
                </svg>
                <span className="text-[10px] font-black text-white/50 tracking-tighter">
                  METAMASK
                </span>
              </div>

              <div className="h-4 w-px bg-white/10"></div>

              <div className="flex items-center space-x-2 text-white/50">
                <FaEthereum className="text-xl" />
                <span className="text-[10px] font-black tracking-tighter">
                  ETHEREUM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
