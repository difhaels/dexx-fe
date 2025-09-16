import Head from 'next/head';
import Link from 'next/link';
import { FaStore, FaMagic, FaArrowRight } from 'react-icons/fa';

export default function SellerWelcomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <Head>
        <title>Buka Toko | MyMarketplace</title>
      </Head>

      <div className="w-full max-w-lg rounded-xl bg-white p-8 text-center shadow-lg">
        {/* Placeholder untuk Ilustrasi */}
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
          <FaMagic className="text-5xl" />
        </div>

        <h1 className="mb-2 text-3xl font-bold text-gray-800">
          Kamu belum membuka toko.
        </h1>
        <p className="mb-6 text-gray-600">
          Ayo mulai berbisnis di sini. Daftarkan tokomu sekarang dan jangkau lebih banyak pembeli!
        </p>

        <a href="./daftar/register.js">
          <span className="inline-flex items-center space-x-2 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition-transform hover:scale-105 hover:bg-indigo-700">
            <span>Buka Toko Sekarang</span>
            <FaArrowRight />
          </span>
        </a>
      </div>
    </div>
  );
}