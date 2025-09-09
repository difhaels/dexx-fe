"use client";
import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import { FaHome, FaBox, FaShoppingBag, FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import Sidebar from '@/app/components/Sidebar';

// Data produk contoh, hanya yang berstatus "Active"
const activeProducts = [
  {
    id: 1,
    image: "https://picsum.photos/300/200",
    name: "Laptop Gaming ROG Strix",
    price: "Rp 25.000.000",
    stock: 10,
    city: "Jakarta",
    rating: 4.8,
  },
  {
    id: 2,
    image: "https://picsum.photos/300/200",
    name: "Kemeja Katun Pria",
    price: "Rp 120.000",
    stock: 50,
    city: "Surabaya",
    rating: 5.0,
  },
  {
    id: 3,
    image: "https://picsum.photos/300/200",
    name: "Sepatu Lari Sport",
    price: "Rp 450.000",
    stock: 20,
    city: "Malang",
    rating: 4.7,
  },
];

export default function SellerDisplayProducts() {
  const [activeSidebarTab] = useState("products");

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Head>
        <title>Display Products | Seller Dashboard</title>
      </Head>

      {/* Sidebar */}
      <Sidebar/>

      {/* Main Content */}
      <main className="flex-1 p-8 ml-64">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900">Produk Sedang Didisplay</h1>
          <p className="text-gray-600 mt-2">Ini adalah produk yang saat ini ditampilkan di etalase toko Anda.</p>
        </header>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {activeProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 truncate">{product.name}</h3>
                <p className="text-md font-bold text-indigo-600 my-1">{product.price}</p>
                
                <div className="text-sm text-gray-500 flex items-center mb-1">
                  <FaBox className="mr-2 text-xs" />
                  Stok: {product.stock}
                </div>

                <div className="text-sm text-gray-500 flex items-center mb-1">
                  <FaMapMarkerAlt className="mr-2 text-xs" />
                  Kota: {product.city}
                </div>
                
                <div className="text-sm text-yellow-500 flex items-center">
                  <FaStar className="mr-1" />
                  <span>{product.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}