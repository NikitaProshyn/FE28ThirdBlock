import React, { FC, ChangeEvent } from 'react';
//@ts-ignore
import styles from './Input.module.css';
import { InputPropsType } from './types';

const Input: FC<InputPropsType> = ({
   value,
   onChange,
   placeholder = '',
   disabled,
   error,
   onBlur,
   className,
}) => {
   const onInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
      onChange(evt.target.value);
   };
   return (
      <input
         type="text"
         onChange={onInputChange}
         value={value}
         placeholder={placeholder}
         className={`${styles.input} ${error ? styles.error : ''}`}
         disabled={disabled}
         onBlur={onBlur}
      />
   );
};

export default Input;
