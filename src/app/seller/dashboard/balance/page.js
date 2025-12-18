"use client";
import Sidebar from '@/app/components/Sidebar';
import Head from "next/head"; 
import { FaWallet, FaArrowUp, FaArrowDown, FaEthereum } from "react-icons/fa";

// Data simulasi Blockchain Balance
const currentBalance = "12.534 ETH";
const lockedInEscrow = "1.205 ETH";

const transactionHistory = [
  {
    id: 1,
    type: "credit",
    description: "P2P Sale: Nissan Skyline R34 STH",
    amount: 0.12,
    date: "2025-08-25",
    txHash: "0x71C...a8f1",
  },
  {
    id: 2,
    type: "debit",
    description: "Gas Fee: Batch Listing Deployment",
    amount: 0.005,
    date: "2025-08-24",
    txHash: "0x92B...b2e4",
  },
  {
    id: 3,
    type: "credit",
    description: "P2P Sale: Tomica Civic SiR",
    amount: 0.08,
    date: "2025-08-23",
    txHash: "0x11A...c3d9",
  },
  {
    id: 4,
    type: "debit",
    description: "Withdraw to Hardware Wallet",
    amount: 2.5,
    date: "2025-08-22",
    txHash: "0x55F...e0a2",
  },
];

export default function SellerBalance() {
  return (
    <div className="flex min-h-screen bg-[#1A0533]">
      <Head>
        <title>On-Chain Balance | DiecastChain</title>
      </Head>

      <Sidebar x="analytics" edit={1} />

      <main className="flex-1 p-10 ml-64 text-white">
        <header className="mb-10 relative">
          <div className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-[#FFB300] opacity-5 blur-[100px]"></div>
          <h1 className="text-5xl font-black italic tracking-tighter uppercase">
            Financial <span className="text-[#FFB300]">Node</span>
          </h1>
          <p className="text-slate-400 mt-2 text-sm">
            Pantau arus dana kripto dan riwayat transaksi Smart Contract Anda.
          </p>
        </header>

        {/* Kartu Saldo Utama */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#2D0B5A] rounded-3xl border border-[#FFB300]/20 p-8 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <FaEthereum className="text-9xl text-[#FFB300]" />
            </div>
            <div className="relative z-10">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Total Available Balance</p>
              <h2 className="text-5xl font-black text-[#FFB300] mb-6 flex items-center">
                <FaEthereum className="mr-3 text-3xl" /> {currentBalance}
              </h2>
              <div className="flex gap-4">
                <button className="flex-1 bg-[#FFB300] text-[#1A0533] font-black py-4 rounded-xl shadow-lg hover:scale-105 transition-all uppercase text-xs tracking-widest">
                  Withdraw Funds
                </button>
                <button className="flex-1 border-2 border-[#FFB300] text-[#FFB300] font-black py-4 rounded-xl hover:bg-[#FFB300]/10 transition-all uppercase text-xs tracking-widest">
                  History Explorer
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#2D0B5A]/50 rounded-3xl border border-white/5 p-8 flex flex-col justify-center">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Locked in Smart Contract</p>
            <h2 className="text-4xl font-black text-[#E91E63] mb-2 italic">
              {lockedInEscrow}
            </h2>
            <p className="text-xs text-slate-500 italic">Dana akan cair otomatis setelah pembeli melakukan konfirmasi penerimaan barang.</p>
          </div>
        </div>

        {/* Rincian Transaksi */}
        <div className="bg-[#2D0B5A] rounded-3xl p-8 border border-white/5">
          <h3 className="text-2xl font-black italic text-white mb-8 uppercase tracking-tighter">
            On-Chain <span className="text-[#E91E63]">Activity</span>
          </h3>
          <div className="space-y-4">
            {transactionHistory.map((tx) => (
              <div
                key={tx.id}
                className="group flex justify-between items-center rounded-2xl p-5 bg-white/5 border border-white/5 hover:border-[#E91E63]/30 transition-all"
              >
                <div className="flex items-center">
                  <div
                    className={`p-3 rounded-xl mr-5 shadow-lg ${
                      tx.type === "credit"
                        ? "bg-[#FFB300]/20 text-[#FFB300]"
                        : "bg-[#E91E63]/20 text-[#E91E63]"
                    }`}
                  >
                    {tx.type === "credit" ? <FaArrowUp /> : <FaArrowDown />}
                  </div>
                  <div>
                    <p className="font-black text-slate-100 uppercase text-sm tracking-tight group-hover:text-white transition-colors">
                      {tx.description}
                    </p>
                    <p className="text-[10px] font-mono text-slate-500 mt-1 uppercase tracking-widest">
                      {tx.date} • Tx: <span className="text-[#E91E63]">{tx.txHash}</span>
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className={`text-xl font-black italic ${
                      tx.type === "credit" ? "text-green-400" : "text-[#E91E63]"
                    }`}
                  >
                    {tx.type === "credit" ? "+" : "-"} {tx.amount} ETH
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}