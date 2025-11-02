import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Klinik Raiden | About",
  description: "Klinik Raiden | About",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-black text-white">
      {children}
    </section>
  );
}
