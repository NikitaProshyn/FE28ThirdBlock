import React, { FC, useState, useEffect } from 'react';
//@ts-ignore
import styles from './CardSearch.module.css';
import classNames from 'classnames';

import { CardSearchPropsType, CardSearchProps } from './types';
import { useThemeContext, Theme } from '../../Context/ThemeContext/Context';

import {
   ThumbsDown,
   ThumbsUp,
   BookMark,
   MoreHorisontal,
} from '../../assets/icons';

const CardSearch: FC<CardSearchProps> = ({ card }) => {
   const { image, title, date } = card;

   const { theme } = useThemeContext();

   return (
      <div
         className={classNames(styles.cardWrapper, {
            [styles.darkTheme]: theme === Theme.Dark,
         })}
      >
         <div className={classNames(styles.contentWrapper)}>
            <div className={classNames(styles.imgWrapper)}>
               <img src={image} alt="img" />
            </div>
            <div className={styles.titleWrapper}>
               <div className={styles.date}>{date}</div>
               <div className={styles.title}>{title}</div>
            </div>
         </div>
         <div className={classNames(styles.iconsWrapper)}>
            <div className={styles.iconsThumb}>
               <ThumbsUp />
               <ThumbsDown />
            </div>
            <div className={styles.iconsOptions}>
               <BookMark />
               <MoreHorisontal />
            </div>
         </div>
      </div>
   );
};

export default CardSearch;
