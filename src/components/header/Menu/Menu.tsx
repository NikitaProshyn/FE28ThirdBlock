import React, { FC } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
//@ts-ignore
import styles from './Menu.module.css';
import classNames from 'classnames';

import { MenuPropsType } from './types';
import User from '../../user/User';

import { useThemeContext, Theme } from '../../../Context/ThemeContext/Context';
import { PathNames } from '../../../Pages/Router/Router';

const Menu: FC<MenuPropsType> = ({ className }) => {
   const { theme } = useThemeContext();
   const location = useLocation();

   return (
      <ul
         className={classNames(styles.listMenu, {
            [styles.darkTheme]: theme === Theme.Dark,
         })}
      >
         <li>
            <User userName={'Artem Malkin'} />
         </li>
         <li>
            <NavLink
               to={PathNames.Home}
               className={classNames({
                  [styles.activeLink]: location.pathname === PathNames.Home,
               })}
            >
               Home
            </NavLink>
         </li>
         <li>
            <NavLink
               to={PathNames.PostPage}
               className={classNames({
                  [styles.activeLink]: location.pathname === PathNames.PostPage,
               })}
            >
               Content
            </NavLink>
         </li>
         <li>
            <NavLink
               to={PathNames.Search}
               className={classNames({
                  [styles.activeLink]: location.pathname === PathNames.Search,
               })}
            >
               Search
            </NavLink>
         </li>
         <li>Add post</li>
      </ul>
   );
};

export default Menu;
