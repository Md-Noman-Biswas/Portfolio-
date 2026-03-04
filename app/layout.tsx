import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio.example.com'),
  title: 'Full Name Placeholder | AI & ML Portfolio',
  description:
    'Professional portfolio for a third-year Electrical and Computer Engineering undergraduate specializing in AI and Machine Learning.',
  keywords: ['AI', 'Machine Learning', 'ECE', 'Computer Vision', 'Research Portfolio'],
  openGraph: {
    title: 'Full Name Placeholder | AI & ML Portfolio',
    description: 'Research-focused portfolio website with projects, skills, and ongoing academic work.',
    type: 'website',
    url: 'https://portfolio.example.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full Name Placeholder | AI & ML Portfolio',
    description: 'Research-focused portfolio with projects, research interests, and contact information.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>{children}</body>
    </html>
  );
}
