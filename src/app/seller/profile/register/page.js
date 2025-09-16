"use client";
import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import { FaStore, FaInfoCircle, FaMapMarkerAlt } from 'react-icons/fa';

export default function RegisterStorePage() {
  const [storeName, setStoreName] = useState('');
  const [description, setDescription] = useState('');
  const [storeAddress, setStoreAddress] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Di sini akan ada logika untuk mengirim data ke smart contract
    // atau backend untuk membuat toko baru.
    console.log('Registering new store with:', { storeName, description, storeAddress });
    alert('Registrasi toko berhasil! Anda akan diarahkan ke dashboard.');
    // Contoh: router.push('/seller/dashboard');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <Head>
        <title>Daftar Toko | MyMarketplace</title>
      </Head>

      <div className="w-full max-w-lg rounded-xl bg-white p-8 shadow-lg">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-green-600">
          <FaStore className="text-5xl" />
        </div>
        
        <h1 className="mb-2 text-center text-3xl font-bold text-gray-800">
          Daftarkan Tokomu
        </h1>
        <p className="mb-6 text-center text-gray-600">
          Isi formulir di bawah ini untuk memulai berjualan.
        </p>

        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label htmlFor="storeName" className="block text-sm font-medium text-gray-700">
              Nama Toko
            </label>
            <div className="mt-1 flex items-center rounded-md border border-gray-300 shadow-sm">
              <FaStore className="ml-3 text-gray-400" />
              <input
                type="text"
                id="storeName"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                required
                className="block w-full rounded-md py-2 pl-2 pr-3 focus:outline-none sm:text-sm"
                placeholder="Misal: Toko Keren"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Deskripsi Toko
            </label>
            <div className="mt-1 flex items-center rounded-md border border-gray-300 shadow-sm">
              <FaInfoCircle className="ml-3 text-gray-400" />
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="3"
                className="block w-full rounded-md py-2 pl-2 pr-3 focus:outline-none sm:text-sm"
                placeholder="Deskripsikan tokomu (produk, layanan, dll.)"
              ></textarea>
            </div>
          </div>

          <div>
            <label htmlFor="storeAddress" className="block text-sm font-medium text-gray-700">
              Alamat Toko
            </label>
            <div className="mt-1 flex items-center rounded-md border border-gray-300 shadow-sm">
              <FaMapMarkerAlt className="ml-3 text-gray-400" />
              <input
                type="text"
                id="storeAddress"
                value={storeAddress}
                onChange={(e) => setStoreAddress(e.target.value)}
                required
                className="block w-full rounded-md py-2 pl-2 pr-3 focus:outline-none sm:text-sm"
                placeholder="Kota, Provinsi"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-green-600 py-3 font-semibold text-white transition-colors hover:bg-green-700 focus:outline-none"
          >
            Daftarkan Toko
          </button>
        </form>
        
        <p className="mt-4 text-center text-sm text-gray-500">
          Sudah punya toko? <Link href="/seller/dashboard"><span className="font-medium text-green-600 hover:text-green-500">Kembali ke Dashboard</span></Link>
        </p>
      </div>
    </div>
  );
}