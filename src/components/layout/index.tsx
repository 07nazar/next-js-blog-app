import { PropsWithChildren } from 'react';

import { Roboto_Mono as Roboto } from 'next/font/google';
import { cx } from 'class-variance-authority';
import { Header } from './header';
import { Providers } from '@/providers';
import { Toaster } from '@/components/ui/toaster';

export const fontMain = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
});

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Providers>
      <div className={cx('font-main', fontMain.variable)}>
        <Header />
        <main className='container'>{children}</main>
      </div>
      <Toaster />
    </Providers>
  );
}
