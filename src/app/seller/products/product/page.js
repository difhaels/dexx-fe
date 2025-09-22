"use client";
import Head from "next/head";
import Sidebar from "@/app/components/Sidebar";
import Link from "next/link";
import {
  FaBox,
  FaTag,
  FaDollarSign,
  FaEdit,
  FaArchive,
  FaTrash,
  FaStar,
  FaReply,
  FaArrowLeft,
  FaExternalLinkAlt,
} from "react-icons/fa";

// Data produk statis sebagai contoh
const productData = {
  id: 1,
  image:
    "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/11/14/0d03708a-6b8a-40a2-aa7c-8e3b56360812.png",
  name: "Laptop Gaming ROG Strix",
  price: "25.000.000",
  stock: 10,
  status: "Aktif",
  rating: 4.8,
  reviewCount: 2,
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

const formatRupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(Number(number.replace(/\./g, "")));
};

export default function SellerProductDetailPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Head>
        <title>{productData.name} | Seller Dashboard</title>
      </Head>

      <Sidebar />

      <main className="flex-1 p-8 ml-64">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <Link href="/seller/products">
              <span className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors font-semibold mb-2">
                <FaArrowLeft />
                <span>Kembali ke Daftar Produk</span>
              </span>
            </Link>
            <h1 className="text-4xl font-extrabold text-gray-900">
              {productData.name}
            </h1>
          </div>
        </header>

        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/3">
            <img
              src={productData.image}
              alt={productData.name}
              className="w-full rounded-lg object-cover"
            />
          </div>

          <div className="w-full md:w-2/3 space-y-4">
            <div className="flex flex-col space-y-1">
              <span className="text-xl font-bold text-gray-900">
                {productData.name}
              </span>
              <span className="text-3xl font-extrabold text-indigo-600">
                {formatRupiah(productData.price)}
              </span>
            </div>

            <div className="flex flex-col space-y-2 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <FaBox className="text-gray-500" />
                <span>
                  Stok:{" "}
                  <span className="font-semibold">{productData.stock}</span>
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <FaTag className="text-gray-500" />
                <span>
                  Status:
                  <span
                    className={`ml-2 px-2 py-1 text-xs font-semibold rounded-full ${getStatusClasses(
                      productData.status
                    )}`}
                  >
                    {productData.status}
                  </span>
                </span>
              </div>
              <div className="flex items-center space-x-2 text-yellow-500">
                <FaStar />
                <span className="font-semibold">{productData.rating}</span>/5
                Rating
              </div>
            </div>

            <div className="border-t pt-4 space-y-4">
              <h3 className="text-lg font-bold text-gray-800">
                Manajemen Produk
              </h3>

              <div className="flex flex-wrap items-center space-x-4">
                {/* Update Stok (Tampilan Saja) */}
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    defaultValue="0"
                    className="w-20 px-2 py-1 rounded-md border border-gray-300 text-center"
                  />
                  <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-green-600 text-white font-semibold transition hover:bg-green-700">
                    <FaBox />
                    <span>Update Stok</span>
                  </button>
                </div>

                {/* Edit Produk */}
                <Link href={`/seller/products/edit/${productData.id}`}>
                  <span className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold transition hover:bg-indigo-700">
                    <FaEdit />
                    <span>Edit Produk</span>
                  </span>
                </Link>

                {/* Ulasan */}
                <Link href={`/seller/review`}>
                  <span className="relative flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold transition hover:bg-blue-700">
                    <FaReply />
                    <span>Ulasan</span>
                    {productData.reviewCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                        {productData.reviewCount}
                      </span>
                    )}
                  </span>
                </Link>

                {/* Hapus & Arsipkan */}
                <button className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition">
                  <FaArchive />
                  <span>Arsipkan</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition">
                  <FaTrash />
                  <span>Hapus</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
