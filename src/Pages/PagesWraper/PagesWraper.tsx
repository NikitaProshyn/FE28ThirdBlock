import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
//@ts-ignore
import styles from './PagesWraper.module.css';
import classNames from 'classnames';

import Footer from '../../components/Footer';
import Blog from '../Blog';
import Input from '../../components/Input';
import Header from '../../components/header';
import { PathNames } from '../Router/Router';

import { useThemeContext, Theme } from '../../Context/ThemeContext/Context';

const PagesWraper = () => {
   const [value, setValue] = useState<string>('');

   const onChange = (inputValue: string) => {
      setValue(inputValue);
   };
   const [isOpened, setOpened] = useState<boolean>(false);

   const { theme } = useThemeContext();

   const location = useLocation();

   return (
      <div
         className={classNames(styles.app, {
            [styles.darkTheme]: theme === Theme.Dark,
         })}
      >
         <Header
            onClick={() => setOpened(!isOpened)}
            isOpened={isOpened}
            input={
               isOpened && (
                  <Input
                     placeholder={'Placeholder'}
                     onChange={onChange}
                     value={value}
                  />
               )
            }
         />
         {location.pathname === PathNames.Home ? <Blog /> : <Outlet />}
         <Footer />
      </div>
   );
};

export default PagesWraper;
