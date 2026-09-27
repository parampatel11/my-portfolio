import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import FloatingBackground from "@/components/ui/FloatingBackground";
import WhatsAppCTA from "@/components/ui/WhatsAppCTA";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Param Patel | Full Stack Architect",
  description: "Executive class web developer portfolio showcasing Gen AI, React, Next.js, and Cloud architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased scroll-smooth ${plusJakarta.variable}`}
    >
      <body 
        className={`${plusJakarta.className} text-gray-100 min-h-full flex flex-col selection:bg-yellow-400/30 selection:text-yellow-200 overflow-x-hidden`}
      >
        <FloatingBackground /> 
        <Header />
        
        <main className="flex-1 flex flex-col w-full relative z-10">
          {children}
        </main>

        <WhatsAppCTA />
      </body>
    </html>
  );
}