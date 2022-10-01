import React, { FC } from 'react';
//@ts-ignore
import styles from './Title.module.css';
import classNames from 'classnames';

import { useThemeContext, Theme } from '../../Context/ThemeContext/Context';
import { TitlePropsType } from './types';

const Title: FC<TitlePropsType> = ({ title }) => {
   const { theme } = useThemeContext();

   return (
      <div
         className={classNames(styles.wraperTitle, {
            [styles.darkTheme]: theme === Theme.Dark,
         })}
      >
         <div className={styles.title}>{title}</div>
      </div>
   );
};

export default Title;
