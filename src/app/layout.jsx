import localFont from "next/font/local";
import "./globals.css";

import EcommerceHeader from "./components/Header";
import CartSidebar from "./components/CartSidebar";
import { CartProvider } from "./cart-context";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "LUXE Cosmos - Premium Shopping",
  description: "Discover exclusive premium products at LUXE Cosmos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <CartProvider>
          <EcommerceHeader />
          {children}
          <CartSidebar />
        </CartProvider>
        <Footer/>
      </body>
    </html>
  );
}
