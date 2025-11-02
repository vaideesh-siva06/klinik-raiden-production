import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Klinik Raiden | Works",
  description: "Klinik Raiden | Explore all written works and philosophies.",
};

export default function WorkLayout({
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
