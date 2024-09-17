import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/animation.css";
import 'lenis/dist/lenis.css'
import Navbar from "../views/components/Navbar";
import Footer from "../views/components/Footer";
import localFont from "next/font/local";
import LenisProvider from "@/providers/LenisProvider";


const barlow = localFont({ src: "../public/fonts/Barlow-Regular.ttf" });

export const metadata: Metadata = {
  title: "PikaZord",
  description: "Powering innovation, Sparking solutions"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <LenisProvider>
        <body className={`${barlow.className} antialiased bg-background text-white selection:bg-primary-60/10 selection:text-primary-60 leading-relaxed`}>
          <Navbar />
          <div className="mt-[68px] mb-28">{children}</div>
          <Footer />
        </body>
      </LenisProvider>
    </html>
  );
}
