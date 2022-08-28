import React, { FC } from 'react';
//@ts-ignore
import styles from './Card.module.css';
import classNames from 'classnames';
import { CardPropsType } from './types';
import { CardSize } from './types';
import {
   ThumbsDown,
   ThumbsUp,
   MoreHorisontal,
   BookMark,
} from '../../assets/icons';

const Card: FC<CardPropsType> = ({ post, size }) => {
   const { id, img, title, text, date } = post;

   return (
      <div
         className={classNames(styles.post, {
            [styles.largePost]: size === CardSize.Large,
            [styles.mediumPost]: size === CardSize.Medium,
            [styles.smallPost]: size === CardSize.Small,
         })}
      >
         <div className={styles.cardWraper}>
            <div className={styles.contentWraper}>
               <div className={styles.titleWraper}>
                  <div className={styles.date}>{date}</div>
                  <h2 className={styles.title}>{title}</h2>
               </div>
               {size === CardSize.Large && (
                  <div className={styles.textWraper}>{text}</div>
               )}
            </div>
            <div className={styles.imgWraper}>
               <div className={styles.img}>
                  <img src={img} alt="#" />
               </div>
            </div>
            <div className={styles.iconsWraper}>
               <div className={styles.iconThumbsUp}>
                  <ThumbsUp />
               </div>
               <div className={styles.iconThubmsDown}>
                  <ThumbsDown />
               </div>
               <div className={styles.bookMark}>
                  <BookMark />
               </div>
               <div className={styles.moreHorisontal}>
                  <MoreHorisontal />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Card;
