import React from 'react';
import Head from 'next/head';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Kolir.Art Studio',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/kolir_art_logo.jpg" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}