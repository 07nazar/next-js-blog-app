import { Button } from '@/components/ui/button';
import { Apple, Chrome, Facebook, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

interface AuthLinksProps {
  handleCloseModal: () => void;
}

const links = [
  {
    provider: 'Google',
    Icon: Chrome,
    callBackHrefSignIn: '/',
    callBackHrefSignUp: '/',
  },
  {
    provider: 'Facebook',
    Icon: Facebook,
    callBackHrefSignIn: '/',
    callBackHrefSignUp: '/',
  },
  {
    provider: 'Apple',
    Icon: Apple,
    callBackHrefSignIn: '/',
    callBackHrefSignUp: '/',
  },
  {
    provider: 'Twitter',
    Icon: Twitter,
    callBackHrefSignIn: '/',
    callBackHrefSignUp: '/',
  },
  {
    provider: 'email',
    Icon: Mail,
    callBackHrefSignIn: '/login',
    callBackHrefSignUp: '/register',
  },
];

export const AuthLinks: FC<AuthLinksProps> = props => {
  const { query: routerQuery } = useRouter();
  const { handleCloseModal } = props;

  const { auth } = routerQuery as { auth: 'signIn' | 'signUp' };

  return links.map((link, index) => (
    <Link
      href={
        auth === 'signIn' ? link.callBackHrefSignIn : link.callBackHrefSignUp
      }
      key={link.provider}
      tabIndex={index + 1}>
      <Button
        onClick={handleCloseModal}
        variant={'outline'}
        className='relative w-full'>
        Sign {auth === 'signIn' ? 'in' : 'up'} with {link.provider}
        <link.Icon className='absolute left-4 top-1/2 -translate-y-1/2 transform' />
      </Button>
    </Link>
  ));
};
