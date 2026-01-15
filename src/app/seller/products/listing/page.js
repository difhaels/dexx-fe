"use client";
import Sidebar from "@/app/components/Sidebar";
import { FaEthereum, FaCloudUploadAlt, FaGavel } from "react-icons/fa";

export default function AddProductPage() {
  return (
    <div className="flex min-h-screen bg-[#1A0533]">
      <Sidebar x="products" />
      <main className="flex-1 p-10 ml-64 text-white">
        <h1 className="text-4xl font-black italic tracking-tighter uppercase mb-10">
          List New <span className="text-[#FFB300]">Diecast</span>
        </h1>

        <div className="max-w-3xl bg-[#2D0B5A] rounded-3xl p-8 border border-white/5">
          <form className="space-y-6">
            {/* Image Upload Area */}
            <div className="border-2 border-dashed border-white/10 rounded-2xl p-10 text-center hover:border-[#E91E63] transition-colors cursor-pointer group">
              <FaCloudUploadAlt className="text-4xl mx-auto mb-4 text-slate-500 group-hover:text-[#E91E63]" />
              <p className="text-xs font-bold uppercase tracking-widest">
                Upload to IPFS
              </p>
              <p className="text-[10px] text-slate-500 mt-2">
                JPG, PNG or GIF (Max 10MB)
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E91E63] block mb-2">
                  Item Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Skyline R34 Super Treasure Hunt"
                  className="w-full bg-[#1A0533] border border-white/10 rounded-xl p-4 text-sm focus:outline-none focus:border-[#FFB300]"
                />
              </div>

              <div>
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E91E63] block mb-2">
                  Price (ETH)
                </label>
                <div className="relative">
                  <FaEthereum className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FFB300]" />
                  <input
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    className="w-full bg-[#1A0533] border border-white/10 rounded-xl p-4 pl-10 text-sm focus:outline-none focus:border-[#FFB300]"
                  />
                </div>
              </div>
            </div>

            <button
              type="button"
              className="w-full py-5 rounded-2xl bg-[#FFB300] text-[#1A0533] font-black uppercase italic tracking-widest transition hover:scale-[1.01] shadow-xl shadow-[#FFB300]/10 flex items-center justify-center"
            >
              <FaGavel className="mr-2" /> Mint & List on Blockchain
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
