"use client";
import Head from "next/head";
import Sidebar from "@/app/components/Sidebar";
import {
  FaDatabase,
  FaGasPump,
  FaLink,
  FaShieldAlt,
  FaExchangeAlt,
  FaCube,
  FaCheckDouble,
  FaEthereum,
} from "react-icons/fa";

export default function OnChainStatsPage() {
  // Data Simulasi Blockchain State
  const networkStats = {
    contractAddress: "0x71C83486E2B15FbDB2315678afecb800aa3",
    gasPrice: "14 Gwei",
    blockHeight: "18,452,901",
    totalEscrowValue: "4.520 ETH",
    networkStatus: "Active",
  };

  const recentBlocks = [
    {
      hash: "0x88a...e2b1",
      type: "Mint Listing",
      fee: "0.002 ETH",
      time: "1 min ago",
    },
    {
      hash: "0x44c...f9d2",
      type: "Fund Release",
      fee: "0.005 ETH",
      time: "5 mins ago",
    },
    {
      hash: "0x11a...c3d9",
      type: "P2P Trade",
      fee: "0.003 ETH",
      time: "12 mins ago",
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#1A0533]">
      <Head>
        <title>On-Chain Stats | DiecastChain Explorer</title>
      </Head>

      <Sidebar x="analytics" edit={1} />

      <main className="flex-1 p-10 ml-64 text-white">
        {/* Header Section */}
        <header className="mb-10 relative">
          <div className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-[#E91E63] opacity-5 blur-[100px]"></div>
          <h1 className="text-5xl font-black italic tracking-tighter uppercase">
            On-Chain <span className="text-[#FFB300]">Analytics</span>
          </h1>
          <p className="text-slate-400 mt-2 text-sm italic border-l-2 border-[#FFB300] pl-3 uppercase tracking-wider">
            Live Monitoring Jaringan P2P & Status Smart Contract.
          </p>
        </header>

        {/* Top Grid: Real-time Network Data */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-[#2D0B5A] p-6 rounded-3xl border border-white/5 group hover:border-[#FFB300]/30 transition-all">
            <div className="flex items-center justify-between mb-4">
              <FaGasPump className="text-[#FFB300] text-xl" />
              <span className="text-[9px] font-black text-green-400 uppercase tracking-widest">
                Optimal
              </span>
            </div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
              Gas Price
            </p>
            <h3 className="text-2xl font-black italic text-white">
              {networkStats.gasPrice}
            </h3>
          </div>

          <div className="bg-[#2D0B5A] p-6 rounded-3xl border border-white/5 group hover:border-[#E91E63]/30 transition-all">
            <div className="flex items-center justify-between mb-4">
              <FaCube className="text-[#E91E63] text-xl" />
              <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest italic">
                #Syncing
              </span>
            </div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
              Block Height
            </p>
            <h3 className="text-2xl font-black italic text-white">
              {networkStats.blockHeight}
            </h3>
          </div>

          <div className="bg-[#2D0B5A] p-6 rounded-3xl border border-white/5 group hover:border-[#FFB300]/30 transition-all">
            <div className="flex items-center justify-between mb-4">
              <FaShieldAlt className="text-[#FFB300] text-xl" />
              <span className="text-[9px] font-black text-green-400 uppercase tracking-widest italic">
                Secured
              </span>
            </div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
              Locked in Escrow
            </p>
            <h3 className="text-2xl font-black italic text-white">
              {networkStats.totalEscrowValue}
            </h3>
          </div>

          <div className="bg-[#2D0B5A] p-6 rounded-3xl border border-white/5 group hover:border-[#E91E63]/30 transition-all">
            <div className="flex items-center justify-between mb-4">
              <FaExchangeAlt className="text-[#E91E63] text-xl" />
              <span className="text-[9px] font-black text-green-400 uppercase tracking-widest italic">
                Online
              </span>
            </div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
              P2P Node Status
            </p>
            <h3 className="text-2xl font-black italic text-white">
              {networkStats.networkStatus}
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Smart Contract Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-[#2D0B5A] rounded-[32px] p-8 border border-white/5 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-black italic uppercase tracking-tighter flex items-center">
                  <FaLink className="mr-3 text-[#FFB300]" /> Contract
                  Infrastructure
                </h2>
                <div className="bg-white/5 px-4 py-1.5 rounded-xl border border-white/10 text-[10px] font-mono text-slate-400">
                  ERC-721 Modified Protocol
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-[#1A0533] p-4 rounded-2xl border border-white/5">
                  <p className="text-[9px] font-black text-[#E91E63] uppercase tracking-widest mb-2">
                    Main Contract Address
                  </p>
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-slate-300 break-all">
                      {networkStats.contractAddress}
                    </span>
                    <button className="text-[#FFB300] hover:text-white transition-colors">
                      Copy
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex items-center space-x-4">
                    <div className="text-2xl text-[#E91E63]">
                      <FaDatabase />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-slate-500 uppercase">
                        IPFS Storage
                      </p>
                      <p className="text-xs font-black">Connected (AWS Node)</p>
                    </div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex items-center space-x-4">
                    <div className="text-2xl text-green-400">
                      <FaCheckDouble />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-slate-500 uppercase">
                        Verification
                      </p>
                      <p className="text-xs font-black">Contract Verified</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Transaction Ledger */}
            <div className="bg-[#2D0B5A] rounded-[32px] p-8 border border-white/5">
              <h2 className="text-xl font-black italic uppercase tracking-tighter mb-6 flex items-center">
                <span className="w-2 h-2 bg-[#E91E63] rounded-full mr-3 animate-pulse"></span>
                Recent On-Chain Activity
              </h2>
              <div className="space-y-4">
                {recentBlocks.map((block, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-[#FFB300]/30 transition-all"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="h-10 w-10 rounded-xl bg-[#1A0533] flex items-center justify-center text-[#FFB300] font-mono text-[10px]">
                        #B{idx + 1}
                      </div>
                      <div>
                        <p className="text-xs font-black uppercase tracking-tight">
                          {block.type}
                        </p>
                        <p className="text-[10px] font-mono text-slate-500 tracking-tighter italic">
                          Hash: {block.hash}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-black text-[#FFB300]">
                        {block.fee}
                      </p>
                      <p className="text-[9px] text-slate-600 font-bold uppercase">
                        {block.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Side Info: Why On-Chain? */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#E91E63] to-[#2D0B5A] rounded-[32px] p-8 text-white shadow-xl shadow-[#E91E63]/20">
              <h4 className="text-lg font-black italic uppercase tracking-tighter mb-4">
                Kenapa On-Chain?
              </h4>
              <p className="text-xs leading-relaxed font-medium text-pink-100 opacity-80 uppercase tracking-widest">
                Setiap transaksi diecast tercatat di ledger yang tidak bisa
                diubah (Immutable). Ini menjamin keaslian kepemilikan dan
                transparansi harga untuk komunitas kolektor.
              </p>
            </div>

            <div className="bg-[#2D0B5A] rounded-[32px] p-8 border border-white/5">
              <h4 className="text-sm font-black italic uppercase tracking-tighter text-[#FFB300] mb-4">
                Node Health
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] font-bold uppercase">
                  <span className="text-slate-500">Uptime</span>
                  <span className="text-green-400">99.98%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-[99%]"></div>
                </div>
                <div className="flex justify-between items-center text-[10px] font-bold uppercase">
                  <span className="text-slate-500">Sync Speed</span>
                  <span className="text-[#E91E63]">120ms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
