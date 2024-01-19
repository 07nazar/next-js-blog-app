import { Auth } from '@/components/features/auth';
import { ThemeSwitch } from '@/components/features/theme-switch';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { authApi } from '@/store/auth/api';
import { Pen } from 'lucide-react';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

export const HeaderActions = () => {
  const { user, isLoading } = useAppSelector(state => state.auth);
  const { push } = useRouter();
  const token = Cookies.get('token');
  const dispatch = useAppDispatch();

  const logoutHandler = () => {
    dispatch(authApi.logout()).finally(() => push('/'));
  };

  return (
    <div className='flex gap-8'>
      <ThemeSwitch />

      {!user && !isLoading && !token && (
        <div className='flex gap-4'>
          <Auth type='signIn' />
          <Auth type='signUp' />
        </div>
      )}

      {user && (
        <>
          <Button variant={'ghost'}>
            <Pen width={18} height={18} className='mr-2' />
            Write
          </Button>
          <Link href={'/profile'}>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' />
            </Avatar>
          </Link>
          <Button variant={'secondary'} onClick={logoutHandler}>
            logout
          </Button>
        </>
      )}
    </div>
  );
};
