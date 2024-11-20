import localFont from "next/font/local";
import "./globals.css";
import Header from '@/components/nav/Header'
import Footer from '@/components/Footer'
import Providers from "./providers";

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
  title: "Yoonju Portfolio by NextJs ",
  description: "yoonju portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primary`}
      >
        <Providers >
          <Header />
          <main className="flex min-h-screen flex-col items-center justify-center">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
