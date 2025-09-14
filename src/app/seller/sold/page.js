"use client";
import Head from "next/head";
import { FaBox, FaStar, FaReply, FaTag, FaDollarSign } from "react-icons/fa";
import Link from "next/link";
import Sidebar from "@/app/components/Sidebar";

// Data produk yang sudah terjual
const soldProductsData = [
  {
    id: 1,
    name: "Laptop Gaming ROG Strix",
    image:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/11/14/0d03708a-6b8a-40a2-aa7c-8e3b56360812.png",
    price: 25000000,
    category: "Elektronik",
    soldCount: 5,
    rating: 4.8,
    reviewCount: 3, // Jumlah ulasan
  },
  {
    id: 2,
    name: "Air Fryer Multifungsi",
    image:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/10/25/74149629-68d1-4228-a400-08d27ffc2e3d.png",
    price: 850000,
    category: "Kebutuhan Rumah",
    soldCount: 15,
    rating: 4.5,
    reviewCount: 1,
  },
  {
    id: 3,
    name: "Kemeja Katun Pria",
    image:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/10/26/663c78cf-487c-471a-b0d5-b043f11e9f1a.jpg",
    price: 120000,
    category: "Pakaian",
    soldCount: 30,
    rating: 5.0,
    reviewCount: 0,
  },
];

const formatRupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};

export default function SoldProductsPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Head>
        <title>Barang Terjual | Seller Dashboard</title>
      </Head>

      <Sidebar />

      <main className="flex-1 p-8 ml-64">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Barang Terjual
          </h1>
          <p className="text-gray-600 mt-2">
            Daftar semua produk yang telah berhasil terjual.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {soldProductsData.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">
                  {product.name}
                </h3>

                <div className="flex flex-col space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <FaDollarSign className="mr-2 text-gray-500" />
                    <span className="font-semibold">
                      {formatRupiah(product.price)}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FaBox className="mr-2 text-gray-500" />
                    <span className="font-semibold">
                      {product.soldCount}
                    </span>{" "}
                    Terjual
                  </div>
                  <div className="flex items-center">
                    <FaTag className="mr-2 text-gray-500" />
                    Kategori: {product.category}
                  </div>
                </div>

                <div className="mt-4 border-t pt-4 flex justify-between items-center">
                  <div className="flex items-center text-yellow-500">
                    <FaStar className="mr-2" />
                    <span className="font-semibold">{product.rating}</span>/5
                  </div>
                  <Link href={`/seller/review`}>
                    <span className="relative inline-flex items-center space-x-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition">
                      <FaReply />
                      <span>Ulasan</span>
                      {product.reviewCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                          {product.reviewCount}
                        </span>
                      )}
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
