import React, { FC } from 'react';
//@ts-ignores
import styles from './Post.module.css';
import classNames from 'classnames';

import { PostPropsType, PostProps } from './types';

import { Dispatch } from '@reduxjs/toolkit';

import { ThumbsDown, ThumbsUp, BookMark } from '../../assets/icons';
import { useThemeContext, Theme } from '../../Context/ThemeContext/Context';

import { setLikeStatus } from '../../Redux/reducers/postsReducers';
import { useDispatch } from 'react-redux';
import { LikeStatus } from '../../Utils/GlobaTypes';

const Post: FC<PostProps> = ({ post }) => {
   const { id, image, title, text, likeStatus } = post;

   const dispatch = useDispatch();

   const onStatusClick = (status: LikeStatus) => {
      dispatch(setLikeStatus({ status, id }));
   };

   const { theme } = useThemeContext();

   return (
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
   );
};

export default Post;
