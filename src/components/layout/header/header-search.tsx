import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export const HeaderSearch = () => {
  return (
    <div className='relative w-full max-w-[440px]'>
      <Search color='#6B6B6B' className='absolute left-3 top-2' />
      <Input placeholder='Search' type='text' className='pl-[50px]' />
    </div>
  );
};
