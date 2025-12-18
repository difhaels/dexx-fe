"use client";
import Head from 'next/head';
import Link from 'next/link';
import { FaStore, FaMagic, FaArrowRight, FaCarSide, FaShieldAlt } from 'react-icons/fa';

export default function SellerWelcomePage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-[#1A0533] p-6 overflow-hidden">
      <Head>
        <title>Become a Collector Seller | DiecastChain</title>
      </Head>

      {/* Efek Cahaya Latar Belakang */}
      <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-[#E91E63] opacity-10 blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#FFB300] opacity-5 blur-[120px]"></div>

      <div className="relative z-10 w-full max-w-xl rounded-[40px] bg-[#2D0B5A] p-10 text-center shadow-2xl border border-white/5">
        
        {/* Ikon Utama dengan Glow */}
        <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br from-[#E91E63] to-[#2D0B5A] text-white shadow-[0_0_30px_rgba(233,30,99,0.3)] rotate-3 hover:rotate-0 transition-transform duration-500">
          <FaCarSide className="text-5xl" />
        </div>

        <h1 className="mb-4 text-4xl font-black italic tracking-tighter uppercase text-white">
          Mulai <span className="text-[#FFB300]">Listing</span> P2P Kamu.
        </h1>
        
        <p className="mb-8 text-slate-400 text-sm leading-relaxed max-w-sm mx-auto font-medium uppercase tracking-wider">
          Node kamu belum terdaftar sebagai <span className="text-[#E91E63]">Verified Seller</span>. 
          Buka etalase digitalmu sekarang dan mulai bertransaksi aman via Smart Contract.
        </p>

        {/* Info Cepat Kenapa Harus Buka Toko */}
        <div className="mb-10 grid grid-cols-2 gap-4 text-left">
            <div className="p-4 rounded-2xl bg-[#1A0533] border border-white/5 flex items-center space-x-3">
                <FaShieldAlt className="text-[#FFB300] text-xl" />
                <span className="text-[10px] font-black uppercase text-slate-300 tracking-tighter leading-tight">Secure Escrow System</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#1A0533] border border-white/5 flex items-center space-x-3">
                <FaStore className="text-[#E91E63] text-xl" />
                <span className="text-[10px] font-black uppercase text-slate-300 tracking-tighter leading-tight">Zero Central Fee</span>
            </div>
        </div>

        <Link href="/seller/register">
          <span className="inline-flex w-full items-center justify-center space-x-3 rounded-2xl bg-[#E91E63] px-8 py-5 font-black uppercase text-xs tracking-[0.3em] text-white transition-all hover:scale-[1.02] hover:bg-[#D81B60] shadow-xl shadow-[#E91E63]/20 cursor-pointer">
            <span>Buka Toko Sekarang</span>
            <FaArrowRight className="text-sm" />
          </span>
        </Link>
        
        <p className="mt-8 text-[10px] text-slate-600 font-bold uppercase tracking-widest">
            DiecastChain P2P Network v1.0 — 2025
        </p>
      </div>
    </div>
  );
}