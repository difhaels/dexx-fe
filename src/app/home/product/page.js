"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaEthereum,
  FaArrowLeft,
  FaShieldAlt,
  FaTruck,
  FaCheckCircle,
  FaStar,
  FaBox,
  FaUserCircle,
  FaStore,
  FaHistory,
  FaFire,
  FaInfoCircle,
  FaLink,
} from "react-icons/fa";

export default function BuyerProductDetailPage() {
  // State untuk mensimulasikan alur Smart Contract Escrow
  // 0: Available, 1: Pending (Duit kekunci), 2: Completed (Duit cair)
  const [transactionStep, setTransactionStep] = useState(0);

  const product = {
    name: "Hot Wheels Nissan Skyline GT-R R34 (STH)",
    price: "0.12",
    sellerName: "DiecastMaster_99",
    sellerAddress: "0x99D7B...21b4",
    sellerRating: 4.8,
    stock: 1,
    image:
      "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?q=80&w=600&h=400&fit=crop",
    fullDesc:
      "Kondisi card sangat mulus (Near Mint 95%). Blister aman tidak ada retak atau penyok. Unit diecast cat spectraflame aman tidak ada merintis. Ban karet (Real Riders) berputar sempurna. Sudah termasuk protector original. Packing menggunakan dus tebal dan bubble wrap gratis.",
    specs: {
      brand: "Hot Wheels",
      series: "2024 Super Treasure Hunt",
      scale: "1:64",
      material: "Metal / Metal (Rubber Tires)",
      year: "2024",
      onChainId: "0x88237F...e91a",
    },
    reviews: [
      {
        user: "Collector_ID",
        rating: 5,
        comment: "Packing sangat aman, barang sesuai deskripsi!",
      },
      {
        user: "DiecastHobby",
        rating: 4,
        comment: "Kondisi card 95%, overall mantap.",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#1A0533] text-white font-sans pb-20">
      {/* 1. TOP NAVIGATION (Buyer Context) */}
      <nav className="border-b border-white/5 bg-[#1A0533]/80 backdrop-blur-md sticky top-0 z-50 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/home">
            <div className="flex items-center space-x-2 text-[#FFB300] font-black uppercase text-xs tracking-tighter cursor-pointer group">
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Marketplace</span>
            </div>
          </Link>
          <div className="flex items-center space-x-6">
            <div className="hidden md:block text-right">
              <p className="text-[8px] text-slate-500 uppercase font-black tracking-widest">
                Connected Wallet
              </p>
              <p className="text-[10px] font-mono text-white">0x71C...A8f1</p>
            </div>
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-[#E91E63] to-[#FFB300]"></div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6 lg:p-10">
        {/* 2. MAIN PRODUCT SECTION */}
        <div className="bg-[#2D0B5A] rounded-[40px] border border-white/5 p-8 lg:p-12 flex flex-col lg:flex-row gap-12 shadow-3xl mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E91E63] opacity-5 blur-[100px] -mr-32 -mt-32"></div>

          {/* Kolom Kiri: Image & Seller */}
          <div className="w-full lg:w-1/2">
            <div className="relative group overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-[#1A0533]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full object-cover aspect-video group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center space-x-2">
                <FaStar className="text-[#FFB300]" />
                <span className="text-sm font-black italic">
                  {product.sellerRating}
                </span>
              </div>
            </div>

            <div className="mt-8 p-6 bg-[#1A0533]/50 rounded-3xl border border-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <FaUserCircle className="text-4xl text-slate-600" />
                <div>
                  <h4 className="font-black uppercase text-sm italic tracking-tight">
                    {product.sellerName}
                  </h4>
                  <p className="text-[10px] font-mono text-slate-500">
                    {product.sellerAddress}
                  </p>
                </div>
              </div>
              <button className="px-5 py-2.5 bg-white/5 hover:bg-[#FFB300] hover:text-[#1A0533] rounded-xl text-[10px] font-black uppercase tracking-widest border border-white/10 transition duration-300">
                View Store
              </button>
            </div>
          </div>

          {/* Kolom Kanan: Price & Logic */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-5xl font-black italic uppercase tracking-tighter leading-none">
                  {product.name}
                </h1>
                <p className="text-[#E91E63] text-[10px] font-black uppercase tracking-[0.4em]">
                  Verified Collectible Asset
                </p>
              </div>

              <div className="flex items-center space-x-8">
                <div className="flex items-center text-5xl font-black text-[#FFB300] italic">
                  <FaEthereum className="mr-1 text-3xl" />{" "}
                  <span>{product.price}</span>
                </div>
                <div className="h-12 w-px bg-white/10"></div>
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest flex items-center mb-1">
                    <FaBox className="mr-2 text-[#E91E63]" /> Stock Available
                  </p>
                  <p className="text-2xl font-black tracking-tighter">
                    {product.stock} Unit
                  </p>
                </div>
              </div>

              <div className="bg-[#1A0533]/50 p-6 rounded-2xl border border-white/5 relative">
                <h4 className="text-[10px] font-black uppercase text-[#E91E63] tracking-widest mb-3 flex items-center">
                  <FaInfoCircle className="mr-2" /> Seller Description
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed italic pr-10">
                  "{product.fullDesc}"
                </p>
              </div>
            </div>

            {/* BLOCKCHAIN INTERACTION CARD */}
            <div className="mt-10 p-8 rounded-[32px] bg-[#1A0533] border border-[#FFB300]/20 relative overflow-hidden shadow-inner">
              <div className="absolute top-0 right-0 p-4 opacity-10 text-7xl -mr-4 -mt-4">
                <FaShieldAlt />
              </div>

              {transactionStep === 0 && (
                <button
                  onClick={() => setTransactionStep(1)}
                  className="w-full py-5 rounded-2xl bg-[#E91E63] hover:bg-[#ff2e76] text-white font-black uppercase italic tracking-widest transition transform hover:scale-[1.02] shadow-xl shadow-[#E91E63]/20 flex items-center justify-center space-x-3"
                >
                  <FaEthereum /> <span>Execute Smart Contract Purchase</span>
                </button>
              )}

              {transactionStep === 1 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-center text-blue-400 mb-4 animate-pulse">
                    <FaTruck className="mr-3 text-2xl" />
                    <span className="font-black uppercase italic text-sm tracking-widest">
                      Funds Locked in Escrow...
                    </span>
                  </div>
                  <button
                    onClick={() => setTransactionStep(2)}
                    className="w-full py-5 rounded-2xl bg-[#00C853] hover:bg-[#00E676] text-white font-black uppercase italic tracking-widest transition shadow-xl shadow-[#00C853]/20 flex items-center justify-center space-x-3"
                  >
                    <FaCheckCircle />{" "}
                    <span>Confirm Received & Release Fund</span>
                  </button>
                </div>
              )}

              {transactionStep === 2 && (
                <div className="text-center py-2">
                  <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/40">
                    <FaCheckCircle className="text-[#00C853] text-3xl" />
                  </div>
                  <p className="font-black uppercase text-[#00C853] tracking-widest italic">
                    Transaction Finalized
                  </p>
                  <p className="text-[10px] text-slate-500 mt-2">
                    Ownership Hash: {product.specs.onChainId}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 3. TECHNICAL METADATA & REVIEWS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Metadata Spesifikasi */}
          <div className="bg-[#2D0B5A]/50 rounded-[32px] p-8 border border-white/5">
            <h3 className="text-xl font-black uppercase italic mb-6 flex items-center text-[#FFB300]">
              <FaLink className="mr-3 text-sm" /> Technical Metadata
            </h3>
            <div className="space-y-4">
              {Object.entries(product.specs).map(([key, value]) => (
                <div
                  key={key}
                  className="flex justify-between border-b border-white/5 pb-2"
                >
                  <span className="text-[10px] font-black uppercase text-slate-500 tracking-tighter">
                    {key}
                  </span>
                  <span className="text-xs font-bold text-white truncate ml-4">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Reviews */}
          <div className="bg-[#2D0B5A]/50 rounded-[32px] p-8 border border-white/5 lg:col-span-2">
            <div>
              <h3 className="text-xl font-black uppercase italic mb-6 flex items-center text-[#E91E63]">
                <FaStar className="mr-3 text-sm" />
                Review this product
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.reviews.map((rev, i) => (
                  <div
                    key={i}
                    className="bg-[#1A0533] p-5 rounded-2xl border border-white/5 hover:border-white/10 transition"
                  >
                    <div className="flex justify-between mb-3">
                      <span className="text-[10px] font-black text-[#FFB300] uppercase tracking-widest">
                        {rev.user}
                      </span>
                      <div className="flex text-[#FFB300] text-[8px] space-x-0.5">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed italic">
                      "{rev.comment}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-3">
              <h3 className="text-xl font-black uppercase italic mb-6 flex items-center text-[#E91E63]">
                <FaStar className="mr-3 text-sm" /> Review other products from this store
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.reviews.map((rev, i) => (
                  <div
                    key={i}
                    className="bg-[#1A0533] p-5 rounded-2xl border border-white/5 hover:border-white/10 transition"
                  >
                    <div className="flex justify-between mb-3">
                      <span className="text-[10px] font-black text-[#FFB300] uppercase tracking-widest">
                        {rev.user}
                      </span>
                      <div className="flex text-[#FFB300] text-[8px] space-x-0.5">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed italic">
                      "{rev.comment}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4. SELLER ACTIVITY & RECOMMENDATIONS */}
        <div className="space-y-16">
          {/* More from Seller */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#FFB300] text-[#1A0533] rounded-xl">
                  <FaStore />
                </div>
                <h3 className="text-3xl font-black uppercase italic tracking-tighter leading-none">
                  More From{" "}
                  <span className="text-[#FFB300]">{product.sellerName}</span>
                </h3>
              </div>
              <div className="h-px flex-1 bg-white/5 mx-8 hidden md:block"></div>
              <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest hover:text-white transition cursor-pointer">
                View Collection
              </span>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="bg-[#2D0B5A] p-5 rounded-[32px] border border-white/5 hover:border-[#FFB300]/50 transition-all duration-300 group cursor-pointer shadow-lg hover:-translate-y-2"
                >
                  <div className="rounded-2xl overflow-hidden mb-4 aspect-square bg-[#1A0533] border border-white/5"></div>
                  <h5 className="font-black uppercase italic text-[11px] mb-2 truncate group-hover:text-[#FFB300]">
                    Skyline Collection #{item}
                  </h5>
                  <div className="flex items-center text-[#FFB300] font-black italic text-sm">
                    <FaEthereum className="mr-1" /> 0.08
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Section */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#E91E63] text-white rounded-xl">
                  <FaFire />
                </div>
                <h3 className="text-3xl font-black uppercase italic tracking-tighter leading-none">
                  Recommended <span className="text-[#E91E63]">For You</span>
                </h3>
              </div>
              <div className="h-px flex-1 bg-white/5 mx-8 hidden md:block"></div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="bg-[#2D0B5A] p-5 rounded-[32px] border border-white/5 hover:border-[#E91E63]/50 transition-all duration-300 group cursor-pointer shadow-lg hover:-translate-y-2"
                >
                  <div className="rounded-2xl overflow-hidden mb-4 aspect-square bg-[#1A0533] border border-white/5"></div>
                  <h5 className="font-black uppercase italic text-[11px] mb-2 truncate group-hover:text-[#E91E63]">
                    Hot Wheels Premium #{item}
                  </h5>
                  <div className="flex items-center text-[#E91E63] font-black italic text-sm">
                    <FaEthereum className="mr-1" /> 0.15
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
