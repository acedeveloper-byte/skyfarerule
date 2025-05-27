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
  title: "Blog - Get Cheap Flight Tickets &amp; Deals on Skyfarerules",
  description: "Discover valuable insights on airline policies and tips for booking cheap flight tickets in our comprehensive blog section. Call us for more!",
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
