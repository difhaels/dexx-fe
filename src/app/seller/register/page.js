"use client";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { FaEthereum, FaRocket, FaStore, FaCheckCircle, FaExclamationTriangle, FaShieldAlt } from "react-icons/fa";

export default function SellerRegistrationPage() {
  const [storeName, setStoreName] = useState("");
  const [walletAddress, setWalletAddress] = useState(null); 
  const [isConnecting, setIsConnecting] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  // Fungsi Simulasi Koneksi Dompet
  const handleConnectWallet = async () => {
    setIsConnecting(true);
    try {
      // Simulasi delay interaksi Web3
      await new Promise((resolve) => setTimeout(resolve, 1200));
      const dummyAddress = "0x71C83486E2B15FbDB2315678afecb800aa3";
      setWalletAddress(dummyAddress);
    } catch (error) {
      alert("Koneksi gagal. Pastikan wallet Anda dalam mode Mainnet/Localhost.");
    } finally {
      setIsConnecting(false);
    }
  };

  // Fungsi Pendaftaran Seller
  const handleRegisterSeller = (e) => {
    e.preventDefault();
    if (!walletAddress) return;

    // Simulasi penulisan metadata ke blockchain
    console.log(`Smart Contract Call: registerNode("${storeName}", "${walletAddress}")`);
    setIsRegistered(true);
  };

  // Tampilan Sukses (Success State)
  if (isRegistered) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#1A0533] p-8 overflow-hidden relative">
        <div className="absolute h-96 w-96 rounded-full bg-green-500 opacity-10 blur-[120px]"></div>
        <div className="relative z-10 w-full max-w-md rounded-[40px] bg-[#2D0B5A] p-10 shadow-2xl border border-green-500/20 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-green-500/20 text-green-400">
            <FaCheckCircle className="text-4xl" />
          </div>
          <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-2">
            Node <span className="text-green-400">Deployed!</span>
          </h2>
          <p className="text-slate-400 text-sm mb-6 uppercase tracking-widest font-bold">
            Toko <span className="text-white">"{storeName}"</span> Telah Terverifikasi.
          </p>
          <div className="bg-[#1A0533] p-4 rounded-xl border border-white/5 mb-8">
            <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">On-Chain Identity</p>
            <code className="font-mono text-[10px] text-[#FFB300] break-all">{walletAddress}</code>
          </div>
          <Link href="/seller/dashboard" className="block w-full rounded-2xl bg-green-500 p-4 text-xs font-black uppercase tracking-[0.2em] text-[#1A0533] hover:scale-105 transition-all shadow-lg shadow-green-500/20">
            Enter Seller Hub
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#1A0533] p-8 overflow-hidden relative text-white font-sans">
      <Head>
        <title>Register Node | DiecastChain</title>
      </Head>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-[#E91E63] opacity-5 blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#FFB300] opacity-5 blur-[100px]"></div>

      <div className="relative z-10 w-full max-w-lg rounded-[40px] bg-[#2D0B5A] p-10 shadow-2xl border border-white/5">
        <header className="mb-10 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E91E63]/10 text-[#E91E63]">
            <FaRocket className="text-3xl" />
          </div>
          <h1 className="text-3xl font-black italic uppercase tracking-tighter text-white">
            Register <span className="text-[#FFB300]">Seller Node</span>
          </h1>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-2">
            Tahap Awal Implementasi P2P Marketplace
          </p>
        </header>

        {/* Step 1: Wallet Connection */}
        <div className={`mb-8 rounded-3xl border p-6 transition-all ${walletAddress ? 'border-green-500/30 bg-green-500/5' : 'border-white/10 bg-[#1A0533]'}`}>
          <h3 className="text-xs font-black uppercase tracking-widest mb-4 flex items-center text-slate-300">
            <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[10px]">1</span>
            Secure Wallet Binding
          </h3>
          
          {walletAddress ? (
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                <FaEthereum />
              </div>
              <div className="flex-1 overflow-hidden">
                <span className="text-[10px] font-mono text-green-400 break-all">{walletAddress}</span>
                <p className="text-[9px] text-slate-500 uppercase font-bold mt-1 tracking-tighter italic">Address Terikat Permanen ke Store Metadata</p>
              </div>
            </div>
          ) : (
            <button
              onClick={handleConnectWallet}
              disabled={isConnecting}
              className="group flex w-full items-center justify-center space-x-3 rounded-2xl bg-white/5 border border-white/10 p-4 text-xs font-black uppercase tracking-widest transition-all hover:bg-[#FFB300] hover:text-[#1A0533]"
            >
              <FaEthereum className="text-lg group-hover:animate-bounce" />
              <span>{isConnecting ? "Connecting Node..." : "Link Web3 Wallet"}</span>
            </button>
          )}
        </div>

        {/* Step 2: Store Detail */}
        <form onSubmit={handleRegisterSeller} className="space-y-6">
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 ml-1">
              Store Alias / Collector Identity
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-600">
                    <FaStore />
                </div>
                <input
                    type="text"
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                    required
                    disabled={!walletAddress}
                    className={`block w-full rounded-2xl bg-[#1A0533] border border-white/10 p-4 pl-12 text-sm text-white focus:outline-none focus:border-[#E91E63] transition-all placeholder:text-slate-700 ${
                        !walletAddress ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    placeholder="Contoh: Ryu Asada Garage"
                />
            </div>
          </div>

          <button
            type="submit"
            disabled={!walletAddress || !storeName.trim()}
            className={`w-full rounded-2xl p-4 text-xs font-black uppercase tracking-[0.3em] transition-all shadow-xl ${
              !walletAddress || !storeName.trim()
                ? "bg-slate-800 text-slate-600 cursor-not-allowed"
                : "bg-[#E91E63] text-white hover:scale-[1.02] shadow-[#E91E63]/20"
            }`}
          >
            Deploy Seller Node
          </button>
          
          <div className="flex items-center justify-center space-x-2 text-[9px] text-slate-600 font-bold uppercase tracking-widest">
            <FaShieldAlt />
            <span>Secured by DiecastChain Protocol</span>
          </div>
        </form>
      </div>
    </div>
  );
}