import { Auth } from '@/components/features/auth';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Pen } from 'lucide-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const DynamicThemeSwitch = dynamic(
  () =>
    import('@/components/features/theme-switch').then(res => res.ThemeSwitch),
  {
    ssr: false,
  }
);

const isAuth = false;

export const HeaderNav = () => {
  return (
    <nav className='flex gap-8'>
      <DynamicThemeSwitch />

      {isAuth && (
        <Button variant={'ghost'}>
          <Pen width={18} height={18} className='mr-2' />
          Write
        </Button>
      )}

      {!isAuth && (
        <div className='flex gap-4'>
          <Auth type='signIn' />
          <Auth type='signUp' />
        </div>
      )}

      {isAuth && (
        <Link href={'/profile'}>
          <Avatar>
            <AvatarImage
              src='/static/images/avatar-default.jpg'
              className='object-cover'
            />
          </Avatar>
        </Link>
      )}
    </nav>
  );
};
