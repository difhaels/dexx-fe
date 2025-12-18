"use client";
import Head from 'next/head';
import { useState, useMemo } from 'react';
import { FaStar, FaSort, FaCheckCircle, FaComment, FaCalendarAlt, FaStarHalfAlt, FaEthereum, FaUserShield } from 'react-icons/fa';
import Sidebar from '@/app/components/Sidebar';

// Data disesuaikan untuk Kolektor Diecast
const productData = {
  id: 1,
  name: 'Nissan Skyline GT-R R34 (Super Treasure Hunt)',
  category: 'Hot Wheels Premium',
  price: 0.12,
  rating: 4.9,
};

const initialReviews = [
  {
    id: 1,
    user: 'Kolektor_Jaka',
    text: 'Barang mulus banget, card tidak ada tekuk sama sekali. Packing kayu mantap!',
    rating: 5,
    date: '2025-08-28',
    hasReplied: true,
    reply: 'Terima kasih sesama kolektor! Semoga awet di rak koleksinya ya.'
  },
  {
    id: 2,
    user: 'Diecast_Master',
    text: 'Kualitas oke, tapi gas fee pas transaksi lagi tinggi.',
    rating: 4,
    date: '2025-08-27',
    hasReplied: false,
    reply: ''
  },
  {
    id: 3,
    user: 'Rian_STH',
    text: 'Sangat direkomendasikan. Item STH asli bukan custom. Bintang 5.',
    rating: 5,
    date: '2025-08-29',
    hasReplied: false,
    reply: ''
  }
];

