"use client";
import React from "react";
import { FaShoppingCart, FaSearch, FaUser, FaPen } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  // Simulasi status login (1 = login, 0 = logout)
  const login = 1;

  return (
    <nav className="sticky top-0 z-50 bg-[#2D0B5A] pb-4 shadow-xl border-b border-white/10">
      {/* Upper Section */}
      <div className="bg-[#1A0533]">
        <div className="container px-4 mx-auto flex items-center justify-end py-1.5 text-[10px] md:text-xs gap-5 text-slate-400 uppercase tracking-widest font-bold">
          <a className="hover:text-[#FFB300] cursor-pointer transition">Blockchain Node</a>
          <a className="hover:text-[#FFB300] cursor-pointer transition">Support</a>
        </div>
      </div>

      {/* Lower Section */}
      <div className="container px-4 mx-auto flex flex-col md:flex-row items-center justify-between pt-4">
        <div className="flex w-full md:w-auto items-center justify-between md:space-x-8">
          <Link href="/">
            <h1 className="text-2xl font-black text-white italic tracking-tighter uppercase">
              Diecast<span className="text-[#FFB300]">CHAIN</span>
            </h1>
          </Link>

          {/* Mobile Menu Icons */}
          {login ? (
            <div className="md:hidden flex space-x-5 text-[#FFB300]">
              <Link href="/cart"><FaShoppingCart className="text-xl hover:text-[#E91E63]" /></Link>
              <Link href="/listing"><FaPen className="text-xl hover:text-[#E91E63]" /></Link>
              <Link href="/user"><FaUser className="text-xl hover:text-[#E91E63]" /></Link>
            </div>
          ) : (
            <div className="md:hidden flex space-x-2">
              <Link href="/register" className="text-xs border-[#E91E63] border-2 text-[#E91E63] px-3 py-1 rounded-lg font-bold">
                DAFTAR
              </Link>
            </div>
          )}
        </div>

        {/* Search Bar */}
        <div className="w-full md:w-1/2 mt-4 md:mt-0 flex items-center bg-[#1A0533] rounded-full px-5 py-2.5 border border-white/10 focus-within:border-[#E91E63] text-slate-300 transition-all shadow-inner">
          <FaSearch className="mr-3 text-slate-500" />
          <input
            type="text"
            placeholder="Cari diecast, skala, atau kolektor..."
            className="w-full bg-transparent focus:outline-none text-sm placeholder:text-slate-600"
          />
        </div>

        {/* Desktop Menu Icons */}
        {login ? (
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/cart" className="group flex flex-col items-center text-slate-300 hover:text-[#E91E63] transition">
              <FaShoppingCart className="text-xl" />
              <span className="text-[10px] mt-1 font-bold uppercase tracking-tighter">Keranjang</span>
            </Link>
            <Link href="/user/listing" className="group flex flex-col items-center text-slate-300 hover:text-[#FFB300] transition">
              <FaPen className="text-xl" />
              <span className="text-[10px] mt-1 font-bold uppercase tracking-tighter">Listing</span>
            </Link>
            <Link href="/user" className="group flex flex-col items-center text-slate-300 hover:text-[#FFB300] transition">
              <FaUser className="text-xl" />
              <span className="text-[10px] mt-1 font-bold uppercase tracking-tighter">Profil</span>
            </Link>
          </div>
        ) : (
          <div className="hidden md:flex space-x-3">
            <Link href="/register" className="border-2 border-[#E91E63] text-[#E91E63] px-5 py-1.5 rounded-xl font-black text-sm hover:bg-[#E91E63] hover:text-white transition uppercase">
              Daftar
            </Link>
            <Link href="/login" className="bg-[#E91E63] text-white px-5 py-1.5 rounded-xl font-black text-sm hover:bg-[#D81B60] transition uppercase shadow-lg shadow-[#E91E63]/20">
              Masuk
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}