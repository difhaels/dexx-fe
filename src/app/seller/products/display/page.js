"use client";
import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import { FaBox, FaEdit, FaTag, FaEthereum, FaPlusCircle } from 'react-icons/fa';
import Sidebar from '@/app/components/Sidebar';

// Data produk disesuaikan untuk Kolektor Diecast
const activeProducts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?q=80&w=300&h=200&fit=crop",
    name: "Nissan Skyline GT-R R34 STH",
    price: "0.12 ETH",
    stock: 1,
    category: "Hot Wheels",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=300&h=200&fit=crop",
    name: "Honda Civic SiR EG6 - Yellow",
    price: "0.05 ETH",
    stock: 2,
    category: "Tomica",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1532330393533-443990a51d10?q=80&w=300&h=200&fit=crop",
    name: "Mercedes-Benz G-Class 6x6",
    price: "0.08 ETH",
    stock: 1,
    category: "Matchbox",
  },
];

export default function SellerDisplayProducts() {
  return (
    <div className="flex min-h-screen bg-[#1A0533]">
      <Head>
        <title>Inventory | DiecastChain Seller</title>
      </Head>

      <Sidebar x="products" edit={1}/>

      <main className="flex-1 p-10 ml-64 text-white">
        <header className="mb-10 flex justify-between items-end">
          <div>
            <h1 className="text-5xl font-black italic tracking-tighter uppercase">
              Active <span className="text-[#FFB300]">Listings</span>
            </h1>
            <p className="text-slate-400 mt-2 text-sm italic border-l-2 border-[#E91E63] pl-3">
              Kelola koleksi diecast Anda yang saat ini terdaftar di Smart Contract etalase.
            </p>
          </div>
          
          <Link href="/seller/products/add">
            <button className="flex items-center space-x-2 bg-[#E91E63] hover:bg-[#D81B60] text-white px-6 py-3 rounded-xl font-black uppercase text-xs tracking-widest transition-all shadow-lg shadow-[#E91E63]/20 hover:scale-105">
              <FaPlusCircle />
              <span>Tambah Diecast</span>
            </button>
          </Link>
        </header>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {activeProducts.map((product) => (
            <div key={product.id} className="bg-[#2D0B5A] rounded-3xl border border-white/5 overflow-hidden group hover:border-[#FFB300]/30 transition-all duration-300">
              <div className="relative overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-3 left-3 bg-[#1A0533]/80 backdrop-blur-md text-[#FFB300] text-[10px] font-black px-3 py-1 rounded-full uppercase border border-[#FFB300]/20">
                  On-Chain
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-md font-black text-white italic uppercase tracking-tighter mb-4 truncate group-hover:text-[#FFB300] transition-colors">
                  {product.name}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center text-slate-400 font-bold uppercase tracking-widest">
                      <FaEthereum className="mr-2 text-[#FFB300]" />
                      Price
                    </div>
                    <span className="font-black text-[#FFB300] italic text-lg">{product.price}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center text-slate-400 font-bold uppercase tracking-widest">
                      <FaBox className="mr-2 text-[#E91E63]" />
                      Stock
                    </div>
                    <span className="font-black text-white">{product.stock} Units</span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center text-slate-400 font-bold uppercase tracking-widest">
                      <FaTag className="mr-2 text-[#E91E63]" />
                      Brand
                    </div>
                    <span className="font-bold text-slate-200">{product.category}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <Link href={`/seller/products/edit/${product.id}`}>
                    <div className="flex items-center justify-center space-x-2 w-full py-2 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer font-bold uppercase text-[10px] tracking-widest">
                      <FaEdit />
                      <span>Edit Listing</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}