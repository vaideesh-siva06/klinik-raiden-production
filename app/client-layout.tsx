"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import { WorksProvider } from "./context/WorksContext";
import Footer from "./components/Footer";
import Loader from "./loader";
import "./globals.css";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (pathname !== "/") setLoading(false);
    else sessionStorage.setItem("krLoaderShown", "true");
  }, [pathname]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (pathname !== "/") setLoading(false);
    else sessionStorage.setItem("krLoaderShown", "true");
  }, [pathname]);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader key="loader" onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Navbar />
          <WorksProvider>{children}</WorksProvider>
          <Footer />
        </motion.div>
      )}
    </>
  );
}
