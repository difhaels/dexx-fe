"use client";
import { useState } from "react";
import Head from "next/head";
import { FaExternalLinkAlt, FaCube, FaShieldAlt, FaHistory, FaEthereum } from "react-icons/fa";
import Link from "next/link";

const dummyHistory = [
  {
    id: 1,
    productName: "Hot Wheels Nissan Skyline R34 STH",
    amount: 0.12,
    token: "ETH",
    status: "Completed",
    date: "2025-12-25",
    txHash: "0xab1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c",
  },
  {
    id: 2,
    productName: "Tomica Limited Honda Civic SiR",
    amount: 0.05,
    token: "ETH",
    status: "In Escrow",
    date: "2025-12-28",
    txHash: "0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b",
  },
  {
    id: 3,
    productName: "Inno64 Mitsubishi Lancer Evo III",
    amount: 0.07,
    token: "ETH",
    status: "Refunded",
    date: "2025-12-20",
    txHash: "0xdeadbeef1234567890abcdef1234567890abcdef1234567890abcdef12345678",
  },
];

export default function HistoryPage() {
  const getStatusBadge = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/10 text-green-400 border-green-500/20";
      case "In Escrow":
        return "bg-[#FFB300]/10 text-[#FFB300] border-[#FFB300]/20";
      case "Refunded":
        return "bg-red-500/10 text-red-400 border-red-500/20";
      default:
        return "bg-white/5 text-slate-400";
    }
  };

  return (
    <div className="min-h-screen bg-[#1A0533] text-white p-6 md:p-12 relative overflow-hidden">
      <Head>
        <title>Order Vault | DiecastChain</title>
      </Head>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#E91E63] opacity-5 blur-[120px]"></div>

      <div className="mx-auto max-w-6xl relative z-10">
        <header className="mb-10">
          <h1 className="text-5xl font-black italic tracking-tighter uppercase">
            Order <span className="text-[#FFB300]">Vault</span>
          </h1>
          <p className="text-slate-400 mt-2 text-sm uppercase tracking-widest font-bold border-l-2 border-[#E91E63] pl-3">
            Arsip Transaksi On-Chain Anda.
          </p>
        </header>

        <div className="rounded-[32px] bg-[#2D0B5A] p-8 border border-white/5 shadow-2xl">
          <div className="mb-8 flex items-center space-x-3 p-4 rounded-2xl bg-white/5 border border-white/10">
            <FaShieldAlt className="text-[#FFB300]" />
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-relaxed">
              Setiap entri di bawah ini memiliki <span className="text-white italic">Immutable Hash</span> yang membuktikan kepemilikan aset diecast Anda di blockchain.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-white/5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                  <th className="px-6 py-4 text-left">Block ID</th>
                  <th className="px-6 py-4 text-left">Asset Name</th>
                  <th className="px-6 py-4 text-left">Value</th>
                  <th className="px-6 py-4 text-left">Status</th>
                  <th className="px-6 py-4 text-left">Transaction Proof</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {dummyHistory.map((item) => (
                  <tr key={item.id} className="group hover:bg-white/[0.02] transition-colors">
                    <td className="whitespace-nowrap px-6 py-6 text-xs font-mono text-[#E91E63]">
                      #{item.id.toString().padStart(4, '0')}
                    </td>
                    <td className="whitespace-nowrap px-6 py-6">
                      <div className="text-sm font-black uppercase tracking-tight text-white group-hover:text-[#FFB300] transition-colors">
                        {item.productName}
                      </div>
                      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">{item.date}</div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-6">
                      <div className="flex items-center text-sm font-black italic text-[#FFB300]">
                        <FaEthereum className="mr-1 text-[10px]" />
                        {item.amount} {item.token}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-6 text-xs">
                      <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border shadow-sm ${getStatusBadge(item.status)}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-6">
                      <a
                        href={`https://etherscan.io/tx/${item.txHash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link flex items-center font-mono text-[10px] text-slate-500 hover:text-white transition-colors"
                      >
                        <span className="mr-2">{item.txHash.substring(0, 10)}...</span>
                        <FaExternalLinkAlt className="text-[#E91E63] group-hover/link:translate-x-0.5 transition-transform" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {dummyHistory.length === 0 && (
            <div className="py-20 text-center flex flex-col items-center">
              <FaHistory className="text-4xl text-slate-800 mb-4" />
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs italic">
                No archived transactions found in this node.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}