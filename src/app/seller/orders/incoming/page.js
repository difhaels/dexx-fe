"use client";
import Head from "next/head";
import Sidebar from '@/app/components/Sidebar';
import { useState, useMemo } from "react";
import {
  FaBox, FaUser, FaCity, FaShippingFast, FaStickyNote, FaCommentDots,
  FaCheck, FaTimes, FaThumbtack, FaArrowCircleLeft, FaShieldAlt
} from "react-icons/fa";
import Link from "next/link";

// Data disesuaikan dengan niche Kolektor Diecast
const initialOrders = [
  {
    id: 1,
    productName: "Hot Wheels Super Treasure Hunt Porsche 911",
    buyerName: "Andi Kolektor",
    quantity: 1,
    destinationCity: "Bekasi",
    shippingService: "JNE YES",
    notes: "Tolong double bubble wrap, jangan sampai card tekuk.",
    isPinned: false,
    escrowStatus: "Verified & Locked"
  },
  {
    id: 2,
    productName: "Inno64 Mitsubishi Lancer Evolution III",
    buyerName: "Siti Diecast",
    quantity: 1,
    destinationCity: "Jakarta Pusat",
    shippingService: "GrabExpress Sameday",
    notes: null,
    isPinned: false,
    escrowStatus: "Verified & Locked"
  },
  {
    id: 3,
    productName: "Tomica Limited Vintage Neo Honda Civic",
    buyerName: "Budi Jaya",
    quantity: 1,
    destinationCity: "Tangerang",
    shippingService: "Gosend Instant",
    notes: "Mohon segera dikirim ya bos.",
    isPinned: true,
  },
];

