import { UserInfo } from '@/components/pages/profile/user-info';
import { UserProfile } from '@/components/pages/profile/user-profile';

const user = {
  fullName: '07nazar',
  posts: [
    {
      id: 1,
      author: {
        avatar: 'https://variety.com/wp-content/uploads/2021/04/Avatar.jpg',
        fullName: ' Miraz Hossain',
      },
      date: 'Jun 11, 2023',
      desc: 'Understand the differences between Context API and Redux before deciding between the two for state management in your React project...',
      pins: ['React'],
      previewImage:
        'https://miro.medium.com/v2/resize:fill:112:112/1*-RtsbhKyTBbnEo28GAPjLw.png',
      title: 'When to Use Context API vs Redux in Your Next React Project',
    },

    {
      id: 2,
      author: {
        avatar: 'https://variety.com/wp-content/uploads/2021/04/Avatar.jpg',
        fullName: ' Miraz Hossain',
      },
      date: 'Jun 11, 2023',
      desc: 'Understand the differences between Context API and Redux before deciding between the two for state management in your React project...',
      pins: ['React'],
      previewImage:
        'https://miro.medium.com/v2/resize:fill:112:112/1*-RtsbhKyTBbnEo28GAPjLw.png',
      title: 'When to Use Context API vs Redux in Your Next React Project',
    },

    {
      id: 3,
      author: {
        avatar: 'https://variety.com/wp-content/uploads/2021/04/Avatar.jpg',
        fullName: ' Miraz Hossain',
      },
      date: 'Jun 11, 2023',
      desc: 'Understand the differences between Context API and Redux before deciding between the two for state management in your React project...',
      pins: ['React'],
      previewImage:
        'https://miro.medium.com/v2/resize:fill:112:112/1*-RtsbhKyTBbnEo28GAPjLw.png',
      title: 'When to Use Context API vs Redux in Your Next React Project',
    },
  ],
};

export default function Profile() {
  return (
    <section>
      <div>
        <UserInfo fullName={user.fullName} posts={user.posts} />
        <UserProfile />
      </div>
    </section>
  );
}
