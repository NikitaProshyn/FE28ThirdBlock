export enum TabsNames {
   All = 'all',
   Favorites = 'favorites',
   Popular = 'popular',
}
export enum LikeStatus {
   Like = 'like',
   Dislike = 'dislike',
}

export type CardPostType = {
   id: number;
   image: string;
   text: string;
   date: string;
   lesson_num: number;
   title: string;
   author: number;
   likeStatus?: LikeStatus | null;
};
export type CardListType = Array<CardPostType>;

export type ModalWindowPropsType = {
   active: boolean;
   closeModal: (event: any) => void;
   children: React.ReactNode;
   cardModalVisible?: string;
   imgModalVisible?: string;
};

export type UserActionPayload = {
   username: string;
   password: string;
   email: string;
};
