import type { Metadata } from "next";
import "./styles/globals.css";
import "./styles/animation.css";
import Navbar from "../views/components/Navbar";
import Footer from "../views/components/Footer";
import localFont from 'next/font/local'

const barlow = localFont({ src: '../public/fonts/Barlow-Regular.ttf' })

export const metadata: Metadata = {
  title: "PikaZord",
  description: "Powering innovation, Sparking solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-slate-900 leading-relaxed text-slate-300 antialiased selection:bg-teal-300 selection:text-teal-900 ${barlow.className}`}
      >
        <Navbar />
        <div className="mt-[68px] mb-28">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
