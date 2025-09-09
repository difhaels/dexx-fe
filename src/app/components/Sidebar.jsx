import React from "react";
import { FaHome, FaBox, FaShoppingBag, FaUserEdit } from "react-icons/fa";
import Link from "next/link";

export default function Sidebar({ x, edit }) {
  return (
    <aside className="fixed w-64 bg-gray-800 text-white p-6 min-h-screen flex flex-col justify-between">
      {/* Atas */}
      <div>
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
      </div>
      {/* Bawah */}{" "}
      {edit ? (
        <div className="mt-8">
          <Link
            href="/seller/profile/edit"
            className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg transition-colors"
          >
            <FaUserEdit className="mr-2" />
            <span className="font-semibold">Edit Profile</span>
          </Link>
        </div>
      ) : (
        ""
      )}
    </aside>
  );
}
