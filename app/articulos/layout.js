import { Geist, Geist_Mono } from "next/font/google";
import '@/app/globals.css'



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Artículos - ¡Lea políticas y guías de aerolíneas!",
  description: "Encuentra información relevante sobre políticas de aerolíneas y consejos para vuelos baratos en nuestra sección exclusiva.",
};

export default function BlogLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
