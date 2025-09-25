import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import portfolioData from '@/data/portfolio.json';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://my-portfolio-zeta-three-76.vercel.app' : 'http://localhost:3000'),
  title: portfolioData.meta.title,
  description: portfolioData.meta.description,
  keywords: portfolioData.meta.keywords,
  authors: [{ name: portfolioData.meta.author }],
  openGraph: {
    title: portfolioData.meta.title,
    description: portfolioData.meta.description,
    url: portfolioData.meta.url,
    siteName: portfolioData.meta.title,
    images: [
      {
        url: portfolioData.meta.image,
        width: 1200,
        height: 630,
        alt: portfolioData.meta.title,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: portfolioData.meta.title,
    description: portfolioData.meta.description,
    images: [portfolioData.meta.image],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
