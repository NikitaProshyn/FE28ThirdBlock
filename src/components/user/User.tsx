import React, { FC } from 'react';
//@ts-ignore
import styles from './User.module.css';
import { UserPropsType } from './types';

const User: FC<UserPropsType> = ({ userName, className }) => {
   return (
      <div className={`${styles.user_wrap} ${className || ''}`}>
         <p className={`${styles.user_text} ${className || ''}`}>{userName}</p>
      </div>
   );
};

export default User;
