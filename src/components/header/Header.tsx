import React, { FC, useState } from 'react';
//@ts-ignore
import styles from './Header.module.css';
import classNames from 'classnames';

import { HeaderPropsType } from './types';
import User from '../user/User';
import Menu from './Menu';
import {
   SearchIcon,
   LightIcon,
   DarkIcon,
   MenuIcon,
   Cancel,
   UserIcon,
} from '../../assets/icons';

import { useThemeContext, Theme } from '../../Context/ThemeContext/Context';
import { useSelector } from 'react-redux';
import AuthSelectors from '../../Redux/selectors/authSelectors';
import { useNavigate } from 'react-router-dom';
import { PathNames } from '../../Pages/Router/Router';

const Header: FC<HeaderPropsType> = ({ onClick, input, isOpened }) => {
   const { theme, onChangeTheme } = useThemeContext();

   const currentUser = useSelector(AuthSelectors.getCurrentUser);

   const navigate = useNavigate();

   const onSignInClick = () => {
      navigate(PathNames.SignIn);
   };

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
               {currentUser ? (
                  <User userName={'Artem Malkin'} />
               ) : (
                  <div
                     className={styles.noUserIconContainer}
                     onClick={onSignInClick}
                  >
                     <UserIcon />
                  </div>
               )}
            </div>
         </nav>
         {isOpened && <Menu />}
      </div>
   );
};

export default Header;
