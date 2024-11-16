import type { Metadata } from "next";
import { Roboto, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Background from "./components/sub/background";

const roboto = Roboto({
  weight: ['100', '400', '900'],
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
});

const notoThai = Noto_Sans_Thai({
  weight: ['400', '700'],
  subsets: ['thai', 'latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "PaiNgaiDee",
  description: "Calculate the best way for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${roboto.className} ${notoThai.className}`}>
        <div className="relative w-full min-h-screen overflow-hidden ">
          <div className="absolute inset-0 w-full h-full -z-10">
            <Background />
          </div>
          <div className="relative z-50">
            <Navbar />
          </div>
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
