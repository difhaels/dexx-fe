"use client";
import React from "react";
import Head from "next/head";
import Sidebar from "@/app/components/Sidebar";
import {
  FaStore,
  FaMapMarkerAlt,
  FaImage,
  FaPhoneAlt,
  FaClock,
  FaSave,
  FaEthereum,
} from "react-icons/fa";

export default function EditSellerProfile() {
  return (
    <div className="flex min-h-screen bg-[#1A0533]">
      <Head>
        <title>Edit Store Metadata | DiecastChain</title>
      </Head>

      <Sidebar x="home" edit={1} />

      <main className="flex-1 p-10 ml-64 text-white flex justify-center">
        <div className="w-full max-w-2xl bg-[#2D0B5A] shadow-2xl rounded-[32px] p-8 border border-white/5 relative overflow-hidden">
          {/* Background Decor */}
          <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[#E91E63] opacity-10 blur-[50px]"></div>

          <header className="mb-8">
            <h2 className="text-3xl font-black italic tracking-tighter uppercase text-white">
              Store <span className="text-[#FFB300]">Metadata</span>
            </h2>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">
              Konfigurasi identitas toko Anda di jaringan P2P.
            </p>
          </header>

          <form className="space-y-6">
            {/* Wallet Address - Read Only Simulation */}
            <div>
              <label className=" text-[10px] font-black uppercase tracking-[0.2em] text-[#FFB300] mb-2 flex items-center">
                <FaEthereum className="mr-2" /> Linked Wallet Address
                (Permanent)
              </label>
              <input
                type="text"
                disabled
                value="0x71C...a8f15FbDB2315678afecb"
                className="w-full bg-[#1A0533] border border-white/10 rounded-xl p-3 text-xs font-mono text-slate-500 cursor-not-allowed"
              />
            </div>

            {/* Nama Toko */}
            <div>
              <label className=" text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 mb-2 flex items-center">
                <FaStore className="mr-2 text-[#E91E63]" /> Nama Toko /
                Collector Alias
              </label>
              <input
                type="text"
                className="w-full bg-[#1A0533] border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-[#E91E63] transition-all"
                placeholder="Contoh: Jaka Diecast STH"
              />
            </div>

            {/* Deskripsi Toko */}
            <div>
              <label className=" text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 mb-2 flex items-center">
                Deskripsi Bio Kolektor
              </label>
              <textarea
                rows={3}
                className="w-full bg-[#1A0533] border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-[#E91E63] transition-all"
                placeholder="Ceritakan spesialisasi koleksi Anda..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Alamat */}
              <div>
                <label className=" text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 mb-2 flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-[#E91E63]" /> Markas /
                  Kota
                </label>
                <input
                  type="text"
                  className="w-full bg-[#1A0533] border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-[#E91E63]"
                  placeholder="Jakarta Selatan"
                />
              </div>

              {/* Kontak */}
              <div>
                <label className=" text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 mb-2 flex items-center">
                  <FaPhoneAlt className="mr-2 text-[#E91E63]" /> Kontak
                  Telegram/WA
                </label>
                <input
                  type="text"
                  className="w-full bg-[#1A0533] border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-[#E91E63]"
                  placeholder="@jakadiecast"
                />
              </div>
            </div>

            {/* Media Upload */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className=" text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 mb-2 flex items-center">
                  <FaImage className="mr-2 text-[#FFB300]" /> Node Avatar (Logo)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full text-[10px] text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-[10px] file:font-black file:bg-[#E91E63] file:text-white hover:file:bg-[#D81B60]"
                />
              </div>
              <div>
                <label className=" text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 mb-2 flex items-center">
                  <FaImage className="mr-2 text-[#FFB300]" /> Store Banner
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full text-[10px] text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-[10px] file:font-black file:bg-[#E91E63] file:text-white hover:file:bg-[#D81B60]"
                />
              </div>
            </div>

            {/* Jam Operasional */}
            <div>
              <label className=" text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 mb-2 flex items-center">
                <FaClock className="mr-2 text-[#E91E63]" /> Jam Aktif Node
              </label>
              <input
                type="text"
                className="w-full bg-[#1A0533] border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-[#E91E63]"
                placeholder="Contoh: 09.00 - 21.00 WIB"
              />
            </div>

            {/* Tombol Simpan */}
            <button
              type="button"
              className="w-full bg-[#E91E63] hover:bg-[#D81B60] text-white font-black uppercase text-xs tracking-[0.3em] py-4 px-4 rounded-xl transition-all hover:scale-[1.02] shadow-xl shadow-[#E91E63]/20 flex items-center justify-center space-x-2"
            >
              <FaSave className="text-lg" />
              <span>Broadcast Changes</span>
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
