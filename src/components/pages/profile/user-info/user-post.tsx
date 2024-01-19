import { TypePostData } from '@/types/post';
import { FC } from 'react';

interface UserPostProps {
  post: TypePostData;
}

export const UserPost: FC<UserPostProps> = props => {
  const { post } = props;

  return <div>{post.author.fullName}</div>;
};
