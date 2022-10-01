export type PostPropsType = {
   id: number;
   image: string;
   text: string;
   date: string;
   lesson_num: number;
   title: string;
   author: number;
};

export type PostProps = {
   post: PostPropsType;
};
