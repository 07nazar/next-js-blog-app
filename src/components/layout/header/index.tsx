import Image from 'next/image';
import { FC } from 'react';
import { HeaderSearch } from './header-search';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import { HeaderActionsSkeleton } from './header-actions-skeleton';
import Link from 'next/link';

const DynamicHeaderActions = dynamic(
  () => import('../header/header-actions').then(res => res.HeaderActions),
  {
    loading: () => <HeaderActionsSkeleton />,
    ssr: false,
  }
);

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
  const { resolvedTheme } = useTheme();

  const headerLogo =
    resolvedTheme === 'dark'
      ? '/static/svg/logo-dark.svg'
      : '/static/svg/logo.svg';

  return (
    <header className='flex flex-grow-0 items-center justify-between border-b border-border px-6 py-2'>
      <Link href={'/'}>
        <Image src={headerLogo} alt='logo' width={142} height={22} />
      </Link>
      <HeaderSearch />
      <DynamicHeaderActions />
    </header>
  );
};
