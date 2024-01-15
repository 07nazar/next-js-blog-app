import { PropsWithChildren } from 'react';

import { Roboto_Mono as Roboto } from 'next/font/google';
import { cx } from 'class-variance-authority';
import { Header } from './header';
import { ThemeProvider } from '@/providers/theme-provider';

export const fontMain = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
});

export default function Layout({ children }: PropsWithChildren) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange>
      <div className={cx('font-main', fontMain.variable)}>
        <Header />
        <main className='container'>{children}</main>
      </div>
    </ThemeProvider>
  );
}
