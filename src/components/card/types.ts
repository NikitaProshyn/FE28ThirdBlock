export type CardPropsType = {
   size: string;
   text: string;
   img: string;
   date: string;
   title: string;
   lessonNum?: number;
   id: number;
   author?: number;
   post: any;
};

export enum CardSize {
   Large = 'large',
   Medium = 'medium',
   Small = 'small',
}
