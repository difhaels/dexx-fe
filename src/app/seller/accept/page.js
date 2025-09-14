"use client";
import Head from 'next/head';
import Sidebar from '@/app/components/Sidebar';
import { useState, useMemo } from 'react';
import { 
  FaBox, FaUser, FaCity, FaShippingFast, FaStickyNote, FaCommentDots, 
  FaThumbtack, FaArrowCircleDown, FaCheck, FaBan, FaTruck
} from 'react-icons/fa';
import Link from 'next/link';

// Data statis untuk simulasi orderan yang sudah diterima
const initialAcceptedOrders = [
  {
    id: 1,
    productName: 'Air Fryer Multifungsi',
    buyerName: 'Fitriani Lestari',
    quantity: 1,
    destinationCity: 'Bekasi',
    shippingService: 'JNE Reguler',
    notes: 'Tolong lapisi kardusnya ya kak.',
    isPinned: false,
    status: 'Accepted'
  },
  {
    id: 2,
    productName: 'Kemeja Katun Pria',
    buyerName: 'Budi Santoso',
    quantity: 3,
    destinationCity: 'Jakarta Selatan',
    shippingService: 'Gosend Instant',
    notes: null,
    isPinned: true, // Contoh orderan yang dipin
    status: 'Accepted'
  },
  {
    id: 3,
    productName: 'Buku Resep Masakan',
    buyerName: 'Dewi Wijaya',
    quantity: 1,
    destinationCity: 'Depok',
    shippingService: 'JNE Express',
    notes: 'Mohon segera diproses, terima kasih.',
    isPinned: false,
    status: 'Accepted'
  },
];

export default function AcceptedOrdersPage() {
  const [orders, setOrders] = useState(initialAcceptedOrders);

  // Mengurutkan pesanan: yang dipin di atas, sisanya di bawah
  const sortedOrders = useMemo(() => {
    return [...orders].sort((a, b) => (b.isPinned - a.isPinned));
  }, [orders]);

  const togglePin = (id) => {
    setOrders(orders.map(order => 
      order.id === id ? { ...order, isPinned: !order.isPinned } : order
    ));
  };

  const handlePackingComplete = (id) => {
    console.log(`Pesanan ID ${id} selesai dipacking.`);
    alert('Pesanan berhasil dipacking!');
    // Tambahkan logika untuk memperbarui status pesanan menjadi "Ready to Ship"
  };

  const handleCancelOrder = (id) => {
    console.log(`Pesanan ID ${id} dibatalkan.`);
    if (window.confirm("Apakah Anda yakin ingin membatalkan pesanan ini?")) {
        alert('Pesanan berhasil dibatalkan.');
        // Tambahkan logika untuk menghapus pesanan dari daftar
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Head>
        <title>Orderan Diterima | Seller Dashboard</title>
      </Head>

      <Sidebar />

      <main className="flex-1 p-8 ml-64">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900">Orderan Diterima</h1>
          <p className="text-gray-600 mt-2">Daftar pesanan yang sedang Anda proses.</p>
        </header>

        <Link href="/seller/orders">
          <span className="mb-6 flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors font-semibold">
            <FaArrowCircleDown />
            <span>Kembali ke Halaman Orders</span>
          </span>
        </Link>

        {sortedOrders.length > 0 ? (
          <div className="space-y-6">
            {sortedOrders.map((order) => (
              <div key={order.id} className="bg-white rounded-lg shadow-md p-6 relative">
                {/* Pin Icon */}
                <button
                  onClick={() => togglePin(order.id)}
                  className={`absolute top-4 right-4 text-2xl transition-colors ${order.isPinned ? 'text-blue-500' : 'text-gray-300 hover:text-blue-400'}`}
                  title={order.isPinned ? 'Lepas Pin' : 'Pin ke Atas'}
                >
                  <FaThumbtack />
                </button>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{order.productName}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-3">
                    <FaUser className="text-gray-400" />
                    <span>Nama Pembeli: <span className="font-semibold">{order.buyerName}</span></span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaBox className="text-gray-400" />
                    <span>Jumlah: <span className="font-semibold">{order.quantity}</span></span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaCity className="text-gray-400" />
                    <span>Kota Tujuan: <span className="font-semibold">{order.destinationCity}</span></span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaShippingFast className="text-gray-400" />
                    <span>Jasa Kirim: <span className="font-semibold">{order.shippingService}</span></span>
                  </div>
                </div>

                {order.notes && (
                  <div className="mt-4 p-4 rounded-md bg-gray-50 border border-gray-200">
                    <div className="flex items-center space-x-2 text-gray-700 font-semibold mb-1">
                      <FaStickyNote />
                      <span>Catatan Pembeli</span>
                    </div>
                    <p className="text-sm text-gray-600 italic">{order.notes}</p>
                  </div>
                )}
                
                <div className="mt-6 border-t pt-4 flex items-center justify-between">
                  <Link href={`/seller/chat/${order.buyerName}`}>
                    <span className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors font-semibold">
                      <FaCommentDots className="text-lg" />
                      <span>Chat Pembeli</span>
                    </span>
                  </Link>

                  <div className="flex space-x-3">
                    <button 
                      onClick={() => handlePackingComplete(order.id)}
                      className="flex items-center space-x-2 px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition-colors"
                    >
                      <FaBox className="text-sm" />
                      <span>Selesai Packing</span>
                    </button>
                    <button 
                      onClick={() => handleCancelOrder(order.id)}
                      className="flex items-center space-x-2 px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors"
                    >
                      <FaBan className="text-sm" />
                      <span>Batalkan</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 text-gray-500">
            <p>Tidak ada orderan yang sedang diproses.</p>
          </div>
        )}
      </main>
    </div>
  );
}