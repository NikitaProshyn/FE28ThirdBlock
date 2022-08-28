import React, { FC, useState } from 'react';
//@ts-ignore
import styles from './Header.module.css';
import User from '../user/User';
import { HeaderPropsType } from './types';
import { SearchIcon } from '../../assets/icons';

const Header: FC<HeaderPropsType> = ({ onClick, title, className, input }) => {
   return (
      <nav className={`${styles.nav} ${className || ''}`}>
         <div
            className={`${styles.burgerButton} ${className || ''}`}
            onClick={onClick}
         >
            <p>{title}</p>
         </div>
         {input}
         <div className={`${styles.userSearchWrapper} ${className || ''}`}>
            <div className={`${styles.search} ${className || ''}`}>
               <SearchIcon />
            </div>
            <User userName={'Artem Malkin'} />
         </div>
      </nav>
   );
};

export default Header;
