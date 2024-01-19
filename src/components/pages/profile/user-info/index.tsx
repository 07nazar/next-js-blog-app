import { TypePostData } from '@/types/post';
import { FC } from 'react';
import { UserPost } from './user-post';

interface UserInfoProps {
  fullName: string;
  posts: TypePostData[];
}

export const UserInfo: FC<UserInfoProps> = props => {
  const { fullName, posts } = props;

  return (
    <div>
      <h1>{fullName}</h1>
      <div>
        {posts.map(post => {
          return <UserPost post={post} key={post.id} />;
        })}
      </div>
    </div>
  );
};
