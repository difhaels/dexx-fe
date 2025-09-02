"use client";
import Head from "next/head";
import { useState } from "react";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaEyeSlash,
} from "react-icons/fa";
import Sidebar from "../../components/Sidebar";

const formatRupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};

// Data produk contoh
const initialProducts = [
  {
    id: 1,
    image:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/11/14/0d03708a-6b8a-40a2-aa7c-8e3b56360812.png",
    name: "Laptop Gaming ROG Strix",
    price: 25000000,
    stock: 10,
    status: "Active",
  },
  {
    id: 2,
    image:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/10/25/74149629-68d1-4228-a400-08d27ffc2e3d.png",
    name: "Air Fryer Multifungsi",
    price: 850000,
    stock: 0,
    status: "Out of Stock",
  },
  {
    id: 3,
    image:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/10/26/663c78cf-487c-471a-b0d5-b043f11e9f1a.jpg",
    name: "Kemeja Katun Pria",
    price: 120000,
    stock: 50,
    status: "Active",
  },
  {
    id: 4,
    image:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/1/18/d8a39c59-b9d9-43c3-b034-7756f7e44a04.jpg",
    name: "Buku Resep Masakan",
    price: 65000,
    stock: 25,
    status: "Archived",
  },
];

export default function SellerProducts() {
  const [activeSidebarTab] = useState("products");
  const [view, setView] = useState("list"); // 'list', 'add', 'edit'
  const [products, setProducts] = useState(initialProducts);
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleEditClick = (product) => {
    setCurrentProduct(product);
    setView("edit");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Logika untuk menyimpan data produk
    console.log("Produk berhasil disimpan:", currentProduct);
    setView("list");
  };

  const handleDelete = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
      setProducts(products.filter((p) => p.id !== id));
      console.log(`Produk dengan ID ${id} berhasil dihapus.`);
    }
  };

  const handleToggleStatus = (id) => {
    setProducts(
      products.map((p) =>
        p.id === id
          ? {
              ...p,
              status: p.status === "Active" ? "Archived" : "Active",
            }
          : p
      )
    );
  };

  const getStatusClasses = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-200 text-green-800";
      case "Out of Stock":
        return "bg-yellow-200 text-yellow-800";
      case "Archived":
        return "bg-red-200 text-red-800";
      default:
        return "";
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Head>
        <title>Products | Seller Dashboard</title>
      </Head>

      {/* Sidebar */}
      <Sidebar x="products" />
      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900">Products</h1>
          <button
            onClick={() => setView("add")}
            className="flex items-center space-x-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold transition-colors hover:bg-indigo-700"
          >
            <FaPlus />
            <span>Tambah Produk Baru</span>
          </button>
        </div>

        {/* Daftar Produk */}
        {view === "list" && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Daftar Produk
            </h2>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Produk
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Harga
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Stok
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={product.image}
                            alt={product.name}
                          />
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {product.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatRupiah(product.price)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {product.stock}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClasses(
                            product.status
                          )}`}
                        >
                          {product.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-4">
                          <button
                            onClick={() => handleEditClick(product)}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => handleDelete(product.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <FaTrash />
                          </button>
                          <button
                            onClick={() => handleToggleStatus(product.id)}
                            className="text-gray-500 hover:text-gray-700"
                          >
                            <FaEyeSlash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Form Tambah Produk Baru */}
        {view === "add" && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Tambah Produk Baru
            </h2>
            <form
              onSubmit={handleFormSubmit}
              className="bg-white rounded-lg shadow-sm p-6 space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nama Produk
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Harga
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="stock"
                  className="block text-sm font-medium text-gray-700"
                >
                  Stok
                </label>
                <input
                  type="number"
                  id="stock"
                  name="stock"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-gray-700"
                >
                  URL Gambar
                </label>
                <input
                  type="url"
                  id="image"
                  name="image"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setView("list")}
                  className="px-4 py-2 text-sm font-medium text-gray-700 rounded-md border border-gray-300 hover:bg-gray-50"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                >
                  Simpan Produk
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Form Edit Produk */}
        {view === "edit" && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Edit Produk
            </h2>
            <form
              onSubmit={handleFormSubmit}
              className="bg-white rounded-lg shadow-sm p-6 space-y-6"
            >
              {/* Form ini akan diisi dengan data dari `currentProduct` */}
              <div>
                <label
                  htmlFor="edit-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nama Produk
                </label>
                <input
                  type="text"
                  id="edit-name"
                  name="name"
                  value={currentProduct.name}
                  onChange={(e) =>
                    setCurrentProduct({
                      ...currentProduct,
                      name: e.target.value,
                    })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="edit-price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Harga
                </label>
                <input
                  type="number"
                  id="edit-price"
                  name="price"
                  value={currentProduct.price}
                  onChange={(e) =>
                    setCurrentProduct({
                      ...currentProduct,
                      price: e.target.value,
                    })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                />
              </div>
              {/* dan seterusnya untuk field lainnya */}
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setView("list")}
                  className="px-4 py-2 text-sm font-medium text-gray-700 rounded-md border border-gray-300 hover:bg-gray-50"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                >
                  Update Produk
                </button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
