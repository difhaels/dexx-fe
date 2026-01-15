"use client";
import Head from "next/head";
import { FaStar, FaMapMarkerAlt, FaEthereum } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Link from "next/link";

// Data produk disesuaikan dengan niche Kolektor Diecast
const products = [
  {
    id: 1,
    name: "Hot Wheels Nissan Skyline GT-R R34 (Ryu Asada Edition)",
    price: "0.05 ETH",
    city: "Jakarta",
    condition: "Mint in Card",
    rating: 4.9,
    sellerRating: 4.9,
    image:
      "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?q=80&w=300&h=200&fit=crop",
  },
  {
    id: 2,
    name: "Tomica Limited Vintage Neo Honda Civic SiR",
    price: "0.08 ETH",
    city: "Bandung",
    condition: "Loose Like New",
    rating: 4.8,
    sellerRating: 4.7,
    image:
      "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=300&h=200&fit=crop",
  },
  {
    id: 3,
    name: "Matchbox Mercedes-Benz G-Class 1:64",
    price: "0.02 ETH",
    city: "Surabaya",
    condition: "Damaged Card",
    rating: 4.5,
    sellerRating: 5.0,
    image:
      "https://images.unsplash.com/photo-1532330393533-443990a51d10?q=80&w=300&h=200&fit=crop",
  },
  {
    id: 4,
    name: "Inno64 Mitsubishi Lancer Evolution III",
    price: "0.07 ETH",
    city: "Yogyakarta",
    condition: "Mint in Box",
    rating: 5.0,
    sellerRating: 4.8,
    image:
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=300&h=200&fit=crop",
  },
  {
    id: 5,
    name: "Hot Wheels Super Treasure Hunt Porsche 911",
    price: "0.15 ETH",
    city: "Bekasi",
    condition: "Protector Case Included",
    rating: 4.9,
    sellerRating: 4.9,
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=300&h=200&fit=crop",
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-[#1A0533] min-h-screen text-white">
      <Head>
        <title>Marketplace | DiecastChain</title>
      </Head>

      <Navbar />

      <main className="container mx-auto p-4 md:p-8">
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black uppercase italic tracking-tighter">
              Collector <span className="text-[#FFB300]">Market</span>
            </h1>
            <p className="text-slate-400 text-sm">
              Peer-to-Peer Trading Secured by Smart Contracts
            </p>
          </div>

          {/* Filter Bar Sederhana */}
          <div className="flex gap-2">
            <select className="bg-[#2D0B5A] border border-[#E91E63]/30 rounded-lg px-3 py-2 text-xs outline-none focus:border-[#E91E63]">
              <option>Semua Brand</option>
              <option>Hot Wheels</option>
              <option>Tomica</option>
            </select>
            <select className="bg-[#2D0B5A] border border-[#E91E63]/30 rounded-lg px-3 py-2 text-xs outline-none focus:border-[#E91E63]">
              <option>Skala 1:64</option>
              <option>Skala 1:43</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <Link href="/home/product">
              <div
                key={product.id}
                className="group bg-[#2D0B5A] rounded-2xl border border-white/5 overflow-hidden transition-all hover:border-[#E91E63]/50 hover:shadow-[0_0_20px_rgba(233,30,99,0.2)] cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-44 object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute top-2 right-2 bg-[#E91E63] text-[10px] font-bold px-2 py-1 rounded-md uppercase">
                    {product.condition}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-xs md:text-sm font-bold text-slate-100 mb-1 truncate group-hover:text-[#FFB300] transition-colors">
                    {product.name}
                  </h3>

                  <div className="flex items-center text-[#FFB300] font-black text-lg mb-3">
                    <FaEthereum className="mr-1 text-sm" />
                    <span>{product.price}</span>
                  </div>

                  <div className="flex items-center text-[10px] text-slate-400 mb-3 uppercase tracking-widest">
                    <FaMapMarkerAlt className="mr-1 text-[#E91E63]" />
                    <span>{product.city}</span>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/5 pt-3">
                    <div className="flex items-center text-[#FFB300] text-xs">
                      <FaStar className="mr-1" />
                      <span className="font-bold">{product.rating}</span>
                    </div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">
                      Seller:{" "}
                      <span className="text-slate-300">
                        {product.sellerRating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer Waterfall */}
      <footer className="mt-20 py-10 border-t border-white/5 text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-slate-600">
          DiecastChain P2P Node — 2025 Database Local Simulation
        </p>
      </footer>
    </div>
  );
}
