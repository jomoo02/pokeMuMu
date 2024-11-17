import { Inter } from 'next/font/google';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Poké MuMu',
  description: 'Poké MuMu',
};

interface RootLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function RootLayout({
  children,
  modal,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <main className="sm:px-8 md:px-10 py-6 min-h-svh xl:px-16">
          {children}
        </main>
        <footer className="h-32" />
      </body>
    </html>
  );
}
