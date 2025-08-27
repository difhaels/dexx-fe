import React from "react";
import { FaShoppingCart, FaSearch, FaUser } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import Link from "next/link";

export default function Navbar() {
  const login = 1;

  return (
    <nav className="sticky top-0 z-50 bg-white pb-4 shadow-md">
      {/* Upper */}
      <div className="bg-slate-200">
        <div className="container px-3 md:px-0 mx-auto flex items-center justify-end py-1 text-xs md:text-sm  gap-5 text-slate-600">
          <a>Tentang</a>
          <a>Bantuan</a>
        </div>
      </div>

      {/* lower */}
      <div className="container px-3 md:px-0 mx-auto flex flex-col md:flex-row items-center justify-between pt-4">
        <div className="flex w-full md:w-auto items-center justify-between md:space-x-8">
          <Link href="/products">
            <h1 className="text-2xl font-bold text-[#698ABD]">Dexx</h1>
          </Link>

          {login ? (
            <div className="md:hidden flex space-x-4">
              <FaShoppingCart className="text-2xl text-gray-600" />
              <FaShop className="text-2xl text-slate-600 cursor-pointer hover:text-[#698ABD] transition" />
              <FaUser className="text-2xl text-slate-600 cursor-pointer hover:text-[#698ABD] transition" />
            </div>
          ) : (
            <div className="md:hidden flex space-x-2">
            <button className="border-[#698ABD] border-3 text-sm px-2 rounded-lg flex justify-center items-center">Daftar</button>
            <button className="bg-[#698ABD] text-white text-sm px-2 rounded-lg flex justify-center items-center">Masuk</button>
          </div>
          )}
        </div>

        <div className="w-full md:w-1/2 mt-2 md:mt-0 flex items-center bg-white rounded-full px-4 py-2 ring-1 ring-slate-600 focus-within:ring-2 focus-within:ring-[#A8C4E8] text-slate-600">
          <FaSearch className=" mr-2" />
          <input
            type="text"
            placeholder="Cari produk atau toko..."
            className="w-full bg-white focus:outline-none"
          />
        </div>

        {login ? (
          <div className="hidden md:flex items-center space-x-6">
            <FaShoppingCart className="text-2xl text-slate-600 cursor-pointer hover:text-[#698ABD] transition" />
            <FaShop className="text-2xl text-slate-600 cursor-pointer hover:text-[#698ABD] transition" />
            <FaUser className="text-2xl text-slate-600 cursor-pointer hover:text-[#698ABD] transition" />
          </div>
        ) : (
          <div className="hidden md:flex space-x-2">
            <button className="border-[#698ABD] border-3 px-2 py-1 rounded-lg flex justify-center items-center">Daftar</button>
            <button className="bg-[#698ABD] text-white px-2 py-1 rounded-lg flex justify-center items-center">Masuk</button>
          </div>
        )}
      </div>
    </nav>
  );
}
