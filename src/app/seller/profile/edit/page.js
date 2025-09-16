import React from "react";

export default function EditSellerProfile() {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Edit Profile Toko
      </h2>
      <form className="space-y-4">
        {/* Nama Toko */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Nama Toko
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Masukkan nama toko"
          />
        </div>

        {/* Deskripsi Toko */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Deskripsi
          </label>
          <textarea
            rows={3}
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Deskripsi singkat toko"
          />
        </div>

        {/* Alamat */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Alamat</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Alamat toko"
          />
        </div>

        {/* Logo */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Logo Toko
          </label>
          <input
            type="file"
            accept="image/*"
            className="w-full text-gray-600"
          />
        </div>

        {/* Banner */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Banner Toko
          </label>
          <input
            type="file"
            accept="image/*"
            className="w-full text-gray-600"
          />
        </div>

        {/* Kontak */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Kontak Toko
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Nomor WA / Email"
          />
        </div>

        {/* Jam Operasional */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Jam Operasional
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Contoh: 09.00 - 21.00"
          />
        </div>

        {/* Tombol */}
        <button
          type="button"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          Simpan Perubahan
        </button>
      </form>
    </div>
  );
}
