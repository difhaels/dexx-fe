"use client";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { FaUserAlt, FaEnvelope, FaLock, FaUserPlus, FaArrowLeft } from "react-icons/fa";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Konfirmasi password tidak cocok!");
      return;
    }
    console.log("Creating Collector Profile:", { username, email });
    alert("Profil Kolektor berhasil dibuat! Silakan login.");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#1A0533] p-6 relative overflow-hidden">
      <Head>
        <title>Join Network | DiecastChain</title>
      </Head>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#FFB300] opacity-10 blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#E91E63] opacity-5 blur-[120px]"></div>

      <div className="relative z-10 w-full max-w-lg rounded-[40px] bg-[#2D0B5A] p-10 shadow-2xl border border-white/5">
        <header className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#FFB300] to-[#2D0B5A] text-white shadow-lg shadow-[#FFB300]/10">
            <FaUserPlus className="text-4xl" />
          </div>
          <h1 className="text-3xl font-black italic uppercase tracking-tighter text-white">
            Join the <span className="text-[#E91E63]">Network</span>
          </h1>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mt-2">
            Create your collector profile today
          </p>
        </header>

        <form onSubmit={handleRegister} className="space-y-5">
          {/* Username */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Collector Alias</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-600">
                <FaUserAlt />
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="block w-full rounded-2xl bg-[#1A0533] border border-white/10 p-4 pl-12 text-sm text-white focus:outline-none focus:border-[#FFB300] transition-all placeholder:text-slate-700"
                placeholder="e.g. SkylineLover99"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-600">
                <FaEnvelope />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full rounded-2xl bg-[#1A0533] border border-white/10 p-4 pl-12 text-sm text-white focus:outline-none focus:border-[#FFB300] transition-all placeholder:text-slate-700"
                placeholder="collector@mail.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Password */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-600">
                  <FaLock />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full rounded-2xl bg-[#1A0533] border border-white/10 p-4 pl-12 text-sm text-white focus:outline-none focus:border-[#FFB300] transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Confirm</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-600">
                  <FaLock />
                </div>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="block w-full rounded-2xl bg-[#1A0533] border border-white/10 p-4 pl-12 text-sm text-white focus:outline-none focus:border-[#FFB300] transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-[#FFB300] p-4 text-xs font-black uppercase tracking-[0.3em] text-[#1A0533] transition-all hover:scale-[1.02] shadow-xl shadow-[#FFB300]/10 mt-4 flex items-center justify-center"
          >
            Create Account
          </button>
        </form>

        <div className="mt-8 text-center space-y-4">
          <Link href="/login">
            <span className="inline-flex items-center text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:text-white transition-colors cursor-pointer">
              <FaArrowLeft className="mr-2" /> Back to Login
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}