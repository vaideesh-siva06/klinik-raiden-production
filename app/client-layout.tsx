"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import { WorksProvider } from "./context/WorksContext";
import Footer from "./components/Footer";
import Loader from "./loader";
import { EB_Garamond, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const garamond = EB_Garamond({ subsets: ['latin'], weight: ['400', '700'] });
const geistSans = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const krShown = sessionStorage.getItem("krLoaderShown");
    if (pathname === "/") {
      sessionStorage.setItem("krLoaderShown", "true");
    } else {
      setLoading(false);
    }
  }, [pathname]);

  useEffect(() => {
    // Scroll to top smoothly on every route change
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Loader logic
    const krShown = sessionStorage.getItem("krLoaderShown");
    if (pathname === "/") {
        sessionStorage.setItem("krLoaderShown", "true");
    } else {
        setLoading(false);
    }
    }, [pathname]);


  return (
    <html lang="en">
      <body className={`${garamond.className} antialiased`}>
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
      </body>
    </html>
  );
}
