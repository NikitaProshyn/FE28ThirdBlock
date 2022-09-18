import React from 'react';
//@ts-ignore
import styles from './Search.module.css';
import classNames from 'classnames';

import { useThemeContext, Theme } from '../../Context/ThemeContext/Context';
import CardSearchList from '../../components/CardSearchList';

const Search = () => {
   const { theme } = useThemeContext();

   return (
      <div
         className={classNames(styles.searchPageWrapper, {
            [styles.darkContainer]: theme === Theme.Dark,
         })}
      >
         <CardSearchList />
      </div>
   );
};

export default Search;
