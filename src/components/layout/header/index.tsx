import Image from 'next/image';
import { FC } from 'react';
import { HeaderSearch } from './header-search';
import { HeaderNav } from './header-nav';
import { useTheme } from 'next-themes';

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
  const { resolvedTheme } = useTheme();

  const headerLogo =
    resolvedTheme === 'dark'
      ? '/static/svg/logo-dark.svg'
      : '/static/svg/logo.svg';

  return (
    <header className='flex items-center border-b border-border px-6 py-2'>
      <Image src={headerLogo} alt='logo' width={142} height={22} />
      <HeaderSearch />
      <HeaderNav />
    </header>
  );
};
