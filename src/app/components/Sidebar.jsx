import React from "react";
import {
  FaHome,
  FaBox,
  FaShoppingBag,
} from "react-icons/fa";
import Link from "next/link";

export default function Sidebar({x}) {
  return (
    <aside className="w-64 bg-gray-800 text-white p-6 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-green-400">
        Seller Dashboard
      </h2>
      <nav>
        <ul>
          <li className="mb-4">
            <Link
              href="/seller/dashboard"
              className={`flex items-center p-3 rounded-lg transition-colors ${
                x === "home"
                  ? "bg-gray-700 text-white"
                  : "text-gray-400 hover:bg-gray-700"
              }`}
            >
              <FaHome className="mr-3 text-lg" />
              <span className="font-semibold">Home</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link
              href="/seller/orders"
              className={`flex items-center p-3 rounded-lg transition-colors ${
                x === "orders"
                  ? "bg-gray-700 text-white"
                  : "text-gray-400 hover:bg-gray-700"
              }`}
            >
              <FaShoppingBag className="mr-3 text-lg" />
              <span className="font-semibold">Orders</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link
              href="/seller/products"
              className={`flex items-center p-3 rounded-lg transition-colors ${
                x === "products"
                  ? "bg-gray-700 text-white"
                  : "text-gray-400 hover:bg-gray-700"
              }`}
            >
              <FaBox className="mr-3 text-lg" />
              <span className="font-semibold">Products</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
