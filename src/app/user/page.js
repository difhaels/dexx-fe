"use client";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import {
  FaWallet,
  FaShoppingCart,
  FaHistory,
  FaEthereum,
  FaUserShield,
  FaExternalLinkAlt,
  FaAward,
  FaStore,
  FaBox,
  FaCheckCircle,
  FaClock,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState("listings"); // listings | orders | history
  const [isWalletConnected] = useState(true);
  const [walletAddress] = useState("0x71C83486E2B1...0aa3");
  const [username] = useState("Pro_Collector_99");
  const [ethBalance] = useState("1.254");

  // Dummy Data untuk Simulasi CRUD Seller & Buyer
  const myListings = [
    {
      id: 1,
      name: "Skyline R34 STH",
      price: "0.12",
      status: "Available",
      img: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?q=80&w=100",
    },
    {
      id: 2,
      name: "Porsche 911 GT3",
      price: "0.08",
      status: "Pending",
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=100",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1A0533] text-white p-6 md:p-12 relative overflow-hidden font-sans">
      <Head>
        <title>Collector Identity | DiecastChain</title>
      </Head>

      {/* Ornamen Background Glow */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#E91E63] opacity-5 blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#FFB300] opacity-5 blur-[120px]"></div>

      <div className="mx-auto max-w-6xl relative z-10">
        {/* HEADER SECTION */}
        <header className="mb-10 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h1 className="text-5xl font-black italic tracking-tighter uppercase leading-none">
              Collector <span className="text-[#FFB300]">Identity</span>
            </h1>
            <p className="text-slate-400 mt-2 text-sm uppercase tracking-widest font-bold border-l-2 border-[#E91E63] pl-3">
              MANAGE YOUR ON-CHAIN ASSETS AND TRANSACTIONS.
            </p>
          </div>
          <Link href="/home">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-[#FFB300] transition-colors cursor-pointer border-b border-transparent hover:border-[#FFB300]">
              Return to Market ///
            </span>
          </Link>
        </header>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* KOLOM KIRI: IDENTITY CARD */}
          <div className="lg:col-span-1 space-y-6">
            <div className="rounded-[32px] bg-[#2D0B5A] p-8 border border-white/5 shadow-2xl flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E91E63] to-[#FFB300]"></div>

              <div className="relative mb-6">
                <div className="h-24 w-24 rounded-3xl bg-gradient-to-br from-[#E91E63] to-[#FFB300] flex items-center justify-center text-4xl font-black text-[#1A0533] shadow-lg shadow-[#E91E63]/20">
                  {username.charAt(0)}
                </div>
                <div className="absolute -bottom-2 -right-2 bg-green-500 p-2 rounded-xl border-4 border-[#2D0B5A]">
                  <FaUserShield className="text-white text-[10px]" />
                </div>
              </div>

              <h2 className="text-xl font-black italic uppercase tracking-tighter">
                {username}
              </h2>
              <div className="mt-4 flex items-center space-x-2 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
                <FaAward className="text-[#FFB300] text-xs" />
                <span className="text-[8px] font-black uppercase tracking-widest text-[#FFB300]">
                  Top Trader 2026
                </span>
              </div>

              <div className="w-full mt-8 pt-8 border-t border-white/5 space-y-4">
                <div className="text-left">
                  <span className="text-[8px] text-slate-500 font-black uppercase tracking-[0.2em] block mb-1">
                    Wallet Address
                  </span>
                  <code className="text-[10px] font-mono text-[#FFB300] break-all block bg-[#1A0533] p-3 rounded-xl border border-white/5">
                    {walletAddress}
                  </code>
                </div>
                <div className="flex justify-between items-center bg-[#1A0533] p-3 rounded-xl border border-white/5">
                  <span className="text-[8px] text-slate-500 font-black uppercase">
                    Balance
                  </span>
                  <span className="text-xs font-black italic text-white flex items-center">
                    <FaEthereum className="mr-1 text-[#FFB300]" /> {ethBalance}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: DASHBOARD HUB */}
          <div className="lg:col-span-3 space-y-8">
            {/* TABS NAVIGATION */}
            <div className="flex flex-wrap gap-4">
              {[
                {
                  id: "listings",
                  label: "My Listings",
                  icon: <FaStore />,
                  color: "#FFB300",
                },
                {
                  id: "orders",
                  label: "Active Orders",
                  icon: <FaShoppingCart />,
                  color: "#E91E63",
                },
                {
                  id: "history",
                  label: "Order Vault",
                  icon: <FaHistory />,
                  color: "#94a3b8",
                },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all border-2 ${
                    activeTab === tab.id
                      ? `bg-[#2D0B5A] text-white border-white/10 shadow-xl`
                      : "bg-transparent text-slate-500 border-transparent hover:text-white"
                  }`}
                  style={
                    activeTab === tab.id
                      ? { borderLeftColor: tab.color, borderLeftWidth: "4px" }
                      : {}
                  }
                >
                  <span
                    style={{
                      color: activeTab === tab.id ? tab.color : "inherit",
                    }}
                  >
                    {tab.icon}
                  </span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* CONTENT BOARD */}
            <div className="rounded-[40px] bg-[#2D0B5A] border border-white/5 shadow-2xl overflow-hidden min-h-[400px]">
              {activeTab === "listings" && (
                <div className="p-8">
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="text-xl font-black italic uppercase tracking-tighter">
                      Selling <span className="text-[#FFB300]">Inventory</span>
                    </h3>
                    <Link href="/user/listing">
                      <button className="px-6 py-2 bg-[#FFB300] text-[#1A0533] rounded-xl text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform italic">
                        + List New Item
                      </button>
                    </Link>
                  </div>

                  <div className="space-y-4">
                    {myListings.map((item) => (
                      <div
                        key={item.id}
                        className="bg-[#1A0533] rounded-3xl p-5 border border-white/5 flex items-center justify-between group hover:border-[#FFB300]/30 transition-colors"
                      >
                        <div className="flex items-center space-x-6">
                          <img
                            src={item.img}
                            className="h-16 w-16 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all shadow-lg"
                          />
                          <div>
                            <h4 className="font-black uppercase italic text-sm tracking-tight">
                              {item.name}
                            </h4>
                            <div className="flex items-center text-[#FFB300] font-black italic text-xs mt-1">
                              <FaEthereum className="mr-1" /> {item.price}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span
                            className={`text-[8px] font-black uppercase px-3 py-1 rounded-full border ${
                              item.status === "Available"
                                ? "text-green-400 border-green-500/20 bg-green-500/5"
                                : "text-blue-400 border-blue-500/20 bg-blue-500/5"
                            }`}
                          >
                            {item.status}
                          </span>
                          <div className="flex space-x-2">
                            <button className="p-3 bg-white/5 rounded-xl hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
                              <FaEdit size={12} />
                            </button>
                            <button className="p-3 bg-red-500/5 rounded-xl hover:bg-red-500/20 text-red-500 transition-colors">
                              <FaTrash size={12} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "orders" && (
                <div className="p-20 text-center space-y-6">
                  <div className="h-20 w-20 bg-white/5 rounded-3xl flex items-center justify-center mx-auto border border-white/5 text-slate-600">
                    <FaClock size={32} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-slate-400 italic">
                      No Active Escrow Detected
                    </p>
                    <p className="text-[10px] text-slate-600 mt-2 font-mono">
                      Blockchain node is synchronized. Your vault is clear.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "history" && (
                <div className="p-20 text-center space-y-6">
                  <div className="h-20 w-20 bg-white/5 rounded-3xl flex items-center justify-center mx-auto border border-white/5 text-slate-600">
                    <FaHistory size={32} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-slate-400 italic">
                      Vault History Empty
                    </p>
                    <p className="text-[10px] text-slate-600 mt-2 font-mono">
                      No on-chain records found for this address.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* FOOTER QUICK ACTIONS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 bg-gradient-to-br from-[#E91E63]/10 to-transparent rounded-[32px] border border-[#E91E63]/20 flex justify-between items-center group">
                <div>
                  <p className="text-[10px] font-black text-[#E91E63] uppercase tracking-widest mb-1">
                    Security Status
                  </p>
                  <p className="text-sm font-black italic uppercase">
                    On-Chain Protection Active
                  </p>
                </div>
                <FaUserShield className="text-3xl text-[#E91E63] opacity-20 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-8 bg-gradient-to-br from-[#FFB300]/10 to-transparent rounded-[32px] border border-[#FFB300]/20 flex justify-between items-center group">
                <div>
                  <p className="text-[10px] font-black text-[#FFB300] uppercase tracking-widest mb-1">
                    Explorer Link
                  </p>
                  <p className="text-sm font-black italic uppercase">
                    Track Wallet Activity
                  </p>
                </div>
                <FaExternalLinkAlt className="text-2xl text-[#FFB300] opacity-20 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
