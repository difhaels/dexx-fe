"use client";
import Head from 'next/head';
import Sidebar from '@/app/components/Sidebar';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { FaPlus, FaBox, FaShoppingBag, FaFilter, FaEthereum, FaLink } from 'react-icons/fa';

// Data produk disesuaikan untuk Kolektor Diecast & Status Blockchain
const allProducts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?q=80&w=400&h=300&fit=crop",
    name: "Nissan Skyline GT-R R34 STH",
    price: "0.12",
    stock: 1,
    status: "On-Chain",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=400&h=300&fit=crop",
    name: "Honda Civic SiR EG6 Yellow",
    price: "0.05",
    stock: 0,
    status: "Sold Out",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1532330393533-443990a51d10?q=80&w=400&h=300&fit=crop",
    name: "Mercedes-Benz G-Class 6x6",
    price: "0.08",
    stock: 1,
    status: "On-Chain",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=400&h=300&fit=crop",
    name: "Lancer Evolution III",
    price: "0.07",
    stock: 5,
    status: "Archived",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=400&h=300&fit=crop",
    name: "Porsche 911 GT3 RS",
    price: "0.15",
    stock: 1,
    status: "Pending Node",
  },
];

const getStatusClasses = (status) => {
  switch (status) {
    case "On-Chain":
      return "bg-green-500/10 text-green-400 border-green-500/20";
    case "Sold Out":
      return "bg-red-500/10 text-red-400 border-red-500/20";
    case "Archived":
      return "bg-slate-500/10 text-slate-400 border-slate-500/20";
    case "Pending Node":
      return "bg-[#FFB300]/10 text-[#FFB300] border-[#FFB300]/20";
    default:
      return "bg-white/5 text-white border-white/10";
  }
};

export default function SellerProducts() {
  const [filter, setFilter] = useState("Semua");

  const filteredProducts = useMemo(() => {
    if (filter === "Semua") return allProducts;
    return allProducts.filter(product => product.status === filter);
  }, [filter]);

  const filterOptions = ["Semua", "On-Chain", "Sold Out", "Archived", "Pending Node"];

  return (
    <div className="flex min-h-screen bg-[#1A0533]">
      <Head>
        <title>Inventory Hub | DiecastChain</title>
      </Head>

      <Sidebar x="products" edit={1}/>

      <main className="flex-1 p-10 ml-64 text-white">
        <header className="mb-10 relative">
          <div className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-[#E91E63] opacity-5 blur-[100px]"></div>
          <h1 className="text-5xl font-black italic tracking-tighter uppercase">
            Inventory <span className="text-[#FFB300]">Hub</span>
          </h1>
          <p className="text-slate-400 mt-2 text-sm italic border-l-2 border-[#E91E63] pl-3 uppercase tracking-wider">
            Manajemen koleksi diecast Anda yang terdaftar di Distributed Ledger.
          </p>
        </header>

        {/* Top Navigation & Actions */}
        <div className="flex flex-wrap items-center justify-between mb-10 gap-4">
          <h2 className="text-2xl font-black italic uppercase tracking-tighter text-[#FFB300]">Collection List</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/seller/products/add">
              <span className="flex items-center space-x-2 px-6 py-3 bg-[#E91E63] text-white rounded-xl font-black uppercase text-[10px] tracking-[0.2em] transition-all hover:scale-105 shadow-lg shadow-[#E91E63]/20 cursor-pointer">
                <FaPlus />
                <span>New Listing</span>
              </span>
            </Link>
            <Link href="/seller/products/sold">
              <span className="flex items-center space-x-2 px-5 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all cursor-pointer">
                <FaShoppingBag />
                <span>Sold Items</span>
              </span>
            </Link>
            <Link href="/seller/products/display">
              <span className="flex items-center space-x-2 px-5 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all cursor-pointer">
                <FaBox />
                <span>Showcase</span>
              </span>
            </Link>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mb-8 flex flex-wrap items-center gap-3 bg-[#2D0B5A] p-4 rounded-2xl border border-white/5 shadow-inner">
          <div className="flex items-center text-[#FFB300] font-black uppercase text-[10px] tracking-widest mr-4">
            <FaFilter className="mr-2" /> Filter Hub:
          </div>
          {filterOptions.map(option => (
            <button
              key={option}
              onClick={() => setFilter(option)}
              className={`px-4 py-1.5 text-[9px] rounded-full font-black uppercase tracking-widest transition-all border ${
                filter === option 
                ? 'bg-[#E91E63] text-white border-[#E91E63] shadow-lg shadow-[#E91E63]/20' 
                : 'bg-[#1A0533] text-slate-400 border-white/5 hover:border-[#E91E63]/50'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link key={product.id} href={`/seller/products/${product.id}`}>
                <div className="group bg-[#2D0B5A] rounded-2xl border border-white/5 overflow-hidden transition-all hover:border-[#FFB300]/30 cursor-pointer relative">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute top-2 right-2 bg-[#1A0533]/60 backdrop-blur-sm p-1.5 rounded-lg border border-white/10">
                        <FaLink className="text-[#FFB300] text-[10px]" />
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-[11px] font-black text-white italic uppercase tracking-tight truncate group-hover:text-[#FFB300] transition-colors mb-1">
                        {product.name}
                    </h3>
                    <div className="flex items-center text-sm font-black text-[#FFB300] italic mb-3">
                        <FaEthereum className="mr-1 text-[10px]" /> {product.price}
                    </div>
                    
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center justify-between text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                        <span>Stock: <span className="text-white">{product.stock}</span></span>
                      </div>
                      <span className={`text-center py-1 text-[8px] font-black uppercase tracking-[0.2em] rounded-md border ${getStatusClasses(product.status)}`}>
                        {product.status}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-20 bg-[#2D0B5A] rounded-3xl border border-dashed border-white/10">
              <p className="text-slate-500 font-bold uppercase tracking-widest text-sm italic">No diecast found in this block filter.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}