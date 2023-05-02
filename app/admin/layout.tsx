import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Netcompany Tournament Organizer',
  description: 'Created by 3MAC1WIN',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.Fragment>
      <main>{children}</main>
    </React.Fragment>
  );
}