export default function SellerReviewsPage() {
  const [reviews, setReviews] = useState(initialReviews);
  const [sortBy, setSortBy] = useState('newest');
  const [replyText, setReplyText] = useState('');
  const [activeReviewId, setActiveReviewId] = useState(null);

  const sortedReviews = useMemo(() => {
    let sorted = [...reviews];
    switch (sortBy) {
      case 'newest': sorted.sort((a, b) => new Date(b.date) - new Date(a.date)); break;
      case 'highest': sorted.sort((a, b) => b.rating - a.rating); break;
      case 'replied': sorted = sorted.filter(review => review.hasReplied); break;
      case 'not-replied': sorted = sorted.filter(review => !review.hasReplied); break;
      default: break;
    }
    return sorted;
  }, [reviews, sortBy]);

  const handleReplySubmit = (e, reviewId) => {
    e.preventDefault();
    if (!replyText.trim()) return;
    setReviews(reviews.map(review => 
      review.id === reviewId ? { ...review, hasReplied: true, reply: replyText.trim() } : review
    ));
    setReplyText('');
    setActiveReviewId(null);
  };

  return (
    <div className="flex min-h-screen bg-[#1A0533]">
      <Head>
        <title>Reviews | DiecastChain Admin</title>
      </Head>

      <Sidebar x="products" edit={1} />

      <main className="flex-1 p-10 ml-64 text-white">
        <header className="mb-10">
          <h1 className="text-5xl font-black italic tracking-tighter uppercase">
            Collector <span className="text-[#FFB300]">Feedback</span>
          </h1>
          <p className="text-slate-400 mt-2 text-sm italic border-l-2 border-[#E91E63] pl-3">
            Kelola reputasi toko Anda di jaringan blockchain kolektor.
          </p>
        </header>

        {/* Product Info Summary */}
        <div className="bg-[#2D0B5A] rounded-3xl border border-white/5 p-8 mb-10 flex items-center space-x-8 shadow-2xl">
          <img src="https://images.unsplash.com/photo-1594787318286-3d835c1d207f?q=80&w=200&h=200&fit=crop" alt={productData.name} className="h-24 w-24 rounded-2xl object-cover border border-white/10" />
          <div className="flex-1">
            <h2 className="text-2xl font-black italic uppercase tracking-tighter text-white">{productData.name}</h2>
            <p className="text-xs font-bold text-[#E91E63] uppercase tracking-widest mt-1">{productData.category}</p>
            <div className="flex items-center mt-3 space-x-6">
              <div className="flex items-center text-[#FFB300] font-black">
                <FaStar className="mr-1" />
                <span>{productData.rating}</span>
              </div>
              <div className="flex items-center text-[#FFB300] font-black italic">
                <FaEthereum className="mr-1 text-sm" />
                <span>{productData.price} ETH</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
          <h3 className="text-lg font-black italic uppercase tracking-tighter text-slate-300">Recent Reviews</h3>
          <div className="relative group">
            <button className="flex items-center px-6 py-2 bg-[#2D0B5A] border border-white/10 rounded-xl text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-all">
              <FaSort className="mr-2 text-[#E91E63]" /> Sortir
            </button>
            <div className="absolute right-0 mt-2 w-52 bg-[#2D0B5A] border border-white/10 rounded-2xl shadow-2xl hidden group-hover:block z-20 overflow-hidden">
               <button onClick={() => setSortBy('newest')} className="flex items-center w-full px-5 py-3 text-[10px] font-bold uppercase text-slate-400 hover:bg-[#E91E63] hover:text-white border-b border-white/5"><FaCalendarAlt className="mr-2" /> Terbaru</button>
               <button onClick={() => setSortBy('highest')} className="flex items-center w-full px-5 py-3 text-[10px] font-bold uppercase text-slate-400 hover:bg-[#E91E63] hover:text-white border-b border-white/5"><FaStar className="mr-2" /> Tertinggi</button>
               <button onClick={() => setSortBy('not-replied')} className="flex items-center w-full px-5 py-3 text-[10px] font-bold uppercase text-slate-400 hover:bg-[#E91E63] hover:text-white"><FaComment className="mr-2" /> Belum Dibalas</button>
            </div>
          </div>
        </div>

        {/* Review List */}
        <div className="space-y-6">
          {sortedReviews.map((review) => (
            <div key={review.id} className="bg-[#2D0B5A] rounded-3xl border border-white/5 p-8 transition-all hover:border-white/10">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center text-[#FFB300]">
                    <FaUserShield className="text-2xl" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-3">
                      <span className="font-black italic uppercase tracking-tighter text-white">{review.user}</span>
                      <span className="bg-green-500/10 text-green-400 text-[8px] font-black px-2 py-0.5 rounded-full border border-green-500/20 uppercase tracking-widest">Verified Collector</span>
                    </div>
                    <p className="text-[10px] text-slate-500 font-bold mt-1 uppercase tracking-widest">{review.date}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-3">
                  <div className="flex text-[#FFB300] text-sm">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar key={i} className={i < review.rating ? "opacity-100" : "opacity-20"} />
                    ))}
                  </div>
                  <button
                    onClick={() => setActiveReviewId(activeReviewId === review.id ? null : review.id)}
                    className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                      review.hasReplied ? 'bg-white/5 text-slate-400' : 'bg-[#E91E63] text-white shadow-lg shadow-[#E91E63]/20 hover:scale-105'
                    }`}
                  >
                    {review.hasReplied ? 'Lihat Balasan' : 'Reply Now'}
                  </button>
                </div>
              </div>

              <p className="text-slate-300 italic text-sm leading-relaxed mb-6 border-l-2 border-white/10 pl-4">
                "{review.text}"
              </p>

              {activeReviewId === review.id && (
                <div className="mt-6 pt-6 border-t border-white/5">
                  {review.hasReplied ? (
                    <div className="bg-[#1A0533] p-6 rounded-2xl border border-white/5 relative">
                      <p className="text-[10px] font-black text-[#FFB300] uppercase tracking-widest mb-2 italic">Store Response:</p>
                      <p className="text-sm text-slate-400 leading-relaxed italic">"{review.reply}"</p>
                    </div>
                  ) : (
                    <form onSubmit={(e) => handleReplySubmit(e, review.id)} className="space-y-4">
                      <textarea
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="Tulis balasan profesional untuk kolektor..."
                        className="w-full bg-[#1A0533] border border-white/10 rounded-2xl p-4 text-sm text-white focus:outline-none focus:border-[#E91E63] transition-all"
                        rows="3"
                      ></textarea>
                      <div className="flex justify-end space-x-3">
                        <button type="button" onClick={() => setActiveReviewId(null)} className="px-6 py-2 text-[10px] font-black uppercase text-slate-500">Cancel</button>
                        <button type="submit" className="px-6 py-2 bg-[#E91E63] text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-[#E91E63]/20 hover:scale-105 transition-all">Submit Reply</button>
                      </div>
                    </form>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}