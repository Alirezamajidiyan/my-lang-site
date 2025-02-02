"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Skeleton } from "react-loading-skeleton";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError("");
    setLoading(true);
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setLoading(false);
    if (!res.ok) {
      setError(data.error);
    } else {
      alert("Login successful!");
    }
  };

  return (
    <motion.div
      className="flex justify-center items-center min-h-screen bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="w-96 p-6 shadow-lg rounded-2xl bg-white">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        {loading ? (
          <>
            <Skeleton className="h-10 w-full mb-3" />
            <Skeleton className="h-10 w-full mb-3" />
            <Skeleton className="h-10 w-full" />
          </>
        ) : (
          <>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full p-2 border rounded mb-3"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full p-2 border rounded mb-3"
            />
            <button
              className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleLogin}
              disabled={loading}
            >
              Login
            </button>
          </>
        )}
      </div>
    </motion.div>
  );
}
