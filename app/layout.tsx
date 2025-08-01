import type { Metadata } from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import ScrollToTop from "@/components/Helper/ScrollToTop";
import Footer from "@/components/Home/Footer/Footer";

const font = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Carnet de voyage",
  description: "Travail Landing page using Next.js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
