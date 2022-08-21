export enum ButtonType {
   Primary = 'primary',
   Secondary = 'secondary',
   Error = 'error',
}

export type ButtonClassnamesType = {
   [k in ButtonType]: string;
};

export type ButtonPropsType = {
   title: string;
   type: ButtonType;
   click?: () => void;
   className?: string;
   disabled?: boolean;
};
