export type CardSearchPropsType = {
   id: number;
   image: string;
   text: string;
   date: string;
   lesson_num: number;
   title: string;
   author: number;
};

export type CardSearchProps = {
   card: CardSearchPropsType;
};
