"use client";

export const runtime = 'edge';

import React, { useEffect, useState } from "react";
import axios from "axios";

interface AdminLoginProps {
  onLoginSuccess?: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLoginSuccess }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // 🔹 Check if admin is still logged in (not expired)
  useEffect(() => {
    const storedLogin = localStorage.getItem("admin");
    const storedTime = localStorage.getItem("adminLoginTime");

    if (storedLogin && storedTime) {
      const now = Date.now();
      const elapsed = now - parseInt(storedTime, 10);

      // 1 hour = 3600000 ms
      if (elapsed < 3600000) {
        if (onLoginSuccess) onLoginSuccess();
      } else {
        localStorage.removeItem("admin");
        localStorage.removeItem("adminLoginTime");
      }
    }
  }, [onLoginSuccess]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/admin", { password });

      if (res.data.success) {
        // Save login flag and timestamp
        localStorage.setItem("admin", "true");
        localStorage.setItem("adminLoginTime", Date.now().toString());

        setError("");
        if (onLoginSuccess) onLoginSuccess();
      } else {
        setError(res.data.message || "Incorrect password");
      }
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || "Error connecting to server");
    }

    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-sm flex flex-col gap-4"
      >
        <h1 className="text-2xl font-bold text-center">Admin Login</h1>

        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-red-500"
          required
        />

        <button
          type="submit"
          className="py-2 px-4 bg-red-600 hover:bg-red-700 transition-colors rounded font-semibold"
        >
          Login
        </button>

        {error && <p className="text-red-500 text-center">{error}</p>}
      </form>
    </div>
  );
};

export default AdminLogin;
