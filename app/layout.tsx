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
// mb-[540px] md:mb-[560px] lg:mb-[321px] 2xl:mb-[313px]
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
          <div className="mt-[63px] lg:mt-[77px] 2xl:mt-[101px] container">{children}</div>
          <Footer />
        </body>
      </LenisProvider>
    </html>
  );
}
