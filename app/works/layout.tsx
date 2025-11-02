import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Klinik Raiden | Works",
  description: "Klinik Raiden | Works",
};

export default function WorksLayout({
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
