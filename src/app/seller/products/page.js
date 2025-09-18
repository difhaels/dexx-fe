"use client";
import Head from 'next/head';
import Sidebar from '@/app/components/Sidebar';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { FaPlus, FaBox, FaShoppingBag, FaFilter, FaStar, FaTag, FaDollarSign } from 'react-icons/fa';

// Data produk statis dengan berbagai status
const allProducts = [
  {
    id: 1,
    image: "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/11/14/0d03708a-6b8a-40a2-aa7c-8e3b56360812.png",
    name: "Laptop Gaming ROG Strix",
    price: "25.000.000",
    stock: 10,
    status: "Aktif",
    rating: 4.8,
  },
  {
    id: 2,
    image: "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/10/25/74149629-68d1-4228-a400-08d27ffc2e3d.png",
    name: "Air Fryer Multifungsi",
    price: "850.000",
    stock: 0,
    status: "Stok Habis",
    rating: 4.5,
  },
  {
    id: 3,
    image: "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/10/26/663c78cf-487c-471a-b0d5-b043f11e9f1a.jpg",
    name: "Kemeja Katun Pria",
    price: "120.000",
    stock: 50,
    status: "Aktif",
    rating: 5.0,
  },
  {
    id: 4,
    image: "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/1/18/d8a39c59-b9d9-43c3-b034-7756f7e44a04.jpg",
    name: "Buku Resep Masakan",
    price: "65.000",
    stock: 25,
    status: "Archived",
    rating: 4.6,
  },
  {
    id: 5,
    image: "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/11/15/21f061e8-71e8-466d-ad02-e25f69042b36.jpg",
    name: "Headset Gaming",
    price: "650.000",
    stock: 5,
    status: "Menunggu",
    rating: null,
  },
];

const formatRupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(Number(number.replace(/\./g, '')));
};

const getStatusClasses = (status) => {
  switch (status) {
    case "Aktif":
      return "bg-green-200 text-green-800";
    case "Stok Habis":
      return "bg-red-200 text-red-800";
    case "Archived":
      return "bg-gray-200 text-gray-800";
    case "Menunggu":
      return "bg-yellow-200 text-yellow-800";
    default:
      return "";
  }
};

export default function SellerProducts() {
  const [activeSidebarTab] = useState("products");
  const [filter, setFilter] = useState("Semua");

  const filteredProducts = useMemo(() => {
    if (filter === "Semua") {
      return allProducts;
    }
    return allProducts.filter(product => product.status === filter);
  }, [filter]);

  const filterOptions = ["Semua", "Aktif", "Stok Habis", "Archived", "Menunggu"];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Head>
        <title>Products | Seller Dashboard</title>
      </Head>

      <Sidebar x="products" edit={1}/>

      <main className="flex-1 p-8 ml-64">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900">Products</h1>
          <p className="text-gray-600 mt-2">Kelola semua produk yang Anda jual di sini.</p>
        </header>

        {/* Top Navigation */}
        <div className="flex flex-wrap items-center justify-between mb-8 space-y-4 md:space-y-0">
          <h2 className="text-2xl font-bold text-gray-800">Daftar Produk</h2>
          <div className="flex flex-wrap space-x-2">
            <Link href="/seller/products/add">
              <span className="flex items-center space-x-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold transition-colors hover:bg-indigo-700">
                <FaPlus />
                <span>Tambah Produk</span>
              </span>
            </Link>
            <Link href="/seller/sold-products">
              <span className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold text-gray-700 bg-white rounded-lg border border-gray-300 hover:bg-gray-100">
                <FaShoppingBag />
                <span>Produk Terjual</span>
              </span>
            </Link>
            <Link href="/seller/display-products">
              <span className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold text-gray-700 bg-white rounded-lg border border-gray-300 hover:bg-gray-100">
                <FaBox />
                <span>Produk di Display</span>
              </span>
            </Link>
          </div>
        </div>

        {/* Filter Menu */}
        <div className="mb-6 flex flex-wrap items-center space-x-2">
          <FaFilter className="text-gray-500 mr-1" />
          <span className="text-sm font-medium text-gray-700">Filter:</span>
          {filterOptions.map(option => (
            <button
              key={option}
              onClick={() => setFilter(option)}
              className={`px-3 py-1 text-xs rounded-full font-semibold transition-colors ${
                filter === option ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link key={product.id} href={`/seller/products/${product.id}`}>
                <span className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                  <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 truncate mb-1">{product.name}</h3>
                    <p className="text-md font-bold text-indigo-600 mb-2">{formatRupiah(product.price)}</p>
                    <div className="flex flex-col space-y-1 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <FaBox className="text-xs text-gray-500" />
                        <span>Stok: {product.stock}</span>
                      </div>
                      <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${getStatusClasses(product.status)}`}>
                        {product.status}
                      </span>
                    </div>
                  </div>
                </span>
              </Link>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 mt-10">Tidak ada produk yang sesuai dengan filter.</p>
          )}
        </div>
      </main>
    </div>
  );
}