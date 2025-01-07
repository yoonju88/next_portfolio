import { Inter } from 'next/font/google'
import "./globals.css";
import Header from '@/components/nav/Header'
import Footer from '@/components/Footer'
import Providers from "./providers";
import { ScrollTopButton } from '@/components/form/Buttons';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Yoonju Portfolio by NextJs ",
  description: "With a wide range of services including web development, design, and content creation, I provide creative and efficient solutions. Check out my work and let’s start a project together.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased bg-background`}
      >
        <Providers >
          <Header />
          <main
            className="container flex min-h-screen flex-col justify-center items-center"
          >
            {children}
            <ScrollTopButton />
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
