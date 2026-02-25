import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Full Name Placeholder | AI & ML Portfolio',
  description:
    'Professional portfolio for a third-year Electrical and Computer Engineering undergraduate specializing in AI and Machine Learning.',
  keywords: ['AI', 'Machine Learning', 'ECE', 'Computer Vision', 'Research Portfolio'],
  openGraph: {
    title: 'Full Name Placeholder | AI & ML Portfolio',
    description: 'Research-focused portfolio website with projects, skills, and ongoing academic work.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
