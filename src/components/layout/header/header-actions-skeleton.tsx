import { Skeleton } from '@/components/ui/skeleton';

export const HeaderActionsSkeleton = () => {
  return (
    <div className='flex gap-8'>
      <Skeleton className='h-10 w-14' />
      <Skeleton className='h-10 w-[100px]' />
      <Skeleton className='h-10 w-10 rounded-full' />
      <Skeleton className='h-10 w-20' />
    </div>
  );
};
