"use client";
import { useState } from "react";
import Link from "next/link";
import Sidebar from "@/app/components/Sidebar";
import { 
  FaEthereum, FaCloudUploadAlt, FaGavel, FaInfoCircle, 
  FaCar, FaCalendarAlt, FaLayerGroup, FaRulerCombined,
  FaArrowLeft, FaWallet, FaUserCircle, FaNetworkWired
} from "react-icons/fa";

export default function AddProductPage() {
  // Simulasi data user yang terkoneksi
  const userData = {
    address: "0x71C...A8f1",
    balance: "1.25",
    network: "Ganache Local"
  };

  return (
    <div className="flex min-h-screen bg-[#1A0533]">

      
      <main className="flex-1 p-10 ml-64 text-white">
        
        {/* TOP BAR: Back Button & User Quick Info */}
        <div className="flex justify-between items-center mb-10">
          <Link href="/home">
            <div className="flex items-center space-x-2 text-[#FFB300] hover:text-white transition-colors font-black uppercase text-[10px] tracking-widest cursor-pointer group">
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Marketplace</span>
            </div>
          </Link>

          {/* Sidebar Info User (Mini Version di Top Bar) */}
          <div className="flex items-center space-x-4 bg-[#2D0B5A] p-3 px-6 rounded-2xl border border-white/5 shadow-xl">
             <div className="text-right">
                <p className="text-[8px] text-slate-500 uppercase font-black tracking-widest">Active Wallet</p>
                <p className="text-[10px] font-mono text-[#FFB300]">{userData.address}</p>
             </div>
             <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-[#E91E63] to-[#FFB300] flex items-center justify-center text-[#1A0533]">
                <FaWallet size={12} />
             </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* KOLOM KIRI: FORM LISTING */}
          <div className="flex-1">
            <header className="mb-8">
              <h1 className="text-4xl font-black italic tracking-tighter uppercase leading-none">
                List New <span className="text-[#FFB300]">Diecast Asset</span>
              </h1>
              <p className="text-[#E91E63] text-[10px] font-black uppercase tracking-[0.4em] mt-2">
                Deploying Metadata to IPFS & Blockchain
              </p>
            </header>

            <div className="bg-[#2D0B5A] rounded-[40px] p-10 border border-white/5 shadow-2xl">
              <form className="space-y-8">
                {/* Image Upload Area */}
                <div className="group relative border-2 border-dashed border-white/10 rounded-3xl p-12 text-center hover:border-[#E91E63] transition-all duration-500 bg-[#1A0533]/30 cursor-pointer">
                  <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                  <FaCloudUploadAlt className="text-5xl mx-auto mb-4 text-slate-500 group-hover:text-[#E91E63] transition-colors" />
                  <p className="text-xs font-black uppercase tracking-widest text-white">Upload High-Res Photo</p>
                  <p className="text-[10px] text-slate-500 mt-2 italic text-center">Images will be pinned to IPFS network</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Basic Info */}
                  <div className="space-y-6">
                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#FFB300] flex items-center">
                      <FaInfoCircle className="mr-2" /> Basic Info
                    </h3>
                    <div>
                      <label className="text-[9px] font-black uppercase tracking-widest text-slate-500 block mb-2 ml-1">Item Name</label>
                      <input type="text" placeholder="e.g. Skyline R34 STH" className="w-full bg-[#1A0533] border border-white/5 rounded-2xl p-4 text-sm focus:outline-none focus:border-[#E91E63] transition-all" />
                    </div>
                    <div>
                      <label className="text-[9px] font-black uppercase tracking-widest text-slate-500 block mb-2 ml-1">Price (ETH)</label>
                      <div className="relative">
                        <FaEthereum className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FFB300]" />
                        <input type="number" step="0.01" placeholder="0.00" className="w-full bg-[#1A0533] border border-white/5 rounded-2xl p-4 pl-10 text-sm focus:outline-none focus:border-[#FFB300] font-mono" />
                      </div>
                    </div>
                    <div>
                      <label className="text-[9px] font-black uppercase tracking-widest text-slate-500 block mb-2 ml-1">Condition Description</label>
                      <textarea rows="3" placeholder="Explain the card and blister condition..." className="w-full bg-[#1A0533] border border-white/5 rounded-2xl p-4 text-sm focus:outline-none focus:border-[#E91E63] italic"></textarea>
                    </div>
                  </div>

                  {/* Technical Specs */}
                  <div className="space-y-6">
                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#FFB300] flex items-center">
                      <FaCar className="mr-2" /> Technical Specs
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="Brand" className="bg-[#1A0533] border border-white/5 rounded-xl p-3 text-xs focus:outline-none focus:border-[#E91E63]" />
                      <input type="text" placeholder="Year" className="bg-[#1A0533] border border-white/5 rounded-xl p-3 text-xs focus:outline-none focus:border-[#E91E63]" />
                    </div>
                    <input type="text" placeholder="Series / Collection" className="w-full bg-[#1A0533] border border-white/5 rounded-xl p-3 text-xs focus:outline-none focus:border-[#E91E63]" />
                    <input type="text" placeholder="Scale (e.g. 1:64)" className="w-full bg-[#1A0533] border border-white/5 rounded-xl p-3 text-xs focus:outline-none focus:border-[#E91E63]" />
                    <input type="text" placeholder="Material" className="w-full bg-[#1A0533] border border-white/5 rounded-xl p-3 text-xs focus:outline-none focus:border-[#E91E63]" />
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <button type="button" className="w-full py-6 rounded-3xl bg-[#FFB300] text-[#1A0533] font-black uppercase italic tracking-[0.2em] transition-all hover:scale-[1.02] shadow-2xl shadow-[#FFB300]/20 flex items-center justify-center group">
                    <FaGavel className="mr-3 text-xl group-hover:rotate-12 transition-transform" /> 
                    Mint & List on Blockchain
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* 2. SIDEBAR INFO USER (Kanan) */}
          <div className="w-full lg:w-72 space-y-6">
             <div className="bg-[#2D0B5A] rounded-3xl p-6 border border-white/5 shadow-xl">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E91E63] mb-6">User Profile</h3>
                <div className="flex flex-col items-center text-center space-y-4">
                   <div className="w-20 h-20 rounded-full bg-[#1A0533] border-4 border-[#FFB300]/20 flex items-center justify-center">
                      <FaUserCircle size={48} className="text-slate-500" />
                   </div>
                   <div>
                      <p className="text-[10px] font-mono text-slate-500 truncate w-48 mx-auto">{userData.address}</p>
                      <p className="text-lg font-black italic uppercase">Collector Node</p>
                   </div>
                </div>
                
                <div className="mt-8 space-y-4">
                   <div className="bg-[#1A0533] p-4 rounded-2xl border border-white/5">
                      <p className="text-[8px] text-slate-500 uppercase font-black tracking-widest mb-1">Total Balance</p>
                      <div className="flex items-center text-[#FFB300] font-black italic">
                         <FaEthereum className="mr-1" />
                         <span>{userData.balance} ETH</span>
                      </div>
                   </div>
                   <div className="bg-[#1A0533] p-4 rounded-2xl border border-white/5">
                      <p className="text-[8px] text-slate-500 uppercase font-black tracking-widest mb-1">Network Status</p>
                      <div className="flex items-center text-green-400 font-black italic text-[10px] uppercase">
                         <FaNetworkWired className="mr-2" />
                         <span>{userData.network}</span>
                      </div>
                   </div>
                </div>
             </div>

             <div className="bg-gradient-to-br from-[#E91E63]/20 to-transparent rounded-3xl p-6 border border-[#E91E63]/20">
                <p className="text-[10px] font-black uppercase tracking-widest mb-2 flex items-center">
                  <FaInfoCircle className="mr-2 text-[#E91E63]" /> Seller Note
                </p>
                <p className="text-[10px] text-slate-400 leading-relaxed italic">
                  Ensure you have enough gas fees (ETH) in your wallet to complete the minting process.
                </p>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}