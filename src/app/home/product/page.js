"use client";
import Head from "next/head";
import Sidebar from "@/app/components/Sidebar";
import Link from "next/link";
import { useState } from "react";
import {
  FaEthereum,
  FaArrowLeft,
  FaShieldAlt,
  FaTruck,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

export default function BuyerProductDetailPage() {
  // State simulasi status transaksi
  // 0: Available, 1: Pending (Dana di Escrow), 2: Completed (Diterima)
  const [transactionStep, setTransactionStep] = useState(0);

  const product = {
    name: "Hot Wheels Nissan Skyline GT-R R34 (STH)",
    price: "0.12",
    seller: "0x99D...21b4",
    image:
      "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?q=80&w=600&h=400&fit=crop",
    description:
      "Mint in Blister. Super Treasure Hunt edition with Real Riders wheels and Spectraflame paint. Hard to find item for serious collectors.",
  };

  return (
    <div className="flex min-h-screen bg-[#1A0533]">
      <Sidebar x="marketplace" />

      <main className="flex-1 p-10 ml-64 text-white">
        <header className="mb-8">
          <Link href="/marketplace">
            <span className="flex items-center space-x-2 text-[#FFB300] font-black uppercase text-[10px] tracking-widest cursor-pointer">
              <FaArrowLeft /> <span>Back to Marketplace</span>
            </span>
          </Link>
        </header>

        <div className="bg-[#2D0B5A] rounded-3xl border border-white/5 p-8 flex flex-col lg:flex-row gap-12 shadow-2xl">
          {/* Kiri: Foto */}
          <div className="w-full lg:w-1/2">
            <img
              src={product.image}
              className="rounded-2xl border border-white/10 w-full object-cover aspect-video shadow-2xl"
            />
            <div className="mt-6 p-4 bg-[#1A0533]/50 rounded-xl border border-[#FFB300]/20">
              <h4 className="text-[10px] font-black text-[#FFB300] uppercase tracking-widest mb-2 flex items-center">
                <FaShieldAlt className="mr-2" /> Blockchain Guarantee
              </h4>
              <p className="text-xs text-slate-400 italic leading-relaxed">
                This transaction is protected by a Smart Contract Escrow. Your
                funds are locked safely until you confirm delivery.
              </p>
            </div>
          </div>

          {/* Kanan: Info & Alur Beli */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div>
              <h1 className="text-4xl font-black italic uppercase tracking-tighter mb-2">
                {product.name}
              </h1>
              <p className="text-slate-400 text-sm leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="flex items-center text-5xl font-black text-[#FFB300] italic py-4">
              <FaEthereum className="mr-2 text-3xl" />
              <span>{product.price} ETH</span>
            </div>

            {/* Transaction Logic UI */}
            <div className="space-y-4 pt-6">
              {transactionStep === 0 && (
                <button
                  onClick={() => setTransactionStep(1)}
                  className="w-full py-5 rounded-2xl bg-[#E91E63] hover:bg-[#ff2e76] text-white font-black uppercase italic tracking-widest transition transform hover:scale-[1.02] shadow-xl shadow-[#E91E63]/20"
                >
                  Buy Now & Secure Funds
                </button>
              )}

              {transactionStep === 1 && (
                <div className="space-y-4 animate-pulse">
                  <div className="bg-blue-500/10 border border-blue-500/30 p-4 rounded-2xl flex items-center">
                    <FaTruck className="text-blue-400 text-2xl mr-4" />
                    <div>
                      <p className="font-black text-blue-400 uppercase text-xs">
                        Status: Shipped / Escrow Active
                      </p>
                      <p className="text-[10px] text-slate-400">
                        Funds are locked in the contract. Waiting for your
                        confirmation.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setTransactionStep(2)}
                    className="w-full py-5 rounded-2xl bg-green-600 hover:bg-green-500 text-white font-black uppercase italic tracking-widest transition"
                  >
                    Confirm Delivery (Release Funds)
                  </button>
                </div>
              )}

              {transactionStep === 2 && (
                <div className="bg-green-500/10 border border-green-500/30 p-6 rounded-2xl text-center">
                  <FaCheckCircle className="text-green-400 text-4xl mx-auto mb-3" />
                  <p className="font-black text-green-400 uppercase">
                    Transaction Complete
                  </p>
                  <p className="text-[10px] text-slate-400 mt-1">
                    Ownership has been transferred and funds released to seller.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
