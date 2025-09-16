"use client";
import Head from 'next/head';
import { useState, useMemo } from 'react';
import { FaStar, FaSort, FaArrowUp, FaArrowDown, FaCheckCircle, FaComment, FaCalendarAlt, FaStarHalfAlt } from 'react-icons/fa';
import Link from 'next/link';
import Sidebar from '@/app/components/Sidebar';

// Data produk dan ulasan statis
const productData = {
  id: 1,
  name: 'Laptop Gaming ROG Strix',
  category: 'Elektronik',
  price: 25000000,
  rating: 4.8,
};

const initialReviews = [
  {
    id: 1,
    user: 'Pembeli A',
    text: 'Barang sesuai deskripsi dan pengiriman cepat. Penjual responsif!',
    rating: 5,
    date: '2025-08-28',
    hasReplied: true,
    reply: 'Terima kasih atas ulasannya. Kami senang Anda puas dengan layanan kami!'
  },
  {
    id: 2,
    user: 'Pembeli B',
    text: 'Kualitas oke, tapi pengemasan kurang aman.',
    rating: 3,
    date: '2025-08-27',
    hasReplied: false,
    reply: ''
  },
  {
    id: 3,
    user: 'Pembeli C',
    text: 'Sangat direkomendasikan. Bintang 5.',
    rating: 5,
    date: '2025-08-29',
    hasReplied: false,
    reply: ''
  },
  {
    id: 4,
    user: 'Pembeli D',
    text: 'Pengiriman agak lama.',
    rating: 4,
    date: '2025-08-26',
    hasReplied: true,
    reply: 'Mohon maaf atas keterlambatan pengiriman. Kami akan terus meningkatkan layanan logistik kami.'
  },
];

const formatRupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};

export default function SellerReviewsPage() {
  const [reviews, setReviews] = useState(initialReviews);
  const [sortBy, setSortBy] = useState('newest');
  const [replyText, setReplyText] = useState('');
  const [activeReviewId, setActiveReviewId] = useState(null);

  const sortedReviews = useMemo(() => {
    let sorted = [...reviews];
    switch (sortBy) {
      case 'newest':
        sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'oldest':
        sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case 'highest':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case 'lowest':
        sorted.sort((a, b) => a.rating - b.rating);
        break;
      case 'replied':
        sorted = sorted.filter(review => review.hasReplied);
        break;
      case 'not-replied':
        sorted = sorted.filter(review => !review.hasReplied);
        break;
      default:
        break;
    }
    return sorted;
  }, [reviews, sortBy]);

  const handleReplySubmit = (e, reviewId) => {
    e.preventDefault();
    if (!replyText.trim()) return;
    
    // Logika simulasi untuk mengirim balasan
    setReviews(reviews.map(review => 
      review.id === reviewId ? { ...review, hasReplied: true, reply: replyText.trim() } : review
    ));
    setReplyText('');
    setActiveReviewId(null);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Head>
        <title>Ulasan {productData.name}</title>
      </Head>

      <Sidebar />

      <main className="flex-1 p-8 ml-64">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900">Ulasan Produk</h1>
          <p className="text-gray-600 mt-2">Kelola dan balas ulasan untuk produk Anda.</p>
        </header>

        {/* Product Info Bubble */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 flex items-center space-x-6">
          <img src="https://images.tokopedia.net/img/cache/100/VqbcmM/2023/11/14/0d03708a-6b8a-40a2-aa7c-8e3b56360812.png" alt={productData.name} className="h-20 w-20 rounded-lg object-cover" />
          <div>
            <h2 className="text-xl font-bold text-gray-900">{productData.name}</h2>
            <p className="text-sm text-gray-600">{productData.category}</p>
            <div className="flex items-center text-gray-600 text-sm mt-1">
              <FaStar className="text-yellow-500 mr-1" />
              <span>{productData.rating}</span>
              <span className="mx-2 text-gray-400">|</span>
              <span className="font-bold text-indigo-600">{formatRupiah(productData.price)}</span>
            </div>
          </div>
        </div>

        {/* Sorting Controls */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-800">Daftar Ulasan</h3>
          <div className="relative inline-block text-left">
            <div className="group">
              <button
                type="button"
                className="inline-flex justify-center items-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
              >
                <FaSort className="mr-2" />
                Sortir
              </button>
              <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 hidden group-hover:block z-10">
                <div className="py-1">
                  <span className="block px-4 py-2 text-xs font-bold text-gray-500 uppercase">Tanggal</span>
                  <button onClick={() => setSortBy('newest')} className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"><FaCalendarAlt className="mr-2" /> Terbaru</button>
                  <button onClick={() => setSortBy('oldest')} className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"><FaCalendarAlt className="mr-2" /> Terlama</button>
                  <span className="block px-4 py-2 text-xs font-bold text-gray-500 uppercase">Rating</span>
                  <button onClick={() => setSortBy('highest')} className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"><FaStar className="mr-2" /> Tertinggi</button>
                  <button onClick={() => setSortBy('lowest')} className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"><FaStarHalfAlt className="mr-2" /> Terendah</button>
                  <span className="block px-4 py-2 text-xs font-bold text-gray-500 uppercase">Status</span>
                  <button onClick={() => setSortBy('replied')} className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"><FaCheckCircle className="mr-2" /> Sudah Dibalas</button>
                  <button onClick={() => setSortBy('not-replied')} className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"><FaComment className="mr-2" /> Belum Dibalas</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Daftar Ulasan */}
        <div className="space-y-4">
          {sortedReviews.length > 0 ? sortedReviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center mb-1">
                    <span className="font-semibold text-gray-800">{review.user}</span>
                    <span className="mx-2 text-gray-400">|</span>
                    <span className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center text-yellow-500">
                    <span className="flex">
                      {Array.from({ length: review.rating }).map((_, i) => <FaStar key={i} />)}
                    </span>
                    <span className="ml-2 text-gray-500 text-sm">{review.rating}/5</span>
                  </div>
                </div>
                <button
                  onClick={() => setActiveReviewId(activeReviewId === review.id ? null : review.id)}
                  className={`px-4 py-2 rounded-md font-semibold transition-colors text-sm ${review.hasReplied ? 'bg-green-500 text-white' : 'bg-blue-600 text-white'}`}
                >
                  {review.hasReplied ? 'Lihat Balasan' : 'Balas'}
                </button>
              </div>

              <p className="text-gray-700 mb-4 italic">"{review.text}"</p>

              {activeReviewId === review.id && (
                <div className="mt-4 pt-4 border-t">
                  {review.hasReplied ? (
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <p className="font-semibold text-gray-800">Balasan Anda:</p>
                      <p className="text-gray-600 mt-1">{review.reply}</p>
                    </div>
                  ) : (
                    <form onSubmit={(e) => handleReplySubmit(e, review.id)} className="space-y-3">
                      <textarea
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="Tulis balasan Anda di sini..."
                        rows="3"
                        className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                      ></textarea>
                      <div className="flex justify-end space-x-2">
                        <button type="button" onClick={() => setActiveReviewId(null)} className="px-4 py-2 text-sm rounded-md border text-gray-600 hover:bg-gray-100">Batal</button>
                        <button type="submit" className="px-4 py-2 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700">Kirim Balasan</button>
                      </div>
                    </form>
                  )}
                </div>
              )}
            </div>
          )) : (
            <p className="text-center text-gray-500 mt-10">Tidak ada ulasan yang sesuai dengan filter.</p>
          )}
        </div>
      </main>
    </div>
  );
}