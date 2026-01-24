"use client";
import { useState } from "react";
import Head from "next/head";
import { FaDatabase, FaLink, FaSearch, FaCubes, FaShieldAlt, FaArrowLeft, FaFileInvoiceDollar } from "react-icons/fa";
import Link from "next/link";

export default function NodeExplorerPage() {
  const [walletAddress] = useState("0x71C83486E2B1...0aa3");

  const auditData = [
    { id: "TX-9901", type: "MINTING", asset: "Skyline R34", status: "Success", gas: "0.0021", hash: "0xab1c...7a8b" },
    { id: "TX-9905", type: "ESCROW_LOCK", asset: "Honda Civic SiR", status: "Pending", gas: "0.0045", hash: "0x1a2b...1c2d" },
    { id: "TX-9882", type: "FUND_RELEASE", asset: "G-Class Matchbox", status: "Success", gas: "0.0019", hash: "0xdead...beef" },
  ];

  return (
    <div className="min-h-screen bg-[#0F041D] text-[#00FFD1] p-6 md:p-12 font-mono relative">
      <Head>
        <title>Node Explorer | DiecastChain Ledger</title>
      </Head>

      {/* Efek Garis-Garis Monitor Jadul */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>

      <div className="mx-auto max-w-5xl relative z-10">
        <header className="mb-12 border-b border-[#00FFD1]/20 pb-8 flex justify-between items-start">
          <div>
            <div className="flex items-center space-x-3 text-[#E91E63] mb-4">
                <FaCubes className="animate-spin-slow" />
                <span className="text-xs font-black tracking-[0.4em]">NETWORK: LOCAL_NODE_8545</span>
            </div>
            <h1 className="text-4xl font-black uppercase tracking-tighter text-white">
                Personal <span className="text-[#00FFD1]">Ledger</span> Explorer
            </h1>
            <p className="text-[10px] mt-2 text-slate-500 uppercase tracking-widest">
                Data Monitoring & Transaction Audit Trail ///
            </p>
          </div>
          <Link href="/user/profile">
            <button className="bg-[#00FFD1]/10 border border-[#00FFD1]/30 px-4 py-2 text-[10px] font-black uppercase hover:bg-[#00FFD1] hover:text-[#0F041D] transition-all">
                Close Explorer
            </button>
          </Link>
        </header>

        {/* WALLET SUMMARY CARD */}
        <div className="bg-[#1A0533] border border-[#00FFD1]/20 p-6 rounded-tl-[30px] rounded-br-[30px] mb-10 shadow-[0_0_30px_rgba(0,255,209,0.05)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-2">
                    <span className="text-[9px] text-slate-500 uppercase font-black">Account Tracked</span>
                    <p className="text-xs text-white break-all">{walletAddress}</p>
                </div>
                <div className="space-y-2">
                    <span className="text-[9px] text-slate-500 uppercase font-black">Sync Status</span>
                    <div className="flex items-center text-xs text-[#00FFD1]">
                        <span className="h-2 w-2 bg-[#00FFD1] rounded-full mr-2 animate-ping"></span>
                        SYNCHRONIZED
                    </div>
                </div>
                <div className="space-y-2 text-right">
                    <span className="text-[9px] text-slate-500 uppercase font-black">Audit Verified</span>
                    <div className="flex justify-end text-[#E91E63]"><FaShieldAlt /></div>
                </div>
            </div>
        </div>

        {/* LEDGER TABLE */}
        <div className="space-y-6">
            <h3 className="flex items-center text-xs font-black uppercase tracking-widest text-white">
                <FaDatabase className="mr-3 text-[#00FFD1]" /> All On-Chain Activities
            </h3>
            
            <div className="bg-[#1A0533]/50 border border-white/5 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-white/5 text-[9px] font-black uppercase text-slate-500 border-b border-white/5">
                            <th className="p-4">TX ID</th>
                            <th className="p-4">Type</th>
                            <th className="p-4">Asset Involved</th>
                            <th className="p-4">Gas Fee</th>
                            <th className="p-4">Hash Proof</th>
                            <th className="p-4 text-right">Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-[10px]">
                        {auditData.map((tx) => (
                            <tr key={tx.id} className="border-b border-white/5 hover:bg-[#00FFD1]/5 transition-colors">
                                <td className="p-4 font-bold text-white">{tx.id}</td>
                                <td className="p-4">
                                    <span className="bg-white/5 px-2 py-1 rounded border border-white/10">{tx.type}</span>
                                </td>
                                <td className="p-4 italic">{tx.asset}</td>
                                <td className="p-4 text-[#FFB300]">{tx.gas} ETH</td>
                                <td className="p-4 text-slate-500 font-mono">{tx.hash}</td>
                                <td className="p-4 text-right font-black">
                                    <span className={tx.status === "Success" ? "text-[#00FFD1]" : "text-[#FFB300] animate-pulse"}>
                                        {tx.status === "Success" ? "/// CONFIRMED" : "/// PENDING"}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        {/* AUDIT SUMMARY */}
        <div className="mt-12 p-8 border-t border-[#00FFD1]/20 flex flex-col md:flex-row justify-between items-center opacity-50">
            <div className="flex items-center space-x-6">
                <FaFileInvoiceDollar size={30} />
                <div className="text-left">
                    <p className="text-[9px] font-black">GENERATE PDF REPORT</p>
                    <p className="text-[8px]">Export all transaction history for archival purposes.</p>
                </div>
            </div>
            <div className="text-right text-[8px] font-bold tracking-[0.5em] text-slate-500 mt-6 md:mt-0">
                BLOCKCHAIN LEDGER PROTOCOL v1.0.4
            </div>
        </div>
      </div>
    </div>
  );
}