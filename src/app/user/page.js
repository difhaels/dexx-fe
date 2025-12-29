"use client";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { FaWallet, FaShoppingCart, FaHistory, FaEthereum, FaUserShield, FaExternalLinkAlt, FaAward } from 'react-icons/fa';

export default function UserProfile() {
  const [isWalletConnected, setIsWalletConnected] = useState(true);
  const [walletAddress, setWalletAddress] = useState("0x71C83486E2B1...0aa3");
  const [username, setUsername] = useState("Pro_Collector_99");
  const [ethBalance, setEthBalance] = useState("1.254");
  const [profileBio, setProfileBio] = useState(
    "Spesialis diecast JDM & Super Treasure Hunt. Anggota aktif DiecastChain."
  );

  const handleConnectWallet = () => {
    setIsWalletConnected(true);
    alert("MetaMask Connected!");
  };

  return (
    <div className="min-h-screen bg-[#1A0533] text-white p-6 md:p-12 relative overflow-hidden">
      <Head>
        <title>Collector Identity | DiecastChain</title>
      </Head>

      {/* Ornamen Background */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#E91E63] opacity-5 blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#FFB300] opacity-5 blur-[120px]"></div>

      <div className="mx-auto max-w-5xl relative z-10">
        <header className="mb-10">
          <h1 className="text-5xl font-black italic tracking-tighter uppercase">
            Collector <span className="text-[#FFB300]">Identity</span>
          </h1>
          <p className="text-slate-400 mt-2 text-sm uppercase tracking-widest font-bold border-l-2 border-[#E91E63] pl-3">
            Identitas Terdesentralisasi Anda di Jaringan P2P.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Kolom Kiri: Avatar & Wallet Identity */}
          <div className="md:col-span-1 space-y-6">
            <div className="rounded-[32px] bg-[#2D0B5A] p-8 border border-white/5 shadow-2xl flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="h-28 w-28 rounded-3xl bg-gradient-to-br from-[#E91E63] to-[#FFB300] flex items-center justify-center text-5xl font-black text-[#1A0533] shadow-lg shadow-[#E91E63]/20">
                  {username.charAt(0)}
                </div>
                <div className="absolute -bottom-2 -right-2 bg-green-500 p-2 rounded-xl border-4 border-[#2D0B5A]" title="Verified Member">
                  <FaUserShield className="text-white text-xs" />
                </div>
              </div>
              
              <h2 className="text-2xl font-black italic uppercase tracking-tighter text-white">
                {username}
              </h2>
              <p className="mt-2 text-xs text-slate-400 font-medium leading-relaxed italic">"{profileBio}"</p>
              
              <div className="mt-6 flex items-center space-x-2 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
                <FaAward className="text-[#FFB300]" />
                <span className="text-[10px] font-black uppercase tracking-widest text-[#FFB300]">Top Trader 2025</span>
              </div>
            </div>

            <div className="rounded-[32px] bg-[#2D0B5A] p-8 border border-white/5">
              <h3 className="mb-4 text-xs font-black text-slate-500 uppercase tracking-[0.2em] flex items-center">
                <FaWallet className="mr-2 text-[#E91E63]" /> Node Connection
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</span>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter border ${
                    isWalletConnected ? "bg-green-500/10 text-green-400 border-green-500/20" : "bg-red-500/10 text-red-400 border-red-500/20"
                  }`}>
                    {isWalletConnected ? "Synchronized" : "Disconnected"}
                  </span>
                </div>

                <div className="p-3 bg-[#1A0533] rounded-xl border border-white/5">
                  <span className="block text-[8px] text-slate-500 font-black uppercase tracking-widest mb-1">Public Address</span>
                  <code className="text-[10px] font-mono text-[#FFB300] break-all">
                    {isWalletConnected ? walletAddress : "0x00...000"}
                  </code>
                </div>

                {!isWalletConnected && (
                  <button onClick={handleConnectWallet} className="w-full rounded-xl bg-[#E91E63] py-3 text-xs font-black uppercase tracking-widest text-white hover:bg-[#D81B60] transition-all">
                    Connect Wallet
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Finance & Quick Actions */}
          <div className="md:col-span-2 space-y-8">
            {/* Asset Board */}
            <div className="rounded-[40px] bg-[#2D0B5A] p-8 border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <FaEthereum className="text-9xl" />
              </div>
              <h3 className="mb-6 text-sm font-black text-slate-400 uppercase tracking-[0.2em]">Collector Assets</h3>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-bold text-[#E91E63] uppercase tracking-widest mb-1">Available Funds</p>
                  <span className="text-6xl font-black text-white italic tracking-tighter flex items-center">
                    <FaEthereum className="mr-2 text-3xl text-[#FFB300]" /> {ethBalance}
                  </span>
                </div>
                <div className="flex flex-col items-end">
                  <Link href={`https://etherscan.io/address/${walletAddress}`}>
                    <span className="text-[10px] font-black text-[#FFB300] uppercase tracking-widest flex items-center hover:underline cursor-pointer">
                      View On Explorer <FaExternalLinkAlt className="ml-2" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Navigation Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/user/cart">
                <div className="group flex flex-col items-center justify-center rounded-[32px] bg-[#1A0533] p-10 border border-white/5 hover:border-[#E91E63]/40 transition-all cursor-pointer">
                  <div className="h-16 w-16 rounded-2xl bg-[#E91E63]/10 text-[#E91E63] flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                    <FaShoppingCart />
                  </div>
                  <span className="text-lg font-black italic uppercase tracking-tighter text-white">Cart Hub</span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mt-2">
                    3 Pending Items
                  </span>
                </div>
              </Link>

              <Link href="/user/history">
                <div className="group flex flex-col items-center justify-center rounded-[32px] bg-[#1A0533] p-10 border border-white/5 hover:border-[#FFB300]/40 transition-all cursor-pointer">
                  <div className="h-16 w-16 rounded-2xl bg-[#FFB300]/10 text-[#FFB300] flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                    <FaHistory />
                  </div>
                  <span className="text-lg font-black italic uppercase tracking-tighter text-white">Order Vault</span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mt-2">
                    Check On-Chain History
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}