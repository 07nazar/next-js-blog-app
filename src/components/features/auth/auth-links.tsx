import { Button } from '@/components/ui/button';
import { Apple, Chrome, Facebook, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const links = [
  { provider: 'Google', Icon: Chrome },
  { provider: 'Facebook', Icon: Facebook },
  { provider: 'Apple', Icon: Apple },
  { provider: 'Twitter', Icon: Twitter },
  { provider: 'email', Icon: Mail },
];

export const AuthLinks = () => {
  const { query: routerQuery } = useRouter();

  const { auth } = routerQuery as { auth: 'signIn' | 'signUp' };

  return links.map((link, index) => (
    <Link href={'/' + index} key={link.provider} tabIndex={index + 1}>
      <Button variant={'outline'} className='relative w-full'>
        Sign {auth === 'signIn' ? 'in' : 'up'} with {link.provider}
        <link.Icon className='absolute left-4 top-1/2 -translate-y-1/2 transform' />
      </Button>
    </Link>
  ));
};
