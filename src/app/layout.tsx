import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/navigation/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Friidrettens Trenerforening",
    template: "%s | Friidrettens Trenerforening",
  },
  description:
    "Norges Friidrettens Trenerforening - Utvikler trenerkompetanse, ivaretar trenernes interesser og fremmer samarbeid i norsk friidrett.",
  keywords: [
    "friidrett",
    "trener",
    "trenerforening",
    "Norge",
    "athletics",
    "coaching",
    "løp",
    "hopp",
    "kast",
  ],
  authors: [{ name: "Friidrettens Trenerforening" }],
  creator: "Friidrettens Trenerforening",
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: "https://www.friidrettens-trenerforening.com",
    siteName: "Friidrettens Trenerforening",
    title: "Friidrettens Trenerforening",
    description:
      "Norges Friidrettens Trenerforening - Utvikler trenerkompetanse og fremmer samarbeid i norsk friidrett.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Friidrettens Trenerforening",
    description:
      "Norges Friidrettens Trenerforening - Utvikler trenerkompetanse og fremmer samarbeid i norsk friidrett.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