export default function IncomingOrdersPage() {
  const [orders, setOrders] = useState(initialOrders);

  const sortedOrders = useMemo(() => {
    return [...orders].sort((a, b) => b.isPinned - a.isPinned);
  }, [orders]);

  const togglePin = (id) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, isPinned: !order.isPinned } : order
      )
    );
  };

  const handleAccept = (id) => {
    alert(`Smart Contract Updated: Pesanan #${id} Diterima. Silakan siapkan pengiriman.`);
  };

  const handleReject = (id) => {
    if (window.confirm("Tolak pesanan? Dana Smart Contract akan dikembalikan otomatis ke Buyer.")) {
      alert("Pesanan Ditolak. Proses Auto-Refund Berhasil.");
    }
  };

  return (
    <div className="flex min-h-screen bg-[#1A0533]">
      <Head>
        <title>Orderan Masuk | DiecastChain Hub</title>
      </Head>

      <Sidebar x="orders" edit={1} />

      <main className="flex-1 p-10 ml-64 text-white">
        <header className="mb-10 relative">
          <div className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-[#FFB300] opacity-5 blur-[100px]"></div>
          <h1 className="text-5xl font-black italic tracking-tighter uppercase">
            Incoming <span className="text-[#E91E63]">Requests</span>
          </h1>
          <p className="text-slate-400 mt-2 text-sm italic border-l-2 border-[#FFB300] pl-3 uppercase tracking-wider">
            Daftar penawaran masuk yang menunggu validasi node Anda.
          </p>
        </header>

        <Link href="/seller/orders">
          <div className="mb-8 inline-flex items-center space-x-2 text-[#FFB300] hover:text-white transition-colors font-bold uppercase text-[10px] tracking-[0.2em] cursor-pointer bg-white/5 px-4 py-2 rounded-lg">
            <FaArrowCircleLeft />
            <span>Back to Orders Hub</span>
          </div>
        </Link>

        {sortedOrders.length > 0 ? (
          <div className="space-y-6">
            {sortedOrders.map((order) => (
              <div
                key={order.id}
                className="bg-[#2D0B5A] rounded-3xl border border-white/5 p-8 relative group hover:border-[#FFB300]/30 transition-all shadow-2xl"
              >
                {/* Escrow Badge */}
                <div className="absolute top-0 right-24 bg-[#FFB300]/10 border-x border-b border-[#FFB300]/20 px-4 py-1 rounded-b-xl">
                  <p className="text-[9px] font-black text-[#FFB300] uppercase tracking-widest flex items-center">
                    <FaShieldAlt className="mr-1" /> Smart Contract Active
                  </p>
                </div>

                {/* Pin Icon */}
                <button
                  onClick={() => togglePin(order.id)}
                  className={`absolute top-4 right-8 text-xl transition-colors ${
                    order.isPinned ? "text-[#FFB300]" : "text-slate-600 hover:text-[#FFB300]"
                  }`}
                >
                  <FaThumbtack className={order.isPinned ? 'rotate-45' : ''} />
                </button>

                <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter mb-6">
                  {order.productName}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm mb-6">
                  <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-xl border border-white/5">
                    <FaUser className="text-[#E91E63]" />
                    <div className="flex flex-col text-[10px] uppercase tracking-tighter">
                      <span className="text-slate-500 font-bold">Collector</span>
                      <span className="font-black text-slate-200">{order.buyerName}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-xl border border-white/5">
                    <FaBox className="text-[#E91E63]" />
                    <div className="flex flex-col text-[10px] uppercase tracking-tighter">
                      <span className="text-slate-500 font-bold">Quantity</span>
                      <span className="font-black text-slate-200">{order.quantity} Pcs</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-xl border border-white/5">
                    <FaCity className="text-[#E91E63]" />
                    <div className="flex flex-col text-[10px] uppercase tracking-tighter">
                      <span className="text-slate-500 font-bold">Destination</span>
                      <span className="font-black text-slate-200">{order.destinationCity}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-xl border border-white/5">
                    <FaShippingFast className="text-[#E91E63]" />
                    <div className="flex flex-col text-[10px] uppercase tracking-tighter">
                      <span className="text-slate-500 font-bold">Logistic</span>
                      <span className="font-black text-slate-200">{order.shippingService}</span>
                    </div>
                  </div>
                </div>

                {order.notes && (
                  <div className="mt-4 p-4 rounded-xl bg-[#1A0533] border border-white/5 border-l-4 border-l-[#E91E63]">
                    <div className="flex items-center space-x-2 text-[#E91E63] font-black uppercase text-[10px] tracking-widest mb-1">
                      <FaStickyNote />
                      <span>Special Handling Note</span>
                    </div>
                    <p className="text-xs text-slate-400 italic">"{order.notes}"</p>
                  </div>
                )}

                <div className="mt-8 border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                  <Link href={`/seller/chat/${order.buyerName}`}>
                    <span className="flex items-center space-x-2 text-slate-500 hover:text-[#FFB300] transition-colors font-black uppercase text-[10px] tracking-widest cursor-pointer">
                      <FaCommentDots className="text-lg" />
                      <span>Contact Buyer</span>
                    </span>
                  </Link>

                  <div className="flex space-x-3 w-full md:w-auto">
                    <button
                      onClick={() => handleReject(order.id)}
                      className="flex-1 md:flex-none flex items-center justify-center space-x-2 px-6 py-3 rounded-xl border border-white/10 text-slate-400 font-bold uppercase text-[10px] tracking-widest hover:bg-red-500/10 hover:text-red-500 hover:border-red-500 transition-all"
                    >
                      <FaTimes />
                      <span>Reject</span>
                    </button>
                    <button
                      onClick={() => handleAccept(order.id)}
                      className="flex-1 md:flex-none flex items-center justify-center space-x-2 px-8 py-3 rounded-xl bg-[#E91E63] text-white font-bold uppercase text-[10px] tracking-widest hover:scale-105 shadow-lg shadow-[#E91E63]/20 transition-all"
                    >
                      <FaCheck />
                      <span>Process Transaction</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#2D0B5A] rounded-3xl border border-dashed border-white/10 flex flex-col items-center">
            <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Node is idle. No incoming requests.</p>
          </div>
        )}
      </main>
    </div>
  );
}