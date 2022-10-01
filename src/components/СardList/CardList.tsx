import React, { FC } from 'react';
import classNames from 'classnames';
//@ts-ignore
import styles from './CardList.module.css';

import Card from '../card';

import { useThemeContext, Theme } from '../../Context/ThemeContext/Context';
import { CardListType } from '../../Utils/GlobaTypes';

export enum CardSize {
   Large = 'large',
   Medium = 'medium',
   Small = 'small',
}

type CardListProps = {
   cardList: CardListType;
};

const CardList: FC<CardListProps> = ({ cardList }) => {
   const { theme } = useThemeContext();

   return cardList && cardList.length > 0 ? (
      <div
         className={classNames(styles.cardsWraper, {
            [styles.darkTheme]: theme === Theme.Dark,
         })}
      >
         <div className={styles.leftSideList}>
            <div className={styles.largeCardListWrapper}>
               <Card card={cardList[0]} size={CardSize.Large} />
            </div>

            <div className={styles.mediumCardListWrapper}>
               {cardList.map((card, id) => {
                  if (id >= 1 && id <= 4) {
                     return (
                        <Card
                           card={card}
                           key={card.id}
                           size={CardSize.Medium}
                        />
                     );
                  }
               })}
            </div>
         </div>
         <div className={styles.rightSideList}>
            {cardList.map((post, id) => {
               if (id >= 5) {
                  return (
                     <Card card={post} key={post.id} size={CardSize.Small} />
                  );
               }
            })}
         </div>
      </div>
   ) : null;
};
export default CardList;
