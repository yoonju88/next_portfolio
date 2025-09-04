import { Inter } from 'next/font/google'
import "./globals.css";
import Header from '@/components/nav/Header'
import Footer from '@/components/Footer'
import Providers from "../providers";
import { ScrollTopButton } from '@/components/form/Buttons';
import { setRequestLocale, getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { locales } from '@/i18n/routing';
import LocaleSwitcher from '@/components/LocaleSwitcher'
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] })

// 로케일별 정적 경로 생성
export function generateStaticParams() {
  return locales.map(l => ({ locale: l }));
}

// (선택) hreflang/SEO
export async function generateMetadata({ params }) {
  const { locale } = params;
  return { alternates: { languages: { en: '/en', fr: '/fr' } } };
}

export default async function RootLayout({ children, params }) {
  const { locale } = params;
  setRequestLocale(locale);
  const messages = await getMessages({ locale });
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased bg-background`}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Providers >
            <div className="pt-4 pr-10 ml-0 flex justify-end">
              <Suspense fallback={null}>
                <LocaleSwitcher />
              </Suspense>
            </div>
            <Suspense fallback={null}>
              <Header />
            </Suspense>
            <main className="flex min-h-screen flex-col justify-center items-center">
              {children}
              <ScrollTopButton />
            </main>
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
