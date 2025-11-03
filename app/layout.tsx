import type { Metadata } from "next";
import ClientLayout from "./client-layout";
import { metadata } from "./metadata";
import { EB_Garamond, Geist, Geist_Mono } from "next/font/google";

export { metadata };

// Initialize fonts here (Server Component)
const garamond = EB_Garamond({ subsets: ['latin'], weight: ['400', '700'] });
const geistSans = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export default function RootServerLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={garamond.className}>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
