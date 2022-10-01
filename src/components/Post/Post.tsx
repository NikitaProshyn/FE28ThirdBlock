import React, { FC } from 'react';
//@ts-ignores
import styles from './Post.module.css';
import classNames from 'classnames';

import { PostPropsType, PostProps } from './types';

import { ThumbsDown, ThumbsUp, BookMark } from '../../assets/icons';
import { useThemeContext, Theme } from '../../Context/ThemeContext/Context';

const Post: FC<PostProps> = ({ post }) => {
   const { id, image, title, text } = post;

   const { theme } = useThemeContext();

   return (
      <>
         <div
            className={classNames(styles.post, {
               [styles.darkTheme]: theme === Theme.Dark,
            })}
         >
            <div className={classNames(styles.header)}>
               <div className={classNames(styles.homeTextWraper)}>
                  Home
                  <span className={styles.homeText}>{String(id)}</span>
               </div>
               <div className={styles.title}>{title}</div>
            </div>

            <div className={classNames(styles.postContentWraper)}>
               <div className={classNames(styles.imgWraper)}>
                  <img src={image} alt="#" />
               </div>
               <div className={classNames(styles.textWraper)}>{text}</div>
               <div className={classNames(styles.iconsWraper)}>
                  <div className={classNames(styles.leftIcons)}>
                     <div className={classNames(styles.thumbUpIcon)}>
                        <ThumbsUp />
                     </div>
                     <div className={classNames(styles.thumbDownIcon)}>
                        <ThumbsDown />
                     </div>
                  </div>
                  <div className={classNames(styles.rightIcons)}>
                     <BookMark />
                     <div className={classNames(styles.AddToFavorites)}>
                        Add to favorites
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Post;
