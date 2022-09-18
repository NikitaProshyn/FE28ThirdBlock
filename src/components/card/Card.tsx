import React, { FC } from 'react';
//@ts-ignore
import styles from './Card.module.css';
import classNames from 'classnames';
import {
   ThumbsDown,
   ThumbsUp,
   MoreHorisontal,
   BookMark,
} from '../../assets/icons';
import { CardProps } from './type';
import { CardSize } from '../СardList/CardList';
import { CardListType, LikeStatus } from '../../Utils/GlobaTypes';
import { useThemeContext, Theme } from '../../Context/ThemeContext/Context';
import { useDispatch, useSelector } from 'react-redux';
import {
   setFavouritePost,
   setLikeStatus,
} from '../../Redux/reducers/postReducers';
import PostsSelectors from '../../Redux/selectors/postsSelectors';

const Card: FC<CardProps> = ({ card, size }) => {
   const { id, image, title, text, date, likeStatus } = card;

   const favouritePostsList: CardListType = useSelector(
      PostsSelectors.getFavoritePosts
   );

   const currentPostIndex = favouritePostsList.findIndex(
      (post) => post.id === id
   );
   const isFavorite = currentPostIndex !== -1;

   const dispatch = useDispatch();

   const onAddFavourite = (event: any) => {
      event.stopPropagation();
      dispatch(setFavouritePost(card));
   };

   const onStatusClick = (status: LikeStatus) => {
      dispatch(setLikeStatus({ status, id }));
   };

   const { theme } = useThemeContext();

   return (
      <>
         <div
            className={classNames(styles.card, {
               [styles.largeCard]: size === CardSize.Large,
               [styles.mediumCard]: size === CardSize.Medium,
               [styles.smallCard]: size === CardSize.Small,
               [styles.darkTheme]: theme === Theme.Dark,
            })}
         >
            <div className={styles.textImgWrap}>
               <div className={styles.contentWrapper}>
                  <div className={styles.titleWrapper}>
                     <div className={styles.date}>{date}</div>
                     <div className={styles.title}>{title}</div>
                  </div>
                  {size === CardSize.Large && (
                     <div className={styles.textWrapper}>{text}</div>
                  )}
               </div>
               <div className={styles.imgWrapper}>
                  <img src={image} alt="img" />
               </div>
            </div>
            <div className={styles.iconsWrapper}>
               <div className={styles.iconsThumb}>
                  <div
                     onClick={() => onStatusClick(LikeStatus.Like)}
                     className={classNames(styles.likeStatusButton, {
                        [styles.like]: likeStatus === LikeStatus.Like,
                     })}
                  >
                     <ThumbsUp /> {likeStatus === LikeStatus.Like && 1}
                  </div>
                  <div
                     onClick={() => onStatusClick(LikeStatus.Dislike)}
                     className={classNames(styles.likeStatusButton, {
                        [styles.dislike]: likeStatus === LikeStatus.Dislike,
                     })}
                  >
                     <ThumbsDown />
                     {likeStatus === LikeStatus.Dislike && 1}
                  </div>
               </div>
               <div className={styles.iconsOptions}>
                  <div
                     onClick={onAddFavourite}
                     className={classNames({
                        [styles.favouritePost]: isFavorite,
                     })}
                  >
                     <BookMark />
                  </div>
                  <MoreHorisontal />
               </div>
            </div>
         </div>
      </>
   );
};

export default Card;
