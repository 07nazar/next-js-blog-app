import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Post } from './post';
import { userTabs } from './mock';

export const LatestPosts = () => {
  return (
    <Tabs
      defaultValue={userTabs[0].tabTitle}
      className='mx-auto max-w-fit py-5'>
      <TabsList className='mb-10'>
        {userTabs.map(tab => {
          return (
            <TabsTrigger key={tab.tabTitle} value={tab.tabTitle}>
              {tab.tabTitle}
            </TabsTrigger>
          );
        })}
      </TabsList>
      {userTabs.map(tab => {
        return (
          <TabsContent key={tab.tabTitle} value={tab.tabTitle}>
            {tab.posts.map(post => {
              return <Post key={post.id} data={post} />;
            })}
          </TabsContent>
        );
      })}
    </Tabs>
  );
};
