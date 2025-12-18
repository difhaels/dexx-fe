"use client";
import Link from "next/link";
import Head from "next/head";

export default function WelcomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#2D0B5A] text-white">
      <Head>
        <title>Welcome | Diecast Chain</title>
      </Head>

      {/* Ornamen Background sesuai Palette */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-[#E91E63] opacity-20 blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#FFB300] opacity-10 blur-[120px]"></div>
      </div>

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        
        {/* Badge Animasi */}
        <div className="mb-6 inline-block rounded-full border border-[#E91E63]/30 bg-[#E91E63]/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#E91E63]">
          Next-Gen P2P Blockchain
        </div>

        {/* Logo & Title */}
        <div className="mb-6 flex items-center justify-center space-x-4">
          <span className="text-5xl drop-shadow-[0_0_15px_rgba(233,30,99,0.5)]">🏎️</span>
          <h1 className="text-6xl font-black tracking-tighter uppercase italic md:text-8xl">
            Diecast<span className="text-[#FFB300]">CHAIN</span>
          </h1>
        </div>
        
        <p className="mb-12 max-w-xl text-lg leading-relaxed text-slate-300 md:text-xl">
          Platform perdagangan Peer-to-Peer terdesentralisasi khusus komunitas kolektor diecast. 
          Keamanan transaksi dijamin oleh <span className="text-[#E91E63] font-semibold">Smart Contract</span>.
        </p>

        {/* Tombol Navigasi Utama */}
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
          <Link 
            href="/market" 
            className="group relative flex items-center justify-center overflow-hidden rounded-xl bg-[#E91E63] px-12 py-4 font-black uppercase tracking-wider text-white transition-all hover:scale-105 hover:bg-[#D81B60] hover:shadow-[0_0_20px_rgba(233,30,99,0.4)]"
          >
            <span>Jelajahi Market</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>

          <Link 
            href="/login" 
            className="flex items-center justify-center rounded-xl border-2 border-[#FFB300] px-12 py-4 font-black uppercase tracking-wider text-[#FFB300] transition-all hover:bg-[#FFB300] hover:text-[#2D0B5A]"
          >
            Masuk / Daftar
          </Link>
        </div>

        {/* Feature Highlights */}
        <div className="mt-20 grid w-full max-w-4xl grid-cols-1 gap-8 border-t border-white/10 pt-10 md:grid-cols-3">
          <div className="flex flex-col items-center">
            <div className="mb-2 text-[#FFB300] font-bold uppercase tracking-tighter">Bold Network</div>
            <p className="text-xs text-slate-400">Direct Collector to Collector Interaction</p>
          </div>
          <div className="flex flex-col items-center border-white/10 md:border-x">
            <div className="mb-2 text-[#E91E63] font-bold uppercase tracking-tighter">Escrow System</div>
            <p className="text-xs text-slate-400">Smart Contract Security Protocol</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-2 text-[#FFB300] font-bold uppercase tracking-tighter">Immutable</div>
            <p className="text-xs text-slate-400">On-Chain Transaction History</p>
          </div>
        </div>
      </main>

      {/* Footer Waterfall Info */}
      <footer className="absolute bottom-6 w-full text-center text-[10px] uppercase tracking-[0.2em] text-slate-500">
        DiecastChain © 2025 — Implementasi Metode Waterfall
      </footer>
    </div>
  );
}