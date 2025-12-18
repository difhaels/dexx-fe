"use client";
import Head from "next/head";
import { useState } from "react";
import {
  FaArrowCircleDown,
  FaCheckCircle,
  FaTruck,
  FaClock,
  FaClipboardCheck,
  FaSort,
  FaSortAmountDown,
  FaSortAmountUp,
  FaEthereum,
} from "react-icons/fa";
import Link from "next/link";
import Sidebar from '@/app/components/Sidebar';

// Data disesuaikan dengan niche Diecast & Status Blockchain
const allOrders = [
  {
    id: 1,
    product: "Hot Wheels Nissan Skyline R34 STH",
    status: "Funds Released",
    date: "2025-08-25",
    buyer: "Rian Kolektor",
    amount: 0.12,
  },
  {
    id: 2,
    product: "Tomica Limited Vintage Neo Civic",
    status: "In Shipping",
    date: "2025-08-24",
    buyer: "Budi Diecast",
    amount: 0.08,
  },
  {
    id: 3,
    product: "Inno64 Mitsubishi Lancer Evo III",
    status: "Escrow Locked",
    date: "2025-08-24",
    buyer: "Siti Jaya",
    amount: 0.07,
  },
  {
    id: 4,
    product: "Matchbox Mercedes G-Class",
    status: "Funds Released",
    date: "2025-08-23",
    buyer: "Dedi Toys",
    amount: 0.02,
  },
];

// Menghitung jumlah untuk badge navigasi
const incomingOrdersCount = allOrders.filter(
  (order) => order.status === "Escrow Locked"
).length;

const inShippingCount = allOrders.filter(
  (order) => order.status === "In Shipping"
).length;

export default function SellerOrders() {
  const [sortBy, setSortBy] = useState("date_newest");

  const getSortedOrders = () => {
    let ordersToShow = [...allOrders];
    if (sortBy === "date_newest") ordersToShow.sort((a, b) => new Date(b.date) - new Date(a.date));
    else if (sortBy === "date_oldest") ordersToShow.sort((a, b) => new Date(a.date) - new Date(b.date));
    else if (sortBy === "price_cheapest") ordersToShow.sort((a, b) => a.amount - b.amount);
    else if (sortBy === "price_most_expensive") ordersToShow.sort((a, b) => b.amount - a.amount);
    return ordersToShow;
  };

  const sortedOrders = getSortedOrders();

  return (
    <div className="flex min-h-screen bg-[#1A0533]">
      <Head>
        <title>Orders Hub | DiecastChain</title>
      </Head>

      <Sidebar x="orders" edit={1}/>

      <main className="ml-64 flex-1 p-10 text-white">
        <header className="mb-10 relative">
          <div className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-[#E91E63] opacity-5 blur-[100px]"></div>
          <h1 className="text-5xl font-black italic tracking-tighter uppercase">
            Orders <span className="text-[#FFB300]">Hub</span>
          </h1>
          <p className="text-slate-400 mt-2 text-sm italic border-l-2 border-[#E91E63] pl-3">
            Manajemen rantai pasok dan riwayat transaksi P2P Anda.
          </p>
        </header>

        {/* Tombol Navigasi Cepat */}
        <div className="flex space-x-4 mb-12">
          <Link href="/seller/orders/incoming">
            <div className="relative group cursor-pointer">
              <span className="flex items-center space-x-3 px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest bg-white/5 border border-white/10 text-white hover:bg-[#E91E63] transition-all duration-300">
                <FaArrowCircleDown className="text-lg text-[#FFB300] group-hover:text-white" />
                <span>Incoming Requests</span>
                {incomingOrdersCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#FFB300] text-[#1A0533] text-[10px] font-black rounded-full h-6 w-6 flex items-center justify-center shadow-lg">
                    {incomingOrdersCount}
                  </span>
                )}
              </span>
            </div>
          </Link>

          <Link href="/seller/orders/accepted">
            <div className="relative group cursor-pointer">
              <span className="flex items-center space-x-3 px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest bg-white/5 border border-white/10 text-white hover:bg-green-600 transition-all duration-300">
                <FaCheckCircle className="text-lg text-green-400 group-hover:text-white" />
                <span>Accepted Orders</span>
              </span>
            </div>
          </Link>
        </div>

        {/* Kontrol Sortir */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-black italic uppercase tracking-tighter text-[#FFB300]">Transaction History</h2>
          <div className="relative inline-block text-left group">
            <button className="inline-flex justify-center items-center rounded-xl border border-white/10 px-6 py-2.5 bg-[#2D0B5A] text-xs font-bold uppercase tracking-widest text-slate-300 hover:text-white transition-all outline-none">
              <FaSort className="mr-2 text-[#E91E63]" />
              Sort By
            </button>
            <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-2xl bg-[#2D0B5A] shadow-2xl ring-1 ring-white/10 hidden group-hover:block z-20 overflow-hidden">
              <div className="py-2">
                <button onClick={() => setSortBy('date_newest')} className="flex items-center w-full px-5 py-3 text-[10px] font-bold uppercase text-slate-400 hover:bg-[#E91E63] hover:text-white transition-colors border-b border-white/5">
                  <FaSortAmountDown className="mr-3" /> Newest Block
                </button>
                <button onClick={() => setSortBy('price_most_expensive')} className="flex items-center w-full px-5 py-3 text-[10px] font-bold uppercase text-slate-400 hover:bg-[#E91E63] hover:text-white transition-colors">
                  <FaSortAmountDown className="mr-3" /> Highest Price
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Daftar Transaksi */}
        <div className="space-y-4">
          {sortedOrders.map((order) => (
            <div key={order.id} className="bg-[#2D0B5A] rounded-2xl border border-white/5 p-6 flex items-center justify-between group hover:border-[#E91E63]/30 transition-all">
              <div className="flex-1">
                <p className="text-lg font-black text-white italic uppercase tracking-tighter group-hover:text-[#FFB300] transition-colors">{order.product}</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">
                  Collector: <span className="text-slate-300">{order.buyer}</span> • Block Date: {order.date}
                </p>
                <p className="text-2xl font-black text-[#FFB300] mt-3 flex items-center italic">
                  <FaEthereum className="mr-1 text-sm" /> {order.amount}
                </p>
              </div>
              
              <div className="flex flex-col items-end space-y-3">
                <div className="flex items-center space-x-3">
                  {order.status === "Funds Released" && <FaClipboardCheck className="text-green-400 text-xl" />}
                  {order.status === "In Shipping" && <FaTruck className="text-[#FFB300] text-xl animate-pulse" />}
                  {order.status === "Escrow Locked" && <FaClock className="text-[#E91E63] text-xl" />}
                  
                  <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] border shadow-sm ${
                      order.status === "Funds Released" ? "bg-green-500/10 text-green-400 border-green-500/20" : 
                      order.status === "In Shipping" ? "bg-[#FFB300]/10 text-[#FFB300] border-[#FFB300]/20" : 
                      "bg-[#E91E63]/10 text-[#E91E63] border-[#E91E63]/20"
                    }`}>
                    {order.status}
                  </span>
                </div>
                <button className="text-[9px] font-black text-slate-500 hover:text-white uppercase tracking-tighter underline transition-colors">
                    View On Explorer
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}