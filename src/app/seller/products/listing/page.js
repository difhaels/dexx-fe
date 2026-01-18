"use client";
import Sidebar from "@/app/components/Sidebar";
import { 
  FaEthereum, FaCloudUploadAlt, FaGavel, FaInfoCircle, 
  FaCar, FaCalendarAlt, FaLayerGroup, FaRulerCombined 
} from "react-icons/fa";

export default function AddProductPage() {
  return (
    <div className="flex min-h-screen bg-[#1A0533]">
      <Sidebar x="products" />
      
      <main className="flex-1 p-10 ml-64 text-white">
        <header className="mb-10">
          <h1 className="text-4xl font-black italic tracking-tighter uppercase leading-none">
            List New <span className="text-[#FFB300]">Diecast Asset</span>
          </h1>
          <p className="text-[#E91E63] text-[10px] font-black uppercase tracking-[0.4em] mt-2">
            Metadata will be stored on IPFS & Immutable Blockchain
          </p>
        </header>

        <div className="max-w-4xl bg-[#2D0B5A] rounded-[40px] p-10 border border-white/5 shadow-2xl">
          <form className="space-y-8">
            {/* 1. Image Upload Area (IPFS Placeholder) */}
            <div className="group relative border-2 border-dashed border-white/10 rounded-3xl p-12 text-center hover:border-[#E91E63] transition-all duration-500 bg-[#1A0533]/30 cursor-pointer">
              <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
              <FaCloudUploadAlt className="text-5xl mx-auto mb-4 text-slate-500 group-hover:text-[#E91E63] transition-colors" />
              <p className="text-xs font-black uppercase tracking-widest text-white">Upload High-Res Photo</p>
              <p className="text-[10px] text-slate-500 mt-2 italic">Ensure blister & card condition is visible for buyers</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 2. Basic Information */}
              <div className="space-y-6">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#FFB300] flex items-center">
                  <FaInfoCircle className="mr-2" /> Basic Info
                </h3>
                
                <div>
                  <label className="text-[9px] font-black uppercase tracking-widest text-slate-500 block mb-2 ml-1">Item Name / Title</label>
                  <input type="text" placeholder="e.g. Nissan Skyline GT-R R34 (STH)" className="w-full bg-[#1A0533] border border-white/5 rounded-2xl p-4 text-sm focus:outline-none focus:border-[#E91E63] transition-all" />
                </div>

                <div>
                  <label className="text-[9px] font-black uppercase tracking-widest text-slate-500 block mb-2 ml-1">Price (ETH)</label>
                  <div className="relative">
                    <FaEthereum className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FFB300]" />
                    <input type="number" step="0.01" placeholder="0.00" className="w-full bg-[#1A0533] border border-white/5 rounded-2xl p-4 pl-10 text-sm focus:outline-none focus:border-[#FFB300] font-mono" />
                  </div>
                </div>

                <div>
                  <label className="text-[9px] font-black uppercase tracking-widest text-slate-500 block mb-2 ml-1">Condition Description</label>
                  <textarea rows="4" placeholder="Describe blister, card, and unit condition..." className="w-full bg-[#1A0533] border border-white/5 rounded-2xl p-4 text-sm focus:outline-none focus:border-[#E91E63] italic"></textarea>
                </div>
              </div>

              {/* 3. Technical Specifications (Untuk Metadata Section di Detail) */}
              <div className="space-y-6">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#FFB300] flex items-center">
                  <FaCar className="mr-2" /> Technical Specs
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[9px] font-black uppercase tracking-widest text-slate-500 block mb-2 ml-1">Brand</label>
                    <div className="relative">
                      <FaLayerGroup className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 text-xs" />
                      <input type="text" placeholder="Hot Wheels" className="w-full bg-[#1A0533] border border-white/5 rounded-xl p-3 pl-10 text-xs focus:outline-none focus:border-[#E91E63]" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[9px] font-black uppercase tracking-widest text-slate-500 block mb-2 ml-1">Year</label>
                    <div className="relative">
                      <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 text-xs" />
                      <input type="text" placeholder="2024" className="w-full bg-[#1A0533] border border-white/5 rounded-xl p-3 pl-10 text-xs focus:outline-none focus:border-[#E91E63]" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-[9px] font-black uppercase tracking-widest text-slate-500 block mb-2 ml-1">Series / Collection</label>
                  <input type="text" placeholder="Super Treasure Hunt" className="w-full bg-[#1A0533] border border-white/5 rounded-xl p-3 text-xs focus:outline-none focus:border-[#E91E63]" />
                </div>

                <div>
                  <label className="text-[9px] font-black uppercase tracking-widest text-slate-500 block mb-2 ml-1">Scale</label>
                  <div className="relative">
                    <FaRulerCombined className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 text-xs" />
                    <input type="text" placeholder="1:64" className="w-full bg-[#1A0533] border border-white/5 rounded-xl p-3 pl-10 text-xs focus:outline-none focus:border-[#E91E63]" />
                  </div>
                </div>

                <div>
                  <label className="text-[9px] font-black uppercase tracking-widest text-slate-500 block mb-2 ml-1">Material</label>
                  <input type="text" placeholder="Metal / Metal (Rubber Tires)" className="w-full bg-[#1A0533] border border-white/5 rounded-xl p-3 text-xs focus:outline-none focus:border-[#E91E63]" />
                </div>
              </div>
            </div>

            {/* 4. Submission */}
            <div className="pt-6 border-t border-white/5">
              <button
                type="button"
                className="w-full py-6 rounded-3xl bg-gradient-to-r from-[#FFB300] to-[#FF8F00] text-[#1A0533] font-black uppercase italic tracking-[0.2em] transition-all hover:scale-[1.02] shadow-2xl shadow-[#FFB300]/20 flex items-center justify-center group"
              >
                <FaGavel className="mr-3 text-xl group-hover:rotate-12 transition-transform" /> 
                List Item to Blockchain Network
              </button>
              <p className="text-center text-[9px] text-slate-500 mt-4 uppercase tracking-widest">
                Gas fees will be calculated by MetaMask upon confirmation
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}