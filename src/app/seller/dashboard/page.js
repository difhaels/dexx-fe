"use client";

import Head from "next/head";
import { useState } from "react";
import { FaBox, FaWallet, FaChartLine, FaHistory } from "react-icons/fa";
import Sidebar from '@/app/components/Sidebar';
import Link from "next/link";

// Data simulasi untuk performa seller diecast
const dashboardData = {
  walletBalance: "12.534 ETH",
  totalSold: 124,
  displayItems: 35,
  pendingEscrow: "1.205 ETH" // Tambahan data khusus blockchain
};

export default function SellerDashboard() {
  const [activeTab] = useState("home");

  return (
    <div className="flex min-h-screen bg-[#1A0533]">
      <Head>
        <title>Seller Dashboard | DiecastChain Hub</title>
      </Head>

      {/* Sidebar - Menggunakan komponen Sidebar yang sudah diupdate */}
      <Sidebar x="home" edit={1}/>

      {/* Main Content */}
      <main className="ml-64 flex-1 p-10 text-white">
        <header className="mb-10 relative">
          <div className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-[#E91E63] opacity-10 blur-[100px]"></div>
          
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#E91E63]">
            Network Status: Connected
          </span>
          <h1 className="text-5xl font-black italic tracking-tighter uppercase mt-2">
            Selamat Datang, <span className="text-[#FFB300]">Collector Seller!</span>
          </h1>
          <p className="text-slate-400 mt-2 max-w-2xl text-sm">
            Pantau inventaris diecast dan aliran dana Smart Contract kamu di sini secara real-time.
          </p>
        </header>

        {/* Dashboard Home Content */}
        {activeTab === "home" && (
          <div className="space-y-8">
            {/* Metriks Utama */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card Saldo MetaMask */}
              <Link href={"/seller/dashboard/balance"} 
                className="bg-[#2D0B5A] border border-white/5 rounded-2xl p-6 transition-all hover:border-[#FFB300]/50 hover:shadow-[0_0_25px_rgba(255,179,0,0.15)] group">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-[#FFB300]/10 text-[#FFB300] mr-4 group-hover:bg-[#FFB300] group-hover:text-[#1A0533] transition-colors">
                    <FaWallet className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Saldo Wallet</h3>
                    <p className="text-2xl font-black text-white">{dashboardData.walletBalance}</p>
                  </div>
                </div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-[#FFB300] w-3/4"></div>
                </div>
              </Link>

              {/* Card Dana di Escrow (Blockchain Specific) */}
              <div className="bg-[#2D0B5A] border border-white/5 rounded-2xl p-6 transition-all hover:border-[#E91E63]/50 hover:shadow-[0_0_25px_rgba(233,30,99,0.15)] group">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-[#E91E63]/10 text-[#E91E63] mr-4 group-hover:bg-[#E91E63] group-hover:text-white transition-colors">
                    <FaHistory className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Locked Escrow</h3>
                    <p className="text-2xl font-black text-white">{dashboardData.pendingEscrow}</p>
                  </div>
                </div>
                <p className="text-[10px] text-slate-500 font-bold uppercase italic">Menunggu Konfirmasi Buyer</p>
              </div>

              {/* Card Barang Terjual */}
              <Link href={"/seller/products/sold"} 
                className="bg-[#2D0B5A] border border-white/5 rounded-2xl p-6 transition-all hover:border-[#FFB300]/50 group">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-[#FFB300]/10 text-[#FFB300] mr-4 group-hover:bg-[#FFB300] group-hover:text-[#1A0533] transition-colors">
                    <FaChartLine className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Terjual P2P</h3>
                    <p className="text-2xl font-black text-white">{dashboardData.totalSold}</p>
                  </div>
                </div>
                <p className="text-[10px] text-green-400 font-bold uppercase">+12% Dari Bulan Lalu</p>
              </Link>

              {/* Card Barang Active */}
              <Link href="/seller/products/display" 
                className="bg-[#2D0B5A] border border-white/5 rounded-2xl p-6 transition-all hover:border-[#E91E63]/50 group">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-[#E91E63]/10 text-[#E91E63] mr-4 group-hover:bg-[#E91E63] group-hover:text-white transition-colors">
                    <FaBox className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Active Ads</h3>
                    <p className="text-2xl font-black text-white">{dashboardData.displayItems}</p>
                  </div>
                </div>
                <p className="text-[10px] text-slate-500 font-bold uppercase italic">Diecast di Etalase</p>
              </Link>

            </div>

            {/* Recent On-Chain Activity Placeholder */}
            <div className="bg-[#2D0B5A] border border-white/5 rounded-3xl p-8">
              <h2 className="text-xl font-black uppercase italic text-[#FFB300] mb-6 flex items-center">
                <span className="w-2 h-2 bg-[#FFB300] rounded-full mr-3 animate-pulse"></span>
                Aktivitas Transaksi Terakhir
              </h2>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-mono text-xs text-[#E91E63]">
                        #0{i}
                      </div>
                      <div>
                        <p className="text-sm font-bold">Smart Contract Interaction: Release Fund</p>
                        <p className="text-[10px] text-slate-500 font-mono">Tx: 0x71C...a8{i}f</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-black text-green-400">+0.045 ETH</p>
                      <p className="text-[10px] text-slate-500 uppercase">2 Jam Lalu</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}