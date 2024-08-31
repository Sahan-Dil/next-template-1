import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import React from 'react';
import ThemeSwitch from '@/components/home/themeSwitch';
import LeftDrawer from '@/components/home/LeftDrawer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next-template-1',
  description: 'by Sahan Dilshan',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeSwitch />
          <LeftDrawer />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
