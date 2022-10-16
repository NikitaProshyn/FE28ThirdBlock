import { LikeStatus } from '../../Utils/GlobaTypes';

export type PostPropsType = {
   id: number;
   image: string;
   text: string;
   date: string;
   lesson_num: number;
   title: string;
   author: number;
   likeStatus?: LikeStatus | null;
};

export type PostProps = {
   post: PostPropsType;
};
