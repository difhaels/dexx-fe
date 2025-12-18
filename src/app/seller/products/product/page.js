"use client";
import Head from "next/head";
import Sidebar from "@/app/components/Sidebar";
import Link from "next/link";
import {
  FaBox, FaTag, FaEdit, FaArchive, FaTrash, FaStar, FaReply, 
  FaArrowLeft, FaEthereum, FaLink
} from "react-icons/fa";

// Data produk disesuaikan untuk Kolektor Diecast & Blockchain
const productData = {
  id: 1,
  image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?q=80&w=600&h=400&fit=crop",
  name: "Hot Wheels Nissan Skyline GT-R R34 (Super Treasure Hunt)",
  price: "0.12",
  stock: 1,
  status: "Listed",
  rating: 4.9,
  reviewCount: 5,
  contractAddress: "0x71C...a8f1"
};

const getStatusClasses = (status) => {
  switch (status) {
    case "Listed":
      return "bg-green-500/10 text-green-400 border-green-500/20";
    case "Sold Out":
      return "bg-red-500/10 text-red-400 border-red-500/20";
    case "Archived":
      return "bg-slate-500/10 text-slate-400 border-slate-500/20";
    default:
      return "bg-white/5 text-white border-white/10";
  }
};

export default function SellerProductDetailPage() {
  return (
    <div className="flex min-h-screen bg-[#1A0533]">
      <Head>
        <title>{productData.name} | DiecastChain Admin</title>
      </Head>

      <Sidebar x="products" edit={1} />

      <main className="flex-1 p-10 ml-64 text-white">
        <header className="mb-8 relative">
          <Link href="/seller/products/display">
            <span className="flex items-center space-x-2 text-[#FFB300] hover:text-white transition-colors font-black uppercase text-[10px] tracking-widest mb-4 cursor-pointer">
              <FaArrowLeft />
              <span>Back to Inventory</span>
            </span>
          </Link>
          <h1 className="text-4xl font-black italic tracking-tighter uppercase">
            Product <span className="text-[#E91E63]">Detail</span>
          </h1>
        </header>

        <div className="bg-[#2D0B5A] rounded-3xl border border-white/5 p-8 flex flex-col lg:flex-row gap-12 shadow-2xl">
          {/* Bagian Kiri: Image */}
          <div className="w-full lg:w-2/5">
            <div className="relative group overflow-hidden rounded-2xl border border-white/10">
              <img
                src={productData.image}
                alt={productData.name}
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-[#1A0533]/80 backdrop-blur-md p-3 rounded-xl border border-white/10">
                <FaLink className="text-[#FFB300] text-sm" />
              </div>
            </div>
            <p className="mt-4 text-center text-[10px] font-mono text-slate-500 uppercase tracking-widest">
               On-Chain ID: {productData.contractAddress}
            </p>
          </div>

          {/* Bagian Kanan: Info & Actions */}
          <div className="w-full lg:w-3/5 space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-black italic uppercase tracking-tighter">
                {productData.name}
              </h2>
              <div className="flex items-center text-4xl font-black text-[#FFB300] italic">
                <FaEthereum className="mr-2 text-2xl" />
                <span>{productData.price} ETH</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#1A0533] p-4 rounded-2xl border border-white/5 flex flex-col">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-1 flex items-center">
                  <FaBox className="mr-2 text-[#E91E63]" /> Inventory Stock
                </span>
                <span className="text-xl font-black">{productData.stock} Units</span>
              </div>
              <div className="bg-[#1A0533] p-4 rounded-2xl border border-white/5 flex flex-col">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-1 flex items-center">
                  <FaTag className="mr-2 text-[#E91E63]" /> Listing Status
                </span>
                <span className={`text-sm font-black uppercase tracking-widest mt-1 px-3 py-0.5 rounded-full border inline-block w-fit ${getStatusClasses(productData.status)}`}>
                  {productData.status}
                </span>
              </div>
              <div className="bg-[#1A0533] p-4 rounded-2xl border border-white/5 flex flex-col col-span-2">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-1 flex items-center">
                  <FaStar className="mr-2 text-[#FFB300]" /> Collector Rating
                </span>
                <div className="flex items-center space-x-2">
                    <span className="text-xl font-black">{productData.rating}</span>
                    <span className="text-xs text-slate-500">/ 5.0 Rating based on {productData.reviewCount} Reviews</span>
                </div>
              </div>
            </div>

            {/* Management Controls */}
            <div className="pt-8 border-t border-white/5 space-y-6">
              <h3 className="text-sm font-black uppercase tracking-[0.3em] text-[#E91E63]">
                Smart Contract Management
              </h3>

              <div className="flex flex-wrap gap-4">
                {/* Update Stock */}
                <div className="flex items-center space-x-2 bg-[#1A0533] p-1.5 rounded-xl border border-white/10">
                  <input
                    type="number"
                    defaultValue="1"
                    className="w-16 bg-transparent text-center font-black text-[#FFB300] outline-none"
                  />
                  <button className="flex items-center space-x-2 px-6 py-2.5 rounded-lg bg-[#E91E63] text-white font-black uppercase text-[10px] tracking-widest transition hover:scale-105 shadow-lg shadow-[#E91E63]/20">
                    <FaBox />
                    <span>Update Block Stock</span>
                  </button>
                </div>

                {/* Edit & Reviews */}
                <Link href={`/seller/products/edit/${productData.id}`}>
                  <span className="flex items-center space-x-2 px-6 py-4 rounded-xl border-2 border-[#FFB300] text-[#FFB300] font-black uppercase text-[10px] tracking-widest transition hover:bg-[#FFB300] hover:text-[#1A0533] cursor-pointer">
                    <FaEdit />
                    <span>Modify Listing</span>
                  </span>
                </Link>

                <Link href={`/seller/review`}>
                  <span className="relative flex items-center space-x-2 px-6 py-4 rounded-xl bg-white/5 text-white font-black uppercase text-[10px] tracking-widest transition hover:bg-white/10 cursor-pointer">
                    <FaReply className="text-[#FFB300]" />
                    <span>Collector Reviews</span>
                    {productData.reviewCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-[#E91E63] text-white text-[10px] font-black rounded-full h-5 w-5 flex items-center justify-center">
                        {productData.reviewCount}
                      </span>
                    )}
                  </span>
                </Link>

                {/* Dangerous Actions */}
                <div className="flex gap-4 w-full pt-4">
                    <button className="flex-1 flex items-center justify-center space-x-2 px-6 py-4 rounded-xl border border-white/10 text-slate-500 font-black uppercase text-[10px] tracking-widest hover:text-white hover:border-white transition">
                        <FaArchive />
                        <span>Archive On-Chain</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center space-x-2 px-6 py-4 rounded-xl bg-red-600/10 border border-red-600/30 text-red-500 font-black uppercase text-[10px] tracking-widest hover:bg-red-600 hover:text-white transition">
                        <FaTrash />
                        <span>Destroy Listing</span>
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}