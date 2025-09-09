import Head from "next/head";
import {
  FaShoppingCart,
  FaSearch,
  FaStar,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from "next/link";
import Navbar from "../components/Navbar";

// Data produk contoh dengan kategori umum dan harga Rupiah
const products = [
  {
    id: 1,
    name: "Laptop Gaming ROG Strix",
    price: "Rp 25.000.000",
    city: "Jakarta",
    rating: 4.8,
    sellerRating: 4.9,
    image:
      "https://picsum.photos/300/200",
  },
  {
    id: 2,
    name: "Air Fryer Multifungsi",
    price: "Rp 850.000",
    city: "Bandung",
    rating: 4.5,
    sellerRating: 4.7,
    image:
      "https://picsum.photos/300/200",
  },
  {
    id: 3,
    name: "Kemeja Katun Pria",
    price: "Rp 120.000",
    city: "Surabaya",
    rating: 5.0,
    sellerRating: 5.0,
    image:
      "https://picsum.photos/300/200",
  },
  {
    id: 4,
    name: "Buku Resep Masakan Nusantara",
    price: "Rp 65.000",
    city: "Yogyakarta",
    rating: 4.6,
    sellerRating: 4.8,
    image:
      "https://picsum.photos/300/200",
  },
  {
    id: 5,
    name: "Set Alat Makan Kayu",
    price: "Rp 45.000",
    city: "Bekasi",
    rating: 4.9,
    sellerRating: 4.9,
    image:
      "https://picsum.photos/300/200",
  },
  {
    id: 6,
    name: "Sepatu Lari Sport",
    price: "Rp 450.000",
    city: "Malang",
    rating: 4.7,
    sellerRating: 4.6,
    image:
      "https://picsum.photos/300/200",
  },
  {
    id: 7,
    name: "Headset Gaming",
    price: "Rp 650.000",
    city: "Jakarta",
    rating: 4.8,
    sellerRating: 4.9,
    image:
      "https://picsum.photos/300/200",
  },
  {
    id: 8,
    name: "Rak Dinding Minimalis",
    price: "Rp 95.000",
    city: "Bandung",
    rating: 4.5,
    sellerRating: 4.7,
    image:
      "https://picsum.photos/300/200",
  },
  {
    id: 9,
    name: "Beras Premium 5kg",
    price: "Rp 72.000",
    city: "Surabaya",
    rating: 5.0,
    sellerRating: 5.0,
    image:
      "https://picsum.photos/300/200",
  },
  {
    id: 10,
    name: "Set Panci Anti Lengket",
    price: "Rp 350.000",
    city: "Yogyakarta",
    rating: 4.6,
    sellerRating: 4.8,
    image:
      "https://picsum.photos/300/200",
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Products</title>
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Product Grid */}
      <main className="container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-3 md:p-4">
                <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-1 truncate">
                  {product.name}
                </h3>
                <p className="text-md md:text-lg font-bold text-indigo-600 mb-2">
                  {product.price}
                </p>
                <div className="flex items-center text-xs md:text-sm text-gray-500 mb-1">
                  <FaMapMarkerAlt className="mr-1" />
                  <span>{product.city}</span>
                </div>
                <div className="flex items-center justify-between text-xs md:text-sm">
                  <div className="flex items-center text-yellow-500">
                    <FaStar className="mr-1" />
                    <span>{product.rating}</span>
                  </div>
                  <div className="text-gray-500">
                    <span className="ml-1 font-semibold">
                      {product.sellerRating}
                    </span>
                    <span className="text-xs">/5 Penjual</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center p-4 bg-gray-800 text-gray-400 mt-8">
        &copy; 2025 Marketplace. All Rights Reserved.
      </footer>
    </div>
  );
}
