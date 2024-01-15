import { TypePostData } from '@/types/post';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import Image from 'next/image';
import { FC } from 'react';

interface PostProps {
  data: TypePostData;
}

export const Post: FC<PostProps> = props => {
  const { author, date, desc, pins, previewImage, title } = props.data;

  return (
    <div className='flex w-full max-w-[700px] items-center gap-5 border-b border-border'>
      <div>
        <div className='mb-4 flex items-center gap-5'>
          <Avatar>
            <AvatarImage
              src={author.avatar}
              alt='author_img'
              width={50}
              height={50}
            />
          </Avatar>
          <span>{author.fullName}</span>
          <span>{date}</span>
        </div>
        <h2>{title}</h2>
        <p>{desc}</p>
        <div className='flex justify-between py-5'>
          <div>
            {pins.map(pin => (
              <span key={pin}>{pin}</span>
            ))}
          </div>
          <div>actions</div>
        </div>
      </div>
      <Image src={previewImage} alt='' width={100} height={100} />
    </div>
  );
};
