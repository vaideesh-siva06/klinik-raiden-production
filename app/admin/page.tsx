"use client";

import React, { useState, useEffect } from "react";
import AdminForm from "../components/AdminForm";
import AdminLogin from "../components/AdminLogin";

const AdminPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ensure this runs only on the client
    const adminFlag = localStorage.getItem("admin");
    setIsAdmin(!!adminFlag);
    setLoading(false);
  }, []);

  if (loading) {
    return <p className="text-center text-gray-400 mt-10">Checking credentials...</p>;
  }

  return <>{isAdmin ? <AdminForm /> : <AdminLogin onLoginSuccess={() => setIsAdmin(true)}/>}</>;
};

export default AdminPage;
