import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LoadingProvider } from "@/components/common/LoadingProvider";
import Navbar from "@/components/layouts/Navbar";
import { Footer } from "@/components/layouts/Footer";
import MainWrapper from "@/components/common/MainWrapper";
import ToastProvider from "@/components/common/ToastProvider";
import Cookies from "@/components/Generic/Cookies/Cookies";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SimpliFi | Modern Card Issuing & Payments Platform",
  description: "We power the cards behind your brand. Instantly issue and manage virtual or physical cards, enable payments in multiple currencies, and scale globally through one secure API platform.",
  keywords: "Cards as a Service, Embedded card issuance, Branded card program, Virtual cards API, Real-time spend control, Multi-currency cards, Fintech infrastructure, PCI compliant card platform, Global card platform, Corporate payouts platform, Reward & gifting programs, BNPL & credit infrastructure, Wallet & payments API, KYC KYB compliance for fintech, Card issuance in days, Financial infrastructure for startups, Embedded finance platform, Secure card APIs, MENA fintech platform, Card programs for businesses, Payment Solutions, Card Issuing, Modern Card Issuing",
  openGraph: {
    title: "SimpliFi | Modern Card Issuing & Payments Platform",
    description: "We power the cards behind your brand. Instantly issue and manage virtual or physical cards, enable payments in multiple currencies, and scale globally through one secure API platform.",
    type: "website",
    url: "https://simplifipay.com/",
    images: [
      {
        url: "https://simplifipay.com/logo1.png",
        width: 1200,
        height: 630,
        alt: "SimpliFi | Modern Card Issuing & Payments Platform",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SimpliFi | Modern Card Issuing & Payments Platform",
    description: "We power the cards behind your brand. Instantly issue and manage virtual or physical cards, enable payments in multiple currencies, and scale globally through one secure API platform.",
    image: "https://simplifipay.com/logo1.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoadingProvider>
          <div className="min-h-screen flex flex-col">
            <header className="z-50 w-full relative">
              <Navbar />
            </header>

            <MainWrapper>
              {children}
            </MainWrapper>

            <footer className="w-full relative z-50 ">
              <Footer />
            </footer>
          </div>
          <ToastProvider />
          <Cookies />
        </LoadingProvider>
      </body>
    </html>
  );
}
