import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Footer from "./components/Footer";
import CallMobileButton from "./components/Widgets/CallMobileButton";

const inter = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  other: {
    'google-site-verification': "",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="" />
      <GoogleTagManager gtmId="" />
      <body className={`w-full ${inter.className}`}>
        <div className="bg-white">
          {children}
        </div>
        <CallMobileButton/>
        <Footer />
      </body>
    </html>
  );
}
