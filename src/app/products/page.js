import Head from "next/head";
import Link from "next/link";

// Data produk statis sebagai contoh
const products = [
  {
    id: 1,
    name: "Smart Contract Audit",
    price: "1.5 ETH",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: 'NFT Art: "The Digital Age"',
    price: "0.8 ETH",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Web3 Consultation",
    price: "0.5 ETH",
    image: "https://via.placeholder.com/150",
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Products | Marketplace</title>
      </Head>

      {/* Header */}
      <header className="bg-white shadow-md p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-500">Marketplace</h1>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Available Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={"https://picsum.photos/400/300"}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{product.price}</p>
                <a className="block text-center w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center p-4 bg-gray-800 text-gray-400 mt-8">
        &copy; 2025 Marketplace.
      </footer>
    </div>
  );
}
