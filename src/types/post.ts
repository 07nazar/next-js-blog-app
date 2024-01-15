export type TypePostData = {
  id: number;
  author: {
    avatar: string;
    fullName: string;
  };
  title: string;
  previewImage: string;
  desc: string;
  pins: string[];
  date: string;
};
