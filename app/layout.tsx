import type { Metadata } from "next";
import "./styles/globals.css";
import "./styles/animation.css";
import Navbar from "../views/components/Navbar";
import Footer from "../views/components/Footer";

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
        className={`bg-slate-900 leading-relaxed text-slate-300 antialiased selection:bg-teal-300 selection:text-teal-900 font-nunito`}
      >
        <Navbar />
        {/* <Sidenav /> */}
        <div className="mt-[52px] mb-28">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
