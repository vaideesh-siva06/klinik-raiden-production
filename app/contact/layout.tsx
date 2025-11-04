// app/contact/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Klinik Raiden | Contact",
  description: "Contact Klinik Raiden for inquiries or collaboration.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen bg-black text-white">
      {children}
    </section>
  );
}
