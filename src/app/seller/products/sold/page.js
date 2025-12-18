"use client";
import Head from "next/head";
import { FaBox, FaStar, FaReply, FaTag, FaEthereum, FaCheckDouble } from "react-icons/fa";
import Link from "next/link";
import Sidebar from "@/app/components/Sidebar";

// Data produk yang sudah terjual disesuaikan dengan niche Diecast
const soldProductsData = [
  {
    id: 1,
    name: "Hot Wheels Nissan Skyline GT-R R34 STH",
    image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?q=80&w=400&h=300&fit=crop",
    price: "0.12 ETH",
    category: "Super Treasure Hunt",
    soldCount: 5,
    rating: 4.9,
    reviewCount: 3,
  },
  {
    id: 2,
    name: "Tomica Limited Vintage Neo Honda Civic",
    image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=400&h=300&fit=crop",
    price: "0.08 ETH",
    category: "Tomica Limited",
    soldCount: 12,
    rating: 4.7,
    reviewCount: 1,
  },
  {
    id: 3,
    name: "Inno64 Mitsubishi Lancer Evolution III",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=400&h=300&fit=crop",
    price: "0.07 ETH",
    category: "Inno64",
    soldCount: 8,
    rating: 5.0,
    reviewCount: 2,
  },
];

export default function SoldProductsPage() {
  return (
    <div className="flex min-h-screen bg-[#1A0533]">
      <Head>
        <title>Sold Items | DiecastChain Seller</title>
      </Head>

      <Sidebar x="home" edit={1} />

      <main className="flex-1 p-10 ml-64 text-white">
        <header className="mb-10 relative">
          <div className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-[#FFB300] opacity-5 blur-[100px]"></div>
          <h1 className="text-5xl font-black italic tracking-tighter uppercase">
            Sold <span className="text-[#FFB300]">Inventory</span>
          </h1>
          <p className="text-slate-400 mt-2 text-sm italic border-l-2 border-[#E91E63] pl-3 uppercase tracking-wider">
            Rekam jejak koleksi yang telah berpindah tangan melalui Smart Contract.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {soldProductsData.map((product) => (
            <div
              key={product.id}
              className="group bg-[#2D0B5A] rounded-3xl border border-white/5 overflow-hidden transition-all hover:border-[#FFB300]/30 hover:shadow-[0_0_30px_rgba(255,179,0,0.1)]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-52 object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute top-4 right-4 bg-green-500/20 backdrop-blur-md text-green-400 text-[10px] font-black px-3 py-1.5 rounded-xl border border-green-500/30 flex items-center uppercase tracking-tighter italic">
                  <FaCheckDouble className="mr-1" /> On-Chain Proven
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-black text-white italic uppercase tracking-tighter mb-4 truncate group-hover:text-[#FFB300] transition-colors">
                  {product.name}
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex flex-col bg-[#1A0533] p-3 rounded-2xl border border-white/5">
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1 flex items-center">
                        <FaEthereum className="mr-1 text-[#FFB300]" /> Final Price
                    </span>
                    <span className="font-black text-[#FFB300] italic">{product.price}</span>
                  </div>
                  <div className="flex flex-col bg-[#1A0533] p-3 rounded-2xl border border-white/5">
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1 flex items-center">
                        <FaBox className="mr-1 text-[#E91E63]" /> Total Sold
                    </span>
                    <span className="font-black text-white">{product.soldCount} Units</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">
                    <FaTag className="text-[#E91E63]" />
                    <span>Series: {product.category}</span>
                </div>

                <div className="flex justify-between items-center pt-5 border-t border-white/5">
                  <div className="flex items-center text-[#FFB300]">
                    <FaStar className="mr-1.5 text-sm" />
                    <span className="font-black italic text-sm">{product.rating}</span>
                    <span className="text-[10px] text-slate-500 ml-1 font-bold">/ 5.0</span>
                  </div>
                  
                  <Link href={`/seller/products/review`}>
                    <div className="relative flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/5 text-[10px] font-black uppercase tracking-widest text-[#E91E63] hover:bg-[#E91E63] hover:text-white transition-all cursor-pointer">
                      <FaReply className="text-sm" />
                      <span>Feedback</span>
                      {product.reviewCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-[#FFB300] text-[#1A0533] text-[9px] font-black rounded-full h-5 w-5 flex items-center justify-center shadow-lg">
                          {product.reviewCount}
                        </span>
                      )}
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