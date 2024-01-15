import { Button } from '@/components/ui/button';
import { FC, useEffect, useState } from 'react';
import { AuthModal } from './auth-modal';
import { useRouter } from 'next/router';

interface AuthProps {
  type: 'signIn' | 'signUp';
}

export const Auth: FC<AuthProps> = props => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const { pathname, push, query } = useRouter();

  const { type } = props;

  const handleButtonClick = () => {
    push({
      pathname,
      query: {
        auth: type,
      },
    });
    setOpen(true);
  };

  return (
    <>
      <Button
        type='button'
        variant={type === 'signIn' ? 'default' : 'outline'}
        onClick={handleButtonClick}>
        {type === 'signIn' ? 'Sign In' : 'Sign Up'}
      </Button>
      <AuthModal isOpen={isOpen} setOpen={setOpen} />
    </>
  );
};
