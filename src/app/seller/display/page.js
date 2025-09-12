"use client";
import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import { FaBox, FaEdit, FaTag, FaDollarSign } from 'react-icons/fa';
import Sidebar from '@/app/components/Sidebar';

// Data produk contoh, hanya yang berstatus "Active"
const activeProducts = [
  {
    id: 1,
    image: "https://picsum.photos/300/200",
    name: "Laptop Gaming ROG Strix",
    price: "Rp 25.000.000",
    stock: 10,
    category: "Elektronik",
  },
  {
    id: 2,
    image: "https://picsum.photos/300/200",
    name: "Kemeja Katun Pria",
    price: "Rp 120.000",
    stock: 50,
    category: "Pakaian",
  },
  {
    id: 3,
    image: "https://picsum.photos/300/200",
    name: "Sepatu Lari Sport",
    price: "Rp 450.000",
    stock: 20,
    category: "Olahraga",
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
          <p className="text-gray-600 mt-2">Kelola produk yang saat ini tampil di etalase toko Anda.</p>
        </header>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {activeProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 truncate mb-2">{product.name}</h3>
                
                <div className="flex flex-col space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <FaDollarSign className="mr-2 text-gray-500" />
                    <span className="font-semibold">{product.price}</span>
                  </div>
                  <div className="flex items-center">
                    <FaBox className="mr-2 text-gray-500" />
                    Stok: <span className="font-semibold ml-1">{product.stock}</span>
                  </div>
                  <div className="flex items-center">
                    <FaTag className="mr-2 text-gray-500" />
                    Kategori: <span className="font-semibold ml-1">{product.category}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t flex justify-center">
                  <Link href={`/seller/products/edit/${product.id}`}>
                    <span className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 transition">
                      <FaEdit />
                      <span>Edit Produk</span>
                    </span>
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