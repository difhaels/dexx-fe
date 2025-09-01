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
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/11/14/0d03708a-6b8a-40a2-aa7c-8e3b56360812.png",
  },
  {
    id: 2,
    name: "Air Fryer Multifungsi",
    price: "Rp 850.000",
    city: "Bandung",
    rating: 4.5,
    sellerRating: 4.7,
    image:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/10/25/74149629-68d1-4228-a400-08d27ffc2e3d.png",
  },
  {
    id: 3,
    name: "Kemeja Katun Pria",
    price: "Rp 120.000",
    city: "Surabaya",
    rating: 5.0,
    sellerRating: 5.0,
    image:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/10/26/663c78cf-487c-471a-b0d5-b043f11e9f1a.jpg",
  },
  {
    id: 4,
    name: "Buku Resep Masakan Nusantara",
    price: "Rp 65.000",
    city: "Yogyakarta",
    rating: 4.6,
    sellerRating: 4.8,
    image:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/1/18/d8a39c59-b9d9-43c3-b034-7756f7e44a04.jpg",
  },
  {
    id: 5,
    name: "Set Alat Makan Kayu",
    price: "Rp 45.000",
    city: "Bekasi",
    rating: 4.9,
    sellerRating: 4.9,
    image:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/1/13/a207212f-653a-48d6-953a-b851acb93b58.jpg",
  },
  {
    id: 6,
    name: "Sepatu Lari Sport",
    price: "Rp 450.000",
    city: "Malang",
    rating: 4.7,
    sellerRating: 4.6,
    image:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/9/22/a9a4c0ac-9f24-42f7-873b-e85d46114849.jpg",
  },
  {
    id: 7,
    name: "Headset Gaming",
    price: "Rp 650.000",
    city: "Jakarta",
    rating: 4.8,
    sellerRating: 4.9,
    image:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/11/15/21f061e8-71e8-466d-ad02-e25f69042b36.jpg",
  },
  {
    id: 8,
    name: "Rak Dinding Minimalis",
    price: "Rp 95.000",
    city: "Bandung",
    rating: 4.5,
    sellerRating: 4.7,
    image:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/12/11/6e33f373-c159-4d83-9b19-f55a104033b0.jpg",
  },
  {
    id: 9,
    name: "Beras Premium 5kg",
    price: "Rp 72.000",
    city: "Surabaya",
    rating: 5.0,
    sellerRating: 5.0,
    image:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/5/17/74169733-128a-41d6-8488-82627e909a15.jpg",
  },
  {
    id: 10,
    name: "Set Panci Anti Lengket",
    price: "Rp 350.000",
    city: "Yogyakarta",
    rating: 4.6,
    sellerRating: 4.8,
    image:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/10/25/1109a93c-2c96-419b-b0b9-52643a13ae87.jpg",
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
