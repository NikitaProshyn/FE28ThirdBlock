import React, { FC } from 'react';
//@ts-ignore
import styles from './Menu.module.css';
import { MenuPropsType } from './types';
import User from '../../user/User';

const Menu: FC<MenuPropsType> = ({ className }) => {
   return (
      <ul className={`${styles.listMenu} ${className || ''}`}>
         <li>
            <User userName={'Artem Malkin'} />
         </li>
         <li>Home</li>
         <li>Add post</li>
      </ul>
   );
};

export default Menu;
