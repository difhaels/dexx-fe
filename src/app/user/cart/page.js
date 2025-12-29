"use client";
import { useState, useMemo } from "react";
import Head from "next/head";
import Link from "next/link";
import { FaTrash, FaEthereum, FaShieldAlt, FaArrowLeft, FaCube } from "react-icons/fa";

const initialCartItems = [
  {
    id: 101,
    name: "Hot Wheels Nissan Skyline R34 STH",
    price: 0.12,
    quantity: 1,
    seller: "Ryu_Garage_Node",
    image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?q=80&w=150&h=150&fit=crop",
  },
  {
    id: 102,
    name: "Tomica Limited Vintage Honda Civic",
    price: 0.05,
    quantity: 1,
    seller: "JDM_Collector_P2P",
    image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=150&h=150&fit=crop",
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map((item) => item.id === id ? { ...item, quantity: newQuantity } : item));
  };

  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cartItems]);

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    setIsProcessing(true);
    
    // Simulasi interaksi Smart Contract
    setTimeout(() => {
      setIsProcessing(false);
      alert("✅ TRANSACTION BROADCASTED! Dana Anda telah dikunci di Smart Contract Escrow. Penjual akan segera diberitahu untuk mengirim barang.");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#1A0533] text-white p-6 md:p-12 relative overflow-hidden">
      <Head>
        <title>Escrow Cart | DiecastChain</title>
      </Head>

      {/* Background Decor */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-[#E91E63] opacity-5 blur-[120px]"></div>

      <div className="mx-auto max-w-6xl relative z-10">
        <Link href="/market">
          <div className="mb-8 inline-flex items-center text-[#FFB300] font-black uppercase text-[10px] tracking-widest hover:text-white transition-colors cursor-pointer">
            <FaArrowLeft className="mr-2" /> Continue Collecting
          </div>
        </Link>

        <h1 className="mb-10 text-5xl font-black italic tracking-tighter uppercase">
          Your <span className="text-[#FFB300]">Cart Hub</span>
        </h1>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Kolom Kiri: Items */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-[32px] bg-[#2D0B5A] p-8 border border-white/5 shadow-2xl">
              <div className="mb-8 flex items-center space-x-3 p-4 rounded-2xl bg-[#E91E63]/10 border border-[#E91E63]/20">
                <FaShieldAlt className="text-[#E91E63] text-xl" />
                <p className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                  Sistem <span className="text-[#E91E63]">P2P Escrow</span> Aktif. Dana Anda hanya akan dilepaskan ke penjual setelah barang Anda konfirmasi diterima.
                </p>
              </div>

              {cartItems.length > 0 ? (
                <div className="space-y-8">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex flex-col md:flex-row items-center justify-between border-b border-white/5 pb-8 last:border-0 last:pb-0 group">
                      <div className="flex items-center space-x-6 w-full md:w-auto">
                        <img src={item.image} className="h-20 w-20 rounded-2xl object-cover border border-white/10 group-hover:border-[#FFB300]/50 transition-all" />
                        <div>
                          <h3 className="text-sm font-black uppercase tracking-tight text-white group-hover:text-[#FFB300] transition-colors">
                            {item.name}
                          </h3>
                          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">
                            Node: <span className="text-slate-300">{item.seller}</span>
                          </p>
                          <div className="flex items-center text-[#FFB300] font-black italic mt-2">
                            <FaEthereum className="mr-1 text-xs" /> {item.price} ETH
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-8 mt-4 md:mt-0">
                        <div className="flex items-center bg-[#1A0533] rounded-xl border border-white/5 p-1">
                          <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center hover:text-[#E91E63] font-bold">-</button>
                          <span className="w-8 text-center text-xs font-black">{item.quantity}</span>
                          <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center hover:text-[#FFB300] font-bold">+</button>
                        </div>
                        <div className="w-24 text-right font-black italic text-[#FFB300]">
                          {(item.price * item.quantity).toFixed(3)} ETH
                        </div>
                        <button onClick={() => handleRemoveItem(item.id)} className="text-slate-600 hover:text-red-500 transition-colors">
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-slate-500 font-bold uppercase tracking-widest">Cart Is Empty. Go find some STH!</p>
                </div>
              )}
            </div>
          </div>

          {/* Kolom Kanan: Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 rounded-[40px] bg-[#2D0B5A] p-8 border border-white/5 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <FaCube className="text-9xl text-white" />
              </div>
              
              <h3 className="mb-8 text-xl font-black italic uppercase tracking-tighter text-white">Escrow Summary</h3>

              <div className="space-y-6 relative z-10">
                <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <span>Subtotal Assets:</span>
                  <span className="text-white italic">{subtotal.toFixed(3)} ETH</span>
                </div>

                <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <span>Block Gas Fee:</span>
                  <span className="text-[#E91E63] italic">0.00021 ETH</span>
                </div>

                <div className="h-px bg-white/5 my-4"></div>

                <div className="flex justify-between items-end">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Total to Lock:</span>
                  <div className="text-right">
                    <span className="text-3xl font-black text-[#FFB300] italic">{(subtotal + 0.00021).toFixed(5)}</span>
                    <span className="ml-2 text-xs font-black text-[#FFB300] italic tracking-tighter">ETH</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={isProcessing || cartItems.length === 0}
                  className={`group relative mt-10 w-full overflow-hidden rounded-2xl py-5 text-xs font-black uppercase tracking-[0.3em] text-white transition-all shadow-xl ${
                    isProcessing || cartItems.length === 0 ? "bg-slate-800 text-slate-600" : "bg-[#E91E63] shadow-[#E91E63]/20 hover:scale-[1.02]"
                  }`}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isProcessing ? (
                      <div className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Deploying Contract...
                      </div>
                    ) : (
                      <>Commit to Escrow <FaArrowLeft className="ml-3 rotate-180" /></>
                    )}
                  </span>
                </button>
                
                <p className="mt-6 text-[8px] text-center text-slate-600 font-bold uppercase tracking-[0.2em]">
                  Transaksi dijamin oleh DiecastChain P2P Protocol
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}