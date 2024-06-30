import '@/css/style.css';
import React from 'react';

import { ClerkProvider } from '@clerk/nextjs';
import Providers from './_utils/Providers';
import LayoutLoading from './_utils/LayoutLoading';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body suppressHydrationWarning={true}>
          <div className="dark:bg-boxdark-2 dark:text-bodydark">
            <Providers>
              <LayoutLoading>{children}</LayoutLoading>
            </Providers>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
