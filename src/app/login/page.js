"use client";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { FaUserCircle, FaLock, FaArrowRight, FaFingerprint } from "react-icons/fa";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Authenticating Collector:", { email });
    // Di sini lu bisa masukin logika JWT atau Firebase Auth
    alert("Authenticating via Secure Node...");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#1A0533] p-6 relative overflow-hidden">
      <Head>
        <title>Login | DiecastChain Collector</title>
      </Head>

      {/* Background Decor */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-[#E91E63] opacity-10 blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#FFB300] opacity-5 blur-[120px]"></div>

      <div className="relative z-10 w-full max-w-md rounded-[40px] bg-[#2D0B5A] p-10 shadow-2xl border border-white/5">
        <header className="mb-10 text-center">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#E91E63] to-[#2D0B5A] text-white shadow-lg shadow-[#E91E63]/20">
            <FaFingerprint className="text-4xl" />
          </div>
          <h1 className="text-3xl font-black italic uppercase tracking-tighter text-white">
            Collector <span className="text-[#FFB300]">Login</span>
          </h1>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mt-2">
            Enter the DiecastChain P2P Network
          </p>
        </header>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-600">
                <FaUserCircle />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full rounded-2xl bg-[#1A0533] border border-white/10 p-4 pl-12 text-sm text-white focus:outline-none focus:border-[#E91E63] transition-all placeholder:text-slate-700"
                placeholder="collector@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Secure Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-600">
                <FaLock />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full rounded-2xl bg-[#1A0533] border border-white/10 p-4 pl-12 text-sm text-white focus:outline-none focus:border-[#E91E63] transition-all placeholder:text-slate-700"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            className="group w-full rounded-2xl bg-[#E91E63] p-4 text-xs font-black uppercase tracking-[0.3em] text-white transition-all hover:scale-[1.02] shadow-xl shadow-[#E91E63]/20 flex items-center justify-center space-x-2"
          >
            <span>Access Network</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            Belum terdaftar?{" "}
            <Link href="/login/register" className="text-[#FFB300] hover:text-white transition-colors">
              Buat Akun Kolektor
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}