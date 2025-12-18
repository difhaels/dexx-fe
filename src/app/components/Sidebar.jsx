"use client";
import React from "react";
import { FaHome, FaBox, FaShoppingBag, FaUserEdit, FaChartLine } from "react-icons/fa";
import Link from "next/link";

export default function Sidebar({ x, edit }) {
  return (
    <aside className="fixed w-64 bg-[#1A0533] text-white p-6 min-h-screen flex flex-col justify-between border-r border-white/5 shadow-2xl">
      {/* Bagian Atas: Branding & Navigasi */}
      <div>
        <div className="mb-10">
          <h2 className="text-[10px] uppercase tracking-[0.3em] text-[#E91E63] font-bold mb-1">
            Blockchain Node
          </h2>
          <h1 className="text-2xl font-black italic tracking-tighter uppercase">
            SELLER<span className="text-[#FFB300]">HUB</span>
          </h1>
        </div>

        <nav>
          <ul className="space-y-2">
            <li>
              <Link
                href="/seller/dashboard"
                className={`flex items-center p-3 rounded-xl transition-all duration-200 group ${
                  x === "home"
                    ? "bg-[#E91E63] text-white shadow-lg shadow-[#E91E63]/20"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <FaHome className={`mr-3 text-lg ${x === "home" ? "text-white" : "group-hover:text-[#FFB300]"}`} />
                <span className="font-bold uppercase text-xs tracking-widest">Overview</span>
              </Link>
            </li>
            
            <li>
              <Link
                href="/seller/orders"
                className={`flex items-center p-3 rounded-xl transition-all duration-200 group ${
                  x === "orders"
                    ? "bg-[#E91E63] text-white shadow-lg shadow-[#E91E63]/20"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <FaShoppingBag className={`mr-3 text-lg ${x === "orders" ? "text-white" : "group-hover:text-[#FFB300]"}`} />
                <span className="font-bold uppercase text-xs tracking-widest">Escrow Orders</span>
              </Link>
            </li>

            <li>
              <Link
                href="/seller/products"
                className={`flex items-center p-3 rounded-xl transition-all duration-200 group ${
                  x === "products"
                    ? "bg-[#E91E63] text-white shadow-lg shadow-[#E91E63]/20"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <FaBox className={`mr-3 text-lg ${x === "products" ? "text-white" : "group-hover:text-[#FFB300]"}`} />
                <span className="font-bold uppercase text-xs tracking-widest">Inventory</span>
              </Link>
            </li>

            <li>
              <Link
                href="/seller/analytics"
                className={`flex items-center p-3 rounded-xl transition-all duration-200 group ${
                  x === "analytics"
                    ? "bg-[#E91E63] text-white shadow-lg shadow-[#E91E63]/20"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <FaChartLine className={`mr-3 text-lg ${x === "analytics" ? "text-white" : "group-hover:text-[#FFB300]"}`} />
                <span className="font-bold uppercase text-xs tracking-widest">On-Chain Stats</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Bagian Bawah: Profile Edit */}
      <div className="pt-6 border-t border-white/5">
        {edit ? (
          <Link
            href="/seller/profile/edit"
            className="flex items-center justify-center bg-transparent border-2 border-[#FFB300] text-[#FFB300] py-3 px-4 rounded-xl transition-all hover:bg-[#FFB300] hover:text-[#1A0533] font-black uppercase text-xs tracking-tighter"
          >
            <FaUserEdit className="mr-2 text-lg" />
            <span>Edit Store Profile</span>
          </Link>
        ) : (
          <div className="px-4 py-2 bg-white/5 rounded-lg">
            <p className="text-[8px] uppercase text-slate-500 font-bold">Node Status</p>
            <p className="text-[10px] text-green-400 font-mono">● Connected to Localhost:8545</p>
          </div>
        )}
      </div>
    </aside>
  );
}