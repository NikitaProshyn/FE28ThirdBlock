import React, { FC, useState } from 'react';
//@ts-ignore
import styles from './Header.module.css';
import classNames from 'classnames';

import User from '../user/User';
import Menu from './Menu';
import {
   SearchIcon,
   LightIcon,
   DarkIcon,
   MenuIcon,
   Cancel,
} from '../../assets/icons';

import { useThemeContext, Theme } from '../../Context/ThemeContext/Context';

const Header = ({ onClick, input, isOpened }: any) => {
   const { theme, onChangeTheme } = useThemeContext();

   return (
      <div className={classNames(styles.header)}>
         <nav className={styles.nav}>
            <div className={styles.burgerButton} onClick={onClick}>
               {isOpened ? <Cancel /> : <MenuIcon />}
            </div>
            {input}
            <div className={styles.userSearchWrapper}>
               <div
                  className={classNames(styles.sunIcon)}
                  onClick={onChangeTheme}
               >
                  {theme === Theme.Dark ? <LightIcon /> : <DarkIcon />}
               </div>
               <div
                  className={styles.searchIcon}
                  onClick={() => {
                     alert(
                        `Hi, my name is SearchIcon and i'm help you with find`
                     );
                  }}
               >
                  <SearchIcon />
               </div>
               <User userName={'Artem Malkin'} />
            </div>
         </nav>
         {isOpened && <Menu />}
      </div>
   );
};

export default Header;
