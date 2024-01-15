import { Button } from '@/components/ui/button';
import { useOnClickOutside } from '@/hooks/use-outside-click';
import { X } from 'lucide-react';
import { FC, useEffect, useRef } from 'react';
import { AuthLinks } from './auth-links';
import { useRouter } from 'next/router';

interface AuthModalProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

export const AuthModal: FC<AuthModalProps> = props => {
  const { isOpen, setOpen } = props;
  const modalRef = useRef<HTMLDivElement | null>(null);
  const dataState = isOpen ? 'open' : 'close';

  const { pathname, push, query, replace } = useRouter();

  const { auth } = query as { auth: 'signIn' | 'signUp' };

  useOnClickOutside(modalRef, () => setOpen(false));

  const switchAuthType = () =>
    push({
      pathname,
      query: {
        auth: auth === 'signIn' ? 'signUp' : 'signIn',
      },
    });

  const handleCloseModal = () => {
    setOpen(false);
    replace({
      pathname,
      query: null,
    });
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    };

    document.addEventListener('keydown', handler);

    return () => {
      document.removeEventListener('keydown', handler);
    };
  });

  return (
    <div className='modal-overlay' data-state={dataState}>
      <div
        ref={modalRef}
        data-state={dataState}
        className='modal absolute-center w-full max-w-[500px] bg-background'>
        <form className='relative flex flex-col gap-5 p-5'>
          <button
            type='button'
            className='absolute right-5 top-5'
            onClick={handleCloseModal}>
            <X />
          </button>
          <h2 className='text-center text-3xl'>
            {auth === 'signIn' ? 'Welcome back' : 'Join Medium'}
          </h2>
          <div className='flex flex-col gap-4'>{<AuthLinks />}</div>

          <Button type='button' variant={'link'} onClick={switchAuthType}>
            {auth === 'signIn'
              ? 'No account? Create one'
              : 'Already have an account? Sign in'}
          </Button>
        </form>
      </div>
    </div>
  );
};
