"use client";
import Head from 'next/head';
import Sidebar from '@/app/components/Sidebar';
import { useState, useMemo } from 'react';
import { 
  FaBox, FaUser, FaCity, FaShippingFast, FaStickyNote, FaCommentDots, 
  FaThumbtack, FaArrowCircleLeft, FaBan, FaLink
} from 'react-icons/fa';
import Link from 'next/link';

// Data disesuaikan dengan niche Diecast dan status Blockchain
const initialAcceptedOrders = [
  {
    id: 1,
    productName: 'Hot Wheels Nissan Skyline GT-R R34 STH',
    buyerName: 'Rian Kolektor',
    quantity: 1,
    destinationCity: 'Bekasi',
    shippingService: 'JNE YES (Asuransi)',
    notes: 'Tolong pake double bubble wrap dan dus keras ya kak, card harus mulus.',
    isPinned: false,
    txHash: '0x88A...e2b1'
  },
  {
    id: 2,
    productName: 'Tomica Limited Vintage Neo Honda Civic',
    buyerName: 'Budi Diecast',
    quantity: 1,
    destinationCity: 'Jakarta Selatan',
    shippingService: 'Grab Instant',
    notes: null,
    isPinned: true,
    txHash: '0x44C...f9d2'
  },
];

export default function AcceptedOrdersPage() {
  const [orders, setOrders] = useState(initialAcceptedOrders);

  const sortedOrders = useMemo(() => {
    return [...orders].sort((a, b) => (b.isPinned - a.isPinned));
  }, [orders]);

  const togglePin = (id) => {
    setOrders(orders.map(order => 
      order.id === id ? { ...order, isPinned: !order.isPinned } : order
    ));
  };

  const handleUpdateShipping = (id) => {
    alert(`Status Blockchain Terupdate: Pesanan ID #${id} masuk tahap pengiriman. Resi terikat ke Smart Contract.`);
  };

  const handleCancelOrder = (id) => {
    if (window.confirm("Batalkan pesanan? Dana Escrow akan di-refund otomatis ke Buyer.")) {
        alert('Transaksi dibatalkan. Smart Contract memicu Refund.');
    }
  };

  return (
    <div className="flex min-h-screen bg-[#1A0533]">
      <Head>
        <title>Proses Order | DiecastChain</title>
      </Head>

      <Sidebar x="orders" edit={1} />

      <main className="flex-1 p-10 ml-64 text-white">
        <header className="mb-10 relative">
          <div className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-[#E91E63] opacity-5 blur-[100px]"></div>
          <h1 className="text-5xl font-black italic tracking-tighter uppercase">
            Order <span className="text-[#FFB300]">Processing</span>
          </h1>
          <p className="text-slate-400 mt-2 text-sm italic border-l-2 border-[#E91E63] pl-3">
            Daftar diecast yang sudah dibayar (Escrow Locked) dan siap dipacking.
          </p>
        </header>

        <Link href="/seller/orders">
          <div className="mb-8 inline-flex items-center space-x-2 text-[#FFB300] hover:text-white transition-colors font-bold uppercase text-xs tracking-widest cursor-pointer">
            <FaArrowCircleLeft />
            <span>Back to Orders Hub</span>
          </div>
        </Link>

        {sortedOrders.length > 0 ? (
          <div className="space-y-6">
            {sortedOrders.map((order) => (
              <div key={order.id} className="bg-[#2D0B5A] rounded-3xl border border-white/5 p-8 relative overflow-hidden group">
                
                {/* Blockchain Info Overlay */}
                <div className="absolute top-0 right-20 bg-[#E91E63]/10 px-4 py-1 rounded-b-xl border-x border-b border-[#E91E63]/20">
                  <p className="text-[9px] font-mono text-[#E91E63] flex items-center tracking-tighter uppercase">
                    <FaLink className="mr-1" /> TX: {order.txHash}
                  </p>
                </div>

                {/* Pin Icon */}
                <button
                  onClick={() => togglePin(order.id)}
                  className={`absolute top-4 right-6 text-xl transition-colors ${order.isPinned ? 'text-[#FFB300]' : 'text-slate-600 hover:text-[#FFB300]'}`}
                >
                  <FaThumbtack className={order.isPinned ? 'rotate-45' : ''} />
                </button>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">
                        {order.productName}
                    </h3>
                    <span className="mt-2 md:mt-0 px-3 py-1 bg-green-500/10 text-green-400 text-[10px] font-bold rounded-full border border-green-500/20 uppercase tracking-widest">
                        Escrow Locked
                    </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
                  <div className="flex items-center space-x-3 text-slate-300">
                    <FaUser className="text-[#E91E63]" />
                    <div className="flex flex-col text-[11px] uppercase tracking-tighter">
                        <span className="text-slate-500 font-bold">Buyer</span>
                        <span className="font-black text-white">{order.buyerName}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-300">
                    <FaBox className="text-[#E91E63]" />
                    <div className="flex flex-col text-[11px] uppercase tracking-tighter">
                        <span className="text-slate-500 font-bold">Quantity</span>
                        <span className="font-black text-white">{order.quantity} Pcs</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-300">
                    <FaCity className="text-[#E91E63]" />
                    <div className="flex flex-col text-[11px] uppercase tracking-tighter">
                        <span className="text-slate-500 font-bold">Destination</span>
                        <span className="font-black text-white">{order.destinationCity}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-300">
                    <FaShippingFast className="text-[#E91E63]" />
                    <div className="flex flex-col text-[11px] uppercase tracking-tighter">
                        <span className="text-slate-500 font-bold">Courier</span>
                        <span className="font-black text-white">{order.shippingService}</span>
                    </div>
                  </div>
                </div>

                {order.notes && (
                  <div className="mt-6 p-4 rounded-xl bg-[#1A0533] border border-white/5 border-l-4 border-l-[#FFB300]">
                    <div className="flex items-center space-x-2 text-[#FFB300] font-black uppercase text-[10px] tracking-widest mb-1">
                      <FaStickyNote />
                      <span>Kolektor's Note</span>
                    </div>
                    <p className="text-xs text-slate-300 italic">"{order.notes}"</p>
                  </div>
                )}
                
                <div className="mt-8 border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                  <Link href={`/seller/chat/${order.buyerName}`}>
                    <span className="flex items-center space-x-2 text-slate-400 hover:text-[#FFB300] transition-colors font-bold uppercase text-[10px] tracking-widest cursor-pointer">
                      <FaCommentDots className="text-lg" />
                      <span>Chat Collector</span>
                    </span>
                  </Link>

                  <div className="flex space-x-3 w-full md:w-auto">
                    <button 
                      onClick={() => handleCancelOrder(order.id)}
                      className="flex-1 md:flex-none flex items-center justify-center space-x-2 px-6 py-3 rounded-xl border border-[#E91E63] text-[#E91E63] font-bold uppercase text-[10px] tracking-widest hover:bg-[#E91E63]/10 transition-all"
                    >
                      <FaBan />
                      <span>Cancel & Refund</span>
                    </button>
                    <button 
                      onClick={() => handleUpdateShipping(order.id)}
                      className="flex-1 md:flex-none flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-[#E91E63] text-white font-bold uppercase text-[10px] tracking-widest hover:scale-105 shadow-lg shadow-[#E91E63]/20 transition-all"
                    >
                      <FaBox />
                      <span>Packing & Ship</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#2D0B5A] rounded-3xl border border-dashed border-white/10">
            <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Tidak ada orderan aktif di jaringan node ini.</p>
          </div>
        )}
      </main>
    </div>
  );
}